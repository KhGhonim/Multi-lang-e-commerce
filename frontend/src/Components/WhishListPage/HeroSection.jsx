export default function HeroSection() {
  return (
    <div className="relative h-[400px] bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1589363358751-ab05797e5629?q=80&w=1854&auto=format&fit=crop&w=1920&q=80")',
        }}
      />
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Wishlist</h1>
        <p className="text-lg md:text-xl text-gray-200">
          View your wishlist products
        </p>
      </div>
    </div>
  );
}
