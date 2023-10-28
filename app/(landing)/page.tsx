import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Genius | Home",
  description: "AI Landing page",
};
const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10">
      <p>This is the LandingPage (Unprotected)</p>
      <div className="flex items-center justify-start gap-2">
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
