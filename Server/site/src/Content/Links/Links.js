import { createUseStyles } from 'react-jss'
import gitIcon from '../../images/githubIcon.svg'
import linkedin from '../../images/linkdin.jpg'

const useStyles = createUseStyles({
  gitLink: {
    position: 'fixed',
    bottom: 30,
    left: 55,
    width: '3rem',
    height: '3rem',
    backgroundImage: `url(${gitIcon})`,
    backgroundSize: '100%',
    transition: 'transform .3s ease,background .3s',
    background: 'no-repeat',
    borderRadius: '50%',
    zIndex: 5,
    '&:hover': {
      transform: 'scale(1.3)'
    }
  },
  scrollTop: {
    position: 'fixed',
    bottom: 30,
    right: 80,
    width: '2rem',
    height: '2rem',
    textAlign: 'center',
    lineHeight: 1.6,
    transition: 'opacity .3s',
    zIndex: 5,
    cursor: 'pointer',
    backgroundColor: '#1976d2',
    borderRadius: '50%',
    fontSize: '1.5rem',
    color: 'black',
    padding: 5,
    textDecoration: 'none',
    '&:hover': {
      opacity: 0.8
    }
  },
  linkedin: {
    position: 'fixed',
    left: 140,
    backgroundColor: 'blue',
    bottom: 25,
    backgroundImage: `url(${linkedin})`,
    backgroundSize: '100%',
    transition: 'transform .3s ease,background .3s',
    background: 'no-repeat',
    borderRadius: '50%',
    zIndex: 5,
    width: '3.5rem',
    height: '3.5rem',
    '&:hover': {
      transform: 'scale(1.3)'
    }

  }

})

function Links(props) {
  const { linkedin, gitLink } = props

  const classes = useStyles()
  return (
    <>
      <a className={classes.gitLink} href={gitLink} >{ }</a>
      <a className={classes.scrollTop} href={'#startElement'} >{'^'}</a>
      <a className={classes.linkedin} href={linkedin}>{ }</a>
    </>
  );
}

export default Links;
