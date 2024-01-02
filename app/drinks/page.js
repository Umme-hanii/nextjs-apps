const url = "https://www.thecocktaildb.com/api/json/v1/1/search.phps?f=a";

const fetchDrinks = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const resp = await fetch(url);

  if (!resp.ok) {
    throw new Error("Failed to fetch drinks");
  }
  const data = await resp.json();
  return data;
};

const DrinksPage = async () => {
  const { drinks } = await fetchDrinks();
  console.log(drinks[0]);
  return <div>DrinksPage</div>;
};

export default DrinksPage;
