export default function PublicKeysDisplay({ publicKeys = [] }) {
  return (
    <div className="text-black text-[15px] break-all p-[25px]">
      {
        publicKeys.map((item) => (
            <li key={item}>{item.toBase58()}</li>
        ))
      }
    </div>
  );
}
