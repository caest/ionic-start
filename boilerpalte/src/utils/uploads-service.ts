import { BehaviorSubject } from "rxjs";
import { HybridImageFile, Service } from "./types";
import { isEqual } from "lodash";
import React, { Dispatch, SetStateAction } from "react";
import { initStorage } from "./storage";
import { toast } from "../modules/shared/toast-service";

export type Props = {};

export const defaultState: Props = {};
const API_URL = import.meta.env.VITE_RESTAPI_URL;
export type UploadedEntity = {
  key?: string;
  url: string;
};
class UploadService implements Service<Props> {
  private static instance: UploadService;
  loaded: boolean = false;
  public state$ = new BehaviorSubject<Props>(defaultState);
  defaultState: Props = defaultState;
  state: Props = defaultState;
  setState: Dispatch<SetStateAction<Props>> = (
    state: SetStateAction<Props>
  ) => {
    const prevState = this.state$.value;
    const newState = typeof state === "function" ? state(prevState) : state;
    if (!isEqual(prevState, newState)) {
      this.state$.next(newState);
    }
  };
  public getState(): Props {
    return this.state$.value;
  }
  private constructor() {
    this.state$.subscribe((state) => {
      this.state = state;
    });
  }

  async uploadFiles(
    files: HybridImageFile[],
    type: "private" | "public" = "public"
  ): Promise<Array<UploadedEntity>> {
    const formData = new FormData();

    for (const file of files) {
      console.log(file)
      if (file.file) {
        formData.append("files", file.file);
      }
    }

    try {
      let storage = await initStorage();
      let token = (await storage.get("accessToken")) as string;
      const response = await fetch((API_URL + "/upload_" + type) as string, {
        method: "POST",
        body: formData,
        headers: {
          "x-access-token": token,
        },
        credentials: "include",
      });

      if (!response.ok) {
        toast.error("Error uploading files");
        return [];
      }
      const data = await response.json();
      if (data?.files) {
        return data?.files;
      } else {
        toast.error("Error uploading files");
        return [];
      }
    } catch (error: any) {
      toast.error(error.message);
      return [];
    }
  }

  public fillState(props: any) {
    this.loaded = false;
  }
  public makeAsLoaded() {
    this.loaded = true;
  }
  public static getInstance(): UploadService {
    if (!UploadService.instance) {
      UploadService.instance = new UploadService();
    }

    return UploadService.instance;
  }
}

export default UploadService.getInstance();
