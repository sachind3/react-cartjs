import { createContext, useEffect, useState } from "react";
import productData from "./../utils/data";

export const AppContext = createContext();

export const AppState = ({ children }) => {
  const [productList, setProductList] = useState(productData);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [wallet, setWallet] = useState(1400);
  const [totalPoints, setTotalPoints] = useState(0);
  useEffect(() => {
    if (productList.length) {
      const createCart = productList
        .map((item) => {
          return item.data.filter((i) => {
            return i.selected === true;
          });
        })
        .flat(1);
      setCart(createCart);
    }
  }, [productList]);

  useEffect(() => {
    if (cart.length) {
      const total = cart.reduce((prev, curr) => {
        return prev + curr.price * curr.qt;
      }, 0);
      setTotalPrice(total);
      const tPoint = cart.reduce((prev, curr) => {
        return prev + curr.price;
      }, 0);
      setTotalPoints(tPoint);
    }
  }, [cart]);

  const handleChangeInput = (val) => {
    const fn = productList.map((i) => {
      if (i.id === val.category) {
        const newarr = i.data.map((idx) => {
          return { ...idx, selected: false };
        });
        const updated = newarr.map((idx) => {
          return idx.id === val.id ? { ...idx, selected: true } : idx;
        });
        return { ...i, data: updated };
      } else {
        return i;
      }
    });
    setProductList(fn);
  };
  const store = {
    cart,
    setCart,
    productList,
    setProductList,
    wallet,
    setWallet,
    totalPrice,
    handleChangeInput,
    totalPoints,
  };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
