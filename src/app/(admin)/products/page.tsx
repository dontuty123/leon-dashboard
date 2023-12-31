"use client";

import Dashboard from "@/components/Dashboard";

import { ICols } from "@/types/static.type";
import { onValue, ref, remove } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "server/firebase";

const collumn: ICols[] = [
  {
    field: "name",

    headerName: "Product's name",
    width: 300,
  },
  {
    field: "category",

    headerName: "Category",
    width: 150,
  },
  {
    field: "price",
    isNumber: true,
    headerName: "Price",
    width: 120,
  },
  {
    field: "quantity",
    isNumber: true,
    headerName: "In Stock",
    width: 150,
  },
  {
    field: "sold",
    isNumber: true,
    headerName: "Sold",
    width: 120,
  },
];

export default function Products() {
  const [productList, setProductList] = useState<IProduct[] | null>();

  useEffect(() => {
    const productListRef = ref(db, "products");
    onValue(productListRef, (snapshot) => {
      const val = snapshot.val();
      const data: IProduct[] = Object.values(val);
      data.sort((a, b) => b.createAt - a.createAt);
      setProductList(data);
    });
  }, []);

  const handleDelete = (id: string) => {
    const deleteProductRef = ref(db, "products/" + id);
    remove(deleteProductRef);
  };

  return (
    <div>
      <Dashboard
        curCols={collumn}
        curRows={productList ? productList : []}
        title="Product Dashboard"
        isAddBtn={true}
        handleDelete={handleDelete}
        currentModal="products"
      />
    </div>
  );
}
