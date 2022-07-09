import Layout from "../../components/Layout"
import Product from "../../components/Product"
import { getItemsData, getPathsFromIds } from "../../lib/utils"

export default function ProductPage({prodctInfo}) {
  return(
  <Layout>
    <Product item={prodctInfo.data} showAs="Page"></Product>
  </Layout>
  )
}

export async function getStaticPaths (){
  const paths = await getPathsFromIds()

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({params}){
  const id = params.id;
  const product = await getItemsData(id);
  return {
    props: {
      prodctInfo: product,
    }
  }
}