"use client";
import { useEffect } from "react";
import { X } from "lucide-react";

export default function MobileSidebar({ open, setOpen }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6 text-gray-700">
          <li className="text-lg hover:text-black cursor-pointer transition">
            Home
          </li>
          <li className="text-lg hover:text-black cursor-pointer transition">
            About
          </li>
          <li className="text-lg hover:text-black cursor-pointer transition">
            Services
          </li>
          <li className="text-lg hover:text-black cursor-pointer transition">
            Contact
          </li>
        </ul>

        <div className="absolute bottom-6 left-6 text-sm text-gray-400">
          © 2026 Your Brand
        </div>
      </div>
    </>
  );
}
