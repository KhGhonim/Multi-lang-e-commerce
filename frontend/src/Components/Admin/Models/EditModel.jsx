import { useEffect } from "react";

export default function EditModel({
  item,
  IsEditModelOpened,
  onClose,
  SubmitUpdatingProduct,
  setform,
  form,
  IsLoading
}) {

  useEffect(() => {
    if (item) {
      setform({
        name: item.name || "",
        price: item.price || "",
        description: item.description || "",
      });
    }
  }, [item, setform]);
  
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${
        IsEditModelOpened ? "flex" : "hidden"
      }`}
    >
      <div className="bg-white p-4 w-96 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Edit {item?.name}</h2>
        <form onSubmit={SubmitUpdatingProduct}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">
              {" "}
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={item?.name}
              onChange={(e) => setform({ ...form, name: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-600">
              {" "}
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              defaultValue={item?.price}
              onChange={(e) => setform({ ...form, price: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-600">
              {" "}
              Description
            </label>
            <textarea
              id="description"
              name="description"
              
              onChange={(e) =>
                setform({ ...form, description: e.target.value })
              }
              defaultValue={item?.description}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="flex justify-end">
            {" "}
            <button
              onClick={(e) => {
                onClose(e);
              }
              }
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center"
            >
              Cancel
            </button>
            <button
              disabled={IsLoading}
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
            >
              {IsLoading ? "Updating..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}