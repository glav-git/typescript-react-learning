import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IUser } from "../types/types";


const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<{id: string}>()
    
    useEffect( () => {
        fetchUser();
    }, [])

    async function fetchUser() {
        try {
        // generic saing then in response we waiting for Users array
        const response = await axios.get<IUser | null>(`https://jsonplaceholder.typicode.com/users/${params.id}`);
        setUser(response.data);
        } catch (e) {
        alert(e);
        }
    }

    return (
        <div>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;