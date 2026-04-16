import { useEffect, useRef, useState } from "react"
import { Container } from "./styles"

export const Header = () => {
  const [showHeader, setShowHeader] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll < 50) {
        setShowHeader(true)
        lastScrollY.current = currentScroll
        return
      }
      if (currentScroll > lastScrollY.current) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }
      lastScrollY.current = currentScroll
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Container className={`${showHeader ? 'show' : 'hide'}`}>
        <h1><a href="#">NØRTH WAVE</a></h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#categories">Products</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </Container>
  )
}
