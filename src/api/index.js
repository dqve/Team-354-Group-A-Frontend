import axios from "axios";

const API_BASE_URL = "";

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export function fetchExample() {
    return client.get('')
}

