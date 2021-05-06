import { css } from '@emotion/css';
import { colorBorder, colorWhite } from '../../color';

export const wrapperListFood = css`
	background-color: ${colorWhite};
    border: 1px solid ${colorBorder};
    border-radius: 5px;
	max-height: calc(100vh - 270px);
	overflow-y: auto;
    padding: 10px;
`;
