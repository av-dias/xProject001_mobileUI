import * as SecureStore from "expo-secure-store";
import storage from "../constants/storage";

export async function saveToStorage(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export async function addToStorage(key: string, value: any) {
  let currentValueString = await getFromStorage(key);
  let newValue = [value];
  if (currentValueString && currentValueString != "") {
    let currentValueJson = JSON.parse(currentValueString);
    newValue = [...currentValueJson, value];
  }

  await SecureStore.setItemAsync(key, JSON.stringify(newValue));
}

export async function removeFromStorage(key: string, id: string) {
  let currentValueString = await getFromStorage(key);
  if (!currentValueString) return;

  let currentValueJson = JSON.parse(currentValueString);
  currentValueJson = currentValueJson.filter((value: { id: string }) => value.id != id);

  await SecureStore.setItemAsync(key, JSON.stringify(currentValueJson));
}

export async function getFromStorage(key: string) {
  let result = await SecureStore.getItemAsync(key);
  return result;
}

export async function clearStorage() {
  Object.keys(storage).forEach(async (key) => {
    await saveToStorage(key, "");
  });
}

export async function clearValueStorage() {
  Object.keys(storage).forEach(async (key) => {
    if (key != storage.email) {
      await saveToStorage(key, "");
    }
  });
}
