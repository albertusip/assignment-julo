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

export const LoadingStyle = styled.div`
	height: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: ${spin} 1s ease infinite;
`;

export const iconLoading = (color) => css`
	color: ${color ? color : colorPrimary};
`;