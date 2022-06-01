import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { useParams } from "react-router-dom";
import Carrousel from "../Caroussel/Caroussel";
import CollectionCaroussel from "../Caroussel/CollectionCaroussel";
import Reviews from "../Reviews/Reviews";

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
  font-size: 40px;
`;

const CollectionContainer = styled.div`
  margin: -21px 235px 0px 1px
  display: flex;
  margin-bottom:50px;
`;

const CollectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 100;
`;

const ImageCollectionContainer = styled.div`
  flex: 2;
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
  border: 1px solid teal;
`;

const InfoCollectionContainer = styled.div`
  flex: 1;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  font-weight: 500;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: teal;
  }
`;

const MuseeDetails = ({ museedata }) => {
  const [musee, setMusee] = useState({});
  let { id } = useParams();

  useEffect(() => {
    setMusee(museedata.find((musee) => musee.id === +id));
  }, [id]);

  return (
    <Container>
      <Wrapper>
        <Carrousel musee={musee} />

        <InfoContainer>
          <Title>{musee.nom}</Title>
          <Desc>{musee.description}</Desc>
          <CollectionTitle>COLLECTIONS</CollectionTitle>

          <CollectionContainer>
            <ImageCollectionContainer>
              <CollectionCaroussel musee={musee} />
            </ImageCollectionContainer>
          </CollectionContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Price>{musee.prix}</Price>
            <Button>Réserver ticket</Button>
          </AddContainer>
        </InfoContainer>
        <Reviews/>
      </Wrapper>
    </Container>
  );
};

export default MuseeDetails;
