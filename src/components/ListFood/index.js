import React, { useContext } from 'react';
import { wrapperListFood } from './styles';
import { Button, Card, Col, Row, Wrapper, textCenter, mb3 } from '../../styles';
import ListContext from '../../contexts/WalletData';
import Swal from 'sweetalert2';
import { reduceVirtualMoney } from '../../api/index'

const ListFood = () => {
    const { walletData, setWalletData } = useContext(ListContext);
    const data = [{
        name: 'Drink',
        price: 0
    }, {
        name: 'Snack',
        price: 5000
    }, {
        name: 'Meal',
        price: 15000
    }];

    const purchase = async (value) => {
        if (walletData.wallet.balance >= value) {
            Swal.fire({
                icon: 'warning',
                title: 'Are you sure?',
                text: 'Check again the item you want to buy.',
                showLoaderOnConfirm: true,
                preConfirm: () => {
                    const param = {
                        amount: value,
                        referenceId: `${Math.floor(Math.random() * 100) + 1}-${Math.floor(Math.random() * 100) + 1}-${Math.floor(Math.random() * 100) + 1}-${Math.floor(Math.random() * 100) + 1}`
                    };

                    return reduceVirtualMoney(param)
                        .then(response => {
                            if (response.status !== 'success') {
                                Swal.showValidationMessage(
                                    'Request failed: please contact Admin'
                                )
                            }
                            else if (response.status === 'success') {
                                const tempArray = walletData.withdrawal.slice();
                                tempArray.push(response.data.withdrawal);
                                const newObj = { ...walletData, withdrawal: tempArray };
                                setWalletData(newObj);

                                const tempWithdrawal = JSON.stringify(tempArray);
                                localStorage.setItem('withdrawal', tempWithdrawal);
                            }
                        })
                }
            }).then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Enjoy your food'
                })
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Fail',
                text: 'Balance must be equal to or more than the purchase price'
            })
        }
    }

    
    return (
        <>
            <Wrapper className={wrapperListFood}>
                <Row>
                    {
                        data.map((item, index) => (
                            <Col key={index} sm="12" md="6" className={`${mb3}`}>
                                <Card className={`${textCenter}`}>
                                    <div className={`${mb3}`}>{item.name}</div>
                                    <div className={`${mb3}`}>Rp {item.price}</div>
                                    <Button onClick={() => purchase(item.price)}>Purchase</Button>
                                </Card>
                            </Col>
                        ))
                        
                    }
                </Row>
            </Wrapper>
        </>
    );
};

export default ListFood;