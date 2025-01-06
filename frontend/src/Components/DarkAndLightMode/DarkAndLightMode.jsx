import { useTheme } from "@mui/material";
import { LuMoon } from "react-icons/lu";
import { IoSunnyOutline } from "react-icons/io5";

export default function DarkAndLightMode({ setMode }) {
  const theme = useTheme();

  const changeMode = () => {
    localStorage.setItem(
      "currentTheme",
      theme.palette.mode === "dark" ? "light" : "dark"
    );
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex items-center gap-2 cursor-pointer">
      {theme.palette.mode === "light" ? (
        <IoSunnyOutline className="text-xl" onClick={changeMode} />
      ) : (
        <LuMoon className="text-xl"  onClick={changeMode} />
      )}
    </div>
  );
}
