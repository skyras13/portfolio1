import styles from './styles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Experience from './pages/Experience'

const App = () => (
  <Router>
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path='/' element={<AboutMe />} />{' '}
        <Route path='/projects' element={<Projects />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  </Router>
)

export default App
