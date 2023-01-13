import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog';


export const CartContainer = styled(Dialog.Trigger, {
  background: '$gray800',
  color: '$gray500',
  border: 0,
  borderRadius: 6,
  position:'relative',
  padding: '.75rem',
  cursor: 'pointer',
  transiton: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.9)'
  },
  span:{
    color:'white',
    position:'absolute',
    background: '$green500',
    width: 26,
    height: 26,
    borderRadius: '100%',
    border: '2px solid $gray900',
    opacity: 0,
    top: -8,
    right: -8,
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',

    '&.active': {
      opacity: 1,
    }
  }
})

export const Content = styled(Dialog.Content, {
  width: '100%',
  maxWidth: '30rem',
  height: '100vh',
  position: 'fixed',
  top:0,
  right:0,
  background: '$gray800',
  zIndex: 999,
  padding: '3rem',

  main:{
    height: '55vh',
    overflow: 'scroll',
    overflowX: 'hidden',
    scrollbarWidth: 'thin',
    scrollbarColor: '$gray900',

    '&::-webkit-scrollbar-thumb':{
      backgroundColor: '$gray900',
      borderRadius: 20,
    },

    '&::-webkit-scrollbar':{
      width: 10
    }
  },


  section:{
    width: '100%',
    display: 'flex',
    gap: '1.25rem',
    alignItems: 'center',
    fontSize: '$md',
    marginTop: '2rem',

    div:{
      background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
      borderRadius: 8,
      width: '100%',
      maxWidth: '6.38rem',
      height: 93,

      img:{
        objectFit: 'cover'
      }
    },

    'aside':{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',

      span:{
        color:'$gray300',
        lineHeight: 1.6,
      },
  
      strong:{
        color:'$gray100',
        lineHeight: 1.6,
      },
  
      button:{
        color: '$green500',
        lineHeight: 1.6,
        fontSize: '1rem',
        marginTop: '0.5rem',
        fontWeight: 'bold',
        border: 0,
        cursor: 'pointer',
        background: 'transparent',
        transition:'color 0.2s',
  
        '&:hover':{
          color:'$green300'
        }
      },
    },
    'section < section':{
      marginTop: '1.5rem',
    }
  },

  '.defaultLayout':{
    textAlign: 'center',
    marginTop: '2rem'
  },

  footer:{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap:'0.5rem',
    

    span:{
      color: '$gray100',
      fontSize: '1rem',
      lineHeight: 1.6,

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      strong:{
        color: '$gray300',
        fontWeight: '400',
        fontSize: '$md',
        lineHeight: 1.6,
      }
    },


    strong:{
      color: '$gray100',
      lineHeight: 1.6,
      fontSize: '$md',

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',

      span:{
        color: '$gray100',
        fontWeight: 'bold',
        fontSize: '$xl',
        lineHeight: 1.4
      }
    },

    button:{
      border: 0,
      borderRadius: 8,
      backgroundColor:'$green500',
      color: '$white',
      lineHeight: 1.6,
      fontSize: '$md',
      fontWeight: 'bold',
      padding: '1.25rem',
      cursor: 'pointer',
      transition: 'background-color 0.2s',
      marginTop: '3.125rem',

      '&:not(:disabled):hover, &:not(:disabled):focus':{
        backgroundColor: '$green300',
        outline: 'none'
      },

      '&:disabled':{
        filter:'brightness(0.8)',
        cursor: 'not-allowed'
      }
    }
  }
})

export const Title = styled(Dialog.Title, {
  color:'$gray100',
  fontSize: '$lg',
  lineHeight: 1.6,
  marginTop: '1.5rem'
})

export const Close = styled(Dialog.Close, {
  position: 'absolute',
  top: 28,
  right: 28,


  color: '$gray500',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border:'none',
  transition: 'color 0.2s',
  cursor: 'pointer',

  svg:{
    background: '$gray800',
    border:'none',
    outline: 'none',
  },

  '&:hover':{
    color: '$gray300'
  }
})