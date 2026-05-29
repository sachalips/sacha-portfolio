import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Parcours from '@/components/Parcours'
import Experiences from '@/components/Experiences'
import Projects from '@/components/Projects'
import Videos from '@/components/Videos'
import Ecommerce from '@/components/Ecommerce'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Parcours />
        <Experiences />
        <Projects />
        <Videos />
        <Ecommerce />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
