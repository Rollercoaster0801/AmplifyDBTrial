/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function ApplyForPersonalLoanText(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="301px"
      height="24px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.65px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        children="APPLY FOR PERSONAL LOAN"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
