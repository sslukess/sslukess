// Compontents
import { TopBar } from './components/top-bar/topBar'
import { ContentSection } from './components/content-section/ContentSection'
import { FilledBio } from './components/content-section/bio/bio'
import { ScrollingBox } from './components/scrollingBox/ScrollingBox'
import { PreviousJobs } from './components/previous-job/previousJob'

// Styles
import './App.css'

function App() {


  return (
    <>
    <TopBar/>

    <ContentSection heading="Bio">
      <FilledBio />
    </ContentSection>

    <ContentSection heading="Projects">
      <ScrollingBox />
    </ContentSection>

    <ContentSection heading="Work History">
      <PreviousJobs />
    </ContentSection>
    </>
  )
}

export default App
