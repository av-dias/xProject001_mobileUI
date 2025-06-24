import * as SecureStore from "expo-secure-store";
import storage from "./storageKeys";

export async function saveToStorage(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export async function addToStorage(key: string, value: any) {
  let currentValueString = await getFromStorage(key);
  let newValue = [value];

  if (currentValueString && currentValueString !== "") {
    let currentValueJson;
    try {
      currentValueJson = JSON.parse(currentValueString);
      if (Array.isArray(currentValueJson)) {
        newValue = [...currentValueJson, value];
      } else {
        // If parsed value is not an array, start fresh with new array
        newValue = [value];
      }
    } catch (e) {
      console.error("Failed to parse JSON in addToStorage for key:", key, e);
      // fallback to just the new value in array
      newValue = [value];
    }
  }

  await SecureStore.setItemAsync(key, JSON.stringify(newValue));
}

export async function removeFromStorage(key: string, id: string) {
  let currentValueString = await getFromStorage(key);
  if (!currentValueString) return;

  let currentValueJson;
  try {
    currentValueJson = JSON.parse(currentValueString);
  } catch (e) {
    console.error("Failed to parse JSON in removeFromStorage for key:", key, e);
    return; // exit if can't parse
  }

  if (!Array.isArray(currentValueJson)) {
    console.warn(
      `Expected array in removeFromStorage for key ${key}, got:`,
      currentValueJson
    );
    return;
  }

  const filtered = currentValueJson.filter(
    (value: { id: string }) => value.id !== id
  );

  await SecureStore.setItemAsync(key, JSON.stringify(filtered));
}

export async function getFromStorage(key: string): Promise<string | null> {
  const result = await SecureStore.getItemAsync(key);
  return result;
}

export async function clearStorage() {
  for (const key of Object.keys(storage)) {
    await saveToStorage(key, "");
  }
}

export async function clearValueStorage() {
  for (const key of Object.keys(storage)) {
    if (key !== storage.email) {
      await saveToStorage(key, "");
    }
  }
}
