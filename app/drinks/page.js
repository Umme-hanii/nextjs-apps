import DrinksList from "@/components/DrinksList";
import Link from "next/link";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  const resp = await fetch(url);

  if (!resp.ok) {
    throw new Error("Failed to fetch drinks");
  }
  const data = await resp.json();
  return data;
};

const DrinksPage = async () => {
  const { drinks } = await fetchDrinks();
  return <DrinksList drinks={drinks} />;
};

export default DrinksPage;
