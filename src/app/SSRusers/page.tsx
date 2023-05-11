import React from 'react';
import Users from '@/components/Users';
import { store } from '@/store';

const SSRUsers = () => {
    const users = store.getState().search.startupUsers;
    return (
        <div>
            <Users users={users} />
        </div>
    );
};

export default SSRUsers;