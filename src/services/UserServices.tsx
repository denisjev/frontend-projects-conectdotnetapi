import { config } from '../app.config'

export const UserService = { 
    
    getAll: async ():Promise<any> => {
        const response = await fetch(config.API_URL + 'users')
        const data = await response.json()
        return await data
    }

}