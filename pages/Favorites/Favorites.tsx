import { View, ScrollView, FlatList, Modal, Alert, Text } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import UsableScreen from "../../components/usableScreen";

type PropsWithChildren = {
  navigation: any;
};

const Home: React.FC<PropsWithChildren> = ({ navigation }) => {
  useEffect(() => {
    async function checkUser() {}
    checkUser();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UsableScreen>
        <View></View>
      </UsableScreen>
    </SafeAreaView>
  );
};

export default Home;
