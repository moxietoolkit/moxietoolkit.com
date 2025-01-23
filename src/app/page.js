import Image from "next/image";
import madeWithMoxie from "@/app/assets/made-with-moxie.png";

export default function Home() {
  return (
    <div className="space-y-4 text-center">
      <Image src={madeWithMoxie} alt="Made with Moxie" className="max-w-96 inline-block" />
      <h1 className="text-3xl font-bold">Moxie toolkit is coming soon.</h1>
      <p className="text-lg">In the meantime Grimwild's free rules are available at <a href="https://www.drivethrurpg.com/product/399818/Grimwild-Free-Rules?affiliate_id=144937" className="text-grimwild-blue underline">DriveThruRPG</a>.</p>
    </div>
  );
}
