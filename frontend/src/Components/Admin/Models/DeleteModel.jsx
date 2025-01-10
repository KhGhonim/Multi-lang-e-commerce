export default function DeleteModel({
  onClose,
  item,
  onDelete,
  IsModeLOpened,
  Isloading,
  handleDeleteSuccess,
}) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center transition-opacity duration-300 ${
        IsModeLOpened ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Delete <span className="text-red-600">{item?.name}</span>
        </h2>
        <p className="text-gray-500">
          Are you sure you want to delete <strong>{item?.name}</strong>? This
          action cannot be undone.
        </p>
        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-5 rounded-lg transition duration-200"
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={Isloading}
            onClick={() => onDelete(item._id) && handleDeleteSuccess(item._id)}
            className={`py-2 px-5 rounded-lg font-medium text-white transition duration-200 ${
              Isloading
                ? "bg-red-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            {Isloading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
