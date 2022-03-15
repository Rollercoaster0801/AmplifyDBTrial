/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
export default function RectangleBackground(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="459px"
      height="445px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="10px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,0.800000011920929)"
        {...getOverrideProps(overrides, "View.View[0]")}
      ></View>
    </View>
  );
}
