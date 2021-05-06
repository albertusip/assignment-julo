import React, { useContext, useState } from 'react';
import {
	LabelError,
	Card,
	ButtonOutline,
	Input,
	Wrapper,
	max100vh,
	mb3,
	mb5,
	justifyCenter,
	dflex,
	alignCenter,
	textCenter
} from '../../styles.js';
import {
	authTitleCard,
	wrapperAuth
} from './styles.js';
import { useHistory } from "react-router-dom";
import { colorPrimary, colorWhite } from '../../color'
import Loading from '../Loading/index';
import ListContext from '../../contexts/WalletData';
import { initializeAccount } from '../../api/index';

const Auth = () => {
	const history = useHistory();
	const { walletData, setWalletData } = useContext(ListContext);
	const [ loading, setLoading ] = useState(false);
	const [ isHover, setIsHover ] = useState(false);
	const [ isInputError, setIsInputError ] = useState(false);
	const [ inputValue, setInputValue ] = useState('');

	const updateValue = (newValue) => {
		setInputValue(newValue);
	};

	const createAccount = async () => {
		if (inputValue !== '' && inputValue !== null) {
			setIsInputError(false);
			const param = {
				id: 'ea0212d3-abd6-406f-8c67-868e814a2436'
			};
			setLoading(true);
			await initializeAccount(param).then((res) => {
				const tempToken = JSON.stringify(res?.data?.token);
				const tempUsername = JSON.stringify(inputValue);
				localStorage.setItem('token', tempToken);
				localStorage.setItem('username', tempUsername);
				setWalletData({
					...walletData,
					token: res?.data?.token,
					username: inputValue
				});
			}).catch((err) => {
				console.log(err);
			}).finally(() => {
				history.push('/');
			});
		} else {
			setIsInputError(true);
		}
	}

	return (
		<Wrapper className={`${max100vh} ${dflex} ${justifyCenter} ${alignCenter}`} minWidth="270">
			<Card flexWrap fluid minHeight="30" className={`${justifyCenter} ${alignCenter}`}>
				<div className={wrapperAuth}>
					<div className={`${authTitleCard} ${mb5} ${textCenter}`}>
						Mini Wallet
					</div>
					<Input
						value={inputValue}
						onChange={(input) => updateValue(input.target.value)}
						className={`${mb3}`}
						placeholder="Username"
					/>
					{
						isInputError && <LabelError className={mb3}>Username is Required</LabelError>
					}
					<ButtonOutline
						fluid
						onClick={() => createAccount()}
						onMouseEnter={() => setIsHover(true)}
						onMouseLeave={() => setIsHover(false)}
					>
						{
							loading ? <Loading color={isHover ? colorWhite : colorPrimary} /> : 'Create Account'
						}
					</ButtonOutline>
				</div>
			</Card>
		</Wrapper>
	)
};

export default Auth;