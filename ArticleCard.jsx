import React from 'react';

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <img style={{width:200}} src={article.image} alt={article.title}/>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <div className="article-footer">
        <div className="article-rating">
          {article.rating} {/* Display the star rating */}
        </div>
        <p className="author">By {article.author}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
