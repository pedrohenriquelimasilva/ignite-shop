import type { AppProps } from 'next/app'
import { globalStyle } from '../styles/global'
import { Container, Header } from '../styles/pages/app'
import logoImage from '../assets/logo.svg'
import Image from 'next/image'
import { Cart } from '../components/Cart'
import Link from 'next/link'
import { CartProvider } from 'use-shopping-cart'
import { ProductProvider } from '../context/ProductProvider'

globalStyle()

const stripeKey = process.env.STRIPE_PUBLIC_KEY
export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider stripe={stripeKey} currency="BRL" cartMode="checkout-session" shouldPersist>
      <ProductProvider>
        <Container>
            <Header>
              <Link href='/'>
                <Image src={logoImage} alt="" />
              </Link>

              <Cart />
            </Header>
            <Component {...pageProps} />
        </Container>
      </ProductProvider>
    </CartProvider>
  )
}
