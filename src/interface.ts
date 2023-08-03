import { LOADING, OPENSIDEBAR, SETSCREEN } from "./actionTypes";

export type ChildrenProps = {
  children: React.ReactNode;
};

export interface ProviderProps {
  loading: boolean;
  screenSize: number | null;
  isSidebarOpen: boolean;
}

export type AppAction =
  | { type: typeof LOADING; payload: boolean }
  | { type: typeof SETSCREEN; payload: number }
  | { type: typeof OPENSIDEBAR; payload: boolean };
