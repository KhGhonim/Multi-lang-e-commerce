import { useTheme } from "@mui/material";

export default function BigBanner() {
  const theme = useTheme().palette.mode;
  return (
    <div className="w-full h-dvh relative overflow-hidden">
      <img
        src="https://images.news18.com/ibnlive/uploads/2021/06/1624945730_featured-image-2021-06-29t111724.512.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="w-full absolute inset-0 bg-gradient-to-b from-transparent to-black">
        <div
          className={`absolute bottom-1/3 left-0  transform  md:left-1/2 md:-translate-x-full  text-text bg-white/80 p-10 md:p-20 rounded-xl z-20 ${
            theme === "dark" ? "text-black" : "text-black"
          }`}
        >
          <h1>What is Lorem Ipsum?</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="flex justify-end items-center">
            <button className=" bg-gray-600 text-white rounded-lg px-4 py-2 mt-4  w-32">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
