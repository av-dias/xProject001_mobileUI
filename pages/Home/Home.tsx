import { View, Text } from "react-native";
import { ReactNode } from "react";
import { SafeAreaProvider, SafeAreaView, initialWindowMetrics } from "react-native-safe-area-context";
import { AntDesign, Feather } from "@expo/vector-icons";

import UsableScreen from "../../components/usableScreen";
import FilterBar from "../../components/filterBar";
import InputBox from "../../components/InputBox";

type PropsWithChildren = {
  navigation: any;
};

const Home: React.FC<PropsWithChildren> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UsableScreen>
        <Text>Home Page</Text>
        <FilterBar>
          <InputBox icon={<AntDesign name="search1" size={24} color="black" />} />
          <InputBox icon={<Feather name="map-pin" size={24} color="black" />} />
        </FilterBar>
      </UsableScreen>
    </SafeAreaView>
  );
};

export default Home;
