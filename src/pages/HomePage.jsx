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
        const response = await fetch(
            "https://raw.githubusercontent.com/cederdorff/race/master/data/users.json"
        );

        const data = await response.json();
        localStorage.setItem("users", JSON.stringify(data));
        return data;
        // console.log(data);
        // setUsers(data);
    }

    let filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const titles = [...new Set(users.map(user => user.title))];

    if (filter != "") {
        filteredUsers = filteredUsers.filter(user => user.title === filter);
    }

    filteredUsers.sort((user1, user2) => user1[sortBy].localeCompare(user2[sortBy]));

    return (


        <section className="page">
            <form className="grid-filter" role="search">
                <label>
                    Search by Name <input placeholder="Search" type="search" onChange={e => setSearchTerm(e.target.value)} />
                </label>
                <label>
                    Filter by Title
                    <select onChange={e => setFilter(e.target.value)}>
                        <option value="">selecct title</option>
                        {titles.map(title => (
                            <option key={title} value={title}>
                                {title}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Sort by
                    <select name="sort-by" onChange={e => setSortBy(e.target.value)}>
                        <option value="name">Name</option>
                        <option value="title">Title</option>
                        <option value="mail">Mail</option>
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

