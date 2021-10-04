import client from './client'

export const login = ({username, password}:{username:string, password:string}) => {
    return client.post('/api/auth/login', {username, password})
}

export const register = ({username, password}:{username:string, password:string}) => {
    return client.post('/api/auth/register', {username, password})
}
export const check = () => client.get('/api/auth/check')

export const logout = () => client.post('/api/auth/logout')