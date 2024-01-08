import Header from '@/components/Header'
import { fetchDataFromApi } from './api-functions/fetch-data'
import Add from '@/components/Add'

export default async function Home() {
    const myInfo = await fetchDataFromApi()
    if (!myInfo) return null

    return (
        <main className="">
            <Header />
            <p>Home Page of my application</p>
            <p>{JSON.stringify(myInfo)}</p>
            <Add />
        </main>
    )
}
