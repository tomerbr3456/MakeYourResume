import { createUseStyles } from 'react-jss'
import { Field } from 'formik';
import BaseInput from '../../BaseInput';

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
export default function Openning(props) {
  const { formik } = props
  const classes = useStyles()
  return (
    <>
      <div className={classes.labelContainer}>
        <div className={classes.coTitle} >{`Openning About Your Site`}</div>
      </div>
      <Field as={BaseInput} placeholder={'Description'}
        error={formik.errors.description && formik.touched.description}
        name={'description'} formfield={'Description'} />
    </>
  )
}