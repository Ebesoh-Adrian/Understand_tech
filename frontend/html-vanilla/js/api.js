// API Configuration and methods
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

class ApiService {
    constructor(baseURL = API_BASE_URL) {
        this.baseURL = baseURL;
        this.token = localStorage.getItem('token');
    }

    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const headers = {
            'Content-Type': 'application/json',
            ...options.headers,
        };

        if (this.token) {
            headers.Authorization = `Bearer ${this.token}`;
        }

        try {
            const response = await fetch(url, {
                ...options,
                headers,
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    // Terms endpoints
    async getTerms(params = {}) {
        const queryString = new URLSearchParams(params).toString();
        return this.request(`/terms/?${queryString}`);
    }

    async getTerm(id) {
        return this.request(`/terms/${id}/`);
    }

    async createTerm(data) {
        return this.request('/terms/', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    // Categories endpoints
    async getCategories() {
        return this.request('/categories/');
    }

    // Search
    async searchTerms(query) {
        return this.request('/search/', {
            method: 'POST',
            body: JSON.stringify({ query }),
        });
    }

    // Authentication
    async login(email, password) {
        const response = await this.request('/auth/login/', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });

        if (response.token) {
            this.token = response.token;
            localStorage.setItem('token', response.token);
        }

        return response;
    }

    async logout() {
        this.token = null;
        localStorage.removeItem('token');
    }
}

export default new ApiService();
