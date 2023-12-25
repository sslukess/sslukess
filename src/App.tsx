// Compontents
import { TopBar } from './components/top-bar/topBar'
import { HeadingSection } from './components/heading-section/HeadingSection'
import { FilledBio } from './components/heading-section/bio/bio'

// Styles
import './App.css'

function App() {


  return (
    <>
    <TopBar/>

    <HeadingSection heading="Bio">
      <FilledBio />
    </HeadingSection>

    <HeadingSection heading="Projects">
      <FilledBio />
    </HeadingSection>

    <HeadingSection heading="Code">
      <FilledBio />
    </HeadingSection>
    </>
  )
}

export default App
