import { useRef, useState } from "react";
import { toast } from "react-toastify";

const useAddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    fakePrice: "",
    rating: "",
    ProductImage: "",
    ratingCount: "",
    lowestPriceInDays: "",
  });
  const [ImageFrontEnd, setImageFrontEnd] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const ref = useRef(null);
  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    const validTypes = ["image/"];
    const fileType = file.type;
    const isValid = validTypes.some((type) => fileType.startsWith(type));
    if (!isValid) {
      toast.error("Invalid file type. Please upload a image file.");
      return;
    }

    if (!file) {
      toast.error("Please select a file.");
      return;
    }


    const fileURL = URL.createObjectURL(file);
    setImageFrontEnd(fileURL);
    setFormData({ ...formData, ProductImage: file });
  }

  const HandleChanges = (eo) => {
    setFormData({ ...formData, [eo.target.name]: eo.target.value });
  }


  const AddProductHandler = async (e) => {
    e.preventDefault();
    setisLoading(true);
    if (!formData.ProductImage || !ImageFrontEnd) {
      toast.error("Please upload an image");
      setisLoading(false);
      return;
    }

    if (
      !formData.name ||
      !formData.description ||
      !formData.category ||
      !formData.price ||
      !formData.fakePrice ||
      !formData.rating ||
      !formData.ratingCount ||
      !formData.lowestPriceInDays
    ) {
      toast.error("Please fill all the fields");
      setisLoading(false);
      return;

    }

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'ProductImage') {
        formDataToSend.append(key, value);
      }
    });

    if (formData.ProductImage) {
      formDataToSend.append('ProductImage', formData.ProductImage);
    }


    try {
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_ADD_PRODUCT}`, {
        method: "POST",
        body: formDataToSend,
        credentials: "include",
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
        e.target.reset();
        setisLoading(false);
        setFormData({
          name: "",
          description: "",
          category: "",
          price: "",
          fakePrice: "",
          rating: "",
          ProductImage: "",
          ratingCount: "",
          lowestPriceInDays: "",
        })
        return
      } else {
        toast.success("Product added successfully");
        e.target.reset();
          setFormData({
          name: "",
          description: "",
          category: "",
          price: "",
          fakePrice: "",
          rating: "",
          ProductImage: "",
          ratingCount: "",
          lowestPriceInDays: "",
        })
      }

    } catch (error) {
      toast.error("Failed to add product");
    }
    finally {
      setisLoading(false);
      e.target.reset();
      setFormData({
        name: "",
        description: "",
        category: "",
        price: "",
        fakePrice: "",
        rating: "",
        ProductImage: "",
        ratingCount: "",
        lowestPriceInDays: "",
      })
    }

  }
  return { AddProductHandler, HandleChanges, formData, handleMainImageChange, ref, ImageFrontEnd, isLoading }
}

export default useAddProduct