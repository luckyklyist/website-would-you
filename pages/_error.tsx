import Button from "@/components/Button";
import { NextPage } from "next";
import Link from "next/link";

const Error: NextPage<{ statusCode?: number }> = ({ statusCode }) => {
  return (
    <div className="my-56 flex flex-col items-center justify-center px-8 text-white sm:px-[17vw]">
      <h1 className="text-5xl font-semibold">
        Error{" "}
        <span className="text-brand-red-100 drop-shadow-red-glow">
          {statusCode}
        </span>
      </h1>

      <Button variant="red" className="mt-8">
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 500;
  return { statusCode };
};

export default Error;
