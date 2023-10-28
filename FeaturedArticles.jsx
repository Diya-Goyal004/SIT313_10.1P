import React from 'react';
import ArticleCard from './ArticleCard';
import './FeaturedArticles.css'; 
// import './FeaturedTutorials.css';

const FeaturedArticles = ({ articles }) => {
  return (
    <div className="Articles_1">
      <h2>Featured Articles</h2>
      <div className="article-list">
        {articles.map((article, index) => (
          <div key={index} className="article_box"> 
            <ArticleCard article={article}/>
          </div>
        ))}
      </div>
      <button className="see-all-tutorials">See All Articles</button>
    </div>
  );
};

export default FeaturedArticles;
