import React from 'react';


const Card=({id,name,email,username})=>{
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200*200`}/>
            <div>
                <p>{name}</p>
                <p>{email}</p>
                <p>{username}</p>
            </div>
        </div>
    );
}

export default Card