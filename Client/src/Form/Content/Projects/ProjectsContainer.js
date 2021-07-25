import { createUseStyles } from 'react-jss'
import { FieldArray } from 'formik';
import AddRemBtn from './AddRemBtn';
import Project from './Project';
const useStyles = createUseStyles({
  projectContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
export default function Projects(props) {
  const { setFieldValue, projects } = props
  const classes = useStyles()
  return (
    <>
      <div className={classes.labelContainer}>
        <div className={classes.coTitle} >{`Projects`}</div>
      </div>
      <FieldArray
        name="projects"
        render={arrayHelpers => (
          <div >
            {projects.map((project, index) => (
              <div key={index} className={classes.projectContainer}>
                <Project setFieldValue={setFieldValue} project={project} index={index} />
                <AddRemBtn arrayHelpers={arrayHelpers} add={false} />
              </div>
            ))}
            <AddRemBtn arrayHelpers={arrayHelpers} add={true} />
          </div>
        )}
      />
    </>
  )
}