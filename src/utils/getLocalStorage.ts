import { IIProps } from "../interface";

export const saveDataLocalStorage = (data: IIProps[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("loanData", JSON.stringify({ data }));
  }
};

export const getLocalStorage = () => {
  let loanData = {
    data: [],
  };

  if (typeof window !== "undefined") {
    loanData = JSON.parse(localStorage.getItem("loanData") || "{}");
  }
  return loanData;
};
