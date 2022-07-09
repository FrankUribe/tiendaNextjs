import { createContext, useState } from "react"

const AppContext = createContext({
  isOpen: false,
  items: [],
  openCart: () => {},
  closeCart: () => {},
  addItemToCart: () => {},
  getNumberOftems: () => {}
})

export default function stateWrapper({children}){
  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState([])

  function handleOpenCart(){
    setIsOpen(true)
  }
  function handleCloseCart(){
    setIsOpen(false)
  }

  return <div>
    {children}
  </div>
}