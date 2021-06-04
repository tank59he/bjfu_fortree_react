import styled from "@emotion/styled";
import { Button, Card, Row, Col } from "antd";
import {UnAuthRoutes} from "./unauth-routes";
import {useDocumentTitle} from "../../../utils";
import logo from "../../../assets/logo.svg";


export const UnAuthenticatedApp = () => {
    useDocumentTitle("请登录注册以继续");

    return (
        <Row>
            <Col xs={0} sm={4} md={6} lg={8} xl={8} />
            <Col
                xs={24}
                sm={16}
                md={12}
                lg={8}
                xl={8}
                style={{ paddingTop: "5vh", paddingBottom: "10vh" }}
            >
                <Header />
                <ShadowCard>
                    <UnAuthRoutes />
                </ShadowCard>
            </Col>
            <Col xs={0} sm={4} md={6} lg={8} xl={8} />
        </Row>
    );
};

export const LongButton = styled(Button)`
  width: 100%;
`;

export const CardTitle = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;

const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;

const ShadowCard = styled(Card)`
  min-height: 46rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;