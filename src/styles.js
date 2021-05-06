import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { colorBackground, colorBoxShadow, colorBorder, colorDanger, colorDisabled, colorGrey, colorBlack, colorPrimary, colorTextGrey, colorWhite, colorWarning } from './color';

const breakPoint = {
    xsmall: 575,
    small: 576,
    medium: 768,
    large: 992,
    extraLarge: 1200
};

// Breakpoint
export const colsMin = keyBreakPoint => {
    const breakPointArray = Object.keys(breakPoint).map(key => [key, breakPoint[key]]);

    const [result] = breakPointArray.reduce((current, [name, size]) =>
        keyBreakPoint === name ? [...current, `@media (min-width: ${size}px)`] : current
    , []);

    return result;
};

export const colsMax = keyBreakPoint => {
    const breakPointArray = Object.keys(breakPoint).map(key => [key, breakPoint[key]]);

    const [result] = breakPointArray.reduce((current, [name, size]) => 
        keyBreakPoint === name ? [...current, `@media (max-width: ${size}px)`] : current
    , []);

    return result;
};

// CSS
export const dnone = css`
    display: none!important;
`;

export const alert = css`
    font-size: 12px;
    color: ${colorWarning}
`;

export const fontWeight600 = css`
    font-weight: 600;
`;

export const btnIconText = css`
    align-items: center;
    display: flex;
    height: 30px;
    justify-content: center;
`;

export const cursorPointer = css`
    cursor: pointer!important;
`;

export const overflowHidden = css`
    overflow: hidden!important;
`;

export const positionRelative = css`
    position: relative;
`;

export const textCenter = css`
    text-align: center;
`;

export const dflex = css`
    display: flex;
`;

export const justifyCenter = css`
    justify-content: center;
`;

export const justifyBetween = css`
    justify-content: space-between;
`;

export const borderRadiusLeft = css`
    border-radius: 4px 0px 0px 4px!important;
`;

export const borderRadiusRight = css`
    border-radius: 0px 4px 4px 0px!important;
`;

export const borderRadiusTopNone = css`
    border-top-right-radius: 0px!important;
    border-top-left-radius: 0px!important;
`;

export const borderRadiusBottomNone = css`
    border-bottom-right-radius: 0px!important;
    border-bottom-left-radius: 0px!important;
`;

export const borderTopNone = css`
    border-top: none;
`;

export const borderBottomNone = css`
    border-bottom: none;
`;

export const alignCenter = css`
    align-items: center;
`;

export const w100 = css`
    width: 100%!important;
`;

export const w60 = css`
    width: 60%!important;
`;

export const w15 = css`
    width: 15%!important;
`;

export const max100vh = css`
    height: 100%;
    max-height: 100vh;
`;

export const fluid = css`

    ${colsMax('small')} {
        padding: 0px!important;
	};
`;

export const my3 = css`
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
`;

export const mb1 = css`
    margin-bottom: 0.125rem;
`;

export const mb3 = css`
    margin-bottom: 0.5rem;
`;

export const mb4 = css`
    margin-bottom: 1rem;
`;

export const mb5 = css`
    margin-bottom: 1.5rem;
`;

export const py3 = css`
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
`;

export const pr0 = css`
    padding-right: 0px!important;
`;

export const pl0 = css`
    padding-left: 0px!important;
`;

export const pl4 = css`
    padding-left: 1rem!important;
`;

// CSS SPESIFIC CLASS

export const cardHeader = css`
    .greeting {
        color: ${colorPrimary};
        margin-bottom: 10px;
        width: 100%;
    }
    .info {
        display: inline-block;
        width: 100%;
        .title {
            color: ${colorTextGrey};
            font-size: 12px;
        }
        .value {
            color: ${colorBlack};
            font-size: 14px;
            .currency {
                font-size: 19px;
                .total {
                    font-size: 24px;
                    font-weight: 600;
                    margin: 0px 5px;
                }
            }
        }
    }

    .wrapper-button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
`;

export const cardHeaderAction = css`
    color: ${colorPrimary};
    cursor: pointer;
    font-size: 14px;
    padding: 10px 20px!important;
`;

// STYLED
export const LabelError = styled.div`
    color: ${colorDanger};
    font-weight: 600;
    font-size: 12px!important;
`;

