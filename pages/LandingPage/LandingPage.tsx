import { View, Text, Pressable } from "react-native";
import { ReactNode } from "react";
import { SafeAreaProvider, SafeAreaView, initialWindowMetrics } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

import UsableScreen from "../../components/usableScreen";
import InputBox from "../../components/InputBox";

import { getFromStorage } from "../../functions/localStorage";
import storage from "../../constants/storage";
import TextBox from "../../components/textBox";

import { loginIcon } from "../../constants/icons";

type PropsWithChildren = {
  navigation: any;
};

const userHandler = async (navigation: any) => {
  let email = await getFromStorage(storage.email);
  if (email && email != "") {
    navigation.navigate("Home");
  }
};

const LandingPage: React.FC<PropsWithChildren> = ({ navigation }) => {
  userHandler(navigation);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UsableScreen>
        <View style={{ alignItems: "flex-end" }}>
          <Pressable
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <TextBox text={"Sign In"} icon={loginIcon(20)} iconDirection="right"></TextBox>
          </Pressable>
        </View>
        <View style={{ flex: 1, gap: 50 }}>
          <View style={{ flex: 1, gap: 20 }}>
            <View style={{ padding: 20, alignItems: "center" }}>
              <View style={{ width: "50%", height: 150, backgroundColor: "gray" }}></View>
            </View>
            <View style={{ height: 50 }}>
              <InputBox
                icon={<FontAwesome name="map-pin" size={24} color="black" />}
                placeholder="Where do you want to stumble upon first?"
                onSubmitEditing={(data: any) => {
                  navigation.navigate("Tabs");
                }}
              ></InputBox>
            </View>
          </View>
          <View style={{ flex: 2 }}>
            <View style={{ flex: 1 }}>
              <View style={{ width: "100%", height: 400, backgroundColor: "gray", justifyContent: "center", gap: 20 }}>
                <Text style={{ textAlign: "center", justifyContent: "center", fontSize: 20 }}>
                  The best things in life are found by stumbling upon them.
                </Text>
                <Text style={{ textAlign: "center", justifyContent: "center", fontSize: 14 }}>We are here to help</Text>
              </View>
            </View>
          </View>
        </View>
      </UsableScreen>
    </SafeAreaView>
  );
};

export default LandingPage;
