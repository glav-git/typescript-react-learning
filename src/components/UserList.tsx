import React, { FC } from 'react';
import UserItem from './UserItem'
import { IUser } from '../types/types'

interface UserListProps {
    users: IUser[]; // [] in this line mean "array"
}

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <div>
            {users.map(user =>
                <UserItem key={user.id} user={user}/>      
            )}
        </div>
    );
};

export default UserList;