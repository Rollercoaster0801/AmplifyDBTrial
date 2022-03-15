import { NavLink } from 'react-router-dom';
import React from 'react';
import { BackButton, NextButton } from './ui-components';
import { Flex, TextField } from '@aws-amplify/ui-react';

export default class LoanForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
        }
      }
        onFullNameChange = (e) => {
            const fullName = e.target.value;
            this.setState(() => ({ fullName }));
        };
        onEmailAddressChange = (e) => {
            const emailAddress = e.target.value;
            if (!emailAddress || emailAddress.match(/^[a-zA-Z0-9]*(@)?([a-zA-Z0-9]*)(\.[a-zA-Z0-9]*)?$/)) {
              this.setState(() => ({ emailAddress }));
            }
        };
        onContactNumberChange = (e) => {
            const contactNumber = e.target.value;
    
            if (!contactNumber || contactNumber.match(/^\d{0,11}$/)) {
                this.setState(() => ({ contactNumber }))
            } 
        };
        onLocationChange = (e) =>{
          const location = e.target.value;
          this.setState(()=>({location}))
        }
        handleChange = (date)=> {
          const registeredDate = date.valueOf()
          this.setState(()=>({registeredDate}))
        }
        onSubmit = (e) => {
          e.preventDefault();
          const valid = validation(this.state)
          if (!valid.valid) {
            alert(valid.validationMessage)
          } else {
            this.setState(()=>({error: ''}))
            this.props.onSubmit({
              fullName: this.state.fullName,
              emailAddress: this.state.emailAddress,
              contactNumber: this.state.contactNumber,
              location: this.state.location,
              registeredDate: this.state.registeredDate
            })
            if(!window.location.pathname.substring(1,4)) {
              this.setState({
                fullName: '',
                emailAddress: '',
                contactNumber: '',
                location: '',
                registeredDate: ''
              })
            }
          }
        }
    render() {
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
        </Flex>
      </div>
    );
    }
  }