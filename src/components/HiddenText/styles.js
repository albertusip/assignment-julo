import styled from '@emotion/styled';
import { colorPrimary } from '../../color';

export const Bullet1 = styled.span`
    &:before {
        content: '';
        width: 7px;
        height: 7px;
        border-radius: 50%;
        margin-right: 5px;
        display: inline-block;
        background-color: ${({ color }) => color ? color : colorPrimary};
        vertical-align: middle;
        opacity: 0.9;
    }
    &:after {
        content: '';
        width: 7px;
        height: 7px;
        border-radius: 50%;
        margin-right: 5px;
        display: inline-block;
        background-color: ${({ color }) => color ? color : colorPrimary};
        vertical-align: middle;
        opacity: 0.7;
    }
`;

export const Bullet2 = styled.span`
    &:before {
        content: '';
        width: 7px;
        height: 7px;
        border-radius: 50%;
        margin-right: 5px;
        display: inline-block;
        background-color: ${({ color }) => color ? color : colorPrimary};
        vertical-align: middle;
        opacity: 0.5;
    }
    &:after {
        content: '';
        width: 7px;
        height: 7px;
        border-radius: 50%;
        margin-right: 5px;
        display: inline-block;
        background-color: ${({ color }) => color ? color : colorPrimary};
        vertical-align: middle;
        opacity: 0.4;
    }
`;