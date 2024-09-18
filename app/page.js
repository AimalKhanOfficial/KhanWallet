'use client';

import { useEffect, useState } from "react";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import Header from "@/components/Header";
import MnemonicsDisplay from "@/components/MnemonicsDisplay";

export default function Home() {
  let [mnemonics, setMnemonics] = useState("");
  let [seed, setSeed] = useState("");

  const generateNewMnemonic = () => {
    const generatedMnemonics = generateMnemonic();
    setMnemonics(generatedMnemonics);
    const newSeed = mnemonicToSeedSync(generatedMnemonics).toString('hex')
    setSeed(newSeed);
  }

  useEffect(() => {
    generateNewMnemonic();
  }, []);

  return (
    <div>
      <Header />
      <MnemonicsDisplay mnemonicPhrase={mnemonics} seed={seed}/>
      <div className="text-center">
        <button className="bg-blue-700 text-white p-[10px] rounded-lg mt-[10px]" onClick={generateNewMnemonic}>Generate New Mnemonic</button>
      </div>
    </div>
  );
}
