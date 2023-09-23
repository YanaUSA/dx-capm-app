import { createConfig, configureChains, createStorage } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
// import { alchemyProvider } from 'wagmi/providers/alchemy';
// import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

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
        new CoinbaseWalletConnector({
            chains,
            options: {
                appName: 'wagmi',
                jsonRpcUrl: '78883284975d449c8ffa7190650f6b71',
                // jsonRpcUrl: `${process.env.COINBASE_JSON_RPC_URL}`,
            },
        }),
        new WalletConnectConnector({
            chains,
            options: {
                projectId: '8c8198a5d352c2b4f0c873f4649316f3',
                // projectId: process.env.WALLETCONNECT_PROJECT_ID,
            },
        }),
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
