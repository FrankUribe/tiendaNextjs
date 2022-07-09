import Link from "next/link"
import Image from "next/image"
import style from "../styles/Product.module.css"
import { convertToPath } from "../lib/utils"

export default function Product({ item, showAs }){
  if (showAs === 'Page') {
    return(
      <div className={style.page}>
        <div className={style.img}>
          <Image src={item.image} alt={item.title} width="400" height="400"/>
        </div>
        <div className={style.info}>
          <div>
            <h2 className={style.title}>{item.title}</h2>
          </div>
          <div className={style.price}>$ {item.price}</div>
          <div>{item.description}</div>
          <div><button>Add to cart</button></div>
        </div>
      </div>
    )
  } else if (showAs === 'ListItem') {
    return(<>ListItem</>)
  } else {
    return(
    <div className={style.item}>
      <div>
        <Link href={`/store/${convertToPath(item.title)}`}>
          <a>
          <Image src={item.image} alt={item.description} width="400" height="400"/>
          </a>
        </Link>
      </div>
      <div>
        <h3>
        <Link href={`/store/${convertToPath(item.title)}`}>{item.title}</Link>
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