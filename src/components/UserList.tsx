import React, { FC } from 'react';
import UserItem from './UserItem'
import { IUser } from '../types/types'
import { useNavigate } from 'react-router-dom';

interface UserListProps {
    users: IUser[]; // [] in this line mean "array"
}

const UserList: FC<UserListProps> = ({users}) => {
    const navigate = useNavigate()
    return (
        <div>
            {users.map(user =>
                <UserItem 
                    onClick={(user) => navigate(`/users/${user.id}`)}
                    key={user.id} 
                    user={user}
                />      
            )}
        </div>
    );
};

export default UserList;