import React, { useContext } from 'react';
import { wrapperListTransaction, cardTransaction } from './styles';
import { Card, Col, Row, Wrapper, textCenter, mb3, h100 } from '../../styles';
import { formatMoney, formatDate, formatTime } from '../../helper/index';
import ListContext from '../../contexts/WalletData';
import ThoughtBubbleOutlineIcon from 'mdi-react/ThoughtBubbleOutlineIcon';

const ListTransaction = () => {
    const { walletData } = useContext(ListContext);
 
    return (
        <>
            <Wrapper className={wrapperListTransaction} fillHeight>
                <Row className={h100}>
                    {
                        walletData.deposits !== null && walletData.deposits.map((item, index) => (
                            <Col key={index} sm="12" md="6" className={`${mb3}`}>
                                <Card className={`${textCenter} ${cardTransaction}`}>
                                    <div className={`${mb3} title`}>Deposit</div>
                                    <div className={`${mb3} amount`}><span className="currency">Rp</span> {formatMoney(item.amount, false)}</div>
                                    <div className={`${mb3} date`}>{formatDate(item.deposited_at)}</div>
                                    <div className={`${mb3} time`}>{formatTime(item.deposited_at)} WIB</div>
                                </Card>
                            </Col>
                        ))
                    }
                    {
                        walletData.withdrawal !== null && walletData.withdrawal.map((item, index) => (
                            <Col key={index} sm="12" md="6" className={`${mb3}`}>
                                <Card className={`${textCenter} ${cardTransaction}`}>
                                    <div className={`${mb3} title`}>Withdrawal</div>
                                    <div className={`${mb3} amount`}><span className="currency">Rp</span> {formatMoney(item.amount, false)}</div>
                                    <div className={`${mb3} date`}>{formatDate(item.withdrawn_at)}</div>
                                    <div className={`${mb3} time`}>{formatTime(item.withdrawn_at)} WIB</div>
                                </Card>
                            </Col>
                        ))
                    }
                    {
                        walletData?.deposits?.length === 0 && walletData?.withdrawal?.length === 0 &&
                        <Wrapper className={`wrapperNotFound`}>
                            <div className={textCenter}>
                                <ThoughtBubbleOutlineIcon size={100} />
                                <div>You don't have any Transaction.</div>
                            </div>
                        </Wrapper>
                    }
                </Row>
            </Wrapper>
            
        </>
    );
};

export default ListTransaction;