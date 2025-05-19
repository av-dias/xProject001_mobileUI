import { favoriteListHandlerMock } from "../../mocks/mockData";
import { ImageSourcePropType, ListRenderItemInfo } from "react-native";
import { ActivityType, FavoriteType } from "../../models/models";
import { View, Text, Pressable } from "react-native";
import ImageContainer from "../../components/imageContainer";
import color from "../../constants/color";
import { Key } from "react";

const renderFavoriteItem = (
  render: ListRenderItemInfo<any>,
  navigation: any
) => (
  <View
    style={{
      flex: 1 / 2,
      backgroundColor: color.light.grayBlur,
      aspectRatio: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
    }}
  >
    <Pressable
      style={{ width: "100%", aspectRatio: 1 }}
      onPress={() => {
        navigation.navigate("FavoritesDetails", render.item.activityList);
        navigation.setParams(render.item.activityList);
      }}
    >
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          top: "45%",
          borderRadius: 10,
          backgroundColor: color.light.grayBlur,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text>{render.item.name}</Text>
      </View>
      <View
        key={render.index}
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {render.item.activityList &&
          render.item.activityList.map(
            (
              favoriteActivity: {
                id: Key | null | undefined;
                imageSrc: ImageSourcePropType;
              },
              index: number
            ) => {
              if (index > 3) {
                return;
              }
              return (
                <View
                  key={favoriteActivity.id}
                  style={{
                    width:
                      render.item.activityList.length == 1 ? "100%" : "50%",
                    aspectRatio: 1,
                  }}
                >
                  <ImageContainer
                    key={favoriteActivity.id}
                    imageSrc={favoriteActivity.imageSrc}
                  />
                  {index == 3 && render.item.activityList.length > 3 && (
                    <View
                      style={{
                        position: "absolute",
                        top: "38%",
                        left: "33%",
                        borderRadius: 100,
                        paddingHorizontal: 5,
                        backgroundColor: color.light.grayBlur,
                      }}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 20,
                          fontWeight: "bold",
                        }}
                      >
                        +{render.item.activityList.length - 4}
                      </Text>
                    </View>
                  )}
                </View>
              );
            }
          )}
      </View>
    </Pressable>
  </View>
);

const favoriteListHandler = favoriteListHandlerMock;

export { favoriteListHandler, renderFavoriteItem };
