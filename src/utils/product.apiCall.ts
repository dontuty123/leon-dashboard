
import { IProduct } from "@/types/product.type";
import { ref, set } from "firebase/database";
import { db } from "server/firebase";

export const addProduct = (pID: string ,body: IProduct) => {
    set(ref(db, 'products/' + pID), body);
}