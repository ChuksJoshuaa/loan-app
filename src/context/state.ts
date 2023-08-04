import { ProviderProps } from "../interface";
import { fetchData } from "../utils/data";

export const initialState: ProviderProps = {
  loading: true,
  screenSize: null,
  isSidebarOpen: false,
  loanData: fetchData,
};
