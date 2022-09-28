import React, { FC } from 'react'; 
import { IUser } from '../types/types';

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div style={{padding: 15, border: '1px solid gray', cursor: 'pointer'}} onClick={() => (onClick(user))}>
            {user.id} {user.name} lives in {user.address.city} city on {user.address.street} ({user.address.zipcode})
        </div>
    );
};

export default UserItem;