export const LabelWarning = styled.div`
    color: ${colorWarning};
    font-weight: 600;
    font-size: 12px!important;
`;

export const Input = styled.input`
    border: 1px solid ${colorBorder};
    border-radius: 5px;
    font-size: 13px!important;
    padding: 10px 8px;
    width: 100%;
    outline: 0px;
`;

export const Chips = styled.div`
    display: inline-block;
    background-color: ${colorGrey};
    border-radius: 25px;
    color: ${colorWhite};
    font-size: 12px;
    margin: 5px 10px 5px 0px;
    padding: 2px 10px;
`;

export const Main = styled.div`
    background-color: ${colorBackground};
    height: 100vh;
    overflow-x: auto;
    overflow-y: hidden;
`;

export const Header = styled.div`
    align-items: center;
    background-color: ${colorWhite};
    display: flex;
    height: 50px;
    margin: 0px -15px;
    padding: 15px 20px 10px;
    transition: all 0.3s;

    .header-title {
        color: ${colorPrimary};
        font-weight: 700;
        .path {
            font-weight: normal;
        }
    }

    ${colsMin('small')} {
        background-color: transparent;
        border-radius: 5px;
        padding: 15px 0px 10px;
	};
`;

export const ButtonOutline = styled.button`
    color: ${colorPrimary};
    background-color: transparent;
    border: 1px solid ${colorPrimary};
    border-radius: 4px;
    font-weight: 700;
    height: auto;
    padding: 10px 15px;
    text-align: center;
    
    ${props => props.fluid && ({
        width: '100%'
    })}

    ${props => props.xsmall && ({
        padding: '5px 15px',
        fontSize: '12px'
    })}

    &.danger {
        color: ${colorDanger};
        border: 1px solid ${colorDanger};
        &:hover {
            color: ${colorWhite};
            background-color: ${colorDanger};
            border: 1px solid ${colorDanger};
            box-shadow: 0 1px 10px ${colorBoxShadow};
        }
    }

    &:hover {
        cursor: pointer;
        color: ${colorWhite};
        background-color: ${colorPrimary};
        border: 1px solid ${colorPrimary};
        box-shadow: 0 1px 10px ${colorBoxShadow};
    }
    &:focus {
        box-shadow: none;
        outline:0;
    }
`;

export const Button = styled.button`
    cursor: pointer;
    color: ${colorWhite};
    background-color: ${colorPrimary};
    border: 1px solid ${colorPrimary};
    border-radius: 4px;
    font-weight: 700;
    height: auto;
    padding: 10px 15px;
    text-align: center;

    ${props => props.fluid && ({
        width: '100%'
    })}

    ${props => props.xsmall && ({
        padding: '5px 15px',
        fontSize: '12px'
    })}

    ${props => props.maxWidth && ({
        maxWidth: `${props.maxWidth}px`
    })}

    ${props => props.minWidth && ({
        minWidth: `${props.minWidth}px`
    })}

    &:disabled {
        background-color: ${colorDisabled};
        border: 1px solid ${colorDisabled};
        &:hover {
            color: ${colorWhite};
            background-color: ${colorDisabled};
            border: 1px solid ${colorDisabled};
            box-shadow: 0 1px 10px ${colorBoxShadow};
        }
    }

    &:hover {
        color: ${colorWhite};
        background-color: ${colorPrimary};
        border: 1px solid ${colorPrimary};
        box-shadow: 0 1px 10px ${colorBoxShadow};
    }
    &:focus {
        box-shadow: none;
        outline:0;
    }
`;

export const ButtonText = styled.button`
    cursor: pointer;
    color: ${colorPrimary};
    background-color: transparent;
    border: none;
    font-weight: 700;
    height: auto;
    padding: 0px;
    text-align: center;

    &:focus {
        box-shadow: none;
        outline:0;
    }
`;

export const Card = styled.div`
    background-color: ${colorWhite};
    border-bottom: 1px solid ${colorBorder};
    border-radius: 0px;
    padding: 15px 20px 10px;

    ${props => props.fluid && ({
        width: '100%'
    })}

    ${props => props.flexWrap && ({
        display: 'flex',
        flexWrap: 'wrap'
    })}

    ${props => props.height && ({
        height: `${props.height}%`
    })}

    ${props => props.minHeight && ({
        minHeight: `${props.minHeight}%`
    })}

    ${colsMin('small')} {
        border: 1px solid ${colorBorder};
        border-radius: 5px;
	};
`;

