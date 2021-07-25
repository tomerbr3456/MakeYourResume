import reactLogo from '../../images/reactLogo.svg'
import Skills from './Skills'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
    width: '100vw',
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'black',
  },
  title: {
    marginTop: 50,
    height: '18%',
    fontSize: '3.5rem',
    fontWeight: 700,
  },
  introContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    height: '60%'
  },
  reactLogoContainer: {
    backgroundColor: 'rgb(106, 90, 205)',
    borderRadius: '50%',
    height: '6rem',
    width: '6rem',
  },
  reactLogo: {
    backgroundImage: `url(${reactLogo})`,
    height: '70%',
    width: '70%',
    margin: '1rem',
    backgroundSize: '100%',
    background: 'no-repeat',
  },
  workTitle: {
    height: '10%',
    fontSize: '2rem',
  },
})

function Spaicalties(props) {
  const { skills, jobTitle } = props
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div id={'specialities'} className={classes.title}>
        {'Specialities'}
      </div>
      <div className={classes.introContainer}>
        <div className={classes.reactLogoContainer}>
          <div className={classes.reactLogo} />
        </div>
        <div className={classes.workTitle}>
          {jobTitle}
        </div>
        <Skills skills={skills} />
      </div>
    </div>
  );
}
export default Spaicalties;
