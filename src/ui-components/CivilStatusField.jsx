/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function CivilStatusField(props) {
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
        display="flex"
        gap="4px"
        direction="column"
        width="300px"
        height="64px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Flex.TextField[0]")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48.000000938773155,64.00000378489494,80.00000283122063,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="300px"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          children="Civil Status"
          {...getOverrideProps(overrides, "Flex.TextField[0].Text[0]")}
        ></Text>
        <Flex
          gap="0"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Flex.TextField[0].Flex[0]")}
        >
          <Flex
            gap="10px"
            direction="column"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            border="1px SOLID rgba(174.00000482797623,179.000004529953,183.00000429153442,1)"
            borderRadius="4px"
            padding="7px 11px 7px 11px"
            {...getOverrideProps(
              overrides,
              "Flex.TextField[0].Flex[0].Flex[0]"
            )}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(128.0000075697899,128.0000075697899,128.0000075697899,1)"
              lineHeight="20px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="276px"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              children="Enter your civi status"
              {...getOverrideProps(
                overrides,
                "Flex.TextField[0].Flex[0].Flex[0].Text[0]"
              )}
            ></Text>
          </Flex>
        </Flex>
      </TextField>
    </Flex>
  );
}
