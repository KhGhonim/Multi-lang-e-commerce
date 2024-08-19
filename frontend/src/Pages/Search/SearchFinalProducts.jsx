export default function SearchFinalProducts({ result }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-black max-md:p-3">
      {result}
    </div>
  );
}
