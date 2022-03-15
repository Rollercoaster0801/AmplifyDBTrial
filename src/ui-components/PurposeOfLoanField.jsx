/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, TextField } from "@aws-amplify/ui-react";
export default function PurposeOfLoanField(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <TextField
        label="Purpose of Loan"
        display="flex"
        shrink="0"
        size="default"
        variation="default"
        {...getOverrideProps(overrides, "Flex.TextField[0]")}
      ></TextField>
    </Flex>
  );
}
