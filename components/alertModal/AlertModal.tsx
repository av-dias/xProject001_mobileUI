import { Alert, Modal, View, Text } from "react-native";
import color from "../../constants/color";
import CustomPressable from "../customPressable";

type AlertModalType = {
  navigation: any;
  title: String;
};

export const AlertModal = ({ navigation, title }: AlertModalType) => {
  return (
    <Modal
      transparent={true}
      style={{ alignItems: "center", justifyContent: "center" }}
      animationType="slide"
      visible={true}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color.light.grayBlur,
        }}
      >
        <View
          style={{
            height: 200,
            width: "80%",
            backgroundColor: "gray",
            borderRadius: 20,
          }}
        >
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
              gap: 20,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {title}
            </Text>
            <View style={{ width: "50%" }}>
              <CustomPressable
                color={color.light.primary}
                text="Start"
                onPress={() => {
                  navigation.navigate("Login");
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
