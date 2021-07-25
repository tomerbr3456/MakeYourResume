import { createUseStyles } from 'react-jss'
import FullName from './FullName'
import JobAndPhoto from './JobAndPhoto'
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

export default function PersonalDetailsView(props) {
  const { formik } = props
  const classes = useStyles()
  return (
    <>
      <div className={classes.labelContainer}>
        <div className={classes.coTitle} >{`Personal Details`}</div>
      </div>
      <JobAndPhoto formik={formik} />
      <FullName formik={formik} />
    </>
  )
}