import { NextPage } from "next";
import { useRouter } from "next/router";

const Hero: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <span>{router.query.id}</span>
    </div>
  );
};

export default Hero;
