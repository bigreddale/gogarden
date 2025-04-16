import React from 'react';
import styled from 'styled-components';

const CustomButton = ({ children, color = 'primary', onClick = () => {}, type = "button" }) => {


        return <RootElement>
            <button  onClick={onClick} type={type} className={color}>{children}</button>
        </RootElement>

}

const RootElement = styled.div`

    button {
        border: none;
        border-radius: 4px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;

        &.primary {
            color: white;
            background-color: green;
            border:2px solid green;
            box-shadow:inset 0 0 0 2px white;
        }
        &.secondary {
            color: black;
            background-color: lightgrey;
            border:2px solid lightgrey;
            box-shadow:inset 0 0 0 2px darkgrey;
        }
        &.tertiary {
            color: black;
            background-color: transparent;
            border: 1px solid lightgrey;
            padding: 8px;
        }
    }
    
    

`;

export default CustomButton;