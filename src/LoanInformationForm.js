import { NavLink } from 'react-router-dom';
import React from 'react';
import { BackButton, NextButton } from './ui-components';
import { Flex, TextField } from '@aws-amplify/ui-react';

const LoanInformationForm = () => {
    return (
        <Flex 
          direction="column"
          justify-content="flex-start"
          alignItems="flex-start"
          alignContent="flex-start"
          wrap="wrap"
          gap="0.5rem"
          position= "absolute"
          left= "calc(50% - 301px/2 - 0.5px)"
          top="150px"
          >
          Purpose of Loan
        <TextField
          autoComplete="off"
          name="purpose"
          placeholder="Enter purpose of your loan"
          size="default"
          width="300px"
        />
        Loan Amount
        <TextField
          autoComplete="off"
          name="purpose"
          placeholder="Enter amount of your loan"
          size="default"
          width="300px"
        />
        Terms (Months)
        <TextField
          autoComplete="off"
          name="purpose"
          placeholder="Enter terms of your loan in months"
          size="default"
          width="300px"
        />
        <Flex direction="row">
        <NavLink to="/personal">
          <BackButton
          display= "flex"
          flex-direction= "row"
          align-items= "flex-start"
          padding= "25 0px"

          position= "absolute"
          width= "101x"
          height= "34px"
          left= "calc(50% - 101px/2 - 98.5px)"
          />
        </NavLink>
        <NextButton
        display= "flex"
        flex-direction= "row"
        align-items= "flex-start"
        padding= "25 0px"

        position= "absolute"
        width= "101x"
        height= "32px"
        left= "calc(50% - 101px/2 + 98.5px)"
        />
        </Flex>
        </Flex>
        )
}

export default LoanInformationForm;