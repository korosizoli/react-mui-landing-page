import { ThemeProvider } from "@mui/material"
import { theme } from "./theme"
import Topbar from "./components/Topbar/Topbar"
import Navbar from "./components/Topbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import Choose from "./components/Choose/Choose"
import Blog from "./components/Blog/Blog"
import TopButton from "./components/TopButton/TopButton"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <TopButton />
      <Topbar />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Choose />
      <Blog />
      <Footer />
    </ThemeProvider>
  )
}

export default App
