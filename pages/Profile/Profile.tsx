import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import UsableScreen from "../../components/usableScreen";
import CustomPressable from "../../components/customPressable";

import { clearStorage } from "../../functions/localStorage";

type PropsWithChildren = {
  navigation: any;
};

const Profile: React.FC<PropsWithChildren> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UsableScreen>
        <View>
          <CustomPressable
            color={"gray"}
            text={"Sign Off"}
            onPress={() => {
              clearStorage();
              navigation.navigate("LandingPage");
            }}
          ></CustomPressable>
        </View>
      </UsableScreen>
    </SafeAreaView>
  );
};

export default Profile;
