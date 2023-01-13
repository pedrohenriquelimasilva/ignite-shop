import { styled } from "..";

export const SuccessContainer = styled('main', {
  height: 656,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  h1:{
    marginTop: '2.5rem',
    fontSize: '$2xl',
    color: '$gray100'
  },

  p:{
    marginTop: '2rem',
    color: '$gray300',
    fontSize: '$xl',
    lineHeight: 1.4,
    textAlign: 'center',
    maxWidth: 590
  },

  a:{
    marginTop: '5rem',
    fontSize: '$lg',
    display: 'block',
    fontWeight: 'bold',
    color: '$green500',
    textDecoration: 'none',
    transition: 'color 0.2s',

    '&:hover':{
      textDecoration: 'underline',
      color: '$green300',
    }
  },

  section:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  }
})
export const ImageContent = styled('div', {
  borderRadius: '100%',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  padding: '0.25rem',
  width: '100%',
  maxWidth: 140,
  height: 140,
  marginTop: '4rem',
  boxShadow:'0px 0px 60px rgba(0,0,0,0.8)',


  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img:{
    objectFit: 'cover',
  },

  '& + &':{
    marginLeft:'-3.25rem'
  }
})