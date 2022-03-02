import { Card } from "./Card";
export default function Dex() {
  return (
    <div className="my-20">
      <div className="flex flex-col py-10 lg:flex-row">
        <Card
          title="DEX"
          text="Ascend swap will take all the guess work out of investing with security measures in place to protect investors from the same old rugs and honey pots. So find a project you like, invest and relax. On top of that we will eliminate the needs of KYC and audits by standardizing smart contracts with no malicious code inside. Combined with our launch pad (Ascend Pad) you'll know if a contract is free of malicious code used to exploit contracts. We will aim to support No Contract Selling on all contracts at platform launch. No need to use specialized contracts purely for that function. Tax will be taken as BNB and distributed to wallets and holders accordingly."
        />
        <Card
          title="Launchpad"
          text="Our Exclusive launchpad will be built to function purely with our innovative DEX. Not only will we eliminate taking supply from projects that use it, we'll provide protection from rampant scams. Additionally, nobody will be forced to reveal their identities since that goes against the core values of decentralized finance. It's been proven KYC doesn't work, it's just a false sense of safety to new investors. In place of KYC your contract must meet our standards before we will mark it safe or consider any form of advertising for it. We will not help you advertise your scam, either you play by the rules or find other investors. Launchpad will be released alongside a token creation portal to allow seamless integration within the platform. All holders of Ascend token will share half of all platform revenue when platform launches. This includes tax on Ascend token, launchpad, token creation portal and all other revenue generating paths."
        />
      </div>
      <p className="px-10 text-center text-gray-800 lg:px-48">
        Private sale funds will be used to cover both Ascend Pad and Ascend Swap
        development. In addition, funds will be used to lead a marketing effort
        prelaunch to ensure we have buy pressure leading up to presale and post
        launch.
      </p>
    </div>
  );
}
