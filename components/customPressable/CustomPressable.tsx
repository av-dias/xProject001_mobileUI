import { Text, Pressable } from "react-native";

type Props = {
  color: string;
  text: string;
  onPress: any;
};

const CustomPressable: React.FC<Props> = (props) => {
  return (
    <Pressable style={{ backgroundColor: props.color, padding: 20, borderRadius: 20 }} onPress={props.onPress}>
      <Text style={{ textAlign: "center" }}>{props.text}</Text>
    </Pressable>
  );
};

export default CustomPressable;
