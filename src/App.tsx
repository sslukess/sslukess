// Compontents
import { TopBar } from './components/top-bar/topBar'
import { ContentSection } from './components/heading-section/ContentSection'
import { FilledBio } from './components/heading-section/bio/bio'

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
      <FilledBio />
    </ContentSection>

    <ContentSection heading="Work History">
      <FilledBio />
    </ContentSection>
    </>
  )
}

export default App
