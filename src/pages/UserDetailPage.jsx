import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import User from "../components/User";

export default function UpdatePage() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem("users");
        const userData = JSON.parse(data) || [];
        const user = userData.find(user => user.id === id);
        console.log(user);
        setUser(user);
    }, [id]);

    function showDeleteDialog() {
        const shouldDelete = window.confirm(`Do you want to delete "${user.name}"?`);
        if (shouldDelete) {
            deleteUser();
        }
    }

    async function deleteUser() {
        const data = localStorage.getItem("users");
        const usersData = JSON.parse(data) || [];
        const updatedUsers = usersData.filter(user => user.id !== id);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        navigate("/");
    }

    function showUpdate() {
        navigate(`/users/${id}/update`);
    }

    return (
        <div id="user-page" className="page">
            <div className="container">
                <h1>{user.name}</h1>
                <User user={user} />
                <div className="btns">
                    <button className="btn-cancel" onClick={showDeleteDialog}>Delete game</button>
                    <button onClick={showUpdate}>Edit game</button>
                </div>
            </div>
        </div>
    )
}