import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";



const Container = styled.div`
  background-color: #302e2f;
  margin-top: 150px;
  color: white;
  display: flex;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex: 1;
`;

const Logo = styled.h1`
  color: #cb896a;
  font-size:30px;
`;
const Desc = styled.div`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  margin-right: 20px;
  justify-content: center;
  color: white;
`;

const Title = styled.h3`
  color: #cb896a;

  margin-bottom: 30px;
`;
const List = styled.ul`
  maring: 0;
  list-style: none;
  color:white;
  display: flex;
  flex-direction:column;
  padding: 0;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  color:white;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          Tunisie Booking App
        </Logo>
        <Desc>Rejoignez nos réseaux sociaux</Desc>
        <SocialContainer>
          <SocialIcon color="#385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>LIENS UTILES</Title>
        <List>
         <Link to='/accueil'><ListItem>Accueil</ListItem></Link>
          <Link to ="/about">  <ListItem>A propos</ListItem> </Link>
          <Link to ="/contact"><ListItem>Contact</ListItem></Link>
          <ListItem>Support</ListItem>

        </List>
      </Center>

      <Right>
        <Title>CONTACT</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Tunis 2034 ,Tunisie 
        </ContactItem>

        <ContactItem>
          {" "}
          <Phone style={{ marginRight: "10px" }} /> +216 26 214 214{" "}
        </ContactItem>

        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          tunisie-booking-app@gmail.com
        </ContactItem>

        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
