import SingleDrink from "@/components/SingleDrink";

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
  return <SingleDrink drinkName={strDrink} drinkImage={strDrinkThumb} />;
};

export default SingleDrinkPage;
