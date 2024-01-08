'use client'

import { addPerson } from '@/app/api-functions/add-person'
import { Person } from '@/app/type'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const Add = () => {
    const defaultPerson: Person = {
        name: '',
        age: 0,
    }

    const [personVals, setPersonVals] = useState(defaultPerson)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setPersonVals((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const res = await addPerson(personVals)
        console.log({ res })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="name"
                name="name"
                value={personVals.name}
                onChange={handleChange}
                className="text-black"
            />
            <input
                type="number"
                placeholder="age"
                name="age"
                value={personVals.age}
                onChange={handleChange}
                className="text-black"
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Add
