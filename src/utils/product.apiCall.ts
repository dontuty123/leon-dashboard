

import { ref, set } from "firebase/database";
import { db } from "server/firebase";

export const addProduct = (pID: string ,body: IProduct) => {
    set(ref(db, 'products/' + pID), body);
}

export const addTransaction = (pID: string ,body: ITransaction) => {
    set(ref(db, 'transaction/' + pID), body);
}