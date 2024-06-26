"use client";
import { useRouter } from "next/navigation";

export default function AppBar() {
  const router = useRouter();

  return (
    <div className="flex items-end gap-4 p-4 shadow-lg shadow-[#212121]-500/100">
      <div
        onClick={() => {
          router.push("/");
        }}
        className="text-2xl text-extrabold underline h-full">Exchange</div>
      <button
        onClick={() => {
          router.push("/market");
        }} className="text-gray-400 text-extrabold">Market</button>
      <button
        onClick={() => {
          router.push("/trade");
        }} className="text-gray-400 text-extrabold">Trade</button>
    </div>
  );
}
