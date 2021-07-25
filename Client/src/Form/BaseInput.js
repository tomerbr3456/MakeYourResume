import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
  input: {
    height: '70%',
    fontSize: '1.2em',
    padding: 25,
    margin: '8px 0',
    display: 'inline-block',
    border: 'none',
    borderColor: '#FFF',
    backgroundColor: 'rgb(242, 245, 250)',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  inputContainer: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    '&:focus-within $afterInput': {
      background: 'rgb(33, 150, 243)',
      transform: 'scaleX(2)',
      opacity: 1
    }
  },
  label: {
    height: '20%',
    color: 'grey'
  },
  afterInput: {
    width: '50%',
    height: 2,
    opacity: 0.5,
    left: '25%',
    bottom: 10,
    position: 'absolute',
    transition: 'width .3s ,opacity .3s,transform .3s'
  }
})

export default function BaseInput(props) {
  const { formfield, error } = props
  const classes = useStyles()
  return (
    <div className={classes.inputContainer}>
      <label className={classes.label}> {`${formfield}`}</label>
      <input
        style={{ outline: 'none', border: error ? '2px solid red' : 'none' }}
        className={classes.input}  {...props} />
      <label className={classes.afterInput} />
    </div>
  )
}