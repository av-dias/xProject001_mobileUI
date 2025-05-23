import { View, Text } from "react-native";
import { ReactNode } from "react";
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import UsableScreen from "../../components/usableScreen";
import CustomPressable from "../../components/customPressable";

import { saveToStorage } from "../../storage/baseStorage";
import storage from "../../storage/storageKeys";

type PropsWithChildren = {
  navigation: any;
};

const LoginPage: React.FC<PropsWithChildren> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UsableScreen>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 200,
              height: 200,
              backgroundColor: "gray",
              alignSelf: "center",
              marginBottom: 300,
            }}
          ></View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
              <CustomPressable
                onPress={() => {
                  alert("Not yet implemented!");
                }}
                color="gray"
                text={"Sign Up"}
              ></CustomPressable>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
              <CustomPressable
                onPress={async () => {
                  await saveToStorage(storage.email, "email");
                  navigation.navigate("Tabs");
                }}
                color="orange"
                text={"Sign In"}
              ></CustomPressable>
            </View>
          </View>
        </View>
      </UsableScreen>
    </SafeAreaView>
  );
};

export default LoginPage;
