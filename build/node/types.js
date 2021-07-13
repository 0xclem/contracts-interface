"use strict";
exports.__esModule = true;
exports.NetworkId = exports.Network = void 0;
var Network;
(function (Network) {
    Network["Mainnet"] = "mainnet";
    Network["Ropsten"] = "ropsten";
    Network["Rinkeby"] = "rinkeby";
    Network["Goerli"] = "goerli";
    Network["Kovan"] = "kovan";
    Network["Mainnet-Ovm"] = "mainnet-ovm";
    Network["Kovan-Ovm"] = "kovan-ovm";
    Network["Goerli-Ovm"] = "goerli-ovm";
})(Network = exports.Network || (exports.Network = {}));
var NetworkId;
(function (NetworkId) {
    NetworkId[NetworkId["Mainnet"] = 1] = "Mainnet";
    NetworkId[NetworkId["Ropsten"] = 3] = "Ropsten";
    NetworkId[NetworkId["Rinkeby"] = 4] = "Rinkeby";
    NetworkId[NetworkId["Goerli"] = 5] = "Goerli";
    NetworkId[NetworkId["Kovan"] = 42] = "Kovan";
    NetworkId[NetworkId["Mainnet-Ovm"] = 10] = "Mainnet-Ovm";
    NetworkId[NetworkId["Kovan-Ovm"] = 69] = "Kovan-Ovm";
})(NetworkId = exports.NetworkId || (exports.NetworkId = {}));
