import { mockArticles } from "DB/db";
import { FaUser, FaClock } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function LatestArticles({
  selectedCategory,
  setSelectedCategory,
  filteredArticles,
}) {
  return (
    <section className="pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <h2 className="text-xl lg:text-3xl font-bold text-gray-900">Latest Articles</h2>
          <div className="flex space-x-2">
            {Array.from(new Set(mockArticles.map((a) => a.category))).map(
              (category) => (
                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(
                      category === selectedCategory ? null : category
                    )
                  }
                  className={`px-4 py-2 rounded-full text-xs transition-colors ${
                    category === selectedCategory
                      ? "bg-black text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link
              key={article.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              to={`/article/${article.id}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="h-full flex items-center justify-center">
                    <button className="px-6 py-3 bg-white text-black rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FaUser className="w-4 h-4 mr-1" />
                  {article.author}
                  <span className="mx-2">·</span>
                  <FaClock className="w-4 h-4 mr-1" />
                  {article.date}
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 text-black group-hover:text-blue-600 transition-colors`}
                >
                  {article.title}
                </h3>
                <p className="text-gray-600">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
