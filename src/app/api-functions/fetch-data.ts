import type { Person } from '../type'

const fetchDataFromApi = async (): Promise<Person[] | string> => {
    try {
        const url = 'http:localhost:3001/api/users'
        const headers = {
            Accept: 'application/json',
            method: 'GET',
        }
        const res = await fetch(url, { headers })
        if (!res) throw new Error('fetchData gets no res')
        const data = (await res.json()) as Person[]
        // console.log(data)
        return data
    } catch (error) {
        const err = (error as Error).message
        // console.log(err)
        return err
    }
}

export { fetchDataFromApi }
