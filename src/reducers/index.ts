import { LOADING, OPENSIDEBAR, SETSCREEN } from "../actionTypes";
import { AppAction, ProviderProps } from "../interface";

//All reducers functionalities
export const ContextReducers = (state: ProviderProps, action: AppAction) => {
  if (action.type === LOADING) return { ...state, loading: action.payload };
  if (action.type === SETSCREEN)
    return { ...state, screenSize: action.payload };
  if (action.type === OPENSIDEBAR)
    return { ...state, isSidebarOpen: action.payload };
  return { ...state };
};
