export default function MnemonicsDisplay({ mnemonicPhrase, seed }) {
  return (
    <div className="text-black text-[15px] break-all p-[25px]">
        <p>{mnemonicPhrase}</p>
        <p>{seed}</p>
    </div>
  );
}
