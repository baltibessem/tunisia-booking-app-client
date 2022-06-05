import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import Carrousel from "../Caroussel/Caroussel";
import CollectionCaroussel from "../Caroussel/CollectionCaroussel";
import Reviews from "../Reviews/Reviews";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


const Container = styled.div`
  background: white;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const InfoContainer = styled.div`
  padding: 0px 50px;
  flex: 1;
`;

const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;

const CollectionContainer = styled.div`
  margin: -21px 235px 0px 1px
  display: flex;
  margin-bottom:50px;
`;

const CollectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 100;
  margin-top: 15px;
`;

const ImageCollectionContainer = styled.div`
  flex: 2;
  margin-top: 15px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  border: 1px solid #cb896a;
`;
const AddContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  justify-content: space-between;
`;

const ReviewsContainer = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #cb896a;
  font-weight: 300;
  width: 150px;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #cb896a;
  }
`;

const MuseeDetails = ({ museedata }) => {
  const history = useHistory();

  const [musee, setMusee] = useState({});
  let { id } = useParams();

  useEffect(() => {
    setMusee(museedata.find((musee) => musee.id === +id));
  }, [id]);

  const dispatch = useDispatch();

  return (
    <div>
      {" "}
      <Navbar />
      <Container>
        <Wrapper>
          <CollectionContainer>
            <Carrousel musee={musee} />
            <CollectionTitle>COLLECTIONS</CollectionTitle>
            <ImageCollectionContainer>
              <CollectionCaroussel musee={musee} />
            </ImageCollectionContainer>
          </CollectionContainer>
          <InfoContainer>
            <Title>{musee.nom}</Title>
            <Desc>{musee.description}</Desc>
            <ReviewsContainer>
              <Reviews />
            </ReviewsContainer>
            <AddContainer>
              <CollectionTitle>Ticket :</CollectionTitle>

              <Price>{musee.prix} TND</Price>
              <Button onClick={() => {dispatch(addToCart(musee))
  history.push("/cart");
}}>
                Réserver ticket
              </Button>
            </AddContainer>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Desc>
                <CollectionTitle>Horraires</CollectionTitle>
                Du 01/06 au 15/09 : De 9:00 à 17:00 <br />
                Du 16/09 au 30/05 : De 9:30 à 16:30 <br />
                <br />
                <b>Musée fermé le lundi</b>
              </Desc>
              <iframe
                width="150"
                height="180"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=MUS%C3%89E%20DE%20BARDO&t=&z=19&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                scrolling="no"
                style={{ marginTop: "15px", marginLeft: "150px" }}
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </InfoContainer>
        </Wrapper>
      </Container>
      <Footer />
    </div>
  );
};

export default MuseeDetails;
