import React from 'react';

const Link = ({route}) => {
    return (
        <div>
<li className='mr-10 hover:bg-purple-400 p-2'>
    <a href={route.path}>{route.name}</a></li>            
        </div>
    );
};

export default Link;