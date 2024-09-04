import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
    const [name, setName] = useState("");
    // const[title, setTitle] = useState("");
    // const[mail, setMail] = useState("");
    const [image, setImage] = useState("");
    const [genre, setGenre] = useState("");
    const [language, setLanguage] = useState("");
    const [level, setLevel] = useState("");
    const [minplayer, setMinplayer] = useState("");
    const [maxplayer, setMaxplayer] = useState("");
    const [minminute, setMinminute] = useState("");
    const [maxminute, setMaxminute] = useState("");
    const [vestergade, setVestergade] = useState("");
    const [fredensgade, setFredensgade] = useState("");
    const [aalborg, setAalborg] = useState("");

    const navigate = useNavigate();
    function handleCancel() {
        navigate(-1);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newUser = {
            id: Date.now().toString(),
            name: name,
            genre: genre,
            language: language,
            level: level,
            minplayer: minplayer,
            maxplayer: maxplayer,
            minminute: minminute,
            maxminute: maxminute,
            vestergade: vestergade,
            fredensgade: fredensgade,
            aalborg: aalborg,
            // title: title,
            // mail: mail,
            image: image
        };

        console.log(newUser)

        const data = localStorage.getItem("users");
        const userData = JSON.parse(data) || [];

        userData.push(newUser);
        localStorage.setItem("users", JSON.stringify(userData));

        navigate("/");

    }

    return (
        <div className="page">
            <h1>Create Page</h1>
            <p>This is the create page.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Type a name" onChange={e => setName(e.target.value)} />

                <label htmlFor="genre">Genre</label>
                <input id="genre" type="text" placeholder="Type a genre" onChange={e => setGenre(e.target.value)} />
                <label htmlFor="language">Language</label>
                <input id="language" type="text" placeholder="Type a language" onChange={e => setLanguage(e.target.value)} />

                <label htmlFor="level">Difficulty</label>
                <input id="level" type="text" placeholder="Type a Difficulty" onChange={e => setLevel(e.target.value)} />

                <label htmlFor="minplayer">Minimum player</label>
                <input id="minplayer" type="text" placeholder="Type a Minimum player" onChange={e => setMinplayer(e.target.value)} />
                <label htmlFor="maxplayer">Maximum player</label>
                <input id="maxplayer" type="text" placeholder="Type a Maximum player" onChange={e => setMaxplayer(e.target.value)} />
                <label htmlFor="minminute">Minimum playtime</label>
                <input id="minminute" type="text" placeholder="Type a Minimum playtime" onChange={e => setMinminute(e.target.value)} />
                <label htmlFor="maxminute">Maximum playtime</label>
                <input id="maxminute" type="text" placeholder="Type a Maximum playtime" onChange={e => setMaxminute(e.target.value)} />
                <h2>Location</h2>
                <br />
                <label htmlFor="vestergade">Vestergade</label>
                <input id="vestergade" type="text" placeholder="Type a place" onChange={e => setVestergade(e.target.value)} />
                <label htmlFor="fredensgade">Fredensgade</label>
                <input id="fredensgade" type="text" placeholder="Type a place" onChange={e => setFredensgade(e.target.value)} />
                <label htmlFor="aalborg">Aalborg</label>
                <input id="aalborg" type="text" placeholder="Type a place" onChange={e => setAalborg(e.target.value)} />

                {/* <label htmlFor="title">Title</label>
                <input id="title" type="text" placeholder="Type a title" onChange={e => setTitle(e.target.value)}/>
                <label htmlFor="mail">Mail</label>
                <input id="mail" type="text" placeholder="Type a mail" onChange={e => setMail(e.target.value)}/> */}
                <label htmlFor="url">Image URL</label>
                <input id="url" type="url" placeholder="Paste image URL" onChange={e => setImage(e.target.value)} />
                <label htmlFor="image-preview"></label>
                <img
                    id="image-preview"
                    className="imagePreview"
                    src={image ? image : "https://placehold.co/600x400?text=Paste+an+image+URL"}
                    alt="Choose"
                    onError={e => (e, target.src = "https://placehold.co/600x400?text=Error+loading+image")}
                />
                <div className="btns">
                    <button type="button" className="btn-cancel" onClick={handleCancel}>
                        Cancel
                    </button>
                    <button onClick={handleSubmit}>Create</button>
                </div>
            </form>
        </div>
    );
}