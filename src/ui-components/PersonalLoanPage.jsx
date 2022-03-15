/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Heading, TextField, View } from "@aws-amplify/ui-react";
export default function PersonalLoanPage(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <View
      width="1440px"
      height="1024px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Button
        position="absolute"
        display="flex"
        top="calc(50% - 46.5px - 187.5px)"
        left="calc(50% - 231px - -1px)"
        width="462px"
        height="93px"
        size="large"
        variation="primary"
        children="View Current Loans"
        {...getOverrideProps(overrides, "View.Button[0]")}
      ></Button>
      <Button
        position="absolute"
        display="flex"
        top="calc(50% - 46.5px - 52.5px)"
        left="calc(50% - 231px - -1px)"
        width="462px"
        height="93px"
        size="large"
        variation="primary"
        children="Requirements"
        {...getOverrideProps(overrides, "View.Button[1]")}
      ></Button>
      <Button
        position="absolute"
        backgroundColor="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
        display="flex"
        top="calc(50% - 46.5px - -72.5px)"
        left="calc(50% - 231px - 2px)"
        width="462px"
        height="93px"
        size="large"
        variation="primary"
        children="APPLY FOR LOAN"
        {...getOverrideProps(overrides, "View.Button[2]")}
      ></Button>
      <Button
        position="absolute"
        display="flex"
        top="calc(50% - 46.5px - -197.5px)"
        left="calc(50% - 84px - -1px)"
        width="168px"
        height="93px"
        size="large"
        variation="link"
        children="Back to My Services"
        {...getOverrideProps(overrides, "View.Button[3]")}
      ></Button>
      <Heading
        position="absolute"
        display="flex"
        top="calc(50% - 36px - 302px)"
        left="calc(50% - 221.5px - 0.5px)"
        level="1"
        children="Personal Loan"
        {...getOverrideProps(overrides, "View.Heading[0]")}
      ></Heading>
      <TextField
        position="absolute"
        display="flex"
        top="calc(50% - 32px - -308px)"
        left="calc(50% - 150px - -31px)"
        height="64px"
        label="Label"
        size="default"
        variation="default"
        {...getOverrideProps(overrides, "View.TextField[0]")}
      ></TextField>
    </View>
  );
}
