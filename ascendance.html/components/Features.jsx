import Image from "next/image";

function F() {
  return (
    <div
      style={{
        maxWidth: "400px",
      }}
      className="px-6"
    >
      <h2 className="pb-2 text-3xl font-bold uppercase font-display">
        Features
      </h2>
      <ul className="list-disc">
        <li>13% Tax</li>
        <li>Sell Limits to Protect New Investors</li>
        <li>100M Supply (No Burn)</li>
        <li>
          Most token supply to be sold to investors no need to lock additional
          supply
        </li>
        <li>Multisig wallets to protect project funds and contract</li>
      </ul>
    </div>
  );
}

function T() {
  return (
    <div
      style={{
        maxWidth: "400px",
      }}
      className="px-6"
    >
      <h2 className="pb-2 text-3xl font-bold uppercase font-display">
        Tokenomics
      </h2>
      <ul className="list-disc">
        <li>4% Tax for Development </li>
        <li>4% Tax for Marketing </li>
        <li>3% Tax for Liquidity </li>
        <li>2% Tax for Reflections </li>
        <li>Sell breakdown per 24 hour: </li>
        <b className="block pt-2 pb-1">BNB per MC level </b>
        <li>3 BNB : 0-1 MIL </li>
        <li>5 BNB : 1-5 MIL </li>
        <li>10 BNB : 5-10 MIL </li>
        <li>20 BNB : 10-20 MIL </li>
        <li>30 BNB : 20-50 MIL </li>
        <li>40 BNB : 50-100 MIL </li>
        <li>50 BNB : 100-500 MIL </li>
        <li>100 BNB : 500 MIL+ </li>
      </ul>
    </div>
  );
}

export default function Features() {
  return (
    <div className="flex flex-col justify-between px-12 py-32 ml-8 md:flex-row md:ml-0">
      <F />
      <div className="pt-20 md:pt-0">
        <T />
      </div>
      <div className="hidden lg:block">
        <Image src="/city.png" height={350} width={500} alt=""></Image>
      </div>
    </div>
  );
}
