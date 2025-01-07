import { Mail } from "@mui/icons-material";

export default function Newsletter({ email, setEmail }) {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Stay Ahead in Fashion Trends
          </h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter and get exclusive style guides, trend
            forecasts, and fashion insights.
          </p>
          <form className="flex space-x-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-400">
            By subscribing, you'll receive our weekly fashion digest and early
            access to exclusive content.
          </p>
        </div>
      </div>
    </section>
  );
}
