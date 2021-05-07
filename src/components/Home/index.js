import React, { useState, useContext, useEffect } from 'react';
import {
    LabelWarning,
    Card,
    Col,
    fluid,
    cardHeader,
    cardHeaderAction,
    Button,
    ButtonOutline,
    Footer,
    Header,
    Row,
    Wrapper,
    cursorPointer,
    max100vh,
    mb3,
    mb4,
    justifyBetween,
    dflex,
    borderRadiusTopNone,
    borderRadiusBottomNone,
    borderBottomNone,
    w100,
    alignCenter
} from '../../styles.js';
import Swal from 'sweetalert2';
import HiddenText from '../HiddenText/index';
import ListContext from '../../contexts/WalletData';
import Loading from '../Loading/index';
import Refresh from '../Refresh/index';
import ListFood from '../ListFood/index';
import ListTransaction from '../ListTransaction/index';
import HomeIcon from 'mdi-react/HomeIcon';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import FormatListBulletedSquareIcon from 'mdi-react/FormatListBulletedSquareIcon';
import { enableWallet, disableWallet, addVirtualMoney, viewWallet } from '../../api/index';
import { colorDanger, colorPrimary, colorWhite } from '../../color';
import { formatMoney } from '../../helper/index';
import {
    Route,
    NavLink,
    Switch,
    useHistory
} from 'react-router-dom';

