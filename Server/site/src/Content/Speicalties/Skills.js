import { createUseStyles } from 'react-jss'
import Skill from './Skill'
const useStyles = createUseStyles({
  skillsContainer: {
    display: 'flex',
    width: '40%',
    height: '7rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '@media(max-width:600px)': {
      width: '90%',
      height: '10rem',
    }
  },
})

export default function Skills(props) {
  const { skills } = props
  const classes = useStyles()
  return (
    <div className={classes.skillsContainer}>
      {skills.map(skill => {
        return (
          <Skill key={skill}
            name={skill.name}
          />
        )
      })}
    </div>
  )
}