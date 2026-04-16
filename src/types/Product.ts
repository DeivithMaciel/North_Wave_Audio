export interface Product {
  id: number
  name: string
  price: number
  categoryId: number
  description: string
  image: string
  rating: number
  reviewsCount: number
  features: string[]
  inStock: boolean
  brand: string
  createdAt: string
}
