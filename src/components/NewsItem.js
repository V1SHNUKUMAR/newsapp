import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, publishedAt } = props;
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-body-secondary">
            By {author} at {publishedAt}
          </small>
        </p>
        <a href={newsUrl} className="btn btn-primary bg-dark">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
