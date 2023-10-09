import { Storage } from "@ionic/storage";

const store = new Storage();

let storageInstance: Storage | null = null;

export const initStorage = async (): Promise<Storage> => {
  if (!storageInstance) {
    storageInstance = await store.create();
  }
  return storageInstance;
};
