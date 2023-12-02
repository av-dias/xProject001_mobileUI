import { View, Text } from "react-native";
import { ReactNode } from "react";

type PropsWithChildren = {
  size: number;
  navigation: any;
  children: ReactNode;
};

const ActivityDetails: React.FC<PropsWithChildren> = ({ navigation }) => {
  return (
    <View>
      <Text>ActivityDetails!</Text>
    </View>
  );
};

export default ActivityDetails;
