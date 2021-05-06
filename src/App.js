import React, { useEffect, useState } from 'react';
import { Main } from './styles.js';
import Home from './components/Home/index';
import Auth from './components/Auth/index';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import ListContext from './contexts/WalletData';
import {
	BrowserRouter as Router,
	Switch
} from 'react-router-dom';
import './App.css';

const App = () => {
	const [walletData, setWalletData] = useState({
		wallet: {},
		deposits: [],
		withdrawal: [],
		showBalance: false,
		token: null,
		username: null
	});

	useEffect(() => {
		const tempToken = (JSON.parse(localStorage.getItem('token')));
		const username = (JSON.parse(localStorage.getItem('username')));
		const wallet = (JSON.parse(localStorage.getItem('wallet')));
		const deposits = (JSON.parse(localStorage.getItem('deposits')) || []);
		const withdrawal = (JSON.parse(localStorage.getItem('withdrawal')) || []);
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

	return (
		<Router>
			<Main>
				<ListContext.Provider value={{ walletData, setWalletData}}>
					<Switch>
						<PublicRoute authed={walletData.token !== null} restricted={true} component={Auth} path="/auth" exact />
						<PrivateRoute authed={walletData.token !== null} component={Home} path="/" exact />
						<PrivateRoute authed={walletData.token !== null} component={Home} path="*" exact />
					</Switch>
				</ListContext.Provider>
			</Main>
		</Router>
	);
};

export default App;
