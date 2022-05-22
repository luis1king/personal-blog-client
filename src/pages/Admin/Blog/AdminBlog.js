import React, { useState, useEffect } from "react";
import { Button, notification } from "antd";
import { Modals } from "../../../Components/Admin/UserList/Modal/Modals";
import { getPostsApi } from "../../../api/postApi";
import "./Blog.scss";
import { AddEditPostForm } from "../../../Components/Admin/Blog/AddPostForm/AddEditPostForm";
import { PostsList } from "../../../Components/Admin/Blog/PostList/PostsList";
import { Paginations } from "../../../Components/Pagination/Paginations";
import { useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";

export const AdminBlog = () => {

  const [posts, setPosts] = useState(null);
  const [reloadPosts, setReloadPosts] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const [page, setPage] = useState(1)
  const location = useLocation()
  const history = createBrowserHistory();
  //const { page = 1 } = queryString.parse(location.search);

  useEffect(() => {
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
    setReloadPosts(false);
  }, [page, reloadPosts]);

  const addPost = () => {
    setIsVisibleModal(true);
    setModalTitle("Creando nuevo post");
    setModalContent(
      <AddEditPostForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadPosts={setReloadPosts}
        post={null}
      />
    );
  };

  const editPost = post => {
    setIsVisibleModal(true);
    setModalTitle("Editar post");
    setModalContent(
      <AddEditPostForm
        setIsVisibleModal={setIsVisibleModal}
        setReloadPosts={setReloadPosts}
        post={post}
      />
    );
  };

  if (!posts) {
    return null;
  }

  return (
     <div className="blog">
      <div className="blog__add-post">
        <Button type="primary" onClick={addPost}>
          Nuevo post
        </Button>
      </div>
      <PostsList
        posts={posts}
        setReloadPosts={setReloadPosts}
        editPost={editPost}
      />
      <Paginations posts={posts} location={location} history={history} setPage={setPage} />
      <Modals
        title={modalTitle}
        isVisibleModal={isVisibleModal}
        setIsVisibleModal={setIsVisibleModal}
        width="75%"
      >
        {modalContent}
      </Modals>
    </div>
  )
}
