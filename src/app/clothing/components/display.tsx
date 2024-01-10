'use client'

import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'

const Display = () => {
    const { clothingId } = useParams()
    const queries = useSearchParams()
    const color: string | null = queries.get('color')
    const size: string | null = queries.get('size')
    let content: string
    if (!color && !size) {
        content = `
            You are looking for a ${clothingId}.
            Please select a color and a size below.
            `
    } else if (!color) {
        content = `
            You are looking for a ${size} ${clothingId}.
            Please select a color below.
            `
    } else if (!size) {
        content = `
        You are looking for a ${color} ${clothingId}.
        Please select a size below.
        `
    } else {
        content = `
        You are looking for a ${size} ${color} ${clothingId}.
        `
    }
    return <div className="flex w-1/3 justify-between mb-6">{content}</div>
}

export default Display
