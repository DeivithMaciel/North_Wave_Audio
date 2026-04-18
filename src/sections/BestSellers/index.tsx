import { useEffect, useRef, useState } from "react"
import { Star } from "lucide-react"

import { getProducts } from "../../services/api"
import { Product } from "../../types/Product"
import { Container, List } from "./styles"

export const BestSellers = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [isMobile, setIsMobile] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const listRef = useRef<HTMLUListElement>(null)

  const handleScroll = () => {
    if (!listRef.current) return

    const item = listRef.current.querySelector("li")
    if (!item) return

    const gap = 16
    const width = item.clientWidth + gap
    const scrollLeft = listRef.current.scrollLeft

    const index = Math.round(scrollLeft / width)
    setActiveIndex(index)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts()
        console.log("API:", data)

        setProducts(data.slice(0, 3))
      } catch (err) {
        setError("Erro ao carregar produtos.")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <Container>
      <section className="container">
        <h2>Our best sellers</h2>

        <List
          ref={listRef}
          $isMobile={isMobile}
          onScroll={isMobile ? handleScroll : undefined}
        >
          {products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <h4>$ {product.price}</h4>
              <span>{product.brand}</span>
              <p>{product.description}</p>

              <div>
                <span>
                  <Star size={16} color="#ffdd00" strokeWidth={3} />
                  {product.rating}
                </span>
                <span> / {product.reviewsCount} Reviews</span>
              </div>
            </li>
          ))}
        </List>
      </section>
    </Container>
  )
}
