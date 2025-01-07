import { Instagram, Twitter } from "@mui/icons-material";
import { influencers } from "DB/db";
import { FaYoutube } from "react-icons/fa6";

export default function Influencers() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Influencers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-900">
          {influencers.map((influencer) => (
            <div
              key={influencer.id}
              className="bg-white rounded-xl p-2 lg:p-6 shadow-sm"
            >
              <div className="flex items-start space-x-6">
                <img
                  src={influencer.image}
                  alt={influencer.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="text-xl font-semibold mb-1">
                      {influencer.name}
                    </h3>
                    <h6 className="text-gray-600 font-bold">
                      {influencer.followers}
                    </h6>
                  </div>
                  <p className="text-gray-600 mb-3">{influencer.handle}</p>
                  <div className="flex space-x-3 mb-4">
                    <Instagram className="w-5 h-5 text-gray-600 hover:text-pink-600 cursor-pointer" />
                    <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-400 cursor-pointer" />
                    <FaYoutube className="w-5 h-5 text-gray-600 hover:text-red-600 cursor-pointer" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {influencer.instagramPosts.map((post, index) => (
                      <img
                        key={index}
                        src={post}
                        alt="Instagram post"
                        className="w-full h-24 object-cover rounded-lg hover:opacity-75 transition-opacity cursor-pointer"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
