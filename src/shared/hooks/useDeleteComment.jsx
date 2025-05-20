import { deleteComment as fetchComment } from "../../services/api"

export const useDeleteComment = () => {

  const deleteComment = async (id) => {
    await fetchComment(id)
  }

  return {
    deleteComment
  }
}
