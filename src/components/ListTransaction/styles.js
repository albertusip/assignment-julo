import { css } from '@emotion/css';
import { colorBorder, colorWhite, colorTextGrey, colorWarning } from '../../color';

export const wrapperListTransaction = css`
	background-color: ${colorWhite};
    border: 1px solid ${colorBorder};
    border-radius: 5px;
	max-height: calc(100vh - 270px);
	overflow-y: auto;
    padding: 10px;

    .wrapperNotFound {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: ${colorWarning};
    }
`;

export const cardTransaction = css`
	.title {
        color: ${colorTextGrey};
        font-size: 12px;
    }

    .amount {
        font-size: 24px;
        font-weight: 600;

        .currency {
            font-size: 19px;
        }
    }

    .date {
        font-size: 14px;
    }

    .time {
        font-size: 14px;
    }
`;
