import { useState } from "react";
import { toast } from "react-toastify";

const useDeleteProduct = () => {
  const [Isloading, setIsloading] = useState(false);
  const [IsModeLOpened, setIsModeLOpened] = useState(false);
  const [SelectedItem, setSelectedItem] = useState(null);

  const HandleDelete = async () => {
    setIsloading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_DELETE_PRODUCTS}?id=${SelectedItem._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      setIsloading(false);

      if (!res.ok) {
        toast.error(data.message);
      }
      setIsloading(false);
      toast.success(data.message);

    } catch (error) {
      console.log(error);
    } finally {
      setIsModeLOpened(false);
      setSelectedItem(null);
    }

  }
  return { HandleDelete, Isloading, setSelectedItem, SelectedItem, setIsModeLOpened, IsModeLOpened }
}

export default useDeleteProduct