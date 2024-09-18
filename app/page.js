'use client';

import { useEffect, useState } from "react";
import { generateMnemonic } from "bip39";
import Header from "@/components/Header";
import MnemonicsDisplay from "@/components/MnemonicsDisplay";

export default function Home() {
  let [mnemonics, setMnemonics] = useState("");

  const generateNewMnemonic = () => {
    const generatedMnemonics = generateMnemonic();
    setMnemonics(generatedMnemonics);
  }

  useEffect(() => {
    generateNewMnemonic();
  }, []);

  return (
    <div>
      <Header />
      <MnemonicsDisplay mnemonicPhrase={mnemonics} seed={'x'}/>
      <button className="bg-blue-700 text-white p-[10px] rounded-lg mt-[10px]" onClick={generateNewMnemonic}>Generate Words</button>
    </div>
  );
}
