/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function BackToMyServicesButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="0"
      direction="row"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Button
        gap="0"
        padding="8px 12px 8px 12px"
        display="flex"
        width="108px"
        height="34px"
        shrink="0"
        size="small"
        variation="link"
        children="Back to My Services"
        {...getOverrideProps(overrides, "Flex.Button[0]")}
      ></Button>
    </Flex>
  );
}
