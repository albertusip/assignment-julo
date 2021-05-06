import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { colorPrimary } from '../../color'

const spin = keyframes`
	0% {
		transform: rotate(0);
		animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}
	50% {
		transform: rotate(900deg);
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	}
	100% {
		transform: rotate(1800deg);
	}
`

export const RefreshStyle = styled.span`
`;

export const iconRefresh = (color, isRefresh) => css`
	color: ${color ? color : colorPrimary};
	animation: ${ isRefresh ? spin : '' } 1s ease infinite;
`;