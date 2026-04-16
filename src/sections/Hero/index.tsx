import { Container } from "./styles"

export const Hero = () => {
  return (
    <Container>
      <section className="container">
        <div>
          <h2>Beyond Sound. Enter a New Dimension.</h2>
          <h4>Experience audio redefined with cutting-edge technology, immersive depth,<br /> and precision engineered for the future.</h4>
          <span>Enter your email to get newest offers</span>
          <form>
            <input type="email" id="email" placeholder="Enter your email here"/>
            <button type="submit" >Submit</button>
          </form>
        </div>
      </section>
    </Container>
  )
}
