import "./theme.css"
import { setupTwitterObserver } from '@dialectlabs/blinks/ext/twitter';
import { ActionAdapter,BlockchainIds } from '@dialectlabs/blinks';

// Debugging log to ensure the content script is running
console.log("Content script loaded and running.");

// simple ActionAdapter with metadata
const blinkUnfurlingAdapter: ActionAdapter = {
  metadata: {
    supportedBlockchainIds: [BlockchainIds.ETHEREUM_MAINNET] 
  },
  connect: async () => {
    console.log("connect method called, but no wallet connection is required.");
    return null; 
  },
  signTransaction: async () => {
    console.log("signTransaction method called, but no transaction signing is required.");
    return { error: "No transaction signing required" };
  },
  confirmTransaction: async () => {
    console.log("confirmTransaction method called, but no transaction confirmation is required.");
  }
};

try {
  setupTwitterObserver(blinkUnfurlingAdapter);
  console.log("Twitter observer set up successfully.");
} catch (error) {
  console.error("Error setting up Twitter observer:", error);
}
