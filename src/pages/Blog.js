import React, { useEffect, useState } from "react";
import { Row, Col, notification } from "antd";
import { useLocation, useParams } from "react-router-dom";
import { PostInfo } from "../Components/Home/Blog/PostInfo/PostInfo";
import { PostsListWeb} from "../Components/Home/Blog//PostsListWeb/PostsListWeb";
import { createBrowserHistory } from "history";
import { AboutCard } from "../Components/Home/AboutCard/AboutCard";
import './Blog.scss'
import { Topics } from "../Components/Home/Blog/Topics/Topics";
import { getPostApiByTopic, getPostsApi } from "../api/postApi";

export const Blog = () => {
  const location = useLocation();
  const { url } = useParams();
  const history = createBrowserHistory();
  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState(1)
  const [topic, setTopic] = useState(null)
  // Si se ha seleccionado un tema, muestra solo los paost del tema seleccionado
  useEffect(() => {
    if (!topic) {
      getPostsApi(8, page)
        .then(response => {
          if (response?.code !== 200) {
            notification["warning"]({
              message: response.message
            });
          } else {
            setPosts(response.posts);
          }
        })
        .catch(() => {
          notification["error"]({
            message: "Error del servidor."
          });
        });
    } else {
      console.log(topic)
      getPostApiByTopic(topic, 8, page)
      .then(response => {
        if (response?.code !== 200) {
          notification["warning"]({
            message: response.message
          });
        } else {
          setPosts(response.posts);
        }
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor."
        });
      });
    }
  }, [page
  , topic]);


  return (
    <Row className='blogss'>
      <Col md={1} />
      <Col md={24} className='blog-container'>
        {url ? (
          <PostInfo url={url} />
        ) : (<div className='lospost'>
          <Col md={16}>
          <PostsListWeb 
          location={location} 
          history={history}  
          posts={posts} 
          setPage={setPage}/>
          </Col>
          
      <Col md={8} className='aside'>
          <Topics 
          setPosts={setPosts} 
          page={page}
          setTopic={setTopic}
          setPage={setPage}
          />
        <AboutCard/>
      </Col>
        </div>
        )}
      </Col>
    </Row>
  );
}
