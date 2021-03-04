// import { useRecoilState } from "recoil";
// import { userState } from "./atoms/userState";
// import { useState } from "react";
import { Suspense } from "react";
import { useRecoilValue } from "recoil";
import "./App.css";
import { basketState } from "./atoms/basketState";
import Product from "./components/Product";
import Quote from "./components/Quote";
import Spinner from "react-spinkit";

// var Spinner = require("react-spinkit");
function App() {
  const basket = useRecoilValue(basketState);

  console.log(basket);
  return (
    <div className="app">
      <h2>Our Shopping App</h2>
      <h2>The total number of items in your basket: {basket.length}</h2>

      <Suspense
        fallback={
          <h2>
            <Spinner name="line-scale" fadeIn="none" />
            Loading...
          </h2>
        }
      >
        <Quote />
      </Suspense>
      <Product title="Apple iPhone" price={999} />
      <br />
      <Product title="Apple iPad" price={1999} />
    </div>
  );
}

export default App;
