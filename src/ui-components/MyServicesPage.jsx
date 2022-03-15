/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Text, View } from "@aws-amplify/ui-react";
export default function MyServicesPage(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="1440px"
      height="1024px"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Text
        fontFamily="Inter"
        fontSize="64px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="72px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="440px"
        height="62px"
        position="absolute"
        top="calc(50% - 31px - 349px)"
        left="calc(50% - 220px - -3px)"
        padding="0px 0px 0px 0px"
        children="MY SERVICES"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
      <Button
        position="absolute"
        display="flex"
        top="calc(50% - 46.5px - 215.5px)"
        left="calc(50% - 231px - 0px)"
        width="462px"
        height="93px"
        size="large"
        variation="primary"
        children="Personal Loan"
        {...getOverrideProps(overrides, "View.Button[0]")}
      ></Button>
      <Button
        position="absolute"
        display="flex"
        top="calc(50% - 46px - 67px)"
        left="calc(50% - 231px - -1px)"
        width="462px"
        height="92px"
        size="large"
        variation="primary"
        children="Business Loan"
        {...getOverrideProps(overrides, "View.Button[1]")}
      ></Button>
      <Button
        position="absolute"
        display="flex"
        top="calc(50% - 46.5px - -81.5px)"
        left="calc(50% - 231px - -1px)"
        width="462px"
        height="93px"
        size="large"
        variation="primary"
        children="Car Loan"
        {...getOverrideProps(overrides, "View.Button[2]")}
      ></Button>
      <Button
        position="absolute"
        display="flex"
        top="calc(50% - 46px - -230px)"
        left="calc(50% - 231px - -1px)"
        width="462px"
        height="92px"
        size="large"
        variation="primary"
        children="Housing Loan"
        {...getOverrideProps(overrides, "View.Button[3]")}
      ></Button>
    </View>
  );
}
