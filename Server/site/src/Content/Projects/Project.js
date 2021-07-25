import { createUseStyles } from 'react-jss'
const images = require.context('../../images', true)

const useStyles = createUseStyles({
  root: {
    width: 400,
    height: 400,
    display: 'flex',
    border: '1px solid white',
    flexDirection: 'column',
    justifyContent: 'space-around',
    color: 'black',
    backgroundColor: '#FFF',
    borderRadius: '10px',
    marginTop: 30,
    transition: 'transform .3s ease-in-out',
    boxShadow: '0px 2px 10px #888888',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  },
  projectImg: {
    width: '100%',
    height: '46%',
  },
  name: {
    textDecoration: 'none',
    color: 'rgb(29, 111, 233)',
    paddingLeft: 50,
    paddingTop: 15,
    fontSize: '1.5rem',
    height: '15%'
  },
  description: {
    paddingLeft: 20,
    height: '17.5%',
    fontSize: '1rem'
  },
  technology: {
    paddingLeft: 20,
    height: '17.5%',
    fontSize: '1rem'
  }
})

function Project(props) {
  let projectImg;
  const { project } = props
  projectImg = images(`./${project.name}.jpg`);
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img className={classes.projectImg} src={projectImg?.default} alt={project.name} />
      <a href={project.link} className={classes.name}>
        {project.name}
      </a>
      <div className={classes.description}>
        {project.description}
      </div>
      <div className={classes.technology}>
        {project.technology ? 'Technology: ' + project.technology : ''}
      </div>
    </div>
  )
}

export default Project;
