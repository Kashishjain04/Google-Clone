const Avatar = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      className={`h-10 rounded-full cursor-pointer transform hover:scale-110 transition duration-150 ${className}`}
      src={url}
      alt="profile-pic"
    />
  );
};

export default Avatar;
