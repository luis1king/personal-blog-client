import React from "react";
import { Link } from "react-router-dom";
import { List, Button, Modal, notification } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { deletePostApi } from "../../../../api/postApi";

import "./PostsList.scss";


export const PostsList = (props) => {
  const { confirm } = Modal;
  const { posts, setReloadPosts, editPost } = props;
  const accessToken = localStorage.getItem('token');
  

  const deletePost = post => {
    confirm({
      title: "Eliminando post",
      content: `¿Estas seguro de eliminar el post ${post.title}?`,
      okText: "Eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        deletePostApi(accessToken, post._id)
          .then(response => {
            const typeNotification =
              response.code === 200 ? "success" : "warning";
            notification[typeNotification]({
              message: response.message
            });
            setReloadPosts(true);
          })
          .catch(() => {
            notification["error"]({
              message: "Error del servidor."
            });
          });
      }
    });
  };

  return (
    <div className="posts-list">
      <List
        dataSource={posts.docs}
        renderItem={post => (
          <Post post={post} deletePost={deletePost} editPost={editPost} />
        )}
      />
    </div>
  );
}

function Post(props) {
  const { post, deletePost, editPost } = props;

  return (
    <List.Item
      actions={[
        <Link to={`/blog/${post.url}`} target="_blank">
          <Button type="primary">
          <EyeOutlined />
          </Button>
        </Link>,
        <Button type="primary" onClick={() => editPost(post)}>
        <EditOutlined />
        </Button>,
        <Button type="danger" onClick={() => deletePost(post)}>
        <DeleteOutlined />
        </Button>
      ]}
    >
      <List.Item.Meta title={post.title} description={post.date} />
    </List.Item>
  );
}
