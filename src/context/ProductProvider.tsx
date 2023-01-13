import { createContext, ReactNode, useState } from "react";

interface ProductsInCartProps {
    name: string
    id: string
    description: string
    price: string
    imageUrl: string
    defaultPriceId: string
    unitAmount: number
}

interface ProductProps {
  handleAddProductInCart: (produt: ProductsInCartProps) => void;
  removeProduct: (productId: string) => void;
  searchIdProduct: ProductsInCartProps[];
}

interface ProductProviderProps{
  children: ReactNode
}

export const ProductContext = createContext({} as ProductProps)


export function ProductProvider ({children} : ProductProviderProps){
  const [searchIdProduct, setSearchIdProduct] = useState<ProductsInCartProps[]>([])

  function handleAddProductInCart(product: ProductsInCartProps){
    setSearchIdProduct(stage => {     
      const validatProduct = stage.find(item => item.id === product.id)

      if(!!validatProduct) return stage

      return [...stage, product]
    })
  }

  function removeProduct(productId: string){
    const updateProdutctsInCart = searchIdProduct.filter(product => product.id !== productId)

    setSearchIdProduct(updateProdutctsInCart)
  }
  
  return(
    <ProductContext.Provider value={{handleAddProductInCart, searchIdProduct, removeProduct}}>
      {children}
    </ProductContext.Provider>
  )
}