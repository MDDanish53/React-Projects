import React, { useEffect, useState } from "react";
import "./Recommended.css";
import { API_KEY, value_converter } from "../../data";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const realtedVideos_url = RELATEDVIDEOS_URL;
    await fetch(realtedVideos_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {apiData.map((video, index) => {
        return (
          <Link
            to={`/video/${video.snippet.categoryId}/${video.id}`}
            key={index}
            className="side-video-list"
          >
            <img src={video.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{video.snippet.title}</h4>
              <p>{video.snippet.channelTitle}</p>
              <p>{value_converter(video.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
