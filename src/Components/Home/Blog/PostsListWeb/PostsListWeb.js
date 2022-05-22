import React from "react";
import { Spin, List, Row, Col, Avatar, Tag } from "antd";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import moment from "moment";
import{ Paginations} from "../../../Pagination/Paginations";
import luis from '../../../../assets/IMG_20220521_193955.jpg';
import { Empty } from 'antd';
import "moment/locale/es";

import "./PostsListWeb.scss";

export const PostsListWeb = (props) => {
  const { location, history, posts, setPage} = props;


  if (!posts) {
    return (
      <Spin tip="Cargando" style={{ width: "100%", padding: "200px 0" }} />
    );
  }


  return (
    <>
       <Helmet>
        <title>Blog de programación | Luis Huang</title>
      </Helmet> 
      <div className="posts-list-web">
        <h1>Últimos Artículos</h1>
        <List
          dataSource={posts.docs}
          renderItem={post => 
            post ? <Post post={post} /> : 
            <Empty />
          }
        />
        <Paginations posts={posts} 
        location={location} 
        history={history} 
        setPage={setPage}
         />
      </div>
    </>
  );
}

function Post ({post}) {

  const date = moment(post.date).format('L');
  return (
    <>

    <Row className='post'>
      <Col md={12} xs={12} xl={12} className='post_img'>
      <img src={post.img} />
      </Col>
      <Col md={16} xl={12} className='post_content'>
      <Link to={`/blog/${post.url}`}>
      <h3>{post.title}</h3>
      <p>{post.minides}</p>
      <div className="post_content_tags">
      {(() => {
        switch (post.topic) {
          case 'tecnology':
            return ( <Tag color="default">&#128187; Tecnología e Informática</Tag>)
          case 'personal':
            return ( <Tag color="processing">🙋‍♂️ Personal</Tag>)
          case 'fitness':
            return ( <Tag color="error">🏋 Fitness</Tag>)
          case 'viajes':
            return ( <Tag color="processing">🚊 Viajes</Tag>)
            case 'negocios':
            return ( <Tag color="warning">&#128176; Negocios</Tag>)
            case 'trading':
            return ( <Tag color="success">💹 Trading y Finanzas</Tag>)
            case 'food':
            return ( <Tag color="default">🍽 Comida</Tag>)
            case 'car':
            return ( <Tag color="error">🚗 Coches</Tag>)
            case 'foto':
            return ( <Tag color="default">📷 Fotografía</Tag>)
            case 'otros':
            return ( <Tag color="default">🖋 Otros</Tag>)
          default:
            return ('')
        }
           })()}
      </div>
      <div className='post_content_avatar'>
        <Avatar src={luis} />
        <p className='autor'>Luis Huang</p> 
        <p>—</p>
        <p>{date}</p>
      </div>
      </Link>
      </Col>
    </Row>
    
    <hr/>
    </>
    
  );
}
