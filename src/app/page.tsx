import Image from "next/image";
import { Button } from "../components/ui/button";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                Hello <Button>World</Button>
            </div>
        </main>
    );
}
