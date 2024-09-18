"use client";

import { useEffect, useState } from "react";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import Header from "@/components/Header";
import MnemonicsDisplay from "@/components/MnemonicsDisplay";
import { derivePath } from "ed25519-hd-key";
import nacl from "tweetnacl";
import { Keypair } from "@solana/web3.js";
import PublicKeysDisplay from "@/components/PublicKeysDisplay";

export default function Home() {
  let [mnemonics, setMnemonics] = useState("");
  let [seed, setSeed] = useState("");
  let [walletIndex, setWalletIndex] = useState(0);
  let [publicKeys, setPublicKeys] = useState([]);

  const generateNewWallet = () => {
    const derivativePath = `m/44'/501'/${walletIndex}'/0'`;
    const derivedSeed = derivePath(derivativePath, seed).key;
    const privateKey = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(privateKey);
    setWalletIndex(walletIndex + 1);
    setPublicKeys([...publicKeys, keypair.publicKey]);
  };

  useEffect(() => {
    const generatedMnemonics = generateMnemonic();
    const newSeed = mnemonicToSeedSync(generatedMnemonics).toString("hex");
    setMnemonics(generatedMnemonics);
    setSeed(newSeed);
    generateNewWallet();
  }, []);

  return (
    <div>
      <Header />
      <MnemonicsDisplay mnemonicPhrase={mnemonics} seed={seed} />
      <div className="text-center">
        <button
          className="bg-blue-700 text-white p-[10px] rounded-lg mt-[10px]"
          onClick={generateNewWallet}
        >
          Generate New Wallet
        </button>
      </div>
      <PublicKeysDisplay publicKeys={publicKeys} />
    </div>
  );
}
