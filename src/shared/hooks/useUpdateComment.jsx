import { updateComment as fetchComment } from '../../services/api'

export const useUpdateComment = () => {

  const updateComment = async (id, data) => {
    await fetchComment(id, data)
  }

  return {
    updateComment,
  }
}
