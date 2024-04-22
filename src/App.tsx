import Demo from './components/Demo'
import Edu from './components/Edu'
import PageHeader from './components/PageHeader'
import Project from './components/Project'
import SelfEvaluation from './components/SelfEvaluation'
import WorkExperience from './components/WorkExperience'
function App() {
  return (
    <>
      <main className='pt-4 flex justify-center'>
        <div className='w-[21cm] p-[1em] rounded-md'>
          <PageHeader />
          <SelfEvaluation />
          <Project />
          <WorkExperience />
          <Edu />
          <Demo />
        </div>
      </main>
    </>
  )
}

export default App
