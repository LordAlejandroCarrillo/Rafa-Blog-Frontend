import { useState } from "react"
import { getPublications as fetchPublications } from '../../services/api'

export const useGetPublications = () => {
  const [publications, setPublications] = useState(null)
  const [total, setTotal] = useState(null)
  if(!localStorage.getItem("offset")){
    localStorage.setItem("offset", 0)
  }

  const getPublications = async (subject, category) => {
    const offset = parseInt(localStorage.getItem("offset")) || 0

    const response = await fetchPublications(subject,category,offset)

    const data = response.data
    setTotal(data.total)

    setPublications(data.publications)

    return data
  }

  return {
    total,
    publications,
    getPublications,
  }
}
