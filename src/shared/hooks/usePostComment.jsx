import { useState } from "react"
import { addComment as fetchComment } from '../../services/api'

export const usePostComment = () => {
  const [comment, setComment] = useState(null)

  const addComment = async (id, data, onSuccess) => {

    const response = await fetchComment(id, data)

    const commentData = response.data

    setComment(commentData)

    if (onSuccess) onSuccess()

    return commentData
  }

  return {
    comment,
    addComment,
  }
}
