import { AudioLines, EarOff, Headphones, Volume2 } from "lucide-react"

import { Container } from "./styles"

export const Trust = () => {
  return (
    <Container>
      <section className="container">
        <h2>Why choose NØRTH WAVE?</h2>
        <ul>
          <li>
            <AudioLines size={48}/>
            <h3>Immersive Sound</h3>
            <p>Feel every beat with deep bass and crystal-clear highs, engineered for total audio immersion.</p>
          </li>
          <li>
            <EarOff  size={48}/>
            <h3>Noise Cancellation</h3>
            <p>Block out the world and focus on what matters with next-generation noise control technology.</p>
          </li>
          <li>
            <Volume2  size={48}/>
            <h3>Ultra Performance</h3>
            <p>Seamless audio with zero delay — perfect for gaming, streaming, and real-time experiences.</p>
          </li>
          <li>
            <Headphones  size={48}/>
            <h3>Premium Comfort</h3>
            <p>Lightweight materials and ergonomic design built for hours of uninterrupted listening.</p>
          </li>
        </ul>
      </section>
    </Container>
  )
}
