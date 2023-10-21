import Link from "next/link";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="sticky bottom-20 md:bottom-5 w-full text-center cursor-pointer">
      <div>
        <Link href="#hero">
          <button className="rounded-full bg-slate-500/50 text-slate-400/50 p-1 grayscale hover:grayscale-0 cursor-pointer mx-auto text-center text-sm animate-pulse">
            Up
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
