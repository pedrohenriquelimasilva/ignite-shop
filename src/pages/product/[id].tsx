import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import Stripe from "stripe"
import { ProductContext } from "../../context/ProductProvider"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetalis } from "../../styles/pages/product"

interface ProductProps {
  product:{
    name: string
    id: string
    description: string
    price: string
    imageUrl: string
    defaultPriceId: string
    unitAmount: number
  }
}

export default function Product({product}: ProductProps){
  const [isCreateSessionCheckout, setIsCreateSessionCheckout] = useState(false)

  const {handleAddProductInCart} = useContext(ProductContext)
  const router = useRouter()

  async function handleAddInCart() {
    try {
      setIsCreateSessionCheckout(true)

      handleAddProductInCart(product)
      
      router.push('/')
    }
    catch(err){
      setIsCreateSessionCheckout(false)
      alert('Processo entrou em falha')
    }
  }

  // const {isFallback} = useRouter() => fornece a verificação se a pagina está ou não em fallback
  //roterização totalmente dinamica e relaciona ao file system do projeto
  return(
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image alt="" src={product.imageUrl} width='520' height='480'/>
        </ImageContainer>

        <ProductDetalis>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button onClick={handleAddInCart} disabled={isCreateSessionCheckout} >
            Colocar na sacola
          </button>
        </ProductDetalis>
      </ProductContainer>
    </>
  )
}
// metodo para informar os parametros recebidos dinamicamente por uma pagina statica
export const getStaticPaths: GetStaticPaths = async () => {
  return{
    paths:[
      {params: {id: 'prod_N3Ypmc5lTU8op2'}}
    ],
    //propriedade renderiza a pagina só quando estiver com os dados necessarios
    fallback: 'blocking',
  }
}

// geração de pagina statica, renderização feita na hora de produção, depois só com o revalidate
export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return{
    props:{
      product:{
        id: product.id,
        name: product.name,
        description: product.description,
        price: new Intl.NumberFormat('pt-BR', {
          currency: 'BRL',
          style: 'currency'
        }).format(price.unit_amount / 100),
        unitAmount: price.unit_amount / 100,
        imageUrl: product.images[0],
        defaultPriceId: price.id
      }
    },
    revalidate: 60*60*1
  }
}