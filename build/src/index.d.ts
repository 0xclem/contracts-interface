import { Config, CurrencyKey, CurrencyCategory, Network, NetworkId, Target, TargetsRecord, ContractsMap, SynthetixJS, Synth, Token } from './types';
import { Synths } from '../generated/mainnet';
declare const synthetix: ({ networkId, network, signer, provider }: Config) => SynthetixJS;
export { synthetix, Network, NetworkId, Synths, CurrencyCategory };
export type { Config, CurrencyKey, Target, TargetsRecord, ContractsMap, SynthetixJS, Synth, Token };
export default synthetix;
