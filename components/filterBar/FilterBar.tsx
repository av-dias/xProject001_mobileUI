import { View, ScrollView } from "react-native";
import React from "react";
import InputBox from "../InputBox";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { iconsfilter } from "../../constants/icons";
import ExpansionBar from "../expansionBar";

type Props = {
  showIconFilter: boolean;
  setShowIconFilter: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterBar: React.FC<Props> = (props) => {
  return (
    <View
      style={{
        width: "100%",
        height: 60,
        backgroundColor: "gray",
        borderRadius: 20,
        flexDirection: "row",
        padding: 10,
        gap: 10,
      }}
    >
      {!props.showIconFilter ? (
        <>
          <InputBox
            placeholder="Search..."
            icon={<AntDesign name="search1" size={24} color="black" />}
          />
          <InputBox
            placeholder="Where..."
            icon={<Feather name="map-pin" size={24} color="black" />}
          />
        </>
      ) : (
        <View style={{ flex: 1, borderRadius: 20, overflow: "hidden" }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ borderRadius: 20, overflow: "hidden" }}
            contentContainerStyle={{
              gap: 20,
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            {iconsfilter.map((filter) => {
              return (
                <ExpansionBar key={filter.name} onPress={() => {}}>
                  {filter.icon}
                </ExpansionBar>
              );
            })}
          </ScrollView>
        </View>
      )}
      <ExpansionBar
        onPress={() => {
          props.setShowIconFilter(!props.showIconFilter);
          console.log("chaning state to:", props.showIconFilter);
        }}
      >
        <Entypo name="sound-mix" size={24} color="black" />
      </ExpansionBar>
    </View>
  );
};

export default FilterBar;
