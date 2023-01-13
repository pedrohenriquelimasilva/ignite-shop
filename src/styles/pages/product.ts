import { styled } from "..";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto'
})


export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  borderRadius: 8,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img:{
    objectFit: 'cover'
  }
})


export const ProductDetalis = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1:{
    fontSize: '$2xl',
    color: '$gray300',
    marginTop: '1rem',
  },

  span:{
    fontSize: '$2xl',
    color: '$green300',
    marginTop: '1rem',
  },

  p:{
    lineHeight: 1.6,
    fontSize: '$md',
    color: '$gray300',
    marginTop: '2.5rem',
  },

  button:{
    marginTop: 'auto',
    color: '$white',
    fontWeight: 'bold',
    fontSize: '$md',
    background: '$green500',
    padding: '1.25rem',
    cursor: 'pointer',
    border:0,
    borderRadius: 8,
    width: '100%',
    transition: 'background-color 0.2s',

    '&:disabled':{
      cursor: 'not-allowed',
      opacity: 0.6,
    },

    '&:not(:disabled):hover':{
      background: '$green300'
    }
  }
})