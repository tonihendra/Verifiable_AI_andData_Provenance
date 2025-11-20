import { ChainInfo } from "@keplr-wallet/types";

export const veriflowChainInfo: ChainInfo = {
  chainId: "veriflow", // Sesuaikan dengan config.yml di folder chain Anda
  chainName: "VeriFlow Local",
  rpc: "http://localhost:26657",
  rest: "http://localhost:1317",
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: "cosmos", // Sesuaikan prefix (bisa 'veriflow' atau 'cosmos' tergantung config)
    bech32PrefixAccPub: "cosmos" + "pub",
    bech32PrefixValAddr: "cosmos" + "valoper",
    bech32PrefixValPub: "cosmos" + "valoperpub",
    bech32PrefixConsAddr: "cosmos" + "valcons",
    bech32PrefixConsPub: "cosmos" + "valconspub",
  },
  currencies: [
    {
      coinDenom: "TOKEN",
      coinMinimalDenom: "token",
      coinDecimals: 6,
      coinGeckoId: "cosmos",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "TOKEN",
      coinMinimalDenom: "token",
      coinDecimals: 6,
      coinGeckoId: "cosmos",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.04,
      },
    },
