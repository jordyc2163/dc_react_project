let token = '96577ebb1c9eb07293af7db401620a720b243e92217e29e0';

export const serverCalls = {

    getHeroes: async () => {
        const response = await fetch('https://dc-app-api.herokuapp.com/api/heroes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if(!response.ok){
            throw new Error('Failed to fetch data from')
        }

        return await response.json()
    },
    createHero: async (data:any = {}) => {
        const response = await fetch('https://dc-app-api.herokuapp.com/api/heroes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to create data on server')
        }

        return await response.json()
    },
    updateHero: async (id: string, data:any = {}) => {
        const response = await fetch(`https://dc-app-api.herokuapp.com/api/heroes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },
    deleteHero: async (id: string) => {
        const response = await fetch(`https://dc-app-api.herokuapp.com/api/heroes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });
        if(!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return await response.json()
    },
    getVillains: async () => {
        const response = await fetch('https://dc-app-api.herokuapp.com/api/villains', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if(!response.ok){
            throw new Error('Failed to fetch data from')
        }

        return await response.json()
    },
    createVillain: async (data:any = {}) => {
        const response = await fetch('https://dc-app-api.herokuapp.com/api/villains', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to create data on server')
        }

        return await response.json()
    },
    updateVillain: async (id: string, data:any = {}) => {
        const response = await fetch(`https://dc-app-api.herokuapp.com/api/villains/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },
    deleteVillain: async (id: string) => {
        const response = await fetch(`https://dc-app-api.herokuapp.com/api/villains/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        });
        if(!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return await response.json()
    },
}