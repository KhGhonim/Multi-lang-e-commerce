import { LogIn, ServerURL } from "Keys/envKey";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInStart, signInFailed, signInSuccess } from "../Redux/userSlice";

const useLogIn = () => {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading, setloading] = useState(false);
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const handlesubmit = async (eo) => {
    eo.preventDefault();
    dispatch(signInStart());
    setloading(true);

    if (!email || !password) {
      setloading(false);
      return;
    }

    try {
      const response = await fetch(`${ServerURL}/${LogIn}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        toast.warning("Account is not successfully signed in, try again later");
        dispatch(signInFailed(data.message));
        setloading(false);

        return;
      } else {
        setloading(false);
        toast.success("Successfully signed in");
        dispatch(signInSuccess(data));
        nevigate("/");
      }
    } catch (error) {
      toast.error("Something went wrong, try again later");
      console.log(error)
    }

    finally {
      setloading(false);
    }
  };
  return { handlesubmit, setemail, setpassword, loading }
}

export default useLogIn