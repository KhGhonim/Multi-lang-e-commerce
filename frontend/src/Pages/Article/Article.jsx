import { Bookmark, Facebook, Twitter } from "@mui/icons-material";
import PhoneNavbar from "Components/Header/Phone/PhoneNavbar";
import { article } from "DB/db";
import { useState } from "react";
import { useEffect } from "react";
import { FaClock, FaCopy, FaHeart, FaUser } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export default function Article() {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const updateReadingProgress = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", updateReadingProgress);
    return () => window.removeEventListener("scroll", updateReadingProgress);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard");
  };
  const pathname = useLocation().pathname;

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer />
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-blue-600 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Article Header */}
      <header className="relative h-[75vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover transform scale-105 transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
        <div className="relative h-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {article.title}
          </h1>
          <div className="flex items-center space-x-6 text-white">
            <div className="flex items-center">
              <FaUser className="w-5 h-5 mr-2" />
              {article.author}
            </div>
            <div className="flex items-center">
              <FaClock className="w-5 h-5 mr-2" />
              {article.readTime}
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Social Sharing Sidebar */}
        <div className="fixed left-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col space-y-4">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
          >
            <FaHeart
              className={`w-6 h-6 ${
                isLiked ? "fill-red-500" : "text-gray-600"
              }`}
            />
          </button>
          <button className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all">
            <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-400" />
          </button>
          <button className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all">
            <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-600" />
          </button>
          <button
            onClick={handleCopyLink}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
          >
            <FaCopy className="w-6 h-6 text-gray-600 hover:text-blue-600" />
          </button>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
          >
            <Bookmark
              className={`w-6 h-6 ${
                isSaved ? "fill-yellow-500 text-yellow-500" : "text-gray-600"
              }`}
            />
          </button>
        </div>

        {/* Article Body */}
        <article className="prose prose-lg max-w-none">
        
        </article>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </main>

      {/* Related Articles */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            <span className="relative">
              You May Also Like
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {article.relatedArticles.map((related) => (
              <div
                key={related.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-full flex items-center justify-center">
                      <p className="text-white text-center px-6">
                        {related.excerpt}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                    {related.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Story</h2>
          <p className="text-gray-400 mb-8">
            Get the latest fashion insights delivered straight to your inbox.
          </p>
          <form
            className="flex space-x-4 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {pathname === "/login" || pathname === "/register" ? null : (
        <PhoneNavbar />
      )}
    </div>
  );
}
