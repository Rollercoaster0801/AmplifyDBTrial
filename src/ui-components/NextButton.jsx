/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function NextButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="0"
      direction="row"
      width="101px"
      height="32px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="101px"
        height="32px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="4px"
        padding="8px 12px 8px 12px"
        backgroundColor="rgba(4.000000236555934,125.00000014901161,149.00000631809235,1)"
        {...getOverrideProps(overrides, "Flex.Button[0]")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="18px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.41000000000000003px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="Next"
          {...getOverrideProps(overrides, "Flex.Button[0].Text[0]")}
        ></Text>
      </Button>
    </Flex>
  );
}
