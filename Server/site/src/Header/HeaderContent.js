import { createUseStyles } from 'react-jss'
import siteSvg from '.././images/siteSvg.jpg'

const useStyles = createUseStyles({
  root: {
    width: '100%',
    paddingLeft: 125,
    height: '80%',
    display: 'flex',
    justifyContent: 'space-around',
    '@media(max-width:600px)': {
      flexDirection: 'column',
      paddingLeft: 30,
      paddingTop: 70,
    }
  },
  hackingImg: {
    marginTop: 100,
    backgroundImage: props => `url(${siteSvg})`,
    backgroundSize: 'contain',
    background: 'no-repeat',
    width: '50%',
    height: 400,
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'transform .3s ease-out'
    },
    '@media(max-width:600px)': {
      marginTop: 0,
      width: '80%',
      height: '60%',
    }
  },
  contentContainer: {
    paddingTop: 80,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '50%',
    justifyContent: 'center',
    '@media(max-width:600px)': {
      paddingTop: '0px',
      fontSize: '2.7rem',
      height: '40%',
      width: '90%',
      justifyContent: 'space-around',
    }
  },
  content: {
    paddingTop: '3.5rem',
    fontSize: '3.5rem',
    fontWeight: 700,
    width: '80%',
    height: '50%',
    '@media(max-width:600px)': {
      paddingTop: '0px',
      fontSize: '2.7rem',
      width: '90%',
    }
  },
  moreInfoButton: {
    fontSize: '1.5rem',
    backgroundColor: 'rgb(60, 179, 113)',
    width: '12rem',
    padding: '0.5rem',
    textAlign: 'center',
    borderRadius: '10px',
    cursor: 'pointer',
    lineHeight: 1.5,
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      opacity: 0.9
    },
    '@media(max-width:600px)': {
      marginLeft: 70,
    }
  }
})
function HeaderContent(props) {
  const { description } = props
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <div className={classes.content}>
          {description}
        </div>
        <a href={'#specialities'} className={classes.moreInfoButton}>{'More Info'}</a>
      </div>
      <div className={classes.hackingImg} />

    </div>
  )
}
export default HeaderContent