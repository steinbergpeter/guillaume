import { Person } from '../type'

const addPerson = async (person: Person): Promise<string> => {
    try {
        const input = 'http://localhost:3001/api/users'
        const init = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(person),
        }
        const res = await fetch(input, init)
        if (!res) throw new Error('addPerson gets no res')
        return res.json()
    } catch (error) {
        const err = (error as Error).message
        console.log(err)
        return err
    }
}

export { addPerson }
