import React from 'react';

const UsersServer = ({users}: {users: any}) => {

    return (
        <div>
            {users.map((user: any) => <li key={user.id}>{user.name}</li>)}
        </div>
    );
};

export default UsersServer;