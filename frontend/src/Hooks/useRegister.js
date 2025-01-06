import { Register, ServerURL, UserExits } from "Keys/envKey";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { emailRegex, passwordRegex } from "Utils/PWandEmail";

const useRegister = () => {
  const [firstname, setfirstname] = useState(null);
  const [lastname, setlastname] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading, setloading] = useState(false);
  const nevigate = useNavigate();


  const RegisterHandler = async (eo) => {
    eo.preventDefault();
    setloading(true);
    if (!firstname || !lastname || !email || !password) {
      setloading(false);
      toast.warning("Please fill all the fields");
    }
    if (!emailRegex.test(email)) {
      setloading(false);
      toast.warning("Please enter a valid email address");
      return;
    }

    if (!passwordRegex.test(password)) {
      setloading(false);
      toast.warning(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character"
      );
      return;
    }

    try {
      
      const IsUserExists = await fetch(`${ServerURL}/${UserExits}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await IsUserExists.json();

      if (data.IsUserExist) {
        toast.warning("Account already exists");
        setloading(false);
        eo.target.reset();
        return;
      }

      const response = await fetch(`${ServerURL}/${Register}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname, lastname, email, password }),
      });

      if (response.ok) {
        toast.success("Account created");
        setloading(false);
        nevigate("/login");
      } else {
        toast.warning("Account is not created, try again later");
        setloading(false);
      }

    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }

  };
  return { RegisterHandler, setfirstname, setlastname, setemail, setpassword, loading };
}

export default useRegister