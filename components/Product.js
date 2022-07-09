import Link from "next/link"
import Image from "next/image"
import style from "../styles/Product.module.css"

export default function Product({ item, showAs }){
  if (showAs === 'Page') {
    return(
    <>
    <h2>{item.title}</h2>
    </>
    )
  } else if (showAs === 'ListItem') {
    return(<>ListItem</>)
  } else {
    return(
    <div className={style.item}>
      <div>
        <Link href={`/store/${item.id}`}>
          <a>
          <Image src={item.image} alt={item.description} width="400" height="400"/>
          </a>
        </Link>
      </div>
      <div>
        <h3>
        <Link href={`/store/url-a-mi-component`}>{item.title}</Link>
        </h3>
      </div>
      <div>${item.price}</div>
      <div>
        <button>Add to Cart</button>
      </div>
    </div>
    )
  }
}