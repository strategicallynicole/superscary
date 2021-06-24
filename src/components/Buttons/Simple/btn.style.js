/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 20:33:52
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
import React from 'react';
import styled, {css} from 'styled-components';
import '../../../styles/globals.scss';
const ButtonStyle = styled.button`

@include button;
    transition: 450ms all;
    position: relative;
    z-index: 999;
    &:hover,
    &:focus {
        outline: none;

    }
    .icon-left{
        margin-right: 8px;
    }
    .icon-right{
        margin-left: 8px;
    }

    ${props => props.primary && css`


        &:hover{

        }
    `}
    ${props => props.secondary && css`


        &:hover{

        }
    `}
`
ButtonStyle.displayName = 'ButtonStyle';

export default ButtonStyle;
