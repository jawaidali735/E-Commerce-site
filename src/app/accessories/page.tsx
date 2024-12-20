import Container from "@/components/Container"
import { getaccessories } from "@/helper"
import Product from "@/components/Product";

const page = async ()=> {
    const products = await getaccessories()
    return (
       <Container>
       <div className="border-b-[1px] border-b-zinc-400 pb-4 flex items-center justify-between">
       <h2>Accessories</h2>
       <p>Get the Accessories you want</p>
       </div>

        <p className="mt-4 text-zinc-500 font-semibold">
            Showing all {products.length} results
        </p>
        <Product products={products}/>
       
       </Container>

    )
}

export default page;