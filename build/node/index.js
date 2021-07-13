"use strict";
exports.__esModule = true;
exports.NetworkId = exports.Network = exports.synthetix = void 0;
var synthetix_1 = require("synthetix");
var ethers_1 = require("ethers");
var types_1 = require("./types");
exports.Network = types_1.Network;
exports.NetworkId = types_1.NetworkId;
var constants_1 = require("./constants");
var synthetix = function (_a) {
    var networkId = _a.networkId, network = _a.network, signer = _a.signer, provider = _a.provider;
    var _b = selectNetwork(networkId, network), currentNetwork = _b[0], currentNetworkId = _b[1], useOvm = _b[2];
    return {
        network: {
            id: currentNetworkId,
            name: currentNetwork,
            useOvm: useOvm
        },
        networks: synthetix_1.networks,
        networkToChainId: synthetix_1.networkToChainId,
        decode: synthetix_1.decode,
        defaults: synthetix_1.defaults,
        feeds: synthetix_1.getFeeds({ network: currentNetwork, useOvm: useOvm }),
        tokens: synthetix_1.getTokens({ network: currentNetwork, useOvm: useOvm }),
        sources: synthetix_1.getSource({ network: currentNetwork, useOvm: useOvm }),
        targets: synthetix_1.getTarget({ network: currentNetwork, useOvm: useOvm }),
        synths: synthetix_1.getSynths({ network: currentNetwork, useOvm: useOvm }),
        users: synthetix_1.getUsers({ network: currentNetwork, useOvm: useOvm }),
        versions: synthetix_1.getVersions({ network: currentNetwork, useOvm: useOvm }),
        stakingRewards: synthetix_1.getStakingRewards({ network: currentNetwork, useOvm: useOvm }),
        suspensionReasons: synthetix_1.getSuspensionReasons(),
        toBytes32: synthetix_1.toBytes32,
        utils: ethers_1.ethers.utils,
        contracts: getSynthetixContracts(currentNetwork, signer, provider, useOvm)
    };
};
exports.synthetix = synthetix;
var selectNetwork = function (networkId, network) {
    var currentNetwork = types_1.Network.Mainnet;
    var currentNetworkId = types_1.NetworkId.Mainnet;
    var useOvm = false;
    if ((network && !synthetix_1.networkToChainId[network]) ||
        (networkId && !synthetix_1.getNetworkFromId({ id: networkId }))) {
        throw new Error(constants_1.ERRORS.badNetworkArg);
    }
    else if (network && synthetix_1.networkToChainId[network]) {
        var networkToId = Number(synthetix_1.networkToChainId[network]);
        var networkFromId = synthetix_1.getNetworkFromId({ id: networkToId });
        currentNetworkId = networkToId;
        currentNetwork = networkFromId.network;
        useOvm = networkFromId.useOvm;
    }
    else if (networkId) {
        var networkFromId = synthetix_1.getNetworkFromId({ id: networkId });
        currentNetworkId = networkId;
        currentNetwork = networkFromId.network;
        useOvm = networkFromId.useOvm;
    }
    return [currentNetwork, currentNetworkId, useOvm];
};
var getSynthetixContracts = function (network, signer, provider, useOvm) {
    var sources = synthetix_1.getSource({ network: network, useOvm: useOvm });
    var targets = synthetix_1.getTarget({ network: network, useOvm: useOvm });
    return Object.values(targets)
        .map(function (target) {
        if (target.name === 'Synthetix') {
            target.address = targets.ProxyERC20.address;
        }
        else if (target.name === 'SynthsUSD') {
            target.address = targets.ProxyERC20sUSD.address;
        }
        else if (target.name === 'FeePool') {
            target.address = targets.ProxyFeePool.address;
        }
        else if (target.name.match(/Synth(s|i)[a-zA-Z]+$/)) {
            var newTarget = target.name.replace('Synth', 'Proxy');
            target.address = targets[newTarget].address;
        }
        return target;
    })
        .reduce(function (acc, _a) {
        var name = _a.name, source = _a.source, address = _a.address;
        acc[name] = new ethers_1.ethers.Contract(address, sources[source].abi, signer || provider || ethers_1.ethers.getDefaultProvider(network));
        return acc;
    }, {});
};
exports["default"] = synthetix;
