import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContent, SuccessContainer } from "../styles/pages/success";

interface SuccessProps{
  custonName: string;
  products:{
    name: string,
    imageUrl: string,
    id: string
  }[]
}
export default function Success({custonName, products}: SuccessProps){
  return(
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name='robots' content='noindex' />
      </Head>
      <SuccessContainer>        
        <section>
          {products.map(product => {
            return (
              <ImageContent key={product.id}>
                  <Image src={product.imageUrl}  alt={product.name} width={120} height={110}/>
              </ImageContent>
          )})}
        </section>

        <h1>Compra efetuada!</h1>

        <p>Uhuul <strong>{custonName}</strong>, sua compra de {products.length} {products.length > 1 ? 'camisetas': 'camiseta'} já está a caminho da sua casa. </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  //tratando possivel erro na rota com redirecionamento pelo proprio servidor
  if(!query.session_id){
    return{
      redirect:{
        destination: '/',
        permanent: false
      }
    }
  }
  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand:['line_items', 'line_items.data.price.product']
  })

  const custonName = session.customer_details.name

  const products = session.line_items.data.map(element => {
    const product = element.price.product as Stripe.Product

    return {
      imageUrl: product.images[0],
      name: product.name,
      id: product.id
    }
  })

  return{
    props:{
      custonName,
      products
    }
  }
}