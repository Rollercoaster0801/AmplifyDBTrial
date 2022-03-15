/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function BackButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="0"
      direction="row"
      width="101px"
      height="34px"
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
        height="34px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(174.00000482797623,179.000004529953,183.00000429153442,1)"
        borderRadius="4px"
        padding="7px 11px 7px 11px"
        {...getOverrideProps(overrides, "Flex.Button[0]")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="700"
          color="rgba(13.000000175088644,26.000000350177288,38.0000015348196,1)"
          lineHeight="18px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.41000000000000003px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          children="Back"
          {...getOverrideProps(overrides, "Flex.Button[0].Text[0]")}
        ></Text>
      </Button>
    </Flex>
  );
}
