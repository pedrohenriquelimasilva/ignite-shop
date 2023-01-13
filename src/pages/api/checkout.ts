import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

// é possivel criar funções de back-end no nextNode
export default async function checkout(req: NextApiRequest, res: NextApiResponse){
  const {productsCart} = req.body
  
  if(req.method !== 'POST'){
    return res.status(405).json({erro: 'Method not found.'});
  }

  if(!productsCart.length){
    return res.status(400).json({erro: 'Cart not found.'});
  }

  const products = productsCart.map(product => {
    return{
      price: product.defaultPriceId,
      quantity: 1,
    }
  })

  const successURL = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelURL = `${process.env.NEXT_URL}/`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successURL,
    cancel_url: cancelURL,
    line_items: products,
    mode:'payment'
  })

  return res.status(201).json({checkoutUrl: checkoutSession.url})
}