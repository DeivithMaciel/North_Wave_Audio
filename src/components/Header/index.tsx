import { Container } from "./styles"

export const Header = () => {
  return (
    <Container>
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
