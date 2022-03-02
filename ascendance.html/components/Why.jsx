import { useEffect, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import SellingPoint from "./SellingPoint";

export default function Why() {
  const [vantaEffect, setVantaEffect] = useState(0);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: "#vanta-why",
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.25,
          scaleMobile: 1.5,
          color: 0xa79300,
          backgroundColor: 0x0,
          points: 24.0,
          spacing: 20.0,
        })
      );
    }
  }, [vantaEffect]);
  return (
    <div className="py-20 my-40 text-white bg-black" id="vanta-why">
      <h2 className="pb-10 m-auto text-3xl font-bold text-center font-display">
        Why Ascendence?
      </h2>
      <div
        className="grid grid-cols-1 m-auto lg:grid-cols-2"
        style={{
          maxWidth: "900px",
        }}
      >
        <SellingPoint
          title="RUG FREE"
          text=" We truly believe we can fully eliminate rugs and other scams by eliminating them at the source instead of being reactive. While having sniffing tools is great to research tokens it will never truly protect investors because a rug can happen at anytime. No shovelware here, either it does what we claim or we don't do it. "
        />
        <SellingPoint
          title="SECURE"
          text=" We aim to be the most secure DEX in DeFi. Our priority isn't controlling what people want to launch but to make sure whatever it is has the investors best interest in mind. We want to take the guesswork out of things and let investors focus on the project and trading. If a token is listed with us you shouldn't have to dig through smart contracts, run background checks on developers or any other nonsense. Our goal is to be the most trusted DEX out and if tokens aren't launching with us there's a good chance they not so good intentions long term. "
        />
        <SellingPoint
          title="SIMPLE"
          text=" DeFi is overly complicated and fragmented. The learning curve is generally too much for investors and by the time they figure it out they lost most their money. We want to streamline not only trading but also launching projects. DeFi is all about anyone being able to create a project and taking a chance it works out. Unfortunately with that comes a lot of issues like broken contracts, wrongly calculated starting liquidity, unlocked liquidity that sends people into a panic and so on. Why are we making everything so complex? List, trade, take a gamble is how easy it should be. "
        />
        <SellingPoint
          title="MARKETING"
          text=" We plan to slow build hype for several weeks leading up to presale using only proven partners to best optimize money spent. There's no reason to throw money at everything and hope it works. We are spending investors money so we need to be smart with how it's used. Post launch a majority of marketing will be done with partnerships and onboarding. If money made everything reach high market caps you'd see that result but you don't. Most important phase for marketing is pre launch that's where our main focus will be. "
        />
        <SellingPoint
          title="NO CONTRACT SELLS"
          text=" Ascend swap will eliminate the need for contracts to sell tax tokens for BNB revenue. BNB will be taken from the point of sale and stored into a pool before being distributed to designated wallets per contract. As long as the transaction is 0.01 BNB or more, it will be routed to the correct wallets per contract. "
        />
        <SellingPoint
          title="INCENTIVES"
          text=" We want to make the token and DEX as rewarding as possible for holders. Ascend (Token) is set up in a way to reduce sell pressure to encourage new investors. Nothing worse than buying and having whales dump their bags on you immediately. Holders of (Ascend) will be rewarded half of all revenue from the platform. We want investors to hold as long as possible and will reward them for doing so. "
        />
      </div>
    </div>
  );
}
