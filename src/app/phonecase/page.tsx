import Container from "@/components/Container"
import { getPhoneCase } from "@/helper"
import Product from "@/components/Product";

const page = async ()=> {
    const products = await getPhoneCase()
    return (
       <Container>
       <div className="border-b-[1px] border-b-zinc-400 pb-4 flex items-center justify-between">
       <h2>Phone Cases</h2>
       <p>Get the phone cases you want</p>
       </div>

        <p className="mt-4 text-zinc-500 font-semibold">
            Showing all {products.length} results
        </p>
        <Product products={products}/>
       
       </Container>

    )
}

export default page;