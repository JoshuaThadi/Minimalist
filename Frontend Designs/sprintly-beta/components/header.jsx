import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import UserMenu from "./user-menu";
import { PenBox } from "lucide-react";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";
// import UserLoading from "./user-loading";

const Header = async () => {

  await checkUser();

  return (
    <header className="container mx-auto">
      <nav
        className="
    fixed top-0 left-0 right-0 z-50
    mx-2 mt-2 py-2 px-6
    rounded-1
    bg-white/10
    backdrop-blur-md
    border border-white/20
    shadow-lg

    flex items-center justify-between
  "
      >
        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={"/sprintly-bg.png"}
            alt="Sprintly Logo"
            width={200}
            height={56}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-200">
          <Link
            href="#features"
            className="hover:text-violet-400 transition-colors"
          >
            Features
          </Link>

          <Link
            href="#faqs"
            className="hover:text-violet-400 transition-colors"
          >
            FAQs
          </Link>

          <Link
            href="#contact"
            className="hover:text-violet-400 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <Link href="/project/create">
            <Button className="bg-zinc-100 rounded-1 flex items-center gap-2">
              <PenBox size={18} />
              <span className="hidden md:inline">Create Project</span>
            </Button>
          </Link>

          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant="outline" className="rounded-1">
                Login
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
      {/* <UserLoading/> */}
    </header>
  )
}

export default Header