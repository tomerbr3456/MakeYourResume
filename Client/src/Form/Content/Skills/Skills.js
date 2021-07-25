import { createUseStyles } from 'react-jss'
import { FieldArray } from 'formik';
import AddSkill from './AddSkill';
import Skill from './Skill'

const useStyles = createUseStyles({
  labelContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'start',
  },
  coTitle: {
    textAlign: 'left',
    fontSize: '2em',
    fontWeight: 700,
    marginTop: 20,
    marginBottom: 20,
  },

  skillsContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 10,
    justifyContent: 'start',
    alignItems: 'center',
  },
})

export default function Skills(props) {
  const { skills, skillToAdd, setFieldValue } = props
  const classes = useStyles()
  return (
    <>
      <div className={classes.labelContainer}>
        <div className={classes.coTitle} >{`Skills`}</div>
      </div>
      <FieldArray
        name="skills"
        render={skillsHelper => (
          <div className={classes.skillsContainer}>
            {skills.map((skill, index) => (
              <Skill
                index={index}
                skill={skill}
                skillsHelper={skillsHelper}
              />
            ))}
            <AddSkill
              skillToAdd={skillToAdd}
              setFieldValue={setFieldValue}
              skillsHelper={skillsHelper}
            />
          </div>
        )}
      />
    </>
  )
}