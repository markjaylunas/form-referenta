import Logo from "@/assets/Logo/Icon Colored.svg";
import Form from "@/components/form";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 space-y-12">
      <Image
        src={Logo}
        alt="Referenta Logo"
        width={200}
        className="mx-auto"
        unoptimized
      />

      <Form />

      <Toaster position="top-right" />
    </main>
  );
}
