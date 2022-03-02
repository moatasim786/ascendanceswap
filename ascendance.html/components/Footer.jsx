export default function Footer() {
  return (
    <footer className="flex w-full py-8 pl-1 text-white bg-black">
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col ml-8">
          <h1 className="text-2xl font-bold uppercase font-display">
            ascendance
          </h1>
          <p className="text-sm">Ascendanceswap, 2022</p>
        </div>
      </div>
      <div className="flex flex-row items-center ml-20 leading-relaxed underline">
        <a className="px-10" href="https://t.me/AscendSwap">
          <b>Telegram</b> <span className="text-xs">#AscendSwap</span>
        </a>
        <a className="px-10" href="reddit.com/r/AscendSwap/">
          <b>Reddit</b> <span className="text-xs">r/AscendSwap</span>
        </a>
        <a className="px-10" href="https://www.instagram.com/ascendswap/">
          <b>Instagram</b> <span className="text-xs">@ascendswap</span>
        </a>
        {/* TODO: get urls */}
      </div>
    </footer>
  );
}
