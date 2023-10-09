import { Dispatch, SetStateAction } from "react";
import { BehaviorSubject } from "rxjs";

export interface Service<T> {
  defaultState: Record<string, any>;
  state: T;
  loaded: boolean;
  makeAsLoaded: () => void;
  fillState: (state: T) => void;
  setState: Dispatch<SetStateAction<T>>;
  getState: () => T;
  state$: BehaviorSubject<T>;
}

export type Image = {
  id: number | string;
  name: string;
  createdAt: string;
  image: {
    url: string;
    width: number;
    height: number;
    id: number | string;
    extension: string;
  };
};

export type HybridImageFile = {
  file?: File;
  url?: string;
};
