import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import UsableScreen from "../../components/usableScreen";
import CustomPressable from "../../components/customPressable";

import { clearStorage, clearValueStorage } from "../../storage/baseStorage";
import { navBarHeight } from "../../App";
import color from "../../constants/color";
import { ServerSyncContainer } from "../../demo/serverSyncContainer";

type PropsWithChildren = {
  navigation: any;
};

const Profile: React.FC<PropsWithChildren> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UsableScreen>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            paddingBottom: navBarHeight * 1.5,
          }}
        >
          <View style={{ gap: 20 }}>
            <CustomPressable
              color={color.light.gray}
              text={"Sign Off"}
              onPress={() => {
                clearStorage();
                navigation.navigate("LandingPage");
              }}
            />
            <ServerSyncContainer />
          </View>
          <View>
            <CustomPressable
              color={"pink"}
              text={"Clear Storage"}
              onPress={() => {
                clearValueStorage();
              }}
            />
          </View>
        </View>
      </UsableScreen>
    </SafeAreaView>
  );
};

export default Profile;
