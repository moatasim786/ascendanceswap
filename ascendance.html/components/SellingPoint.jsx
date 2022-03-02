export default function SellingPoint({ title, text }) {
  return (
    <div className="flex flex-col justify-center px-10 py-20 m-2 text-white rounded-lg bg-neutral-800">
      <h3 className="mb-2 text-2xl font-bold font-display">{title}</h3>
      <p className="text-sm">{text}</p>
    </div>
  );
}
