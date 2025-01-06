import { Link } from "react-router-dom";

export default function CategoryItem({ item }) {
  return (
    <div className="border-b last:border-b-0">
      <button className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center justify-between group">
        <div className="flex items-center gap-3">
          <Link className="flex flex-row gap-4 items-center " to={item.link}>
            <img src={item.src} alt={item.alt} className={item.classes} />
            <span className="font-bold text-lg">{item.name}</span>
          </Link>
        </div>
      </button>
    </div>
  );
}
