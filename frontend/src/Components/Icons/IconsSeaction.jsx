import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

const IconsSectionsBox = [
  {
    Icon: <ElectricBoltIcon />,
    Name: "Fast Delivery",
    Description: "Start from $5",
  },
  {
    Icon: <AccessAlarmIcon />,
    Name: "Money Garante",
    Description: "7 Days Back",
  },
  {
    Icon: <LocalAtmIcon />,
    Name: "365 Days",
    Description: "For Free Kargo",
  },
  { Icon: <PaymentIcon />, Name: "Payment", Description: "Start from $1" },
];

function IconsSeaction() {
  const theme = useTheme().palette.mode;
  const {t} = useTranslation()
  return (
    <div
      className={`container mx-auto p-4 mt-8 ${
        theme === "dark" ? "bg-zinc-800" : "bg-white"
      }   rounded-lg grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4`}
    >
      {IconsSectionsBox.map((item) => (
        <motion.div
          key={item.Description}
          whileHover={{ scale: 1.05, y: -5 }}
          className={`flex items-center gap-2 p-2 justify-center ${
            theme === "dark"
              ? "bg-zinc-800 text-white"
              : "bg-white text-black"
          }  cursor-pointer transition-all duration-300`}
        >
          <button aria-label="" className="p-2 ">
            {item.Icon}
          </button>
          <div className="flex flex-col gap-2">
            <p className="text-base ml-2">{t(item.Name)}</p>
            <p className="text-sm ml-2">{t(item.Description)}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default IconsSeaction;
