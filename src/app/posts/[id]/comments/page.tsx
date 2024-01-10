type Props = {
    params: {
        id: string
    }
}

export default async function CommentsPage(props: Props) {
    const id = props.params.id
    return (
        <main className="">
            <h1 className="text-xl">Post-Comments Page</h1>
            <p>ID: {id}</p>
        </main>
    )
}
