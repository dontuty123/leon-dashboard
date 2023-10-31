import { update, ref as refDB} from "firebase/database";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { toast } from "react-toastify";
import { db, storageDB } from "server/firebase";

interface IHandleUploadFile {
    setDisabled: (value: React.SetStateAction<boolean>) => void,
    file: File | undefined,
    curData: IProduct | IUser,
    id: string | string[],
    setID: ((value: React.SetStateAction<string | null | undefined>) => void )| undefined,
    filePath: string,
    dbPath: string,
    profile?: IUser | null,
    setProfile?: (value: React.SetStateAction<IUser | null>) => void,
    setCookie?: (name: string, value: any) => void
    uploadImgKey: string
}

export const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, setFile: (value: React.SetStateAction<File | undefined>) => void) => {
    const fileFromLocal = event.target.files?.[0];
    if (
      fileFromLocal &&
      (fileFromLocal.size >= 1048576 || !fileFromLocal.type.includes("image"))
    ) {
      toast.error(
        "File không đúng định dạng quy định (Kích thước > 1mb hoặc không phải là ảnh"
      );
    } else {
      setFile(fileFromLocal);
    }
};

export const handleUploadFile = ({curData,file,id,setDisabled,setID,dbPath,filePath,setCookie, uploadImgKey, setProfile,profile } : IHandleUploadFile) => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
    toast.dismiss();
    if (file) {
      const storagePath = `${filePath}` + file.name;
      const storageRef = ref(storageDB, storagePath);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            const newData = {
              ...curData,
            [uploadImgKey]: downloadURL,

            };
              update(refDB(db, `${dbPath}` + id), newData);
              setProfile && setProfile(newData as IUser) 
              setCookie && setCookie("user", newData);
          });
        }
      );
      toast.success("Sửa thông tin thành công");
      setID && setID(null);
      toast.clearWaitingQueue();
    } else {
        update(refDB(db, `${dbPath}` + id), curData);
        if (setProfile && setCookie && profile?.id == id) {
        setProfile(curData as IUser);
        setCookie("user", curData);
      }
      toast.success("Sửa thông tin thành công");
      setID && setID(null);
      toast.clearWaitingQueue();
    }

}