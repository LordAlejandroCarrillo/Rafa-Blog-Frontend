import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3000/rafaBlog/v1',
    timeout: 5000
})

export const getPublications = async (subject, category, offset) => {
    try {
        return await apiClient.get(`/publications/${subject}/${category}/${offset}`)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getPublicationById = async (id) => {
    try {
        return await apiClient.get(`/publications/search/${id}`)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getComments = async (id) => {
    try {
        return await apiClient.get(`/comments/${id}`)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const addComment = async (id, data) => {
    try {
        return await apiClient.post(`/comments/add-comment/${id}`, data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getSubjects = async () => {
    try {
        return await apiClient.get('/subjects/')
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getCategories = async () => {
    try {
        return await apiClient.get('/categories/')
    } catch (error) {
        
    }
}

export const deleteComment = async (id) => {
    try {
        return await apiClient.delete(`/comments/delete-comment/${id}`)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const updateComment = async (id, data) => {
    try {
        return await apiClient.put(`/comments/update-comment/${id}`, data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}