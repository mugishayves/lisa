import Post from "./Post"

const Posts = () => {
        return (
                <div
                        className="
                                w-full
                                flex
                                flex-col
                                items-center
                                flex-wrap
                        "
                >
                        <Post posterPic="/images/placeholder.jpg" posterName="Mugisha Yves" posterUsername="@broony189" post="/images/post.png" />
                        <Post posterPic="/images/placeholder.jpg" posterName="Mugisha Yves" posterUsername="@broony189" post="/images/post.png" />
                        <Post posterPic="/images/placeholder.jpg" posterName="Mugisha Yves" posterUsername="@broony189" post="/images/post.png" />
                        <Post posterPic="/images/placeholder.jpg" posterName="Mugisha Yves" posterUsername="@broony189" post="/images/post.png" />
                        <Post posterPic="/images/placeholder.jpg" posterName="Mugisha Yves" posterUsername="@broony189" post="/images/post.png" />
                </div>
        )
}

export default Posts