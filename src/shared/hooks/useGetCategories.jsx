import { useState } from "react"
import { getCategories as fetchCategories } from "../../services/api"

export const useGetCategories = () => {
  const [categories, setCategories] = useState(null)

  const getCategories = async () => {
    const response = await fetchCategories()
    
    const data = response.data.categories

    setCategories(data)

    return data
  }

  return {
    categories,
    getCategories
  }
}
