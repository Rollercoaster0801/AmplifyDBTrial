import {NavLink } from 'react-router-dom';
import bg from './ui-components/bg.jfif';
import { RectangleBackground, PersonalLoansButton, CarLoansButton, HousingLoansButton, BusinessLoansButton} from './ui-components';
import SignOutButton from './SignOutButton';
import { Flex } from '@aws-amplify/ui-react';

function MyServicesPage() {
    return (
        <div >
        
        <RectangleBackground
            position= "absolute"
            width= "459px"
            height= "445px"
            left= "calc(50% - 459px/2 - 0.5px)"
            top= "calc(50% - 445px/2 + 0.5px)"
            
            background= "rgba(255, 255, 255, 0.8)"
            box-shadow= "0px 4px 4px rgba(0, 0, 0, 0.25)"
            border-radius= "10px"
        />
        <NavLink to="/personal">
            <PersonalLoansButton
                display= "flex"
                flex-direction= "row"
                align-items= "flex-start"
                padding= "0px"

                position= "absolute"
                width= "212px"
                height= "48px"
                left= "calc(50% - 212px/2 - 1px)"
                top="calc(50% - 48px/2 - 106px)"
            />
        </NavLink>
        <NavLink to="/car">
            <CarLoansButton
                display="flex"
                flex-direction="row"
                align-items="flex-start"
                padding="0px"
                position="absolute"
                width="213px"
                height= "48px"
                left= "calc(50% - 213px/2 - 0.5px)"
                top= "calc(50% - 48px/2 - 34px)"
            />
        </NavLink>   
        <NavLink to="/housing">
            <HousingLoansButton
            display="flex"
                flex-direction="row"
                align-items="flex-start"
                padding="0px"
                position="absolute"
                width="213px"
                height= "48px"
                left= "calc(50% - 213px/2 - 0.5px)"
                top= "calc(50% - 48px/2 + 38px)"
            />
        </NavLink>
        <NavLink to="/business">
            <BusinessLoansButton
                display="flex"
                flex-direction="row"
                align-items="flex-start"
                padding="0px"
                position="absolute"
                width="213px"
                height= "48px"
                left= "calc(50% - 213px/2 - 0.5px)"
                top= "calc(50% - 48px/2 + 110px)"
            />
        </NavLink>
        <Flex 
            position="absolute"
            left= "calc(50% - 100px/2)"
            top= "calc(90%)">  
            <SignOutButton/>
        </Flex>
        </div>
    );
  }
  export default MyServicesPage;