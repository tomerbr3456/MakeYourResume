import { createUseStyles } from 'react-jss'
const useStyles = createUseStyles({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'start'
  },
  addBtn: {
    border: 'none',
    background: '#fff',
    width: '100%',
    borderRadius: 10,
    color: 'rgb(29, 111, 233)',
    padding: 20,
    cursor: 'pointer',
    display: 'flex',
    fontWeight: 700,
    fontSize: '1.2rem',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    transition: 'background-color .3s',
    '&:hover': {
      background: 'rgb(242, 245, 250)'
    },
  },
})
export default function AddRemBtn(props) {
  const { arrayHelpers, add, index } = props
  const classes = useStyles()

  const handleRemoveProject = () => {
    arrayHelpers.remove(index)
  }
  const handleAddProject = () => {
    arrayHelpers.push({ name: '', age: '', description: '', picture: '' })
  }
  return (
    <div className={classes.root}>
      <button
        className={classes.addBtn}
        onClick={add ? handleAddProject : handleRemoveProject}
      >
        {add ? '+ Add' : '- Remove'}
      </button>
    </div>
  )
}