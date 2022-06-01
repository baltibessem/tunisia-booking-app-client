import { Facebook , Instagram , MailOutline, Phone, Room, Twitter} from "@material-ui/icons"
import styled from "styled-components"



const Container = styled.div`
background-color:lightgrey;
margin-top : 150px;
display:flex;`


const Left = styled.div`
display:flex;
flex-direction:column;
padding:20px;
flex:1;`

const Logo = styled.h1``
const Desc = styled.div`
margin : 20px 0px;`
const SocialContainer = styled.div`
display:flex;`
const SocialIcon= styled.div`

width:40px;
height:40px;
border-radius:50%;
background-color:${props=>props.color};
display:flex;
align-items: center;
margin-right:20px;
justify-content: center;
color:white;`

const Title = styled.h3`
margin-bottom:30px;`
const List = styled.ul`
maring:0;
list-style:none;
display:flex;
flex-wrap:wrap;
padding:0;`
const ListItem = styled.li`
width:50%;
margin-bottom:10px;`



const Right = styled.div`flex:1;
;padding:20px;
`

const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;`

const Payment = styled.img`
width:50%;`


const Center = styled.div`flex:1;
padding:20px;`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Tunisie Museé <div className=""></div></Logo>
            <Desc>Tunisie musée est un plateforme en ligne pour les musées nationals basés sur tout le territoire tunisien qui va faciliter pour les visiteurs de s'inscrire , s'authentifier puis consulter et réservez leurs tickets d'accès au musée destiné.</Desc>
            <SocialContainer>
                <SocialIcon color="#385999">
                    <Facebook/>
                         </SocialIcon>
                <SocialIcon color="#E4405F">
                <Instagram/>
                         </SocialIcon>
                <SocialIcon color="#55ACEE">
                    <Twitter/>
                            </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>

            <Title>Liens Utiles</Title>
            <List>
                <ListItem>Accueil</ListItem>
                <ListItem></ListItem>
                <ListItem>Musées</ListItem>
                <ListItem></ListItem>
                <ListItem>A propos</ListItem>
                <ListItem></ListItem>
                <ListItem>Terms</ListItem>
                <ListItem></ListItem>
                <ListItem>Support</ListItem>
                <ListItem></ListItem>
            </List>


        </Center>

        <Right>
            <Title>
                Contact
            </Title>
            <ContactItem>
       <Room  style={{marginRight:"10px"}}/> 622 Beja Avenir , Beja Nord 9000
            </ContactItem>
           
            <ContactItem>  <Phone style={{marginRight:"10px"}}/>  +216 26 214 214 </ContactItem>
                
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/>
                contact@balti.com
            </ContactItem>
            
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
             


        </Right>



    </Container>
  )
}

export default Footer