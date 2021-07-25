import background from '.././images/siteBackGroundImg.jpg'
import AppbBar from './AppBar'
import { createUseStyles } from 'react-jss'
import { useEffect, useState } from 'react'
import HeaderContent from './HeaderContent'

const useStyles = createUseStyles({
  img: {
    backgroundImage: `url(${background})`,
    position: 'relative',
    backgroundSize: 'cover',
    background: 'no-repeat',
    width: '100vw',
    height: '800px',
    display: 'flex',
    '@media (max-width: 600px)': {
      flexDirection: 'column'
    }
  },
})
function Header(props) {
  const { description, siteName, siteSvg, resumeLink } = props
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (event) => {
    if (window.scrollY > 10)
      setIsScrolled(true)
    else
      setIsScrolled(false)
  }

  const classes = useStyles()
  return (
    <div>
      <div className={classes.img} >
        <HeaderContent description={description} siteSvg={siteSvg} />
      </div>
      <AppbBar isScrolled={isScrolled} siteName={siteName} resumeLink={resumeLink} />
    </div>
  )
}
export default Header