import { createUseStyles } from 'react-jss'
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';

const useStyles = createUseStyles({
  submitContainer: {
    position: 'fixed',
    bottom: 100,
    right: 50,
  },
  submitButton: {
    cursor: 'pointer',
    border: 'none',
    borderRadius: 30,
    backgroundColor: 'rgb(29, 111, 233)',
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    transition: 'opacity 0.3s,width 2s',
    display: 'flex',
    alignItems: 'center',
    height: 60,
    '&:hover': {
      opacity: 0.8,
    },
    '&:hover div:first-child': {
      opacity: 0.8,
      visibility: 'visible',
      width: 200
    },
  },
  submit: {
    transitionDelay: 0.2,
    transition: 'opacity .3s,width .3s,visability .3s',
    opacity: 0,
    width: 0,
    visibility: 'hidden',
    fontSize: '1.2rem',
  },
})
export default function SubmitButton() {
  const classes = useStyles()
  return (
    <div className={classes.submitContainer}>
      <button type={'submit'} className={classes.submitButton} >
        <div className={classes.submit}>{'Submit & Dowload'}</div>
        <div>
          <PlayForWorkIcon style={{ fontSize: '2.5rem' }} />
        </div>
      </button>
    </div>
  )
}