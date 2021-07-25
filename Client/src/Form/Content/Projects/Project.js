import { createUseStyles } from 'react-jss'
import { Field } from 'formik';
import BaseInput from '../../BaseInput'
import FileInput from '../../FileInput'
const useStyles = createUseStyles({
  formRow: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },
  helperFlexContainer: {
    width: '45%',
    display: 'flex',
    justifyContent: 'center',

  },
})
export default function Project(props) {
  const classes = useStyles()
  const { project, setFieldValue, index } = props
  const handleSubmitFile = (e) => {
    setFieldValue(`projects.${index}.projectPic`, e.target.files[0])
  }
  return (
    <>
      <div className={classes.formRow}>
        <div className={classes.helperFlexContainer}>
          <Field as={BaseInput} placeholder={'Link'}
            name={`projects.${index}.link`} formfield={'Link'} />
        </div>
        <div className={classes.helperFlexContainer}>
          <Field as={BaseInput} placeholder={'Name'}
            name={`projects[${index}].name`} formfield={'Name'} />
        </div>
      </div>
      <div className={classes.formRow}>
        <div className={classes.helperFlexContainer} >
          <FileInput handleSubmitFile={handleSubmitFile} name={`projects.${index}.projectPic`} project={project} />
        </div>
        <div className={classes.helperFlexContainer}>
          <Field as={BaseInput} placeholder={'Description'}
            name={`projects.${index}.description`}
            formfield={'Description'} />
        </div>
      </div>
    </>
  )
}


