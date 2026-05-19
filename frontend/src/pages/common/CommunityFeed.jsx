import React, {
  useState,
  useEffect
} from "react";

import "../../index.css";

const CommunityFeed = () => {

  const [posts,
    setPosts] =
    useState([]);

  const [content,
    setContent] =
    useState("");

  const user =

    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  useEffect(() => {

    fetchPosts();

  }, []);

  const fetchPosts =
    () => {

      const savedPosts =

        JSON.parse(
          localStorage.getItem(
            "communityPosts"
          )
        ) || [];

      setPosts(savedPosts);
    };

  const handlePost =
    () => {

      if (!content.trim()) {

        return;
      }

      const newPost = {

        id: Date.now(),

        userName:
          user?.name ||

          "HER HUB User",

        content,

      };

      const updatedPosts = [

        newPost,

        ...posts,

      ];

      localStorage.setItem(

        "communityPosts",

        JSON.stringify(
          updatedPosts
        )
      );

      setPosts(
        updatedPosts
      );

      setContent("");
    };

  return (

    <div className="dashboard-page">

      <div className="dashboard-header">

        <h1>
          Community Feed 🌸
        </h1>

        <p>
          Share ideas, achievements,
          and motivate fellow homemakers.
        </p>

      </div>


      {/* CREATE POST */}

      <div className="community-create">

        <textarea

          placeholder="Share something inspiring..."

          value={content}

          onChange={(e) =>
            setContent(
              e.target.value
            )
          }
        />

        <button
          onClick={handlePost}
        >
          Post
        </button>

      </div>


      {/* POSTS */}

      <div className="community-feed">

        {posts.length === 0 ? (

          <p>
            No community posts yet.
          </p>

        ) : (

          posts.map((post) => (

            <div
              key={post.id}
              className="community-post"
            >

              <h3>
                🌸 {
                  post.userName
                }
              </h3>

              <p>
                {post.content}
              </p>

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default CommunityFeed;