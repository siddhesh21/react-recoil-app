import { atom, selector } from "recoil";

export const quoteState = atom({
  key: "quoteState",
  default: null,
});

export const fetchQuote = selector({
  key: "fetchQuote",
  get: async ({ get }) => {
    const quote = await fetch(`https://api.quotable.io/random`)
      .then((response) => response.json())
      .then((data) => data.content);
    return quote;
  },
});
