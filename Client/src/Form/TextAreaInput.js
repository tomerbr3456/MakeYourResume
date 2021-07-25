import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
  aboutMe: {
    boxSizing: 'border-box',
    background: 'rgb(242, 245, 250)',
    fontSize: '1.4em',
    outline: 'none',
    border: 'none',
    width: '100%',
    padding: 15
  },
})
export default function TextAreaInput(props) {
  const { formik } = props
  const classes = useStyles()
  return (
    <textarea className={classes.aboutMe} cols={50} rows={5}
      style={{
        resize: 'none',
        border: (formik.errors.aboutMe && formik.touched.aboutMe) ? '2px solid red' : 'none'
      }} name={'aboutMe'} placeholder={'About Me'} {...props} />

  )
}