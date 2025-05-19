import { useState } from "react"
import { getSubjects as fetchSubjects } from '../../services/api'

export const useGetSubjects = () => {
  const [subjects, setSubjects] = useState(null)

  const getSubjects = async () => {

    const response = await fetchSubjects()

    const data = response.data.subjects

    setSubjects(data)

    return data
  }

  return {
    subjects,
    getSubjects
  }
}