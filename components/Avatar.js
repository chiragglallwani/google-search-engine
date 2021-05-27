function Avatar({url, className}) {
    return <img loading="lazy" src={url} className={`rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-110 ${className}`} alt="profile pic"/>
}

export default Avatar
