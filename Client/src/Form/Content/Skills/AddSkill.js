import { Field } from 'formik';
import { createUseStyles } from 'react-jss'
import BaseInput from '../../BaseInput';

const useStyles = createUseStyles({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  },
  addSkill: {
    width: '40%',
  },
  addProject: {
    border: 'none',
    background: '#fff',
    borderRadius: 10,
    padding: 20,
    marginLeft: 30,
    color: 'rgb(29, 111, 233)',
    cursor: 'pointer',
    fontWeight: 700,
    fontSize: '1.2rem',
    transition: 'background-color .3s',
    '&:hover': {
      background: 'rgb(242, 245, 250)'
    }
  },
})

export default function AddSkill(props) {
  const { skillsHelper, skillToAdd, setFieldValue } = props

  const handleAddSkill = () => {
    skillsHelper.push({ name: skillToAdd })
    setFieldValue('skillToAdd', '')
  }

  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <div className={classes.addSkill}>
          <Field as={BaseInput} id={'skills'} name={'skillToAdd'} formfield={'Name'} placeholder={'Skill'} />
        </div>
        <button
          className={classes.addProject}
          type="button"
          onClick={handleAddSkill}
        >
          {' + Add'}
        </button>
      </div>
    </>
  )
}