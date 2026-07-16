// Step 1 : import create from zustand
import { existsSync, stat } from "fs";
import { create } from "zustand";

// on refresh - with zero useEffect and Zero json.stringfy, auto save the store to the broswer's local storage
import { persist } from "zustand/middleware";

// step2: create type (describe cart items)
export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;

  //Drived Getter (Value computed from items)
  // These are functions and not stored numbers.  The recompute from item
  totalItems: () => number;
  totalPrice: () => number;
};

//Step 3: Create the store

export const useCartStore = create<CartStore>()(
  persist((set, get) => ({
    items: [],
    addItem: (item) =>
      set((state) => {
        const exsisting = state.items.find((i) => i.id === item.id);

        if (exsisting) {
          return {
            items: state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
            ),
          };
        }

        return { items: [...state.items, { ...item, quantity: 1 }] };
      }),

    removeItem: (id) =>
      set((state) => ({
        items: state.items.filter((i) => i.id !== id),
      })),

        updateQuantity: (id, quantity) => {
      if (quantity <= 0) {
        get().removeItem(id);
        return;
      }
      set((state) => ({
        items: state.items.map((i) => (i.id === id ? { ...i, quantity } : i)),
      }));
    },

    clearCart: () => set({ items: [] }),

    totalItems: ()=> get().items.reduce((sum, i)=> sum+i.quantity, 0),
    totalPrice:()=> get().items.reduce((sum, i)=> sum + i.price * i.quantity, 0)
  }),
{
    name:"Zustand-demo-cart"
}
),
);
