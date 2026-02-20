"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  User,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="w-full container m-auto border-b bg-white sticky top-0 z-50 rounded-md mt-5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LEFT (Desktop Menu) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
            <Link href="#" className="hover:text-black transition">
              New Drops
            </Link>
            <Link href="#" className="hover:text-black transition">
              Men
            </Link>
            <Link href="#" className="hover:text-black transition">
              Women
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* LOGO */}
          <div className="text-xl md:text-3xl font-extrabold tracking-widest">
            KICKS
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-6">
            {/* Desktop Search */}
            <Search className="hidden md:block w-5 h-5 cursor-pointer text-gray-700 hover:text-black" />

            {/* Cart */}
            <div className="relative cursor-pointer">
              <ShoppingBag className="w-5 h-5 text-gray-700 hover:text-black" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </div>

            {/* Profile Dropdown (Desktop) */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-1"
              >
                <User className="w-5 h-5 text-gray-700 hover:text-black" />
                <ChevronDown className="w-4 h-4" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white shadow-xl rounded-xl border p-2">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm rounded-lg hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm rounded-lg hover:bg-gray-100"
                  >
                    Orders
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm rounded-lg hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <hr className="my-2" />
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm rounded-lg text-red-500 hover:bg-red-50"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile User Icon */}
            <User className="md:hidden w-5 h-5" />
          </div>
        </div>
      </header>

      {/* ================= MOBILE SIDEBAR ================= */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />

          {/* Sidebar */}
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-xl p-6 animate-slideIn">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">Menu</h2>
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-gray-700 font-medium">
              <Link href="#" className="hover:text-black">
                New Drops
              </Link>
              <Link href="#" className="hover:text-black">
                Men
              </Link>
              <Link href="#" className="hover:text-black">
                Women
              </Link>
              <hr />
              <Link href="#" className="hover:text-black">
                Profile
              </Link>
              <Link href="#" className="hover:text-black">
                Orders
              </Link>
              <Link href="#" className="text-red-500 hover:text-red-600">
                Logout
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}