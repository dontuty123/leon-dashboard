import { ref, set } from "firebase/database";
import { db } from "server/firebase";

export const addUser = async (uID: string ,body: IUser) => {
 set(ref(db, 'users/' + uID), body);
} 
