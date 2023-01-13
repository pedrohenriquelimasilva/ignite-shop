import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  minHeight: 656,
  marginLeft: 'auto',
  overflowX:'hidden'
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  overflow: 'hidden',
  cursor: 'pointer',
  position: 'relative',
  zIndex: '1',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img:{
      objectFit: 'cover',
  },

  footer:{  
    position: 'absolute',
    zIndex: '100',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1.25rem',

    opacity: 0,
    transition: 'all 0.2s ease-in-out',
    transform: 'translateY(110%)',

    background: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    strong:{
      fontSize: '$lg',
      color: '$gray100',
      lineHeight: 1.6,
      display: 'block',
    },

    span:{
      fontSize: '$xl',
      color: '$green300',
      display: 'block',
      fontWeight: 'bold',
      lineHeight: 1.4
    },

    button:{
      border: 0,
      borderRadius: 6,
      padding: '.75rem',
      backgroundColor: '$green500',
      cursor: 'pointer',
      transition: 'background-color 0.2s',

      '&:hover':{
        backgroundColor: '$green300',
      }
    }
  },

  '&:hover': {    
    footer:{
      opacity: 1,
      transform: 'translateY(0%)',
    }
  }
})