import React, { useState } from 'react';

const RedditList = ({posts}) => {
    const [karma, setkarma] = useState(posts.map(() => 0));

    const handleKarmaClick = (index) => {
    const updatedKarma = [...karma];
    updatedKarma[index] += 1;
    setkarma(updatedKarma);
    };

    const redditPosts = posts.map((post, index) =>
     <div className="box"> 
            <h2>{post.title}</h2>
            
            <br></br>
            
            <h4>From user: {post.user}</h4>
            
            <br/>
            
            <p>{post.content}</p>
            
            <br/>
            
            {post.image && !post.video &&
            <embed type="image/jpg" src={post.image} width="1200" height="630"/>}
            
            {post.video &&  <video width="1200" height="630" controls>
            <source src={post.video} type="video/mp4"/></video>}
            
            <br/>
            
            <h4>
                Karma{' '}
                <button onClick={() => handleKarmaClick(index)}>↑</button>{' '}
                {post.karma + karma[index]}
            </h4>
            
            <br/>
     </div>
    )
    
    return (
        <>
        <ul>{redditPosts}</ul>
        </>
    )
}

export default RedditList;