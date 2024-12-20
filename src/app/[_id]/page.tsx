import { getProducts } from "@/helper"; // Function to fetch products
import { ProductType } from "../types"; // Type for products
import Container from "@/components/Container";
import Image from "next/image";
import FormattedPrice from "@/components/FormattedPrice";

type Props = {
  params: { _id: string }; // Properly typed dynamic route params
};

// Ensure metadata generation works correctly
export async function generateMetadata({ params }: Props) {
  return {
    title: `Product - ${params._id}`,
    description: "Detailed product information.",
  };
}

const Page = async ({ params }: Props) => {
  // Fetch products
  const products = await getProducts();

  // Get product based on the dynamic route parameter
  const product = products.find((p: ProductType) => p._id === Number(params._id));

  // If the product is not found, show an error message
  if (!product) {
    return (
      <Container className="flex items-center justify-center min-h-screen">
        <h1 className="text-xl font-bold">Product not found.</h1>
      </Container>
    );
  }

  // Render the product details
  return (
    <Container className="flex items-center flex-col md:flex-row px-4 xl:px-0">
      <div className="w-full md:w-1/2 overflow-hidden bg-zinc-50 flex items-center justify-center p-10">
        <Image
          src={product.image || ""}
          alt="product image"
          width={500}
          height={500}
          className="transform translate-transform hover:scale-110 duration-500"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <h2 className="text-3xl font-semibold">{product.title}</h2>
        <p className="gap-10 flex items-center">
          <FormattedPrice amount={product.price} className="text-lg font-semibold" />
          <FormattedPrice
            amount={product.previousPrice}
            className="text-zinc-500 line-through"
          />
        </p>
        <p>
          You saved -{" "}
          <FormattedPrice
            amount={product.previousPrice - product.price}
            className="text-base font-semibold bg-yellow-500 underline underline-offset-2"
          />{" "}
          from this product
        </p>

        <button className="bg-yellow-500/80 text-zinc-700 px-6 py-2 font-medium rounded-md hover:bg-yellow-500 hover:text-black cursor-pointer duration-200 hover:shadow-lg w-40 my-2">
          Add to Cart
        </button>
        {product.isNew && <p className="text-yellow-500 font-semibold">New Arrival</p>}
        <p>
          Brand: <span className="font-semibold">{product.brand}</span>
        </p>
        <p>
          Category: <span className="font-semibold">{product.category}</span>
        </p>
        <p>{product.description}</p>
      </div>
    </Container>
  );
};

export default Page;
