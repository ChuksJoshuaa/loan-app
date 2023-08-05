import { createContext, useReducer, useEffect } from "react";
import { AppAction, ChildrenProps, ProviderProps } from "../interface";
import { ContextReducers } from "../reducers";
import { LOADING, OPENSIDEBAR, SEARCHDATA, SETSCREEN } from "../actionTypes";
import { initialState } from "./state";
import {
  getLocalStorage,
  saveDataLocalStorage,
} from "../utils/getLocalStorage";
import { fetchData } from "../utils/data";

// Create the context
const MyContext = createContext<{
  state: ProviderProps;
  dispatch: React.Dispatch<AppAction>;
}>({ state: initialState, dispatch: () => null });

export const ContextProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(ContextReducers, initialState);

  const checkWidth = () => {
    let yes = null;
    if (typeof window !== "undefined") {
      yes = window?.innerWidth;
      dispatch({ type: SETSCREEN, payload: yes });
    }

    if (yes) {
      if (yes <= 850) {
        dispatch({ type: OPENSIDEBAR, payload: true });
      }

      if (yes >= 850) {
        dispatch({ type: OPENSIDEBAR, payload: false });
      }
      return yes;
    }
  };

  const onLoad = () => {
    setTimeout(() => {
      dispatch({ type: LOADING, payload: false });
    }, 3000);
  };

  const loadData = () => {
    let value = getLocalStorage().data;
    if (value && value.length > 0) {
      dispatch({ type: SEARCHDATA, payload: value });
    } else {
      saveDataLocalStorage(fetchData);
      dispatch({ type: SEARCHDATA, payload: fetchData });
    }
  };

  useEffect(() => {
    loadData();
    onLoad();
  }, []);

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [state.screenSize]);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
