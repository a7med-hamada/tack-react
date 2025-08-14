function UserCard({ id, name, avatar, email, onDelete }) {
return (
    <div className="relative md:w-96 mx-auto border-2 border-zinc-600 rounded-md p-3 w-full text-center shadow-2xl text-white">
        <button
            onClick={() => onDelete(id)}
            className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xl"
        >
            <i className="fa-solid fa-xmark"></i>
        </button>

        <img
            className="border-2 rounded-full mx-auto"
            src={avatar}
            alt={name}
        />
        <p className="absolute top-2 left-2 font-bold">{id}</p>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
);
}

export default UserCard;
