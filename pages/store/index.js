import Layout from "../../components/Layout";
import { getItems } from "../../services/itemsServices";
import Image from "next/image"
import Product from "../../components/Product";
import styleItems from "../../styles/Product.module.css"

export default function Index({products}) {
  return (
    <Layout title="Tienda">
      <h1>Tienda</h1>
      <div className={styleItems.items}>
      {products && products.map((item) => 
        <Product key={item.id} item={item} showAs="Default"></Product>
      )}
      </div>
    </Layout>
  )
}

export async function getStaticProps(){
  const res = await getItems()
  return {
    props: {
      products: res,
    }
  }
}