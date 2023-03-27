"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  image: string;
}

export default function Logged({ image }: Props) {
  return (
    <li className="flex gap-8 items-center">
      <button
        onClick={() => signOut()}
        className="text-sm bg-gray-700 text-white py-2 px-6 rounded-xl disabled:opacity-25 hover:bg-gray-800"
      >
        Sign out
      </button>
      <Link href={"/dashboard"}>
        <Image
          src={image}
          height={48}
          width={48}
          alt=""
          className="rounded-full"
        />
      </Link>
    </li>
  );
}
