"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
const client_1 = require("@sanity/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.client = (0, client_1.createClient)({
    projectId: "cgr29eyw",
    dataset: 'production', // Or your dataset name
    apiVersion: '2024-01-04', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: "skTIKZBAi7g4aZZz3DfGwCfj2e2FZQlzeCXtpLwk0NqvmNksRunc3YRqbIWZfXr50j4CHXQUw7BTP5Rzq5QoJd5r0KaAHI4acRGSTSx802fgY8KjmUZQhZGY6V18RLFS4tjd2PEj79HeXoTvimuZ2lnQ0GvVknasxIpokEDlTpRx6ZAk3Qz7"
});