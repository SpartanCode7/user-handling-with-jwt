"use client";
import CustomImage from "@/components/atoms/CustomImage/CustomImage";
import { useGetPostsQuery } from "../../../app/api/ProductSlice/ProductSlice";
import Heading from "@/components/atoms/Heading/Heading";
import Span from "@/components/atoms/Span/Span";
import Button from "@/components/atoms/Button/Button";

function Product() {
  const { data, isLoading, isError } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  // Shuffle the data array randomly
  const shuffledData = [...data].sort(() => 0.5 - Math.random());

  // Get the first 6 products from the shuffled array
  const selectedProducts = shuffledData.slice(0, 6);

  return (
    <div className="flex flex-wrap gap-7">
      {selectedProducts.map((product, index) => (
        <div className="w-[32%]" key={index}>
          <div className="flex justify-center">
            <CustomImage src={`/images/${product.image}`} alt="Product Image" />
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <Heading level="5" children={product.name} />
            </div>
            <div className="flex items-center justify-between">
                <Span children={`Rs - ${product.price}`} />
                <Button children="Buy" href="#" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
