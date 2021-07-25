import BaseInput from '../../BaseInput'
import { Field } from 'formik'
import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
  formRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  helperFlexContainer: {
    width: '45%',
    display: 'flex',
    justifyContent: 'center',
  },
})

export default function FullName(props) {
  const { formik } = props
  const classes = useStyles()
  return (
    <div className={classes.formRow}>
      <div className={classes.helperFlexContainer}>
        <Field as={BaseInput} placeholder={'First Name'}
          error={formik.errors.firstName && formik.touched.firstName} name={'firstName'}
          formfield={'First Name'} />
      </div>
      <div className={classes.helperFlexContainer}>
        <Field as={BaseInput} placeholder={'Last Name'}
          error={formik.errors.lastName && formik.touched.lastName}
          name={'lastName'} formfield={'Last Name'} />
      </div>
    </div>
  )
}