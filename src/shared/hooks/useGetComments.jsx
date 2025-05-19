import { useState } from "react"
import { getComments as fetchComments } from "../../services/api"

export const useGetComments = () => {
  const [comments, setComments] = useState(null)

  const getComments = async (id) => {
    const response = await fetchComments(id)
    
    const data = response.data.comments

    setComments(data)

    return data
  }

  return {
    comments,
    getComments
  }
}
