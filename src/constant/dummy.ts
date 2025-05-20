import type { DataDummyInterface } from "./dummy.types";

export const randomImage = "https://picsum.photos/200/300/?blur=9";

export const dataDummy: DataDummyInterface = [
  {
    id: 1,
    name: "Bebek Goreng Crispy",
    quantity: 1,
    image: randomImage,
    date: new Date(),
    price: 1000,
    stock: 5,
  },
  {
    id: 2,
    name: "Tahu Geprek",
    quantity: 1,
    image: randomImage,
    date: new Date(),
    price: 100000,
    stock: 2,
  },
  {
    id: 3,
    name: "Martabak Cabe Rawit",
    quantity: 1,
    image: randomImage,
    date: new Date(),
    price: 52500,
    stock: 8,
  },
  {
    id: 4,
    name: "Jus Buah Naga Aja",
    quantity: 3,
    image: randomImage,
    date: new Date(),
    price: 500,
    stock: 3,
  },
  {
    id: 5,
    name: "Ayam Penyet Bang Leo",
    quantity: 2,
    image: randomImage,
    date: new Date(),
    price: 5000000,
    stock: 3,
  },
  {
    id: 6,
    name: "Mamang Racing",
    quantity: 3,
    image: randomImage,
    date: new Date(),
    price: 2000,
    stock: 3,
  },
];
