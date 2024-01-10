type Props = {
    params: {
        id: string
    }
    searchParams: {
        age: number | undefined
        color: string | undefined
    }
}

export default async function PostsIDPage({ params, searchParams }: Props) {
    const id = params.id
    const age = searchParams.age ?? 'not specified'
    const color = searchParams.color ?? 'not specified'
    console.log({ searchParams: searchParams })
    return (
        <main className="">
            <h1 className="text-xl">Posts/ID Page</h1>
            <p>ID: {id}</p>
            <p>Age: {age}</p>
            <p>Color: {color}</p>
            {/* <div>{JSON.stringify()}</div> */}
        </main>
    )
}
