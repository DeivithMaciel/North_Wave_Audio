import { useEffect, useState } from "react"
import { Star } from "lucide-react"

import { getProducts } from "../../services/api"

import { Product } from "../../types/Product"
import { Container } from "./styles"


export const BestSellers = () => {
  const [products, setProducts] =useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [ error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts()
        setProducts(data.slice(0, 3))
      } catch (err) {
        setError("Erro ao carregar produtos.")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <p>Loading......</p>
  if (error) return <p>{error}</p>

  return (
    <Container>
      <section className="container">
        <h2>Our best sellers</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <h4>$ {product.price}</h4>
                <span>{product.brand}</span>
                <p>{product.description}</p>
                <div>
                  <span><Star size={16} color="#ffdd00" strokeWidth={3} />{product.rating}</span>
                  <span> / {product.reviewsCount} Reviews</span>
                </div>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  )
}
