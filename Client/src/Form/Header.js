import { createUseStyles } from 'react-jss'
import { breakpoints } from '../global/GlobalVariables'
const useStyles = createUseStyles({
  drawerPaper: {
    height: '30px'
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5em',
    fontWeight: 700,
    [breakpoints.sm]: {
      fontSize: '2em',
    }
  },
})
export default function Header() {
  const classes = useStyles()
  return (
    <>
      <div className={classes.drawerPaper} />
      <div className={classes.title}>
        {'Add Your Site Details'}
      </div>
    </>
  )
}