import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="mb-8 flex flex-col items-center justify-between text-neutral-300 sm:flex-row">
        <div className="flex flex-1 flex-col items-center sm:items-start">
          <div className="flex items-center text-xl font-semibold text-white">
            <Image
              src="/Logo.svg"
              alt="Logo"
              className="rounded-full"
              width="40"
              height="40"
            />
            <p className="ml-3">Would You</p>
          </div>
          <p className="mt-4 text-sm">
            &copy; {new Date().getFullYear()} Dominik Development. All rights
            reserved.
          </p>
        </div>
        <div className="mt-8 flex items-start gap-16 whitespace-nowrap sm:mt-0">
          <div className="flex flex-1 flex-col items-center sm:items-start">
            <h4 className="mb-2 text-lg font-semibold text-white">
              Recommended
            </h4>
            <Link href="/">Home</Link>
            <Link href="/commands">Commands</Link>
            <Link href="/reddit" target="_blank">
              Reddit
            </Link>
          </div>
          <div className="flex flex-1 flex-col items-center sm:items-start">
            <h4 className="mb-2 text-lg font-semibold text-white">Links</h4>
            <Link href="/discord" target={"_blank"}>
              Support Server
            </Link>
            <Link href="/invite" target={"_blank"}>
              Invite
            </Link>
            <Link href="/vote" target={"_blank"}>
              Vote
            </Link>
          </div>
          <div className="flex flex-1 flex-col items-center sm:items-start">
            <h4 className="mb-2 text-lg font-semibold text-white">Legal</h4>
            <Link href="/legal">Legal Notice</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div>
        <hr className="border border-neutral-800" />
        <p className="mt-8 text-center text-sm text-neutral-300">
          Made with <span className="text-brand-red-100">♥</span> by{" "}
          <Link
            href="https://github.com/orgs/Would-You-Bot/people"
            target={"_blank"}
            className="text-white underline"
          >
            Would You Team
          </Link>{" "}
          &{" "}
          <Link
            href="https://github.com/Would-You-Bot/website/graphs/contributors"
            target={"_blank"}
            className="text-white underline"
          >
            Contributors
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
