import { SignUpButton, SignUp } from "@clerk/nextjs";

export default async function Home() {
  return (
    <main className="min-h-screen w-screen flex justify-center items-center bg-gradient-to-r from-rose-100 to teal-100">
      <SignUp />
    </main>
  );
}
