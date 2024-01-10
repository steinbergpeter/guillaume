import React from 'react'
import Picker from '../components/picker'
import Display from '../components/display'

type Props = {
    params: {
        clothingId: string
    }
}
const page = ({ params }: Props) => {
    const clothingId = params.clothingId
    return (
        <section>
            <Display />
            <Picker />
        </section>
    )
}

export default page
