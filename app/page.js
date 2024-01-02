import Link from "next/link";
const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold capitalize">learning next.jS</h1>
      <Link href="/client" className="btn btn-accent capitalize">
        get started
      </Link>
    </div>
  );
};
export default HomePage;
