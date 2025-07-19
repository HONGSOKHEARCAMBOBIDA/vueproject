// src/services/branchService.js
import { api } from './axios'

export const getBranches = () => api.get('/branches')
export const createBranch = (data) => api.post('/branches', data)
export const updateBranch = (id, data) => api.put(`/branches/${id}`, data)
export const deleteBranch = (id) => api.delete(`/branches/${id}`)
