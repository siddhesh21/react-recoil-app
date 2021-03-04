import React from "react";
import { useRecoilValue } from "recoil";
import { fetchQuote } from "../atoms/quoteState";

function Quote() {
  const quote = useRecoilValue(fetchQuote);
  return <div>Your quote of the day: {quote}</div>;
}

export default Quote;
