import { createUseStyles } from 'react-jss'
import BaseInput from '../../BaseInput'
import FileInput from '../../FileInput'
import { Field } from 'formik'

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

export default function JobAndPhoto(props) {
  const classes = useStyles()
  const { formik } = props
  const handleSubmitFile = (e) => {
    formik.setFieldValue('yourPhoto', e.target.files[0])
  }

  return (
    <div className={classes.formRow}>
      <div className={classes.helperFlexContainer}>
        <Field as={BaseInput} placeholder={'Job Title'}
          error={formik.errors.jobTitle && formik.touched.jobTitle}
          name={'jobTitle'} formfield={'Job Title'} />
      </div>
      <div className={classes.helperFlexContainer} >
        <FileInput handleSubmitFile={handleSubmitFile} name={'yourPhoto'} formik={formik} />
      </div>
    </div>
  )
}