export default function ProductsBanners({ banner }) {
  return (
    <div className="md:container mx-auto grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {banner.map((item, index) => {
        return (
          <div
            key={index}
            className="relative rounded-lg shadow-md overflow-hidden cursor-pointer  group"
          >
            <img
              src={item.pic}
              alt={item.alt}
              className="w-full h-52 object-cover group-hover:scale-105  transition-all duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-transparent opacity-50"></div>
            <div
              className={`text-black   absolute bottom-2 left-2 p-3 bg-gray-200 rounded-lg`}
            >
              <h2 className=" font-bold text-sm">{item.name}</h2>
              <p className="text-xs">{item.date}</p>
              <p className="text-xs">NET %{item.discount} DISCOUNT</p>
            </div>
            <p className="absolute bottom-0 right-0 p-4 text-xs text-white">
              *Images are representations.
            </p>
          </div>
        );
      })}
    </div>
  );
}
