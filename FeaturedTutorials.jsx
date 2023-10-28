import React from 'react';
import './FeaturedTutorials.css'; // Import CSS file for styling

const FeaturedTutorials = ({ tutorials }) => {
  return (
    <div className="featured-tutorials">
      <h2>Featured Tutorials</h2>
      <div className="tutorial-list">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="tutorial-card">
            <img src={tutorial.image} alt={tutorial.title} />
            <h3>{tutorial.title}</h3>
            <p>{tutorial.description}</p>
            <div className="tutorial-footer">
              <div className="tutorial-rating">{tutorial.rating}</div>
              <p className="author">By {tutorial.author}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="see-all-tutorials">See All Tutorials</button>
    </div>
  );
};

export default FeaturedTutorials;
