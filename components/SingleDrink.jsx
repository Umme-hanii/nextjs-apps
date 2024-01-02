import Link from "next/link";

const SingleDrink = ({ drinkName, drinkImage }) => {
  return (
    <div>
      <Link href="/drinks" className="btn btn-accent mb-4">
        back to drinks
      </Link>
      <div className="mx-auto w-3/5">
        <h3 className="font-bold mb-4">{drinkName}</h3>
        <img
          src={drinkImage}
          className="rounded border-x-4 border-y-4 border-accent"
        ></img>
      </div>
    </div>
  );
};
export default SingleDrink;
