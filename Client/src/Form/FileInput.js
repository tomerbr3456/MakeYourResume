import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  fileInput: {
    display: 'none'
  },
  uploadFileInput: {
    lineHeight: 2,
    background: 'rgb(242, 245, 250)',
    width: '35%',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10,
    fontSize: '2.5rem',
    alignItems: 'center',
  },
  photo: {
    width: '50%'
  },
  uploadFileLabel: {
    width: '100%',
    color: 'rgb(33, 150, 243)',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'opacity 0.3s',
    cursor: ' pointer;',
    '&:hover': {
      opacity: 0.6
    },
  },
  displayPhoto: {
    width: 100,
    height: 100,
    borderRadius: '50%'
  }
})

export default function FileInput(props) {
  const { handleSubmitFile, name, formik, project } = props
  const classes = useStyles()
  return (
    <label className={classes.uploadFileLabel}>
      <input className={classes.fileInput} type="file" onChange={handleSubmitFile} name={name} />
      <span className={`material-icons ${classes.uploadFileInput}`}>download</span>
      {formik?.values[name] || project?.projectPic ? <img className={classes.displayPhoto}
        src={URL.createObjectURL(formik?.values[name] || project?.projectPic)} alt="" /> :
        <div className={classes.photo}>{project ? 'picture' : name}</div>}
    </label>
  )
}