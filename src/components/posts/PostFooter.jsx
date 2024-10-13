import { useState } from "react";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/icons";
const PostFooter = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    if (!liked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex gap-4 mb-3">
        <div className="cursor-pointer " onClick={handleLike}>
          {" "}
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}{" "}
        </div>
        <div>
          <CommentLogo />
        </div>
      </div>
      <span className="text-black font-medium text-[14px] md:text-[16px]">
        {likes} likes
      </span>
      <p className="flex gap-2 text-black text-[14px] md:text-[16px]">
        <span className="font-medium">its_me_hossein</span>
        <span>pro</span>
      </p>
      <p className="text-gray-400 text-[14px] md:text-[16px]">
        View all 1000 comments
      </p>
      <div className="w-full flex items-center justify-between relative">
        <input type="text" placeholder="Add a comment..." className="w-full text-[14px] md:text-[16px] bg-transparent outline-0 text-gray-400 border-b-2 border-gray-400 focus:border-b-[#4cb5f7] duration-500 py-2 pr-16"  />
        <button className="absolute text-[12px] md:text-[16px] right-2 text-[#4cb5f7] hover:text-black duration-100">Post</button>
      </div>
    </div>
  );
};

export default PostFooter;
