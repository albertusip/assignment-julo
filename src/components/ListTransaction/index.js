import React, { useContext } from 'react';
import { wrapperListTransaction, cardTransaction } from './styles';
import { Card, Col, Row, Wrapper, textCenter, mb3 } from '../../styles';
import { formatMoney, formatDate, formatTime } from '../../helper/index';
import ListContext from '../../contexts/WalletData';

const ListTransaction = () => {
    const { walletData } = useContext(ListContext);
 
    return (
        <>
            <Wrapper className={wrapperListTransaction}>
                <Row>
                    {
                        walletData.deposits.map((item, index) => (
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
                        walletData.withdrawal.map((item, index) => (
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
                </Row>
            </Wrapper>
        </>
    );
};

export default ListTransaction;