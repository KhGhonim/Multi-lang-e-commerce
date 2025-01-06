import Marquee from "react-fast-marquee";

export default function MarqueeAnimation() {
  
  return (
    <div className="flex gap-4 w-full text-white bg-[#131728] py-3 font-bold text-xs md:text-base">
      <Marquee loop={0} gradient={false} speed={50} direction="left">
        <div className="mr-10 px-4 font-mono">
          FREE DELIVERY FOR ODER OVER $120
        </div>
        <div className="mr-10 px-4 font-mono">-</div>
        <div className="mr-10 px-4 font-mono">
          Weekly Specials Inside - Don't Miss Out!
        </div>
        <div className="mr-10 px-4 font-mono">-</div>

        <div className="mr-10 px-4 font-mono">END YEAR SALE UP TO 50% OFF</div>
        <div className="mr-10 px-4 font-mono">-</div>

        <div className="mr-96 px-4 font-mono">
          SIGN UP AND GET 10% OFF YOUR FIRST ORDER
        </div>
      </Marquee>
    </div>
  );
}
