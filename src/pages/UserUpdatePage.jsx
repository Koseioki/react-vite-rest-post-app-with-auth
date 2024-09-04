import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdatePage() {
    const { id } = useParams();
    const [name, setName] = useState("");
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


    // const [title, setTitle] = useState("");
    // const [mail, setMail] = useState("");
    const [image, setImage] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem("users");
        const userData = JSON.parse(data) || [];
        const user = userData.find(user => user.id === id);
        setName(user.name);
        // setTitle(user.title);
        setGenre(user.genre);
        setLanguage(user.language);
        setLevel(user.level);
        setMinplayer(user.minplayer);
        setMaxplayer(user.maxplayer);
        setMinminute(user.minminute);
        setMaxminute(user.maxminute);
        setVestergade(user.vestergade);
        setFredensgade(user.fredensgade);
        setAalborg(user.aalborg);
 
        // setMail(user.mail);
        setImage(user.image);
    }, [id]);

    function handleCancel() {
        navigate(-1);
    }

    function updateUser(event) {
        event.preventDefault();
        const userToUpdate = {
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

        const data = localStorage.getItem("users");
        const usersData = JSON.parse(data) || [];


        const updatedUsers = usersData.map(user => {
            if (user.id === id){
                return {...user, ...userToUpdate};
            }
            return user;
        })

        localStorage.setItem("users", JSON.stringify(updatedUsers));
        navigate(`/users/${id}`);

    }

    return (
        <section className="page">
            <div className="container">
                <h1>Update</h1>
                <form onSubmit={updateUser}>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" value={name} placeholder="Type a name" onChange={e => setName(e.target.value)} />
                    {/* <label htmlFor="title">Title</label>
                    <input id="title" type="text" value={title} placeholder="Type a title" onChange={e => setTitle(e.target.value)} /> */}
                    <label htmlFor="genre">Genre</label>
                    <input id="genre" type="text" value={genre} placeholder="Type a genre" onChange={e => setGenre(e.target.value)} />
                    <label htmlFor="language">Language</label>
                    <input id="language" type="text" value={language} placeholder="Type a language" onChange={e => setLanguage(e.target.value)} />
                
                    <label htmlFor="level">Difficulty</label>
                    <input id="level" type="text" value={level} placeholder="Type a Difficulty" onChange={e => setLevel(e.target.value)} />
            
                    <label htmlFor="minplayer">Minimum player</label>
                    <input id="minplayer" type="text" value={minplayer} placeholder="Type a Minimum player" onChange={e => setMinplayer(e.target.value)} />
                    <label htmlFor="maxplayer">Maximum player</label>
                    <input id="maxplayer" type="text" value={maxplayer} placeholder="Type a Maximum player" onChange={e => setMaxplayer(e.target.value)} />
                    <label htmlFor="minminute">Minimum playtime</label>
                    <input id="minminute" type="text" value={minminute} placeholder="Type a Minimum playtime" onChange={e => setMinminute(e.target.value)} />
                    <label htmlFor="maxminute">Maximum playtime</label>
                    <input id="maxminute" type="text" value={maxminute} placeholder="Type a Maximum playtime" onChange={e => setMaxminute(e.target.value)} />
                    <h2>Location</h2>
                    <br />
                    <label htmlFor="vestergade">Vestergade</label>
                    <input id="vestergade" type="text" value={vestergade} placeholder="Type a place" onChange={e => setVestergade(e.target.value)} />
                    <label htmlFor="fredensgade">Fredensgade</label>
                    <input id="fredensgade" type="text" value={fredensgade} placeholder="Type a place" onChange={e => setFredensgade(e.target.value)} />
                    <label htmlFor="aalborg">Aalborg</label>
                    <input id="aalborg" type="text" value={aalborg} placeholder="Type a place" onChange={e => setAalborg(e.target.value)} />
            
                    {/* <label htmlFor="mail">Mail</label>
                    <input id="mail" type="text" value={mail} placeholder="Type a mail" onChange={e => setMail(e.target.value)} /> */}
                    <label htmlFor="url">Image URL</label>
                    <input id="url" type="url" value={image} placeholder="Paste image URL" onChange={e => setImage(e.target.value)} />
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
                        <button>Save</button>
                    </div>
                </form>
            </div>
        </section>
    );
}