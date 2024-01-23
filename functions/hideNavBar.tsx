import color from "../constants/color";

export const hideNavBar = (e: any, setOffset: any, offset: any, navigation: any) => {
  const currentOffset = e.nativeEvent.contentOffset.y;
  let direction = currentOffset > offset ? "down" : "up";
  setOffset(Number(currentOffset));
  if (direction === "down" && currentOffset > 10) {
    navigation.setOptions({
      tabBarStyle: { display: "none" },
    });
    return "down;";
  } else {
    navigation.setOptions({
      tabBarStyle: {
        margin: 20,
        height: 50,
        borderRadius: 15,
        paddingHorizontal: 5,
        paddingTop: 5,
        backgroundColor: color.light.navBarBlur,
        position: "absolute",
        borderTopWidth: 0,
        navigationBarColor: "gold",
        elevation: 1,
      },
    });
    return "up;";
  }
};
