import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <div className="flex items-center justify-center h-screen ">
          <div>
                <h2 className="text-red-800"> centered content </h2>
                <Button variant='destructive'>Click Here</Button>
          </div>
    </div>
   </main>
  );
}
