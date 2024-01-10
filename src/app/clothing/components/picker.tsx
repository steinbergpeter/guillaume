'use client'

import React, { useCallback, useEffect } from 'react'
import { useSearchParams, useRouter, useParams } from 'next/navigation'
import { colorList, sizeList } from '@/constants'

const Picker = () => {
    const { clothingId } = useParams()
    const router = useRouter()
    const queries = useSearchParams()
    const color: string | null = queries.get('color')
    const size: string | null = queries.get('size')

    const updateQueries = useCallback(
        (query: string, value?: string) => {
            const newQueries = new URLSearchParams(queries)
            !value ? newQueries.delete(query) : newQueries.set(query, value)
            const destination = `/clothing/${clothingId}?${newQueries.toString()}`
            router.push(destination)
        },
        [clothingId, router, queries]
    )

    useEffect(() => {
        !colorList.some((c) => c === color) && updateQueries('color')
        !sizeList.some((s) => s === size) && updateQueries('size')
    }, [color, updateQueries, size])

    return (
        <div className="flex flex-col gap-2 items-start p-6">
            <div className="flex gap-1 items-center">
                {colorList.map((col, i) => (
                    <button
                        key={i}
                        onClick={() => updateQueries('color', col ? col : '')}
                        className={`
                            border w-24 text-white px-2 py-1 rounded-xl
                            bg-${col ? col : 'gray'}-600
                            hover:bg-red-400
                            ${
                                color === col
                                    ? 'border-white'
                                    : 'border-transparent'
                            }
                        `}
                    >
                        {col ? col : 'Clear'}
                    </button>
                ))}
            </div>
            <div className="flex gap-1 items-center">
                {sizeList.map((siz, i) => (
                    <button
                        key={i}
                        onClick={() => updateQueries('size', siz ? siz : '')}
                        className={`
                            border w-24 text-white px-2 py-1 rounded-xl
                            bg-gray-600 hover:bg-gray-500
                            ${
                                size === siz
                                    ? 'border-white'
                                    : 'border-transparent'
                            }
                        `}
                    >
                        {siz ? siz : 'Clear'}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Picker
