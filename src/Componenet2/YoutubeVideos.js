import React, { useState, useEffect } from "react";

function YoutubeVideos() {
  const [videos, setVideos] = useState([]); // Use a lower case for consistency

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          "https://www.googleapis.com/youtube/v3/search?key=%20AIzaSyBHpyFLTh5pYMtwCNQqcg2Cb2dv183-NCE%20&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
        );

        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }

        const data = await response.json();
        setVideos(data.items || []); // Set to empty array if items is undefined

      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section>
      <div className="row justify-content-center">
        {videos.map((singleVideo, i) => {
          const vidId = singleVideo.id?.videoId; // Optional chaining to safely access videoId
          if (!vidId) return null; // Skip if videoId is not present

          const vidLink = `https://www.youtube.com/watch?v=${vidId}`;
          const { title, thumbnails } = singleVideo.snippet;

          return (
            <div key={i} className="col-sm-12 col-md-4">
              <div className="singleVideoWrapper">
                <a href={vidLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={thumbnails.high.url}
                    alt={title}
                    className="videoThumbnail"
                  />
                </a>
                <div className="videoInfoWrapper">
                  <a href={vidLink} target="_blank" rel="noopener noreferrer">
                    <div className="videoTitle">{title}</div>
                  </a>
                  <div className="videoDesc">
                    {singleVideo.snippet.description}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default YoutubeVideos;
 