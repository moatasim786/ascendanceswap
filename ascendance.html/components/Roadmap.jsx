export default function Roadmap() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-40">
      <h2 className="pb-12 text-3xl font-bold uppercase font-display">
        Roadmap
      </h2>
      <ul
        style={{
          lineHeight: "250%",
        }}
        className="px-20 border-l-2 border-black"
      >
        <li>Hold Private Sale</li>
        <li>Public Presale</li>
        <li>Ascend Token Launch</li>
        <li>Platform Public Test</li>
        <li>Platform Full Release</li>
        <li>Full Launch Pad Integration</li>
        <li>Forum Integration</li>
        <li>Liquidity Migration Tool</li>
      </ul>
    </div>
  );
}
