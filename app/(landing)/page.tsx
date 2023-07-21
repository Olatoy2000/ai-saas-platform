import Link from "next/link";
import { Button } from "../../components/ui/button";
const LandingPage = () => {
  return (
    <div>
      <p>This is the LandingPage (Unprotected)</p>
      <div className="flex items-center gap-2 justify-start">
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
