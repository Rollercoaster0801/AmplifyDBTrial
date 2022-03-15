/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function CarLoansButton(props) {
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
        display="flex"
        width="213px"
        height="48px"
        shrink="0"
        size="large"
        variation="primary"
        children="Car Loans"
        {...getOverrideProps(overrides, "Flex.Button[0]")}
      ></Button>
    </Flex>
  );
}
