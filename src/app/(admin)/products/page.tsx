import Dashboard from "@/components/Dashboard";
import { IProduct } from "@/types/product.type";
import { ICols } from "@/types/static.type";
import React from "react";

const mockData: IProduct[] = [
  {
    createAt: 10000,
    name: "Fantastic Steel Shirt",
    image: "https://loremflickr.com/640/480/fashion",
    price: "464.00",
    quantity: 14,
    sold: 28,
    description: "The Football Is Good For Training And Recreational Purposes",
    category: "Steel",
    id: "1",
  },
  {
    createAt: 10000,
    name: "Rustic Plastic Computer",
    image: "https://loremflickr.com/640/480/fashion",
    price: "967.00",
    quantity: 92422,
    sold: 20,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    category: "Bronze",
    id: "2",
  },
  {
    createAt: 10000,
    name: "Small Fresh Pizza",
    image: "https://loremflickr.com/640/480/fashion",
    price: "939.00",
    quantity: 1041,
    sold: 10,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    category: "Plastic",
    id: "3",
  },
  {
    createAt: 10000,
    name: "Refined Wooden Table",
    image: "https://loremflickr.com/640/480/fashion",
    price: "714.00",
    quantity: 12779,
    sold: 55,
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    category: "Soft",
    id: "4",
  },
  {
    createAt: 10000,
    name: "Elegant Concrete Table",
    image: "https://loremflickr.com/640/480/fashion",
    price: "859.00",
    quantity: 90072,
    sold: 51,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    category: "Bronze",
    id: "5",
  },
  {
    createAt: 10000,
    name: "Sleek Plastic Shoes",
    image: "https://loremflickr.com/640/480/fashion",
    price: "92.00",
    quantity: 47029,
    sold: 23,
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    category: "Frozen",
    id: "6",
  },
  {
    createAt: 10000,
    name: "Elegant Frozen Salad",
    image: "https://loremflickr.com/640/480/fashion",
    price: "942.00",
    quantity: 63760,
    sold: 17,
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    category: "Plastic",
    id: "7",
  },
  {
    createAt: 10000,
    name: "Rustic Plastic Chips",
    image: "https://loremflickr.com/640/480/fashion",
    price: "897.00",
    quantity: 13700,
    sold: 17,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    category: "Wooden",
    id: "8",
  },
  {
    createAt: 10000,
    name: "Electronic Rubber Fish",
    image: "https://loremflickr.com/640/480/fashion",
    price: "207.00",
    quantity: 69054,
    sold: 29,
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    category: "Metal",
    id: "9",
  },
  {
    createAt: 10000,
    name: "Electronic Steel Soap",
    image: "https://loremflickr.com/640/480/fashion",
    price: "472.00",
    quantity: 62770,
    sold: 10,
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    category: "Frozen",
    id: "10",
  },
  {
    createAt: 10000,
    name: "Small Steel Bike",
    image: "https://loremflickr.com/640/480/fashion",
    price: "780.00",
    quantity: 61056,
    sold: 94,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    category: "Cotton",
    id: "11",
  },
  {
    createAt: 10000,
    name: "Recycled Plastic Bike",
    image: "https://loremflickr.com/640/480/fashion",
    price: "413.00",
    quantity: 33680,
    sold: 4,
    description:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    category: "Soft",
    id: "12",
  },
  {
    createAt: 10000,
    name: "Modern Frozen Towels",
    image: "https://loremflickr.com/640/480/fashion",
    price: "288.00",
    quantity: 33023,
    sold: 79,
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    category: "Cotton",
    id: "13",
  },
  {
    createAt: 10000,
    name: "Unbranded Bronze Sausages",
    image: "https://loremflickr.com/640/480/fashion",
    price: "983.00",
    quantity: 15284,
    sold: 70,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    category: "Wooden",
    id: "14",
  },
];

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

    headerName: "Price",
    width: 120,
  },
  {
    field: "quantity",

    headerName: "In Stock",
    width: 150,
  },
  {
    field: "sold",

    headerName: "Sold",
    width: 120,
  },
];

export default function Products() {
  return (
    <div>
      <Dashboard
        curCols={collumn}
        curRows={mockData}
        title="Product Dashboard"
        preLink="products/edit"
        isAddBtn={true}
        addLink={`products/add`}
      />
    </div>
  );
}
