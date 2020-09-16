import React from 'react';
import comment from '../img/comment.svg';
import retweet from '../img/retweet.svg';
import like from '../img/like.svg';
import download from '../img/download.svg';
import verified from '../img/verified.svg';

const Post = (props) =>{
    return(
        <div className='wrapper'>
            <section className='section'>
                <img className='avatar' src={props.avatar} alt='Avatar'></img>
                <div className='post-title'>
                    <span className='author-name'>{props.name}</span>
                    <img className='verified' src={verified} alt='Verified'></img>
                    <span className='post-data'>{props.nickname} {props.date}</span>
                </div>
                <div className='content'>
                    <p className='content-text'>{props.content}</p>
                    <img className='content-image' src={props.image} alt='Image'></img>
                </div>
                <div className='footer'>
                    <div className='comment-container'>
                        <button className='comment'><img className='comment-image' src={comment} alt='Comment'></img></button>
                        <span className='comment-quan'>{props.comments}</span>
                    </div>
                    <div className='retweet-container'>
                        <button className='retweet'><img className='retweet-image' src={retweet} alt='Retweet'></img></button>
                        <span className='retweet-quan'>{props.retweets}</span>
                    </div>
                    <div className='like-container'>
                        <button className='like'><img className='like-image' src={like} alt='Like'></img></button>
                        <span className='like-quan'>{props.likes}</span>
                    </div>
                    <div className='download-container'>
                        <button className='download'><img className='download-image' src={download} alt='Download'></img></button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Post;