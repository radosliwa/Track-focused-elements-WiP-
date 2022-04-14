import { createContext, useState, useReducer, useContext } from "react";

enum ACTION_KEYS {
  SET_TRACKED_TARGET = "SET_TRACKED_TARGET",
  SET_TARGET_BCG_COLOR = "SET_TARGET_BCG_COLOR",
}
// @TODO - more strict typing
interface IState {
  trackedTarget: string;
  trackedTargetBcgColor: string;
  setTrackedTarget: (trackedTarget: string) => void;
  setTrackedTargetBcgColor: (trackedTargetBcgColor: string) => void;
}
interface IReducerAction {
  type: keyof typeof ACTION_KEYS;
  payload: string;
}

const initialState: IState = {
  trackedTarget: "",
  trackedTargetBcgColor: "red",
  setTrackedTarget() {},
  setTrackedTargetBcgColor() {},
};

export const reducer = (state: IState, action: IReducerAction): IState => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_KEYS.SET_TRACKED_TARGET:
      return {
        ...state,
        trackedTarget: payload,
      };
    case ACTION_KEYS.SET_TARGET_BCG_COLOR:
      return {
        ...state,
        trackedTargetBcgColor: payload,
      };
    default:
      return state;
  }
};

export const Context = createContext<IState>(initialState);

const createValueForProvider = (initialState: IState): IState => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    ...state,
    setTrackedTarget: (trackedTarget: string): void => {
      dispatch({ type: ACTION_KEYS.SET_TRACKED_TARGET, payload: trackedTarget });
    },
    setTrackedTargetBcgColor: (trackedTargetBcgColor: string): void => {
      dispatch({
        type: ACTION_KEYS.SET_TARGET_BCG_COLOR,
        payload: trackedTargetBcgColor,
      });
    },
  };
};

export const StateProvider: React.FC = ({ children }) => {
  const value: IState = createValueForProvider(initialState);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
