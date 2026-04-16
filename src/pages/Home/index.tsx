import { Header } from '../../components/Header'
import { BestSellers } from '../../sections/BestSellers'
import { Hero } from '../../sections/Hero'
import { Trust } from '../../sections/Trust'

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Trust />
      <BestSellers />
    </>
  )
}
