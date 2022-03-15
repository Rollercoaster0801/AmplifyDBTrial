import { API, graphqlOperation } from "aws-amplify";
import React from "react";
import {updateLoanInformation} from './graphql/mutations'
import { getLoanInformation, listLoanInformations } from "./graphql/queries";
import { useEffect, useState } from 'react';
import { NextButton, BackButton } from "./ui-components";
import { NavLink } from 'react-router-dom';
import { Flex, TextField } from '@aws-amplify/ui-react';
import SignOutButton from "./SignOutButton";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const EditLoanPage = () => {
    const url = window.location.href
    const id = url.match(/edit\/([\s\S]*)$/)[1]
    const [loans,setLoans] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(()=>{
        fetchLoan()
    }, [])
    
    const fetchLoan = async () => {
        try {
        const loanInfo = await API.graphql(graphqlOperation(getLoanInformation, {id}))
        const loanList = loanInfo.data.getLoanInformation
        setLoans(loanList)
        return loanList
        } catch (error) {
        console.log("error on fetching loans", error);
        }
    }


    const editLoan = async () => {
      try {
          let loan = loans

        handleClickOpen()
          loan.PurposeOfLoan = document.getElementById("purpose").value
          loan.LoanAmount = document.getElementById("amount").value
          loan.Terms = document.getElementById("terms").value
  
          delete loan.createdAt;
          delete loan.updatedAt;
          delete loan._deleted;
          delete loan._lastChangedAt;
          const loanData = await API.graphql(graphqlOperation(updateLoanInformation, {input: loan}))
         
      } catch (error) {
          console.log("error on editing loan", error)
      }
    }

    const handleChange = e => {
      setLoans({
        ...loans,
        [e.target.name]: e.target.value,
      })
    }
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

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
          autoComplete="off"
          id="purpose"
          name="PurposeOfLoan"
          value={loans.PurposeOfLoan}
          size="default"
          width="300px"
          onChange={handleChange}
        />
        Loan Amount
        <TextField
          autoComplete="off"
          id="amount"
          name="LoanAmount"
          value={loans.LoanAmount}
          size="default"
          width="300px"
          onChange={handleChange}
          
        />
        Terms (Months)
        <TextField
          autoComplete="off"
          id="terms"
          name="Terms"
          value={loans.Terms}
          size="default"
          width="300px"
          onChange={handleChange}
          
        />
        <Flex direction="row">
        <NavLink to="/currentpersonal">
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
        onClick={()=>{editLoan()}}
        position= "absolute"
        width= "101x"
        height= "32px"
        left= "calc(50% - 101px/2 + 98.5px)"
        />
        </Flex>
        <Flex
          position= "absolute"
          left= "calc(34%)"
          top="400px"
          >
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
          {"Edit Loan"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           You have edited the selected loan.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <NavLink to="/currentpersonal">
          <Button>View Current Loans</Button>
          </NavLink>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default EditLoanPage;


