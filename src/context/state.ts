import { IIProps, ProviderProps } from "../interface";

export const initialState: ProviderProps = {
  loading: true,
  screenSize: null,
  isSidebarOpen: false,
  loanData: [] as IIProps[],
};
