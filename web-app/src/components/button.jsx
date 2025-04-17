import React from 'react';
import styled from 'styled-components';

const CustomButton = ({
                          children, color = 'primary', onClick = () => {
    }, type = "button"
                      }) => {


    return <RootElement>
        <button onClick={onClick} type={type} className={color}>{children}</button>
    </RootElement>

}

const RootElement = styled.div`

    button {
        border: none;
        border-radius: 4px;
        padding: 6px 12px;
        font-size: 14px;
        cursor: pointer;

        &.primary {
            color: white;
            background-color: #090;
            border: 2px solid #090;
            box-shadow: inset 0 0 0 1px white;

            &:hover {
                background-color: #0A0;
                border: 2px solid #0A0;
            }
        }

        &.secondary {
            color: #333;
            background-color: #ccc;
            border: 2px solid #ccc;
            box-shadow: inset 0 0 0 1px #999;

            &:hover {
                background-color: #ddd;
                border: 2px solid #ddd;
            }
        }

        &.tertiary {
            color: black;
            background-color: transparent;
            border: 1px solid lightgrey;
            padding: 8px;

            &:hover {
                background-color: #eee;
            }
        }
    }



`;

export default CustomButton;