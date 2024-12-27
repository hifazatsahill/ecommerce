import Link from "next/link";
import { AiOutlineMenuUnfold } from "react-icons/ai";

export default function page ()  {
  return (
    <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-center items-center">
            <h1 className="text-xl font-semibold">Hello Nike App</h1>
        </div>
        <div className="text-black flex justify-center">
        <p>Download the app to access everything Nike. Get Your Great</p>
        </div>
        <div className="flex space-x-4">
          <ul className="flex justify-end space-x-4 max-w-screen-2xl mx-auto">
            <AiOutlineMenuUnfold/>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href='/About'>About</Link></li>
            <li><Link href={'/detail'}>Detail</Link></li>
            <li><Link href={'/login'}>Login In</Link></li>
            <li><Link href={'/contact'}>Contact_Us</Link></li>
            <li><Link href={'/cart'}>Cart</Link></li>
            <li><Link href={'/signIn'}>Sing_In</Link></li>
          </ul>
        </div>
        <div className="flex justify-center py-2">
          <img src="Image.png"width={1540} height={700} alt="Image" />
        </div>
        <div className="flex justify-center items-center py-1">
            <p className="text-xl font-medium">First Look</p>
        </div>
        <div className="flex justify-center py-4">
            <h1 className="flex text-xl font-bold">Nike Air Max Pulse</h1>
        </div> 
        <div className="flex justify-center items-center">
              <p className="flex justify-center">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse</p>
        </div>
        <div className="flex justify-center items-center">
            <p className="flex justify-center">—designed to push you past your limits and help you go to the max.</p>
        </div>
        <div className="flex justify-center py-4">
            <img src="frt1.png"width={110} height={39} alt="frt" />
            <img src="frt2.png"width={138} height={39} alt="" />
        </div>
        <div className=" flex justify-center py-2">
          <img src="fr.png"width={1640} height={52} alt="fr" />
        </div>

        <div className="flex justify-center max-w-screen-2xl mx-auto space-x-2 ">
          <img src="Image (1).png"width={550} height={350} alt="imge" />
          <img src="Image (3).png"width={550} height={350} alt="imge" />
          <img src="Image (1).png"width={550} height={350} alt="imge" />
        </div>
        <div className="flex justify-center max-w-screen-2xl mx-auto space-x-24">
            <img src="wm.png"width={400} height={30} alt="wm" />
            <img src="mn.png" width={400} height={30} alt="mn" />
            <img src="nkr.png" width={400} height={30} alt="nkr"/>
        </div>

        <div className="flex px-36">
            <h1 className="text-xl font-sans font-bold">Feature</h1>
        </div>
        <div className="flex justify-center">
            <img src="Image (4).png"width={1540} height={700} alt="imge" />
        </div>

        <div className="flex justify-center py-2 ">
            <h1 className="text-xl font-bold">STEP INTO WHAT FEELS GOOD</h1>
        </div>
        <div className="flex justify-center">
          <p>Cause everyone should know the feeling of running in that perfect pair.</p>
        </div>
        <div className="flex justify-center py-2 ">
          <img src="alt.png"width={152} height={39} alt="alt" />
        </div>
        <div className="flex">
        <h1 className="text-xl font-bold px-28">Gear Up</h1>
        </div>
        <div className="flex justify-between px-28 py-4">
          <h1 className="font-bold">Shop Men's</h1>
          <h1 className="font-bold">Shop Women's</h1>
        </div>

        <div className="flex justify-between py-28 space-x-4">
        <img src="Image (5).png"width={450} height={300} alt="img" />
        <img src="Image (6).png" width={450} height={300} alt="6" />
        <img src="Image (7).png"width={450} height={300} alt="7" />
        <img src="Image (8).png"width={450} height={300} alt="8" />
        </div>

    <div className="flex px-28 space-x-20">
        <div className="flex col-span-1 px-4 py-2">
          <h1 className="font-bold">Nike Dri-FIT ADV TechKnit Ultra ₹ 3 895</h1>
        </div>

        <div className="flex col-span-1 px-0 py-2">
          <h1 className="font-bold">Nike Dri-FIT Challenger  ₹ 2 495</h1>
        </div>

        <div className="flex col-span-1 px-20 py-2">
          <h1 className="font-bold">Nike Dri-FIT ADV Run Division  ₹ 5 295</h1>
        </div>

        <div className="flex col-span-1 py-2">
          <h1 className="font-bold ">Nike Fast ₹ 3 795</h1>
        </div>
    </div> 
      <div className="flex justify-between space-x-4 px-28">
          <div className="flex"><p>Men's Short-Sleeve Running Top</p></div>
          <div className="flex"><p className=" ">Men's 18cm (approx.) 2-in-1 Versatile Shorts</p></div>
          <div className="flex"><p className="px-2 ">Women's Long-Sleeve Running Top</p></div>
          <div className="flex"><p className="px-2 ">Women's Mid-Rise 7/8 Running Leggings with Pockets</p></div>
      </div>
        <div className="flex px-28"><h1 className="font-bold py-4">Don't Mis</h1></div>
        <div className="flex justify-center px-20"><img src="Image (9).png"width={1600} height={10} alt="9" /></div>

        <div className="flex justify-center py-2">
          <h1 className="font-bold py-2">FLIGHT ESSENTIALS</h1>
        </div>
        <div className="flex justify-center"><p className="font-semibold">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p></div>
        <div className="flex justify-center py-2">
          <img src="btx.png"width={80} height={39} alt="btx" />
        </div>
      <div className="flex px-28 py-4"><h1 className="font-bold">The Essential</h1></div>
      <div className="flex justify-between px-24 space-x-4 ">
        <img src="Image (10).png" width={520} height={540} alt="10" />
        <img src="Frame (2).png"width={520} height={540} alt="2" />
        <img src="Frame (3).png" width={520} height={540} alt="3" />
      </div>
      <div className="flex justify-center py-8 px-4">
        <img src="brv.png" width={1000} height={100} alt="brv" />
      </div>
    </div>
  );
}







