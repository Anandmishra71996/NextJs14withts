"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Session } from "next-auth";

const Nav = () => {
  const isUserLoggedIn = false;
  const { data: session } = useSession();
  const [mobileNavigation, setMobileNavigatioin] = useState(false);
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await getProviders();
      setProviders(response);
    })();
  }, []);
  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <nav className="flex-between w-full mb-16">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promtopia</p>
      </Link>
      {/* Desktop Navigatioin */}
      <div className="sm:flex hidden mt-2">
        {session?.user ? (
          <div className="flex gap-2 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button className="outline_btn" onClick={() => signOut()}>
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user?.image}
                alt="profile"
                width={37}
                height={37}
                className="rounded-full"
              ></Image>
            </Link>
          </div>
        ) : (
          <>
            {" "}
            <button className="black_btn" onClick={() => signIn()}>
              Sign In
            </button>
          </>
        )}
      </div>
      {/* Mobile  Navigatioin */}
      <div className="sm:hidden flex relative ">
        {session?.user ? (
          <div className="flex gap-2 md:gap-5 relative">
            <Image
              src={session?.user?.image}
              alt="profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => {
                setMobileNavigatioin((prev) => !prev);
              }}
            ></Image>
            {mobileNavigation && (
              <div className="dropdown">
                <Link href="/create-prompt" className="dropdown_link">
                  Create Post
                </Link>
                <Link href="/profile" className="dropdown_link">
                  Profile
                </Link>
                <button className="black_btn" onClick={() => signOut()}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button className="black_btn" onClick={() => signIn()}>
              Sign In
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
