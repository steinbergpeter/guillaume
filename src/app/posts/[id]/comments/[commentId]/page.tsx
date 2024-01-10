type Props = {
    params: {
        id: string
        commentId: string
    }
}

export default async function CommentIDPage(props: Props) {
    const id = props.params.id
    const commentId = props.params.commentId
    return (
        <main className="">
            <h1 className="text-xl">Post-Comments ID Page</h1>
            <p>ID: {id}</p>
            <p>Comment ID: {commentId}</p>
        </main>
    )
}