export const Footer = styled.div`
    align-items: center;
	background-color: ${colorWhite};
    bottom: 0px;
    border-top: 1px solid ${colorBorder};
    border-radius: 0px;
    display: flex;
    height: 50px;
    margin: 0px -15px;
    position: absolute;
    width: 100%;
    
    .footer-menu {
        align-items: center;
        cursor: pointer;
        color: ${colorTextGrey};
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        font-size: 12px;
        text-align: center;
        text-decoration: none;

        &:hover {
            color: ${colorPrimary};
        }
        &.selected {
            color: ${colorPrimary};
        }
    }

    ${colsMin('small')} {
        border: 1px solid ${colorBorder};
        border-radius: 5px;
	};
`;

export const Wrapper = styled.div`
	padding-right: 15px;
	padding-left: 15px;
    height: ${props => props.fillHeight && '100vh'};
	margin-right: auto;
	margin-left: auto;
    min-width: ${props => props.minWidth && `${props.minWidth}px`};
    position: relative;
    transition: all 0.3s;
  	width: 100%;

    ${props => props.flexWrap && ({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: props.alignHorizontal
    })}

	${colsMin('small')} {
		max-width: 540px;
	};
	${colsMin('medium')} {
		max-width: 720px;
	};
`;

export const Row = styled.div`
	display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;

export const Col = styled.div`
    min-height: 1px;
    position: relative;
    padding-right: 15px;
    padding-left: 15px;
    transition: all 0.3s;
    width: 100%;

    ${props => props.height && ({
        height: `${props.height}%`
    })}

    ${colsMax('xsmall')} {
        ${props => {
        switch (props.xs) {
            case '12':
                return {
                    flex: '0 0 100%',
                    maxWidth: '100%'
                };
            case '8':
                return {
                    flex: '0 0 66.666667%',
                    maxWidth: '66.666667%'
                };
            case '7':
                return {
                    flex: '0 0 58.333333%',
                    maxWidth: '58.333333%'
                };
            case '6':
                return {
                    flex: '0 0 50%',
                    maxWidth: '50%'
                };
            case '4':
                return {
                    flex: '0 0 33.33333%',
                    maxWidth: '33.33333%'
                };
            case '3':
                return {
                    flex: '0 0 25%',
                    maxWidth: '25%'
                };
            default:
                break;
        }
    }}
	};

    ${colsMin('small')} {
        ${props => {
            switch (props.sm) {
                case '12':
                    return {
                        flex: '0 0 100%',
                        maxWidth: '100%'
                    };
                case '8':
                    return {
                        flex: '0 0 66.666667%',
                        maxWidth: '66.666667%'
                    };
                case '6':
                    return {
                        flex: '0 0 50%',
                        maxWidth: '50%'
                    };
                case '4':
                    return {
                        flex: '0 0 33.33333%',
                        maxWidth: '33.33333%'
                    };
                case '3':
                    return {
                        flex: '0 0 25%',
                        maxWidth: '25%'
                    };
                default:
                    break;
            }
        }}
	};
	${colsMin('medium')} {
		${props => {
            switch (props.md) {
                case '12':
                    return {
                        flex: '0 0 100%',
                        maxWidth: '100%'
                    };
                case '8':
                    return {
                        flex: '0 0 66.666667%',
                        maxWidth: '66.666667%'
                    };
                case '6':
                    return {
                        flex: '0 0 50%',
                        maxWidth: '50%'
                    };
                case '5':
                    return {
                        flex: '0 0 41.666667%',
                        maxWidth: '41.666667%'
                    };
                case '4':
                    return {
                        flex: '0 0 33.33333%',
                        maxWidth: '33.33333%'
                    };
                case '3':
                    return {
                        flex: '0 0 25%',
                        maxWidth: '25%'
                    };
                case '2':
                    return {
                        flex: '0 0 16.666667%',
                        maxWidth: '16.666667%'
                    };
                default:
                    break;
            }
        }}
	};
`;