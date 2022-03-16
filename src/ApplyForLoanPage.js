import { NavLink } from 'react-router-dom';
import React from 'react';
import { BackButton, NextButton } from './ui-components';
import { Flex, TextField } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { createLoanInformation } from './graphql/mutations';
import { API, graphqlOperation, Auth } from 'aws-amplify';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { listLoanInformations } from './graphql/queries';
import SignOutButton from './SignOutButton';

const ApplyForLoanPage = () => {
  const [loans,setLoans] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    fetchLoans()
}, [])

const fetchLoans = async () => {
    try {
    const loanInfo = await API.graphql(graphqlOperation(listLoanInformations))
    const loanList = loanInfo.data.listLoanInformations.items;
    setLoans(loanList)
    } catch (error) {
    console.log("error on fetching loans", error);
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const addLoan = async () => {
      try {
      handleClickOpen()
      const PurposeOfLoan = document.getElementById("purpose").value
      const LoanAmount = document.getElementById("amount").value
      const Terms = document.getElementById("terms").value
      const username = await getUsername()
      const newLoan = {
        PurposeOfLoan,
        LoanAmount,
        Terms,
        username
      }
      const loanInfo = await API.graphql(graphqlOperation(createLoanInformation, {input: newLoan}))
      const loanList = [...loans]
      loanList.push(loanInfo.data.createLoanInformation)
      setLoans(loanList)


      } catch (error) {
      console.log("error on adding loan", error);
      }
  }

    return (
      <div>
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
          id="purpose"
          autoComplete="off"
          placeholder="Enter purpose of your loan"
          size="default"
          width="300px"
        />
        Loan Amount
        <TextField
          id="amount"
          autoComplete="off"
          placeholder="Enter amount of your loan"
          size="default"
          width="300px"
        />
        Terms (Months)
        <TextField
          id="terms"
          autoComplete="off"
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
        onClick={()=>addLoan()}
        />
        </Flex>
        <Flex
          position="absolute"
          top="400px"
          left="calc(34%)">
            <SignOutButton/>
        </Flex>
        </Flex>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Apply for Loan"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           You have submitted the loan.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
          <NavLink to="/currentpersonal">
          <Button>View Current Loans</Button>
          </NavLink>
        </DialogActions>
      </Dialog>
      </div>
    );
  }

const getUsername = () => {
    return Auth.currentAuthenticatedUser().then(res=>{
        return res.username;
      })
}
export default ApplyForLoanPage;