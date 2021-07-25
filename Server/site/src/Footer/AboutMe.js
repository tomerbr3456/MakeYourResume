import { createUseStyles } from 'react-jss'
import myPicture from '.././images/yourPhoto.jpg'
const useStyles = createUseStyles({
  root: {
    width: '100vw',
    marginBottom: 100,
    paddingTop: 50,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    color: 'black',
  },
  photo: {
    zIndex: 6,
    position: 'absolute',
    backgroundImage: `url(${myPicture})`,
    backgroundSize: 'cover',
    background: 'no-repeat',
    width: 150,
    height: 150,
    borderRadius: '50%',
    right: 250,
    top: 60,
    transition: 'transform .3s',
    '&:hover': {
      transform: 'scale(1.2)'
    },
    '@media(max-width:600px)': {
      width: 70,
      height: 70,
      right: 15,
      top: 150
    }

  },
  title: {
    height: '18%',
    fontSize: '3.5rem',
  },
  content: {
    height: '60%',

    width: '50%',
    fontSize: '1.3rem',
    fontWeight: 400,
  }
})

function AboutMe(props) {
  const { aboutMe } = props
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <div className={classes.title}>
          {'About Me'}
        </div>
        <div className={classes.photo} />
        <div className={classes.content}>
          {aboutMe}
        </div>

      </div>
    </>
  );
}

export default AboutMe;
