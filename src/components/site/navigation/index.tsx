'use client'
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/global/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { getAuthUserDetails } from "@/lib/queries";
import { MenuIcon } from "lucide-react";




const Navigation = () => {
  const {user} = useUser()
  return (
    <header className="right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[.0625rem] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[-2px]">
        <p className="text-3xl font-bold">Monarrc</p>
        
      </aside>

      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="" className="hover:text-primary-foreground">Servicio</Link>
          </li>
          <li>
            <Link href="" className="hover:text-primary-foreground">Documentación</Link>
          </li>
          <li>
            <Link href="" className="hover:text-primary-foreground">Precio</Link>
          </li>
          <li>
            <Link href="" className="hover:text-primary-foreground">Contacto</Link>
          </li>
        </ul>
      </nav>

      <aside className="flex items-center gap-4">
        <Link
        href="/agency"
        className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-1 text-xl font-medium text-white backdrop-blur-3xl">
            {user ? 'Dashboard' : 'Comenzar'}
          </span>
        
        </Link>
        <UserButton afterSignOutUrl="/"/>
        <MenuIcon className="md:hidden"/>
      </aside>
    </header>
  );
};

export default Navigation;
