import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  skill: {
    backgroundColor: '#1976d2',
    fontSize: '0.875rem',
    height: '1.5rem',
    marginRight: 5,
    padding: '0.6rem',
    paddingTop: 10,
    lineHeight: '1.5',
    color: '#fff',
    borderRadius: '10px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(255, 165, 0)'
    }
  },
})

export default function Skill(props) {
  const { name } = props
  const classes = useStyles()
  return (
    <div className={classes.skill} >
      {name}
    </div >
  )
}