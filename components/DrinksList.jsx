import Image from "next/image";
import Link from "next/link";

const DrinksList = ({ drinks }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {drinks.map((drink) => {
        return (
          <div key={drink.idDrink}>
            <Link
              href={`/drinks/${drink.idDrink}`}
              className="text-xl font-medium"
            >
              <h3>{drink.strDrink}</h3>
              <div className="relative h-72 sm:h-48 mt-2 border-4 rounded-lg border-accent">
                <Image
                  src={drink.strDrinkThumb}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw"
                />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default DrinksList;

// import Link from "next/link";

// const DrinksList = ({ drinks }) => {
//   return (
//     <ul className="menu menu-vertical pl-0">
//       {drinks.map((drink) => {
//         return (
//           <li key={drink.idDrink}>
//             <Link
//               href={`/drinks/${drink.idDrink}`}
//               className="text-xl font-medium"
//             >
//               <h3>{drink.strDrink}</h3>
//             </Link>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
// export default DrinksList;
