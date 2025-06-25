import { View, ScrollView, Text } from "react-native";
import React from "react";
import InputBox from "../InputBox";
import { AntDesign, Feather } from "@expo/vector-icons";
import { iconsfilter } from "../../constants/icons";
import ExpansionBar from "../expansionBar";
import color from "../../constants/color";

const FilterBar = () => {
  return (
    <View
      style={{
        height: 90,
        gap: 15,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 40,
          borderRadius: 5,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <InputBox
          placeholder="Search..."
          icon={
            <AntDesign
              name="search1"
              size={20}
              color={color.light.iconPrimary}
            />
          }
        />
        <InputBox
          placeholder="Where..."
          icon={
            <Feather name="map-pin" size={20} color={color.light.iconPrimary} />
          }
        />
      </View>
      <View style={{ flex: 1, borderRadius: 5, overflow: "hidden" }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ borderRadius: 5, overflow: "hidden" }}
          contentContainerStyle={{
            gap: 10,
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          {iconsfilter.map((filter) => (
            <ExpansionBar key={filter.name} onPress={() => {}}>
              <Text style={{ color: color.light.textSecundary }}>
                {filter.label}
              </Text>
            </ExpansionBar>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default FilterBar;
