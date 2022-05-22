import React, { useState, useEffect } from "react";
import { Spin, notification, Row, Col } from "antd";
import { Helmet } from "react-helmet";
import moment from "moment";
import { getPostApi } from "../../../../api/postApi";
import "moment/locale/es";

import "./PostInfo.scss";
import { DiscussionEmbed } from "disqus-react";

export const PostInfo = (props) => {
  const { url } = props;
  const [postInfo, setPostInfo] = useState(null);
  const post = getPostApi(url).then(response => {console.log(response.post)})
  console.log(url);
  useEffect(() => {
    getPostApi(url)
      .then(response => {
        if (response.code !== 200) {
          notification["warning"]({
            message: response.message
          });
        } else {
          setPostInfo(response.post);
        }
      })
      .catch(() => {
        notification["warning"]({
          message: "Error del servidor."
        });
      });
  }, [url]);

  if (!postInfo) {
    return (
      <Spin tip="Cargando" style={{ width: "100%", padding: "200px 0" }} />
    );
  }

  return (
    <Row>

       <Helmet>
        <title>{postInfo.title} | Luis Huang</title>
      </Helmet> 
      <Col xs={24} className="thepost">

      <div className="post-info">
        <h1 className="post-info__title">{postInfo.title}</h1>
        <div className="post-info__creation-date">
          {moment(postInfo.date)
            .local("es")
            .format("LL")}
        </div>

        <div
          className="post-info__description"
          dangerouslySetInnerHTML={{ __html: postInfo.description }}
        />
      </div>
       <DiscussionEmbed
    shortname='luishuangblog'
    config={
        {
            url: `http://localhost:3000/${url}`,
            identifier: post._id,
            title: post.title,
        }
    }
/> 
      </Col>
    </Row>
    
  );
}
