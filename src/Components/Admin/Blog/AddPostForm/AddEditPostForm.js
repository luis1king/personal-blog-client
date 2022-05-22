import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  DatePicker,
  notification,
  Select
} from "antd";
import moment from "moment";
import { Editor } from "@tinymce/tinymce-react";
import { addPostApi, updatePostApi } from "../../../../api/postApi";


import "./AddEditPostForm.scss";

export const AddEditPostForm = (props) => {
  const { setIsVisibleModal, setReloadPosts, post } = props;
  const [postData, setPostData] = useState({});
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (post) {
      setPostData(post);
    } else {
      setPostData({});
    }
  }, [post]);

  const processPost = () => {
    const { title, url, description, date } = postData;

    if (!title || !url || !description || !date) {
      notification["error"]({
        message: "Todos los campos son obligatorios."
      });
    } else {
      if (!post) {
        addPost();
      } else {
        updatePost();
      }
    }
  };

  const addPost = () => {
    addPostApi(token, postData)
      .then(response => {
        const typeNotification = response.code === 200 ? "success" : "warning";
        notification[typeNotification]({
          message: response.message
        });
        setIsVisibleModal(false);
        setReloadPosts(true);
        setPostData({});
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor."
        });
      });
  };

  const updatePost = () => {
    console.log(postData)
    updatePostApi(token, post._id, postData)
      .then(response => {
        const typeNotification = response.code === 200 ? "success" : "warning";
        notification[typeNotification]({
          message: response.message
        });
        setIsVisibleModal(false);
        setReloadPosts(true);
        setPostData({});
      })
      .catch(() => {
        notification["error"]({
          message: "Error del servidor."
        });
      });
  };

  return (
    <div className="add-edit-post-form">
      <AddEditForm
        postData={postData}
        setPostData={setPostData}
        post={post}
        processPost={processPost}
      />
    </div>
  );
}

function AddEditForm(props) {
  const { postData, setPostData, post, processPost } = props;
  const { Option } = Select;
  return (
    <Form className="add-edit-post-form" layout="inline" onFinish={processPost} onSubmit={processPost}>
      <Row gutter={24}>
        <Col span={8}>
          <Input
            placeholder="Titulo"
            value={postData.title}
            onChange={e => setPostData({ ...postData, title: e.target.value })}
          />
        </Col>
        <Col span={8}>
          <Input
            placeholder="url"
            value={postData.url}
            onChange={e =>
              setPostData({
                ...postData,
                url: transformTextToUrl(e.target.value)
              })
            }
          />
        </Col>
        <Col span={8}>
          <DatePicker
            style={{ width: "100%" }}
            format="DD/MM/YYYY HH:mm:ss"
            placeholder="Fecha de publicación"
            value={postData.date && moment(postData.date)}
            onChange={(e, value) =>
              setPostData({
                ...postData,
                date: moment(value, "DD/MM/YYYY HH:mm:ss").toISOString()
              })
            }
          />
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={8}>
        <Select value={postData.topic} style={{ width: 120 }} onChange={e => setPostData({ ...postData, topic: e })}>
         <Option value="tecnology">Tecnología</Option>
         <Option value="personal">Personal</Option>
         <Option value="fitness">Fitness y deporte</Option>
         <Option value="viajes">Viajes</Option>
         <Option value="negocios">Negocios</Option>
         <Option value="trading">Finanzas y Trading</Option>
         <Option value="food">Comida y nutrición</Option>
         <Option value="car">Coches</Option>
         <Option value="foto">Fotografía</Option>
         <Option value="otros">Otros</Option>
        
         </Select>
         
        </Col>
        <Col span={8}>
          <Input
            placeholder="Image URL"
            value={postData.img}
            onChange={e =>
              setPostData({
                ...postData,
                img: transformTextToUrl(e.target.value)
              })
            }
          />
        </Col>
        <Col span={8}>
        <Input
            placeholder="MIni descrpc..."
            value={postData.minides}
            onChange={e => setPostData({ ...postData, minides: e.target.value })}
          />
        </Col>
      </Row>

      <Editor
        initialValue={postData.description ? postData.description : ""}
        apiKey='8e7d5voomlz64q7dgq8lj8ac709urwikvo7x7gixns0ims8v'
        init={{
          height: 500,
          width: '100%',
          menubar: true,
          selector: 'textarea#image-tools',
          object_resizing : 'img',
          resize_img_proportional: true,
          plugins: ['autoresize image print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
          'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste imagetools wordcount'],
      toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
      toolbar_mode: 'floating',
      tinycomments_mode: 'embedded',
      tinycomments_author: 'Author name',
        }}
        onChange={e =>
          setPostData({ ...postData, description: e.target.getContent() })
        }
      />

      <Button type="primary" htmlType="submit" className="btn-submit">
        {post ? "Actualizar post" : "Crear post"}
      </Button>
    </Form>
  );
}

function transformTextToUrl(text) {
  const url = text.replace(" ", "-");
  return url.toLowerCase();
}
