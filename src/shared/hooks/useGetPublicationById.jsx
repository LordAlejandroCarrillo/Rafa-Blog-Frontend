import { useState } from "react"
import { getPublicationById as fetchPublication } from '../../services/api'

export const useGetPublicationById = () => {
  const [publication, setPublication] = useState(null)

  const getPublication = async (id) => {
    const response = await fetchPublication(id)
    
    const data = response.data.publication

    setPublication(data)

    return data
  }

  return {
    publication,
    getPublication
  }
}
