export default function Button({ label }: { label: string }) {
  return (
    <div className="bg-rivieraparadise inline-block mx-10">
      <button className="my-3 mx-7 text-[20px] text-goodpro text-white">
        {label}
      </button>
    </div>
  );
}
