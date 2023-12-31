import {
  ADDLOAN,
  LOADING,
  OPENSIDEBAR,
  SEARCHDATA,
  SETSCREEN,
} from "./actionTypes";

export type ChildrenProps = {
  children: React.ReactNode;
};

export interface HeaderProps {
  type: string;
}

export type LoanProps = {
  id?: string;
};
export interface IIProps {
  code: number;
  result: boolean;
  data: {
    ID: string;
    TRANSACTION_ID: string;
    FULL_NAME: string;
    LOAN_AMOUNT: string;
    REPAYMENT_DURATION: string;
    CREATED_TIME: string;
  };
}

export interface ProviderProps {
  loading: boolean;
  screenSize: number | null;
  isSidebarOpen: boolean;
  loanData: IIProps[];
}

export type FormProps = {
  action: string;
  full_name: string;
  loan_amount: string;
  repayment_duration: string;
};

export type AppAction =
  | { type: typeof LOADING; payload: boolean }
  | { type: typeof SETSCREEN; payload: number }
  | { type: typeof OPENSIDEBAR; payload: boolean }
  | { type: typeof SEARCHDATA; payload: IIProps[] }
  | { type: typeof ADDLOAN; payload: FormProps };
