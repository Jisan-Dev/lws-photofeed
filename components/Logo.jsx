import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/lws_logo.png"
        className="max-w-[100px] md:max-w-[165px]"
        alt="Lws"
        height={155}
        width={155}
      />
    </Link>
  );
};

export default Logo;
