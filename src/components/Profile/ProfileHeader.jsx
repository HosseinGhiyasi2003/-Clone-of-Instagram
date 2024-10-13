import postImg from "../../../public/post.jpg";

const ProfileHeader = () => {
  return (
    <div className="w-full">
      <div className="flex gap-4 w-full">
        <img
          src={postImg}
          className="w-[100px] h-[100px] rounded-[50%]"
          alt=""
        />
        <div className="flex flex-col text-black">
          <div className="flex items-center gap-4">
            <h3 className="text-[12px] md:text-[16px]">its_me_hossein</h3>
            <button className="bg-[#5cacd1] hover:bg-[#1e7096] text-black text-[12px] md:text-[16px] p-1 rounded-md font-medium duration-200 px-2">
              Edit Profile
            </button>
          </div>
          <div className="flex gap-2 mt-6 text-[12px]">
            <p className="font-normal flex gap-1">
              <span className="font-medium">4</span>posts
            </p>
            <p className="font-normal flex gap-1">
              <span className="font-medium">149</span>Followers
            </p>
            <p className="font-normal flex gap-1">
              <span className="font-medium">175</span>Following
            </p>
          </div>
        </div>
      </div>
          <p className="mt-7 mb-3 text-[12px] text-black font-medium">
            I am a programmer
          </p>
    </div>
  );
};

export default ProfileHeader;
