import { useParams } from "react-router-dom";
import CategoryCard from "../organs/CategoryCard";
import { LeatherTexts, ProductsTexts } from "../particles/DataLists";

interface RouteParams {
  name: string;
  [key: string]: string | undefined;
}

const Products = () => {
  const { name } = useParams<RouteParams>();

  return (
    <div className="">
      <br />
      {/* PRODUCT */}
      {name === "assembly-gloves" && (
        <CategoryCard data={ProductsTexts.assembly_gloves} />
      )}
      {name === "driver-gloves" && (
        <CategoryCard data={ProductsTexts.driver_gloves} />
      )}
      {name === "canadian-gloves" && (
        <CategoryCard data={ProductsTexts.canadian_gloves} />
      )}
      {name === "welding-gloves" && (
        <CategoryCard data={ProductsTexts.welding_gloves} />
      )}
      {name === "impact-gloves" && (
        <CategoryCard data={ProductsTexts.impact_gloves} />
      )}
      {name === "tig-gloves" && (
        <CategoryCard data={ProductsTexts.tig_gloves} />
      )}
      {name === "accessories" && (
        <CategoryCard data={ProductsTexts.accessories} />
      )}

      {/* LEATHER  */}
      {name === "crust-leather" && (
        <CategoryCard data={LeatherTexts.crust_leather} />
      )}
      {name === "finished-leather" && (
        <CategoryCard data={LeatherTexts.finished_leather} />
      )}

    </div>
  );
};

export default Products;
