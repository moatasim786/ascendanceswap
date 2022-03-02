export function Card({ title, text }) {
  return (
    <div className="p-20 m-6 border-2 border-gray-300 shadow-xl rounded-xl">
      <h2 className="pb-4 text-3xl font-bold font-display">{title}</h2>
      <p>{text}</p>
    </div>
  );
}
