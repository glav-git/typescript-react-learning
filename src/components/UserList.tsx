import React, { FC } from 'react';
import { IUser } from '../types/types'


interface UserListProps {
    users: IUser[]; // [] in this line mean "array"
}

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <div>
            {users.map(user =>
                <div key={user.id} style={{padding: 15, border: '1px solid gray'}}>
                    {user.id} {user.name} lives in {user.adress.city} city on {user.adress.street} ({user.adress.zipcode})
                </div>)}
        </div>
    );
};

export default UserList;