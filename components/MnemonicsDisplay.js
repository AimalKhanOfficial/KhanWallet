export default function MnemonicsDisplay({ mnemonicPhrase, seed }) {
  return (
    <div className="text-black text-[15px] break-all p-[25px]">
        <div className="flex">
          {
            mnemonicPhrase ? mnemonicPhrase.split(' ').map((mnemonic, index) => {
              return <div id={index} className="p-[5px] border rounded-lg ml-[5px] bg-gray-500 text-white">{mnemonic}</div>
            })  : ''
          }
        </div>
        <div className="mt-[10px]"><span className="font-bold">Seed in hex:</span> {seed}</div>
    </div>
  );
}
