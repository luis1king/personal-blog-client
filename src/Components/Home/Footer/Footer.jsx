import React from "react";
import { Layout, Row, Col } from "antd";
import logo from "../../../assets/logo.png";
import { ReactComponent as WhatsappIcon } from "../../../assets/icons8-whatsapp.svg";
import { ReactComponent as WechatIcon } from "../../../assets/icons8-weixing.svg";
import { ReactComponent as GithubIcon } from "../../../assets/icons8-github.svg";
import { ReactComponent as LinkedinIcon } from '../../../assets/icons8-linkedin.svg';
import './Footer.scss'

export const Footer = () => {

    const { Footer } = Layout;

  return (
    <Footer className="footer">
      <Row>
        <Col span={24}>
          <Row>
          
            <Col md={8} >
             <div className="my-info">
                <img src={logo} alt="logo" />
                <h4>
                    Trabaja día a día con disciplina y consistencia, hasta lograr tus metas.
                    Repítelo!
                </h4>
                </div>
            </Col>

            <Col md={8} >
             <Row className="navigation-footer">
                <Col span={16}>
                    <h3>Navegación</h3>
                </Col>
                <Col span={8}/>
               
                <Col className="nav">
                <ul>
                    <li>
                        <a href="#">
                         Política de Privacidad
                        </a>
                    </li>
                    <li>
                        <a href="#">
                         OpenBootcamp
                        </a>
                    </li>
                    <li>
                        <a href="#">
                         Blog
                        </a>
                    </li>
                    <li>
                        <a href="#">
                         Sobre Mí
                        </a>
                    </li>
          
                    </ul>
               </Col>
              </Row>
            </Col>


            <Col span={8}>
             <Row className="navigation-footer">
                <Col>
                    <h3>Redes Sociales</h3>
                </Col>
                <Col md={8}/>
                <Col >
                <div className="social-links">
      <a
        href=""
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WechatIcon />
      </a>
      <a
        href="https://github.com/luis1king"
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </a>
      <a
        href=""
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsappIcon />
      </a>
      <a
        href="https://es.linkedin.com/in/luishuang"
        className="icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon />
      </a>
    </div>

               </Col>
              </Row>
            </Col>

            
          </Row>
          <Row className="footer__copyright">
            <Col md={12}>© 2022 Todos los derechos reservados​</Col>
            <Col md={12}>Made with &#128151; by Luis Huang</Col>
          </Row>
        </Col>
      </Row>
    </Footer>
  )
}
