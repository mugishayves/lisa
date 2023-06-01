import Image from "next/image";
import { BsHandThumbsDownFill, BsHandThumbsUpFill, BsHeart, BsHeartFill } from "react-icons/bs";


interface PostProps {
        posterUsername: string;
        posterName: string;
        posterPic: string;
        post: string;
        reactions: Object;
        caption: string;
        comments: Object[];
}
const Post: React.FC<PostProps> = ({ posterUsername, posterName, posterPic, post, reactions, caption, comments }) => {
        return (
                <div>
                        <div
                                className="
                                relative
                                w-[100%]
                                my-4
                        ">
                                <div
                                        className="
                                        absolute
                                        right-4
                                        top-4
                                "
                                >
                                        <div
                                                className="
                                                flex
                                                flex-row
                                                gap-2
                                        "
                                        >
                                                <div
                                                        className="
                                                        text-right
                                                "
                                                >
                                                        <p className='text-xl'>{posterName}</p>
                                                        <p className='text-xs'>{posterUsername}</p>
                                                </div>
                                                <Image width={50} height={50} className="rounded-full" alt="Profile" src={posterPic} />
                                        </div>
                                </div>
                                <Image width={500} height={500} className=" w-full" alt="Profile" src={post} />
                                <div
                                        className="
                                        absolute
                                        bottom-4
                                        left-4
                                        w-[95%]
                                        flex
                                        flex-row
                                        justify-between
                                "
                                >
                                        <div
                                                className="
                                                flex
                                                flex-row
                                                items-center
                                                gap-2
                                        "
                                        >
                                                <div
                                                        className="
                                                        flex
                                                        flex-row
                                                        items-center
                                                "
                                                >
                                                        <BsHandThumbsUpFill />
                                                        <p>9k</p>
                                                </div>
                                                <div
                                                        className="
                                                        flex
                                                        flex-row
                                                        items-center
                                                "
                                                >
                                                        <BsHandThumbsDownFill />
                                                        <p>1k</p>
                                                </div>
                                                <div
                                                        className="
                                                        flex
                                                        flex-row
                                                        items-center
                                                "
                                                >
                                                        <BsHeartFill />
                                                        <p>0.9k</p>
                                                </div>
                                        </div>
                                        <div>
                                                <p>12345 comments</p>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Post