const App = () => {
    const history = useHistory();
    const { walletData, setWalletData } = useContext(ListContext);
    const [ loadingActionWalletButton, setLoadingActionWalletButton ] = useState(false);
    const [ refreshWallet, setRefreshWallet ] = useState(false);

    useEffect(() => {
        const tempToken = JSON.parse(localStorage.getItem('token'));
        const username = JSON.parse(localStorage.getItem('username'));
        const wallet = JSON.parse(localStorage.getItem('wallet'));
        const deposits = JSON.parse(localStorage.getItem('deposits')); console.log('de', deposits)
        const withdrawal = JSON.parse(localStorage.getItem('withdrawal'));
        setWalletData({
            ...walletData,
            token: tempToken,
            username: username,
            wallet: wallet,
            deposits: deposits,
            withdrawal: withdrawal
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const signOut = async () => {
        await resetData();
        history.replace('/auth');
    };

    const resetData = () => {
        setWalletData({
            ...walletData,
            token: null,
            username: null,
            wallet: {},
            deposits: [],
            withdrawal: []
        });
        localStorage.setItem('token', null);
        localStorage.setItem('username', null);
        localStorage.setItem('wallet', JSON.stringify({}));
        localStorage.setItem('deposits', JSON.stringify([]));
        localStorage.setItem('withdrawal', JSON.stringify([]));
    }

    const actionWallet = () => {
        if (walletData?.showBalance) {
            Swal.fire({
                title: "Top up amount",
                text: "accepts only numbers",
                input: 'text',
                confirmButtonText: 'Top Up',
                confirmButtonColor: `${colorPrimary}`,
                showCancelButton: true,
                didOpen: (value) => {
                    const input = Swal.getInput();
                    input.oninput = (val) => {
                        let tempValueInputAmount = val?.data !== null && val?.data?.replace(/[^0-9']/g, 0);
                        if (document.querySelector("input.swal2-input").value.length < 16) {
                            document.querySelector("input.swal2-input").value = tempValueInputAmount !== '' ? (parseInt(document.querySelector("input.swal2-input").value, 10) || 0) : (parseInt(tempValueInputAmount, 10) || 0);
                        } else {
                            document.querySelector("input.swal2-input").value = document.querySelector("input.swal2-input").value.substring(0,15)
                        }
                    }
                },
                inputValidator: (value) => {
                    const tempValue = parseInt(value);
                    if (!tempValue || tempValue === 0) {
                        return 'Top up amount must higher than Rp 0'
                    }
                },
                showLoaderOnConfirm: true,
                preConfirm: async (value) => {
                    const param = {
                        amount: parseInt(value),
                        referenceId: `${Math.floor(Math.random() * 100) + 1}-${Math.floor(Math.random() * 100) + 1}-${Math.floor(Math.random() * 100) + 1}-${Math.floor(Math.random() * 100) + 1}`
                    }
                    const res = await addVirtualMoney(param)
                    if (res.status === 'success') {
                            const tempArray = walletData.deposits !== null ? walletData.deposits.slice() : [];
                            tempArray.push(res.data.deposit);
                            const newObj = { ...walletData, deposits: tempArray };
                            setWalletData(newObj);

                            const tempDeposits = JSON.stringify(tempArray);
                            localStorage.setItem('deposits', tempDeposits);
                            return value;
                        }
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        confirmButtonColor: `${colorPrimary}`,
                        text: `Top up for Rp ${formatMoney(parseInt(result.value, 10), false)}`
                    })
                }
            });
        } else {
            setWalletData({
                ...walletData,
                showBalance: true
            });
        }
    }

    const activateWallet = async () => {
        setLoadingActionWalletButton(true);
        const res = walletData?.wallet?.status === 'enabled' ? await disableWallet() : await enableWallet();

        if (res.status) {
            setWalletData({
                ...walletData,
                wallet: res.data.wallet,
                showBalance: false
            });
            const tempWallet = JSON.stringify(res.data.wallet);
            localStorage.setItem('wallet', tempWallet);
            setLoadingActionWalletButton(false);
        } else {
            Swal.fire({
                title: "Error",
                text: "Please contact Admin.",
                icon: "error",
                confirmButtonColor: colorDanger
            });
            setLoadingActionWalletButton(false);
        }
    }

    const actionRefreshWallet = async () => {
        setRefreshWallet(true);
        const res = await viewWallet();
        setWalletData({
            ...walletData,
            wallet: res.data.wallet
        });
        const tempWallet = JSON.stringify(res.data.wallet);
        localStorage.setItem('wallet', tempWallet);
        setRefreshWallet(false);
    }

    return (
        <Wrapper className={max100vh} minWidth="270">
            <Header>
                <div className={`${dflex} ${justifyBetween} ${w100} header-title`}>
                    <span>Mini Wallet | {walletData.username}</span>
                    <ButtonOutline
                        xsmall
                        onClick={() => signOut()}
                    >
                        Sign Out
                    </ButtonOutline>
                </div>
            </Header>

            <Row>
                <Col sm="12" className={`${fluid} ${mb4}`}>
                    <Card className={`${justifyBetween} ${cardHeader} ${borderBottomNone} ${borderRadiusBottomNone}`}>
                        <div className="info">
                            <div className={`${mb3} title`}>
                                Balance
                        </div>
                            <div className={`${mb3} value`}>
                                {
                                    walletData?.wallet?.status === 'enabled' && walletData?.showBalance ?
                                        <span className="currency">
                                            Rp
                                            <span className="total">
                                            {formatMoney(walletData?.wallet?.balance || 0, false)}
                                            </span>
                                            <span
                                                className={cursorPointer}
                                                onClick={() => actionRefreshWallet()}
                                            >
                                                <Refresh isRefresh={refreshWallet} />
                                            </span>
                                        </span> : <HiddenText />
                                }
                            </div>
                            <div className="wrapper-button">
                                {
                                    walletData?.wallet?.status === 'enabled' ?
                                        <ButtonOutline
                                            xsmall
                                            onClick={() => actionWallet()}
                                        >
                                            {walletData?.showBalance ? 'Top Up' : 'View Balance'}
                                        </ButtonOutline> : <LabelWarning>Enable the wallet for use</LabelWarning>
                                }
                                
                                <Button
                                    xsmall
                                    maxWidth="120"
                                    minWidth="120"
                                    onClick={() => activateWallet()}
                                >
                                    {   
                                        loadingActionWalletButton ? <Loading color={colorWhite} /> :
                                        <span>{walletData?.wallet?.status === 'enabled' ? 'Disable Wallet' : 'Enable Wallet'}</span>
                                    }
                                </Button>
                            </div>
                        </div>
                    </Card>
                    <Card
                        className={`${dflex} ${justifyBetween} ${borderRadiusTopNone} ${cardHeaderAction}`}
                        onClick={() => history.location.pathname === '/' ? history.push('/list-transaction') : history.push('/')}
                    >
                        <span>{history.location.pathname === '/' ? 'List Transaction' : 'Home'}</span>
                        <ChevronRightIcon size={18} />
                    </Card>
                </Col>
            </Row>

            <Switch>
                <Route exact path="/">
                    <ListFood></ListFood>
                </Route>
            </Switch>
            <Switch>
                <Route exact path="/list-transaction">
                    <ListTransaction></ListTransaction>
                </Route>
            </Switch>

            <Footer>
                <Wrapper flexWrap className={alignCenter} alignHorizontal="space-around">
                    <NavLink exact to="/" activeClassName="selected" className="footer-menu">
                        <HomeIcon size={18} />
                        Home
                    </NavLink>
                    <NavLink exact to="/list-transaction" activeClassName="selected" className="footer-menu">
                        <FormatListBulletedSquareIcon size={18} />
                        List Transaction
                    </NavLink>
                </Wrapper>
            </Footer>
        </Wrapper>
    );
};

export default App;
