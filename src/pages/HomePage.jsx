import { useState, useEffect } from "react"
import User from "../components/User";

export default function Homepage() {

    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("");
    const [sortBy, setSortBy] = useState("name");
    // console.log(users);

    useEffect(() => {
        //fetch data from API
        // fetchUsers();

        getUsers();

        async function getUsers() {
            const data = localStorage.getItem("users");

            let usersData = [];
            // const userData = JSON.parse(data) || [];

            if (data) {
                usersData = JSON.parse(data);
            } else {
                usersData = await fetchUsers();
            }

            usersData.sort((user1, user2) => user1.name.localeCompare(user2.name));
            console.log(usersData);
            setUsers(usersData);
        }
    }, []);

    async function fetchUsers() {
        // const response = await fetch(
        //     "https://raw.githubusercontent.com/cederdorff/race/master/data/users.json"
        // );

        // const data = await response.json();

        const data = [
            {
              "id": "ZfPTVEMQKf9vhNiUh0bj",
              "image": "https://legebyen.dk/cdn/shop/products/10005_func_4_1000x.jpg?v=1653697003",
              "name": "Bezzerwizzer",
              "genre": "Trivia",
              "language": "Danish",
              "level": "Easy",
              "vestergade": "A1",
              "fredensgade": "C1",
              "aalborg": "H1",
              "minplayer": "2",
              "maxplayer": "3",
              "minminute": "40",
              "maxminute": "50"
            },
            {
              "id": "MlvJJr83C55auHLl64s7",
              "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9OGUj9rAsjPPvLwkTT0H2-nX2oSO9mDHTHg&s",
              "name": "HINT Hvid",
              "genre": "party",
              "language": "Danish",
              "level": "Easy",
              "minplayer": "4",
              "maxplayer": "10",
              "minminute": "45",
              "maxminute": "60",
              "vestergade": "A1",
              "fredensgade": "C1",
              "aalborg": "H1"
            }
            ,
            {
              "id": "aoerughvosjvsderfn",
              "image": "https://www.brettspiel-pott.de/wp-content/uploads/2023/08/b-come-together-10.jpg",
              "name": "Come Together",
              "genre": "Strategy",
              "language": "English",
              "level": "Medium",
              "minplayer": "1",
              "maxplayer": "6",
              "minminute": "60",
              "maxminute": "90",
              "vestergade": "A1",
              "fredensgade": "B1",
              "aalborg": "H2"
            }
            ,
            {
              "id": "aeorinvaerlvserdjnv",
              "image": "https://cdn.thewirecutter.com/wp-content/media/2021/07/boardgames-2048px-2233.jpg",
              "name": "Pictures",
              "genre": "party",
              "language": "English",
              "level": "Easy",
              "minplayer": "3",
              "maxplayer": "5",
              "minminute": "20",
              "maxminute": "30",
              "vestergade": "A1",
              "fredensgade": "A1",
              "aalborg": "H1"
            }
            ,
            {
              "id": "lekjrnlvnlesdrvsder",
              "image": "https://m.media-amazon.com/images/I/61KJzIVE1dL.jpg",
              "name": "Parteners+",
              "genre": "party",
              "language": "English",
              "level": "Easy",

              "minplayer": "6",
            //   "maxplayer": "",
              "minminute": "45",
              "maxminute": "60",
              "vestergade": "A1",
              "fredensgade": "A3",
              "aalborg": "I2"
            }
          ];

        localStorage.setItem("users", JSON.stringify(data));
        return data;
        // console.log(data);
        // setUsers(data);
    }

    let filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const genres = [...new Set(users.map(user => user.genre))];

    if (filter != "") {
        filteredUsers = filteredUsers.filter(user => user.genre === filter);
    }

    filteredUsers.sort((user1, user2) => user1[sortBy].localeCompare(user2[sortBy]));

    return (


        <section className="page">
            <form className="grid-filter" role="search">
                <label>
                    Search by Name <input placeholder="Search" type="search" onChange={e => setSearchTerm(e.target.value)} />
                </label>
                <label>
                    Filter by genre
                    <select onChange={e => setFilter(e.target.value)}>
                        <option value="">selecct genre</option>
                        {genres.map(genre => (
                            <option key={genre} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Sort by
                    <select name="sort-by" onChange={e => setSortBy(e.target.value)}>
                        <option value="name">Name</option>
                        <option value="minplayer">Most popular</option>
                        <option value="minminute">Newest</option>
                        <option value="level">Easiest games</option>
                        <option value="level">Most difficult games</option>


                        {/* <option value="title">Title</option> */}
                        {/* <option value="mail">Mail</option> */}
                    </select>
                </label>
            </form>
            <h1>Home Page</h1>
            <p>This is the home page.</p>

            <section className="grid">
                {filteredUsers.map(user => (
                    <User key={user.id} user={user} />
                ))}
            </section>


        </section>
    );
}

