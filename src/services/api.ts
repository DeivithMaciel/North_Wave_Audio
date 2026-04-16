const API_URL = "https://northwaveaudio.onrender.com"

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`)

  if (!response) {
    throw new Error("Erro em buscar produtos")
  }
  return response.json()
}
