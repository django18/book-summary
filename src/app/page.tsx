import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import FileUpload from "@/components/ui/FileUpload";

export default async function Home() {
  const { userId } = auth();
  const user = await currentUser();

  console.log({ userId, user });
  const isAuth = !!userId;
  return (
    <main className="min-h-screen w-screen bg-gradient-to-r from-rose-100 to teal-100">
      <div className="absolute top-2 right-2">
        <UserButton afterSwitchSessionUrl="/" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl">Itinerary Buddy</h1>
          <p className="max-w-xl mt-1 text-lg text-slate-800">
            Revolutionize Your Plans with AI: Discover the Ultimate Itinerary
            Builder
          </p>
          {isAuth && <FileUpload />}
          {!isAuth && (
            <div className="flex mt-2 gap-4">
              <Link href="/sign-up">
                <Button>Signup</Button>
              </Link>
              <Link href="/sign-in">
                <Button>Signin</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
