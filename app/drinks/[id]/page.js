import Link from "next/link";
// import SingleDrink from "@/components/SingleDrink";
import drinkImg from "./drink.jpg";
import Image from "next/image";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (drinkId) => {
  const resp = await fetch(`${url}${drinkId}`);
  if (!resp.ok) {
    throw new Error("Failed to fetch the drink");
  }
  const { drinks } = await resp.json();
  return drinks[0];
};

const SingleDrinkPage = async ({ params }) => {
  const drink = await getSingleDrink(params.id);
  const { strDrink, strDrinkThumb } = drink;
  // return <SingleDrink drinkName={strDrink} drinkImage={strDrinkThumb} />;

  return (
    <div>
      <Link href="/drinks" className="btn btn-accent mb-4">
        back to drinks
      </Link>
      <div className="mx-auto w-3/5">
        <h3 className="font-bold mb-4">{strDrink}</h3>
        <Image
          src={drinkImg}
          alt={strDrink}
          className="w-48 h-48 border-4 border-accent rounded-lg"
        />
      </div>
    </div>
  );
};

export default SingleDrinkPage;
