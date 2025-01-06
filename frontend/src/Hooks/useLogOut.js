import { LogOut, ServerURL } from "Keys/envKey";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "../Redux/userSlice";

const useLogOut = () => {
  const nevigate = useNavigate()
  const dispatch = useDispatch();
  const HandleSignOut = async () => {
    try {
      const res = await fetch(`${ServerURL}/${LogOut}`, {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();

      if (!res.ok) {
        console.log(data.message);
        return;
      } else {
        dispatch(signOut());
        nevigate("/login");
      }
    } catch (error) {
      error.message = "Failed to sign out";
    }
  };
  return { HandleSignOut }
}

export default useLogOut