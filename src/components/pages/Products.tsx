import { useParams } from "react-router-dom";
import CategoryCard from "../organs/CategoryCard";
import { ProductsTexts } from "../particles/DataLists";

interface RouteParams {
  name: string;
  [key: string]: string | undefined;
}

const Products = () => {
  const { name } = useParams<RouteParams>();

  return (
    <div className="">
      <br />
      {name === "driver-gloves" && (
        <CategoryCard data={ProductsTexts.driver_gloves} />
      )}
      {name === "assembly-gloves" && (
        <CategoryCard data={ProductsTexts.assembly_gloves} />
      )}
      
    </div>
  );
};

export default Products;
