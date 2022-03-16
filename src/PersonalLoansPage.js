import { Button, Flex } from '@aws-amplify/ui-react';
import { NavLink } from 'react-router-dom';
import {RectangleBackground, PersonalLoansText} from './ui-components'

function PersonalLoansPage() {    
    return (
      
      <div>

      <RectangleBackground
        position= "absolute"
        width= "459px"
        height= "445px"
        left= "calc(50% - 459px/2)"
        top= "calc(50% - 445px/2)"
        
        background= "rgba(255, 255, 255, 0.8)"
        box-shadow= "0px 4px 4px rgba(0, 0, 0, 0.25)"
        border-radius= "10px"
      />

      <Flex 
        direction="column"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
        gap="1rem"
        position="absolute"
        left= "calc(50% - 120px)"
        top= "calc(50% - 150px)"
      >
        <PersonalLoansText
          width= "177px"
          height= "34px"
          fontFamily= "Inter"
          fontStyle= "normal"
          fontWeight= "bold"
          fontSize="14px"
          line-height= "18px"

          display= "flex"
          align-items= "center"
          text-align= "center"
          letterSpacing= "0.04em"

          color="#000000"
        />

        <NavLink to="/currentpersonal" style={{ textDecoration: 'none' }}>
        <Button
          variation="primary"
          display= "flex"
          flex-direction= "row"
          justify-content= "center"
          align-items= "flex-start"
          padding= "0px"
          width= "229px"
          height= "48px"
          border-radius= "4px"
          >Current Loans</Button>
        </NavLink>

        <Button
          variation="primary"
          display= "flex"
          flex-direction= "row"
          justify-content= "center"
          align-items= "flex-start"
          padding= "0px"
          width= "229px"
          height= "48px"
          border-radius= "4px"
          >Requirements</Button>

        <NavLink to="/applynow" style={{ textDecoration: 'none' }}>
            <Button
            variation="primary"
            display= "flex"
            flex-direction= "row"
            justify-content= "center"
            align-items= "flex-start"
            padding= "0px"
            width= "229px"
            height= "48px"
            border-radius= "4px"
            >APPLY FOR LOAN</Button>
        </NavLink>
              
        <NavLink to="/" style={{ textDecoration: 'none' }}>
        <Button
          variation='link'
          display= "flex"
          flex-direction= "row"
          justify-content= "center"
          align-items= "flex-start"
          padding= "0px"

          width= "169px"
          height= "34px"
          >Back to My Services</Button>
        </NavLink>

    </Flex>
    </div>

    );
  }
export default PersonalLoansPage;