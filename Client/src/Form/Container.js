import { SubmitForm } from '../api/SubmitForm';
import { createUseStyles } from 'react-jss'
import { breakpoints } from '../global/GlobalVariables'
import View from './View';
import { downloadZip } from '../api/DownloadZip';
import Header from './Header';

const useStyles = createUseStyles({
  root: {
    width: 1530,
    display: 'flex',
    justifyContent: 'center',
    [breakpoints.sm]: {
      fontSize: '0.7rem',
      width: '100vw'
    }
  },
  FormContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '70%',
    alignContent: 'center',
    [breakpoints.sm]: {
      width: '90%'
    }
  }
})

export default function FormContainer() {
  const classes = useStyles()
  async function handleSubmit(values, setSubmitting) {
    await SubmitForm(values)
      .then(downloadZip())
    setSubmitting(false)
  }
  return (
    <>
      <div className={classes.root}>
        <div className={classes.FormContainer}>
          <Header />
          <View handleSubmit={handleSubmit} />
        </div>
      </div>
    </>
  )
}