import { NavLink } from 'react-router-dom';
import React from 'react';
import { BackButton } from './ui-components';
import { API, graphqlOperation } from 'aws-amplify';

import { listLoanInformations } from './graphql/queries';
import { useEffect, useState } from 'react';
import { 
    Flex, 
    Table,
    TableCell,
    TableBody,
    TableHead,
    TableRow, } from '@aws-amplify/ui-react';
import CurrentLoanItem from './CurrentLoanItem';
import SignOutButton from './SignOutButton';

const CurrentLoansPage = ({caption,
    highlightOnHover=true,
    size="small",
    variation="striped",}) => {
    
    const [loans,setLoans] = useState([])

    useEffect(()=>{
        fetchLoans()
    }, [])
    
    const fetchLoans = async () => {
        try {
        const loanInfo = await API.graphql(graphqlOperation(listLoanInformations))
        const loanList = loanInfo.data.listLoanInformations.items;
        console.log(loanList)
        setLoans(loanList)
        console.log(loans)
        } catch (error) {
        console.log("error on fetching loans", error);
        }
    }
      
    
    return (
        <div>
            <Flex 
                direction="column"
                justifyContent="center"
                alignItems="center"
                alignContent="flex-start"
                wrap="nowrap"
                gap="1rem"
                position="absolute"
                top="150px"
                left="calc(30%)"
            >
            Current Loans
            <Table
                caption={caption}
                highlightOnHover={highlightOnHover}
                size={size}
                variation={variation}
                width="600px"
            >
                <TableHead>
                <TableRow>
                    <TableCell as="th">Purpose of Loan</TableCell>
                    <TableCell as="th">Amount of Loan</TableCell>
                    <TableCell as="th">Terms (Months)</TableCell>
                    <TableCell as="th"></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {loans.map((loan,idx)=>{
                    return <CurrentLoanItem key={loan.id} id={loan.id} idx={idx} purpose={loan.PurposeOfLoan} amount={loan.LoanAmount} terms={loan.Terms} _deleted={loan._deleted}/>
                })}
                </TableBody>
            </Table>
            <Flex direction="row">
            <NavLink to="/personal" style={{ textDecoration: 'none' }}>
                <BackButton/>
            </NavLink>
            </Flex>
            <Flex padding="50px">
            <SignOutButton/>
            </Flex>
            </Flex>
        </div>
    )
}

export default CurrentLoansPage;