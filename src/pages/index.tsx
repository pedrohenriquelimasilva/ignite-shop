import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";
import Link from 'next/link'

import { useKeenSlider } from 'keen-slider/react'

import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import Head from "next/head";
import { Handbag } from "phosphor-react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";

interface HomeServerProps {
  products:{
    id: string;
    name: string;
    price: string;
    imageUrl: string;
    unitAmount: number;
    description: string;
    defaultPriceId: string;
  }[]
}

export default function Home({products}: HomeServerProps) {
  const {handleAddProductInCart} = useContext(ProductContext)

  const [ keenSliderRef ]= useKeenSlider({
    slides:{
      perView: 1.8,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={keenSliderRef} className='keen-slider' >
        {products.map(product => {
          return(
            //prefetch={false} = desabilita o carregamento automatico do next, apenas quando estiver em hover
            <Product className='keen-slider__slide' key={product.id}>
              <Link href={`/product/${product.id}`} prefetch={false}>
                <Image src={product.imageUrl} alt='' width="520" height="480" />
              </Link>
              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
      
                <button onClick={() => handleAddProductInCart(product)}><Handbag size={32} color='#fff' weight="bold"/></button>
              </footer>
            
          </Product>
          )
        })}
      </HomeContainer>
    </>
  )
}

//essa função não substitui a chamada padrão para API

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return{
      id: product.id,
      name: product.name,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
      imageUrl: product.images[0],
      unitAmount: price.unit_amount / 100,
      description: product.description,
      defaultPriceId: price.id
    }
  })

  return{
    props:{
      products
    },
    revalidate: 60*60*2
  }
}