import HeaderOne from "./HeaderOne/HeaderOne";
import DesktopNavbar from "Components/Header/Desktop/DesktopNavbar/DesktopNavbar";

export default function DesktopHeader({ setMode }) {
  return (
    <div className="w-full">
      <HeaderOne setMode={setMode} />
      <DesktopNavbar />
    </div>
  );
}
