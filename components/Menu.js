import Link from 'next/link'
import style from '../styles/menu.module.css'
export default function Menu (){
  return (
  <nav className={style.menu}>
    <div>
      <Link href="/">
        <a className={style.link}>Home</a>
      </Link>
      <Link href="/store">
        <a className={style.link}>Store</a>
      </Link>
      <Link href="/faqs">
        <a className={style.link}>Faqs</a>
      </Link>
    </div>
    <div>
      <a href="#">Cart (0)</a>
    </div>
  </nav>
  )
}