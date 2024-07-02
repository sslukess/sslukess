// Compontents
import { TopBar } from './components/top-bar/topBar'
import { ContentSection } from './components/content-section/ContentSection'
import { FilledBio } from './components/content-section/bio/bio'
import { ScrollingBox } from './components/scrollingBox/ScrollingBox'
import { PreviousJobs } from './components/previous-job/previousJob'
import { Educations } from './components/education/education'
import { Skills } from './components/skills/Skills'
import { Footer } from './components/footer/Footer'

// Hooks
import { useWindowWide } from './lib/hooks/useWindowSize'

// Styles
import './App.css'

function App() {

  // this hook returns true if the window width is greater than the argument.
  // we want mobile, so this is inverted with ! 
  const mobile = !useWindowWide(480);

  return (
    <div className="appWrapper">
      <TopBar />

      <ContentSection heading="Bio">
        <FilledBio />
      </ContentSection>

      <ContentSection heading="Work History">
        <PreviousJobs />
      </ContentSection>

      <ContentSection heading="Education">
        <Educations />
      </ContentSection>

      <ContentSection heading={"Projects"} decoration={`${mobile ? "scroll! ->" : ""}`}>
        <ScrollingBox />
      </ContentSection>

      <ContentSection heading="Skills">
        <Skills />
      </ContentSection>

      <Footer />
    </div>
  )
}

export default App
