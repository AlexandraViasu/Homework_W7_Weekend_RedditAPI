import React, { useEffect, useState} from 'react';
import RedditList from '../components/RedditList';
import ReactPaginate from 'react';


const ValheimCommunityURL = "https://www.reddit.com/r/valheim.json?raw_json=1"
const RedditContainer = () => {
    const [content, setContent] = useState();
    
    

    useEffect(() => {
        getContent();
      }, [])

    const getContent = () => {
        fetch(ValheimCommunityURL)
        .then(res => res.json())
        .then(content => setContent(content))
        .catch(err => console.error(`Loading content error: ${err}`));
    }
   
    if (content != undefined) {
        const posts = content.data.children.map(post => 
            {return {"title": post.data.title,
             "user": post.data.author,
             "content": post.data.selftext,
             "image": post.data.preview?.images[0]?.source?.url,
             "video": post.data.secure_media?.reddit_video?.scrubber_media_url,
             "karma": post.data.score}})
        return (
            <>
                <RedditList posts={posts}/>
                
                
            </>
        )
    } else {
        return 'Loading...'
    }

}

export default RedditContainer;