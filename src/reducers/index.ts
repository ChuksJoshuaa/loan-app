import {
  ADDLOAN,
  LOADING,
  OPENSIDEBAR,
  SEARCHDATA,
  SETSCREEN,
} from "../actionTypes";
import { AppAction, ProviderProps } from "../interface";
import { saveDataLocalStorage } from "../utils/getLocalStorage";
import {
  generateTransactionId,
  generateUniqueKey,
  getCode,
  getCurrentDateTime,
} from "../utils/getTransactionId";

//All reducers functionalities
export const ContextReducers = (state: ProviderProps, action: AppAction) => {
  if (action.type === LOADING) return { ...state, loading: action.payload };
  if (action.type === SETSCREEN)
    return { ...state, screenSize: action.payload };
  if (action.type === OPENSIDEBAR)
    return { ...state, isSidebarOpen: action.payload };
  if (action.type === SEARCHDATA) return { ...state, loanData: action.payload };
  if (action.type === ADDLOAN) {
    let payloadData = action.payload;
    const objValue = {
      code: getCode(),
      result: true,
      data: {
        CREATED_TIME: getCurrentDateTime(),
        FULL_NAME: payloadData.full_name,
        ID: generateUniqueKey().toString(),
        LOAN_AMOUNT: payloadData.loan_amount,
        REPAYMENT_DURATION: payloadData.repayment_duration,
        TRANSACTION_ID: generateTransactionId(),
      },
    };

    const newData = [...state.loanData, objValue];
    saveDataLocalStorage(newData);
    return { ...state, loanData: newData };
  }
  return { ...state };
};
