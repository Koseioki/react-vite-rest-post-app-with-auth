import {useNavigate} from "react-router-dom";

export default function User({ user }) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/users/${user.id}`)
    }

    return (
        <article className="user-card" onClick={handleClick}>
                        <h2>{user.name}</h2><br></br>
            <img src={user.image || "https://placehold.co/600x400?text=Error+loading+image"} alt={user, name} />

            {/* <p className="title">{user.title}</p> */}
            {/* <p><a href={`mailto:${user.mail}`}>{user.mail}</a></p> */}
            <p>Genre: {user.genre}</p>
            <p>Language: {user.language}</p>
            <p>Difficulty: {user.level}</p>
            <p>{user.minplayer} - {user.maxplayer} players</p>
            <p>{user.minminute} - {user.maxminute} minutes</p>
            <p>Vestergade: {user.vestergade}</p>
            <p>Fredensgade: {user.fredensgade}</p>
            <p>Aalborg: {user.aalborg}</p>
 
            {/* <button onClick={handleClick}>Read more</button> */}
        </article>
    );
}