import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    position: 'fixed',
    width: '100vw',
    height: 60,
    top: 0,
    border: isScrolledStyle => isScrolledStyle.isScrolled ? '1px solid white' : 'transparent',
    transition: `background .2s ease-in-out,border .2s ease-in-out,margin-top .1s`,
    backgroundColor: isScrolledStyle => isScrolledStyle.background,
    marginTop: isScrolledStyle => isScrolledStyle.paddingTop,
    boxShadow: isScrolledStyle => isScrolledStyle.isScrolled ? '0px 2px 10px #888888' : 'none'
  },
  catrgoriesContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    width: '20%',
    paddingLeft: 70,
    paddingTop: 30,
    '@media(max-width:600px)': {
      width: '70%',
      paddingLeft: 10,
    }
  },
  barContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  category: {
    textDecoration: 'none',
    fontSize: '1.3rem',
    paddingLeft: 20,
    height: '100%',
    letterSpacing: '-1px',
    fontWeight: 500,
    color: isScrolledStyle => isScrolledStyle.color,
    cursor: 'pointer',
    '&:hover': {
      color: 'rgba(0, 189, 120, 0.5)'
    }
  },
  contact: {
    position: 'absolute',
    top: isScrolledStyle => isScrolledStyle.isScrolled ? 13 : 5,
    transition: 'right .2s,top .1s',
    right: isScrolledStyle => isScrolledStyle.openContact ? 400 : 100,
    '@media(max-width:600px)': {
      top: isScrolledStyle => isScrolledStyle.isScrolled ? 13 : 14,
      right: isScrolledStyle => isScrolledStyle.openContact ? 100 : 20,
    }
  }
})

function AppBar(props) {
  const { isScrolled, siteName, resumeLink } = props
  const isScrolledStyle = {
    background: isScrolled ? '#fff' : 'transparent',
    color: isScrolled ? 'black' : 'white',
    paddingTop: isScrolled ? '0px' : '20px',
    isScrolled: isScrolled,
  }
  const classes = useStyles(isScrolledStyle)
  return (
    <div className={classes.root} >
      <div className={classes.barContainer}>
        <div className={classes.catrgoriesContainer}>
          <span className={classes.category}>
            {siteName}
          </span>
          <a className={classes.category} href={resumeLink}>
            {'Resume'}
          </a>
          <a href={'#projects'} className={classes.category} >
            {'Projects'}
          </a>
        </div>
      </div>
    </div>
  )
}
export default AppBar