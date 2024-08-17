
export default function Profile() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 p-4 bg-card rounded-lg shadow-md">
          <img
            src="https://placehold.co/100x100"
            alt="User Profile"
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-muted-foreground">john.doe@example.com</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Previous Purchases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-card p-4 rounded-lg shadow-md">
              <img
                src="https://placehold.co/200x200"
                alt="Product 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">Product 1</h3>
              <p className="text-muted-foreground">$29.99</p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-md">
              <img
                src="https://placehold.co/200x200"
                alt="Product 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">Product 2</h3>
              <p className="text-muted-foreground">$49.99</p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-md">
              <img
                src="https://placehold.co/200x200"
                alt="Product 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">Product 3</h3>
              <p className="text-muted-foreground">$19.99</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Favorites</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-card p-4 rounded-lg shadow-md">
              <img
                src="https://placehold.co/200x200"
                alt="Favorite Product 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">Favorite Product 1</h3>
              <p className="text-muted-foreground">$39.99</p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-md">
              <img
                src="https://placehold.co/200x200"
                alt="Favorite Product 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">Favorite Product 2</h3>
              <p className="text-muted-foreground">$59.99</p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-md">
              <img
                src="https://placehold.co/200x200"
                alt="Favorite Product 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">Favorite Product 3</h3>
              <p className="text-muted-foreground">$24.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
