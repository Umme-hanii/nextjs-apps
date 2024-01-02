const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const DrinksPage = async () => {
  const resp = await fetch(url);
  const { drinks } = await resp.json();
  console.log(drinks[0]);
  return <div>DrinksPage</div>;
};
export default DrinksPage;
