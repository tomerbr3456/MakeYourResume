import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
  container: {
    cursor: 'pointer',
    marginLeft: '3%',
    marginBottom: 10,
    display: 'flex',
    background: 'rgb(242, 245, 250)',
    borderRadius: 30,
    transition: 'opacity .3s,color .3s,background-color .3s',
    '&:hover': {
      opacity: 0.8,
      color: 'rgb(29, 111, 233)',
      background: 'rgb(230, 244, 255)'
    }
  },
  skill: {
    fontSize: '1.3em',
    fontWeight: 400,
    marginBottom: 5,
    padding: 20
  },
  removeSkill: {
    color: 'inherit',
    background: 'none',
    border: 'none',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'background-color .3s',
  },

})

export default function Skill(props) {
  const { index, skill, skillsHelper } = props
  const handleRemoveSkill = () => {
    skillsHelper.remove(index)
  }
  const classes = useStyles()
  return (
    <div key={index} className={classes.container}>
      <div className={classes.skill}>{skill.name} </div>
      <button
        className={classes.removeSkill}
        type="button"
        onClick={handleRemoveSkill}>
        <div style={{ marginRight: 20 }} color={'action'} >{'X'}</div>
      </button>
    </div>
  )
}