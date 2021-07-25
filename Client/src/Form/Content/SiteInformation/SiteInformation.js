import { createUseStyles } from 'react-jss'
import BaseInput from '../../BaseInput'
import { Field } from 'formik'
import FileInput from '../../FileInput'

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

export default function SiteInformation(props) {
  const { formik } = props
  const classes = useStyles()
  const handleSubmitFile = (e) => {
    formik.setFieldValue(e.target.name, e.target.files[0])
  }
  return (
    <>
      <div className={classes.labelContainer}>
        <div className={classes.coTitle} >{`Site Information`}</div>
      </div>
      <div className={classes.formRow}>
        <div className={classes.helperFlexContainer}>
          <Field as={BaseInput} placeholder={'Site Name'}
            error={formik.errors.siteName && formik.touched.siteName} name={'siteName'}
            formfield={'Site Name'} />
        </div>
        <div className={classes.helperFlexContainer}>
          <Field as={BaseInput} placeholder={'Git Link'}
            error={formik.errors.gitLink && formik.touched.gitLink}
            name={'gitLink'} formfield={'Git Link'} />
        </div>
      </div>
      <div className={classes.formRow}>
        <div className={classes.helperFlexContainer}>
          <Field as={BaseInput} placeholder={'Linkedin'}
            error={formik.errors.linkedin && formik.touched.linkedin}
            name={'linkedin'} formfield={'Linkedin'} />
        </div>
        <div className={classes.helperFlexContainer} >
          <FileInput handleSubmitFile={handleSubmitFile} name={'siteSvg'} formik={formik} />
        </div>
      </div>
      <div className={classes.formRow}>
        <div className={classes.helperFlexContainer}>
          <Field as={BaseInput} placeholder={'Resume Link'} name={'resumeLink'}
            formfield={'Resume Link'} />
        </div>
        <div className={classes.helperFlexContainer} >
          <FileInput handleSubmitFile={handleSubmitFile} name={'siteBackground'} formik={formik} />
        </div>
      </div>
    </>
  )
}





