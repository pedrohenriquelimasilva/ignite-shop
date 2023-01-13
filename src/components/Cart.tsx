import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import Image from 'next/image';
import { Handbag, X } from 'phosphor-react';
import { useContext} from 'react';
import { ProductContext } from '../context/ProductProvider';
import { CartContainer, Content, Title, Close } from '../styles/pages/cart';

export function Cart(){
  const {searchIdProduct, removeProduct} = useContext(ProductContext)


  async function handleCheckoutProduts(){
    try{
      const response = await axios.post('/api/checkout', {
        productsCart: searchIdProduct
      })

      const { checkoutUrl } = response.data

      //redirecionar para recursos externos
      window.location.href = checkoutUrl
    } catch(error){
      console.log(error)
      alert('Uma operação deu errado! Tente novamente depois de validar os dados')
    }
  }

  const isDisabledButtonCheckout = !!searchIdProduct.length
  

  const totalPrice = searchIdProduct.reduce((acc, item) => {
    return acc += item.unitAmount
  }, 0)

  const formatPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency:'BRL'
  }).format(totalPrice)

  if(searchIdProduct.length >= 1){
    document.getElementById('totalItensInCart').classList.add('active')
  }



  return(
    <Dialog.Root>
      <CartContainer>
          <Handbag size={32} />
          <span id='totalItensInCart'>{searchIdProduct.length}</span>
      </CartContainer>

      <Dialog.Portal>
        <Dialog.Overlay />
        <Content>
          <Title>
            Sacola de compras
          </Title>

          <main>
              {searchIdProduct.length ? (searchIdProduct.map(product => {
                return (      
                    <section key={product.id}>
                      <div>
                        <Image  src={product.imageUrl} alt={product.name} width={94} height={94}/>        
                      </div>

                      <aside>
                        <span>{product.name}</span>
                        <strong>{product.price}</strong>

                        <button onClick={() => removeProduct(product.id)}>Remover</button>
                      </aside>
                    </section>
                )
              })) : <div className='defaultLayout'>Sem itens no carrinho</div>}
          </main>
          
          <footer>
            <span>Quantidade <strong>{searchIdProduct.length ? `${searchIdProduct.length} itens` : 'Não possui itens no carro'}</strong></span>

            <strong>Valor total <span>{formatPrice}</span></strong>

            <button onClick={handleCheckoutProduts} disabled={!isDisabledButtonCheckout}>Finalizar compra</button>
          </footer>

          <Close>
            <X size={20} weight='bold' />
          </Close>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}