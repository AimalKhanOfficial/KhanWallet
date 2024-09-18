export default function MnemonicsDisplay({ mnemonicPhrase, seed }) {
  return (
    <>
      <div className="p-[25px] text-black text-[20px]">{mnemonicPhrase}</div>
      <div className="p-[25px] text-black text-[20px]">{seed}</div>
    </>
  );
}
