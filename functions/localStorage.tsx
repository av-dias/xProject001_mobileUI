import * as SecureStore from "expo-secure-store";
import storage from "../constants/storage";

export async function saveToStorage(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export async function getFromStorage(key: string) {
  let result = await SecureStore.getItemAsync(key);
  //console.log(`%csecureStorage: %c${result}`, "color:#bada55", "color:#bada55");
  return result;
}

export async function clearStorage() {
  Object.keys(storage).forEach(async (key) => {
    await saveToStorage(key, "");
  });
}
