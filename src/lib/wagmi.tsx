import { createConfig, configureChains, createStorage } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
// import { alchemyProvider } from 'wagmi/providers/alchemy';
// import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, sepolia],
    [
        // alchemyProvider({ apiKey: 'yourAlchemyApiKey' }),
        // infuraProvider({ apiKey: 'yourInfuraApiKey' }),
        publicProvider(),
    ],
    { stallTimeout: 5000 }
);

export const config = createConfig({
    autoConnect: true,
    connectors: [
        new MetaMaskConnector({
            chains,
            options: {
                shimDisconnect: true,
            },
        }),
        // new CoinbaseWalletConnector({
        //     chains,
        //     options: {
        //         appName: 'wagmi',
        //     },
        // }),
        // new WalletConnectConnector({
        //     chains,
        //     options: {
        //         projectId: '...',
        //     },
        // }),
        new InjectedConnector({
            chains,
            options: {
                name: 'Injected',
                shimDisconnect: true,
            },
        }),
    ],
    // storage: createStorage({ storage: window.localStorage }),
    publicClient,
    webSocketPublicClient,
});
