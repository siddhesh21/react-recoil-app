import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { basketState, numberOfItemInBasket } from "../atoms/basketState";

function Product({ id, title, price }) {
  const [basket, setBasket] = useRecoilState(basketState);
  // const [count, setCount] = useState(0);
  const count = useRecoilValue(numberOfItemInBasket(id));

  const addItemBasket = () => {
    const item = {
      id,
      title,
      price,
    };
    setBasket([...basket, item]);
    // setCount(count + 1);
  };

  const removeItemToBasket = () => {
    const index = basket.findIndex((basketItem) => basketItem.id === id);
    let newBasket = [...basket];

    if (index >= 0) {
      newBasket.splice(index, 1);
      // setCount(count - 1);
    } else {
      console.warn(`
      Can't remove product (id: ${id}) as its not in basket!`);
    }

    setBasket(newBasket);
  };

  return (
    <div>
      <h2>{title}</h2>
      <h2>{price}</h2>
      <button onClick={addItemBasket}>+</button>
      <h3>{count}</h3>
      <button onClick={removeItemToBasket}>-</button>
    </div>
  );
}

export default Product;
