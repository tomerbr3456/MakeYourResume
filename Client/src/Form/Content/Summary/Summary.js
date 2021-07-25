import { createUseStyles } from 'react-jss'
import { Field } from 'formik';
import TextAreaInput from '../../TextAreaInput';
const useStyles = createUseStyles({
  labelContainer: {
    display: 'flex',
    justifyContent: 'start',
  },
  coTitle: {
    textAlign: 'left',
    fontSize: '2em',
    fontWeight: 700,
    marginTop: 20,
    marginBottom: 20
  },
})
export default function Summary(props) {
  const { formik } = props
  const classes = useStyles()
  return (
    <>
      <div className={classes.labelContainer}>
        <div className={classes.coTitle} >{`Summary`}</div>
      </div>
      <Field as={TextAreaInput} cols={50} rows={5} formik={formik}
        name={'aboutMe'} placeholder={'About Me'} />
    </>
  )
}