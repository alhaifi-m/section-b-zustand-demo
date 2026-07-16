export type Product = {
  id: string;
  name: string;
  price: number;
};

export const products: Product[] = [
  { id: "keyboard", name: "Mechanical Keyboard", price: 89 },
  { id: "mouse", name: "Wireless Mouse", price: 39 },
  { id: "monitor", name: "27\" Monitor", price: 219 },
  { id: "headset", name: "USB-C Headset", price: 59 },
];
