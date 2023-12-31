import React, { useEffect, useState } from "react";
import "./newsitem.css";
import axios from 'axios'

function NewsList() {
  const apiKey = '0b347172684746439219fb4e252acb18';
  const country = 'us'; 

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
      
      try{
      // Send a GET request to the API endpoint with the specified country and API key
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`)
        console.log(response)
        setArticles(response.data.articles)
      }
      catch(err){
        console.log("Error fetching articles",err);
      }
    }
    fetchData();
  }, []); 
  
  return (
    <div className="container">
      <div className="row">
        <div className="main">
          <h2>News</h2>
          <div className="maintit">
            <h1>7</h1>
            <h4>Serendib</h4>
          </div>
        </div>
        <ul>
          {articles.map((article) => (
            <li>
              <div className="title">
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </div>

              <h4>By {article.source.name}</h4>
              <p className="date">{new Date(article.publishedAt).toISOString().split('T')[0]}</p>

              <div className="imgdes">
                <img className="img" src={article.urlToImage} alt="" />
                <p className="description">{article.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NewsList;
