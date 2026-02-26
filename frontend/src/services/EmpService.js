import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/emp";

export const addEmployee = (employee) => {
    return axios.post(`${API_BASE_URL}/add`, employee);
};

export const getAllEmployees = () => {
    return axios.get(API_BASE_URL);
};

export const getEmployeeById = (id) => {
    return axios.get(`${API_BASE_URL}/${id}`);
};

export const createEmployee = (employee) => {
    return axios.post(API_BASE_URL, employee);
};

export const updateEmployee = (id, employee) => {
    return axios.put(`${API_BASE_URL}/${id}`, employee);
};

export const deleteEmployee = (id) => {
    return axios.delete(`${API_BASE_URL}/${id}`);
};
