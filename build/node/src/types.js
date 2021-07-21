"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyCategory = exports.FIAT_SYNTHS = exports.NetworkId = exports.Network = void 0;
const mainnet_1 = require("../generated/mainnet");
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
exports.FIAT_SYNTHS = new Set([
    mainnet_1.Synths.sEUR,
    mainnet_1.Synths.sJPY,
    mainnet_1.Synths.sUSD,
    mainnet_1.Synths.sAUD,
    mainnet_1.Synths.sGBP,
    mainnet_1.Synths.sCHF,
]);
var CurrencyCategory;
(function (CurrencyCategory) {
    CurrencyCategory["crypto"] = "Crypto";
    CurrencyCategory["forex"] = "Forex";
    CurrencyCategory["equity"] = "Equity";
    CurrencyCategory["commodity"] = "Commodity";
})(CurrencyCategory = exports.CurrencyCategory || (exports.CurrencyCategory = {}));
