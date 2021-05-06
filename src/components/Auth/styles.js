import { css } from '@emotion/css';
import { colorBlack } from '../../color'
import { colsMin } from '../../styles'

export const authTitleCard = css`
	color: ${colorBlack};
    font-weight: 600;
    font-size: 2rem;
`;

export const wrapperAuth = css`
    width: 100%;
    transition: all 0.3s;
	${colsMin('small')} {
        width: 60%!important;
        transition: all 0.3s;
	};
`;