import './App.css';
import Header from './Header/Header';
import Speicalties from './Content/Speicalties/Speicalties';
import Links from './Content/Links/Links';
import Projects from './Content/Projects/Projects'
import AboutMe from './Footer/AboutMe';
import siteDetails from './global/siteDetails'

function App() {
  return (
    <div id={'startElement'} >
      {(siteDetails.description && siteDetails.siteName && siteDetails.siteSvg) ? <Header siteSvg={siteDetails.siteSvg} description={siteDetails.description} siteName={siteDetails.siteName} resumeLink={siteDetails.resumeLink} /> : null}
      {(siteDetails.skills && siteDetails.jobTitle) ? <Speicalties skills={siteDetails.skills} jobTitle={siteDetails.jobTitle} /> : null}
      {(siteDetails.gitLink && siteDetails.linkedin) ? <Links gitLink={siteDetails.gitLink} linkedin={siteDetails.linkedin} /> : null}
      {siteDetails.projects ? <Projects projects={siteDetails.projects} /> : null}
      {siteDetails.aboutMe ? <AboutMe aboutMe={siteDetails.aboutMe} /> : null}
    </div>
  );
}

export default App;
