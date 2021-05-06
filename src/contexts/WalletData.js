import { createContext } from "react";

const WalletData = createContext({
    walletData: {},
    setWalletData: () => {}
});

export default WalletData;
