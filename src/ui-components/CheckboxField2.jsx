/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CheckboxField, Flex } from "@aws-amplify/ui-react";
export default function CheckboxField2(props) {
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
      <CheckboxField
        label="I authorize the bank to continue processing my loan application even if the approved loan amount  is lower than the amount I applied for."
        gap="8px"
        display="flex"
        width="341px"
        height="58px"
        shrink="0"
        size="small"
        labelPosition="end"
        {...getOverrideProps(overrides, "Flex.CheckboxField[0]")}
      ></CheckboxField>
    </Flex>
  );
}
