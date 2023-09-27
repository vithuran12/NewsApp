import React from 'react';
import './newsitem.css'
import NewsList from './NewsList';

const NewsItem = ({title, description, url, urlToImage}) => {
  return (
    <div className='news-app'>
        <div className="news-item">
            <img className='news-img' src={urlToImage} alt={urlToImage} />
            <h3><a href={url}> {title} </a></h3>
            <p>{description}</p>
        </div>
      <NewsList/>
    </div>
  )
}

export default NewsItem