import { stock } from "../data/stock";

export const pedirDatos = (res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
    }, 2000);
  });
};
