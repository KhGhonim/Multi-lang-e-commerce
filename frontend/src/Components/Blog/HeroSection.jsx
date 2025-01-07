import { ArrowRight } from '@mui/icons-material'
import { FaClock } from 'react-icons/fa6'

export default function HeroSection({mockArticles}) {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={mockArticles[0].image}
          alt={mockArticles[0].title}
          loading="lazy"
          className="w-full h-full object-cover transform scale-105 transition-transform duration-10000 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-20">
        <div className="max-w-2xl text-white">
          <div className="flex items-center space-x-4 mb-4">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
              {mockArticles[0].category}
            </span>
            <span className="flex items-center text-sm">
              <FaClock className="w-4 h-4 mr-1" />
              {mockArticles[0].date}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            {mockArticles[0].title}
          </h1>
          <p className="text-base mb-6 text-gray-200">
            {mockArticles[0].excerpt}
          </p>
          <button className="group flex items-center px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors">
            Read Article
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-700 ease-in-out" />
          </button>
        </div>
      </div>
    </section>
  )
}
