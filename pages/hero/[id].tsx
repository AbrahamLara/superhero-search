import { NextPage, NextPageContext } from "next";
import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";

const Hero: NextPage = (props: any) => {
  return (
    <div>
      <span>{JSON.stringify(props.data)}</span>
    </div>
  );
};

Hero.getInitialProps = async (ctx: NextPageContext) => {
  const id = ctx.query.id;

  const res = await fetch(`http://localhost:3000/api/id/${id}`);
  const data = await res.json();

  return { data };
};

export default Hero;
