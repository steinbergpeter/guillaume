import type { Person } from '../type'

const fetchDataFromApi = async (): Promise<Person[] | string> => {
    try {
        const res = await fetch('http://localhost:3001/api/users', {
            headers: {
                Accept: 'application/json',
                method: 'GET',
            },
        })
        if (!res) throw new Error('fetchData gets no res')
        const data = (await res.json()) as Person[]
        return data
    } catch (error) {
        return (error as Error).message
    }
}

export { fetchDataFromApi }
