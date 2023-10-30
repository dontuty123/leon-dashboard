

import { ref, set } from "firebase/database";
import { db } from "server/firebase";

export const addProduct = (pID: string ,body: IProduct) => {
    set(ref(db, 'products/' + pID), body);
}

export const addTransaction = (pID: string ,body: ITransaction) => {
    set(ref(db, 'transaction/' + pID), body);
}

//   const time = new Date().getTime();

//     const newTransaction = {
//       createAt: time,
//       id: time.toString(),
//       product: {
//         category: "accessory",
//         createAt: 1698386886826,
//         description: "123123",
//         id: "159391698386886826",
//         image:
//           "https://firebasestorage.googleapis.com/v0/b/leon-4269b.appspot.com/o/uploads%2Fpngtree-vector-shirt-icon-png-image_1009594.jpg?alt=media&token=2061a2f3-c341-45d5-bfde-3fa6168392cf",
//         name: "123",
//         price: 3123123,
//         quantity: 1231,
//       },
//       quantity: 2,
//       userID: "aaaaa",
//     };

//     addTransaction(time.toString(), newTransaction);