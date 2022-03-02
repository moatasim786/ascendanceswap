import { Card } from "./Card";
export default function Overview() {
  return (
    <div>
      <div className="flex flex-col py-10 lg:flex-row">
        <Card
          title="Who Are We?"
          text="At Ascendance we plan to aim to transform how people view altcoins and the dangers associated with them, with our ground-up built DEX. Every utility being planned has never been done and will Truly be innovative and change not only BSC, but all other blockchains that suffer from rampant scams."
        />
        <Card
          title="Overview"
          text="Ascendance isn’t just another boring DEX in a land of boring DEX’s. We’re on a mission to shake up how things are in this space. We want to be the first thing people go to when investing using our other planned tools not only for investors but for developers. We want to encourage those who have big dreams or even simple ideas to come and build their projects with us. What is this space without new ideas? Our team is dedicated to the mission of changing perceptions on what this space should be. Projects launched with us will not only have a better platform for investors to see their idea but also much more streamlined for investors to make a purchase. Dedicated and determined to make this space what it should have been from the start. "
        />
      </div>
      <p className="px-10 text-center text-gray-800 lg:px-48">
        We believe decentralized trading should remain decentralized. We will
        never ask a developer or team to reveal their identities since it
        doesn&apos;t stop the bad apples from taking advantage of investors. We
        want to set a new standard for what launchpads should be. Currently many
        take advantage of project makers by taking an unfair piece of the pie
        which ultimately causes havoc post launch not only for developers but
        all the people already invested. We have no desire to roadblock your
        projects growth, if you succeed then we all do so want to get you
        started on the right track.
      </p>
    </div>
  );
}
