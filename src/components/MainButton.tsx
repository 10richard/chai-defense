import Link from "next/link";

interface MainButtonProp {
  text: string;
}

const MainButton = ({ text }: MainButtonProp) => {
  return (
    <Link
      className="text-lg text-secondary px-8 py-4 rounded-full inline-block hover:before:bg-redborder-red-500 relative overflow-hidden border border-secondary bg-white transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-secondary before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full"
      href="/attend-a-class"
    >
      <span className="relative z-10 font-medium">{text}</span>
    </Link>
  );
};

export default MainButton;
