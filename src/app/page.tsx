import Header from '@/components/Header'
import { fetchDataFromApi } from './api-functions/fetch-data'
import Add from '@/components/Add'

export default async function Home() {
    const myInfo = await fetchDataFromApi()
    if (!myInfo) return null

    return (
        <main className="">
            <h1 className="text-xl">Home Page</h1>
            <br />
            <p>{JSON.stringify(myInfo)}</p>
            <Add />
        </main>
    )
}
