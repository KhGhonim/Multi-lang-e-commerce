import { useTheme } from "@mui/material";
import { LuGrid2X2, LuGrid3X3 } from "react-icons/lu";
import { TbLayoutGrid, TbLayoutGridRemove, TbLayoutList } from "react-icons/tb";

export default function GridControls({ gridColumns, setGridColumns }) {
  const controls = [
    { columns: 1, icon: TbLayoutList },
    { columns: 2, icon: LuGrid2X2 },
    { columns: 3, icon:  TbLayoutGrid},
    { columns: 4, icon:  LuGrid3X3},
    { columns: 5, icon: TbLayoutGridRemove },
  ];
    const theme = useTheme().palette.mode;
  

  return (
    <div className="flex justify-center gap-2 my-6">
      {controls.map(({ columns, icon: Icon }) => (
        <button
          key={columns}
          onClick={() => setGridColumns(columns)}
          className={`p-2 rounded-lg transition-all ${
            gridColumns === columns
              ? theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-gray-300 text-gray-600 hover:bg-gray-400"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          <Icon className="w-5 h-5" />
        </button>
      ))}
    </div>
  );
}
