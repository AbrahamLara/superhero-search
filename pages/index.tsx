import { NextPage } from "next";
import useSWR from "swr";

function fetcher(url) {
  return fetch(url).then(data => data.json());
}

const Home: NextPage = () => {
  const { data, error } = useSWR("/api/test?search=batman", fetcher);
  return <div>{JSON.stringify(data)}</div>;
};

export default Home;
