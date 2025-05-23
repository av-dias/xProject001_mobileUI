import { View, Text, Pressable, TextInput } from "react-native";
import BottomSheet from "../bottomSheet";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import storage from "../../storage/storageKeys";
import { ActivityType } from "../../models/models";
import {
  addFavoriteFolder,
  addItemToFavoriteFolder,
} from "../../storage/favoriteStorage";
import { Dispatch, SetStateAction } from "react";

type Props = {
  newFolderVisible: boolean;
  favoriteList: string[];
  selectedAtivity: ActivityType | null;
  folderName: string | undefined;
  setModalFavoritesVisible: Dispatch<SetStateAction<boolean>>;
  setFolderName: Dispatch<SetStateAction<string | undefined>>;
  setFavoriteList: Dispatch<SetStateAction<string[]>>;
  setNewFolderVisible: Dispatch<SetStateAction<boolean>>;
};

export const FavoritesBottomSheet: React.FC<Props> = (props) => {
  return (
    <BottomSheet color={"lightgray"}>
      <View style={{ paddingHorizontal: 5, alignItems: "flex-end" }}>
        <Pressable
          style={{ padding: 10, backgroundColor: "transparent" }}
          onPress={() => {
            props.setModalFavoritesVisible(false);
            props.setNewFolderVisible(false);
            props.setFolderName(undefined);
          }}
        >
          <AntDesign name="closecircleo" size={20} color="black" />
        </Pressable>
      </View>
      <View style={{ flex: 1, padding: 10, paddingTop: 5, gap: 10 }}>
        {props.favoriteList &&
          props.favoriteList.map((folder: string) => (
            <Pressable
              key={"Fav" + folder}
              onPress={async () => {
                props.setModalFavoritesVisible(false);
                await addItemToFavoriteFolder(
                  storage.favorite,
                  props.selectedAtivity,
                  folder
                );
              }}
            >
              <View
                style={{
                  height: 80,
                  backgroundColor: "gray",
                  borderRadius: 10,
                  justifyContent: "center",
                  padding: 10,
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                <View
                  style={{
                    height: "auto",
                    width: 80,
                    backgroundColor: "lightgray",
                    borderRadius: 5,
                  }}
                ></View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "lightgray",
                    borderRadius: 5,
                  }}
                >
                  <View style={{ padding: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>
                      {folder.toUpperCase()}
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
          ))}
        <View>
          <Pressable
            onPress={() => {
              props.setNewFolderVisible(true);
            }}
          >
            <View
              style={{
                width: "auto",
                padding: 10,
                paddingLeft: 20,
                backgroundColor: "transparent",
                alignSelf: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Text style={{ color: "blue" }}>New Folder</Text>
            </View>
          </Pressable>
        </View>
        {props.newFolderVisible && (
          <Pressable
            onPress={() => {
              props.setModalFavoritesVisible(false);
            }}
          >
            <View
              style={{
                height: 80,
                backgroundColor: "gray",
                borderRadius: 10,
                justifyContent: "center",
                padding: 10,
                flexDirection: "row",
                gap: 10,
              }}
            >
              <View
                style={{
                  height: "auto",
                  width: 80,
                  backgroundColor: "lightgray",
                  borderRadius: 5,
                }}
              ></View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "lightgray",
                  borderRadius: 5,
                }}
              >
                <View style={{ padding: 5, paddingBottom: 0 }}>
                  <TextInput
                    onChangeText={(text) => {
                      props.setFolderName(text);
                    }}
                    placeholder="Folder Name"
                  ></TextInput>
                </View>
                <View
                  style={{
                    gap: 10,
                    marginTop: -5,
                    paddingRight: 5,
                    backgroundColor: "transparent",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Pressable
                    style={{ padding: 5, backgroundColor: "transparent" }}
                    onPress={async () => {
                      if (props.folderName) {
                        props.setFavoriteList((prev: any) => [
                          ...prev,
                          props.folderName,
                        ]);
                        addFavoriteFolder(storage.favorite, props.folderName);
                        props.setFolderName(undefined);
                      } else {
                        alert("Please insert a folder name.");
                      }
                    }}
                  >
                    <AntDesign name="checkcircleo" size={22} color="black" />
                  </Pressable>
                  <Pressable
                    style={{ padding: 5, backgroundColor: "transparent" }}
                    onPress={() => {
                      alert("Cancel");
                    }}
                  >
                    <Ionicons
                      name="trash-bin-outline"
                      size={24}
                      color="black"
                    />
                  </Pressable>
                </View>
              </View>
            </View>
          </Pressable>
        )}
      </View>
    </BottomSheet>
  );
};
