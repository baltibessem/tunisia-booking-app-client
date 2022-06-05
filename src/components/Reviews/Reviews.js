import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import styled from "styled-components";

const Reviews = () => {
  const [rating, setrating] = useState(5);
  const [comment, setcomment] = useState("");

const Container=styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
`


  const Textarea = styled.textarea`
  `


  const Button = styled.button`
  padding: 15px;
  border: 2px solid #cb896a;
  width:150px;
  font-weight: 300;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color:#cb896a;
  }
`;



  return (
    <div>
      <Container>
      <h3 style={{flex:"flex-start"}}>Donner un avis</h3>
      <ReactStars
        count={5}
        size={40}
        color={"black"}
        char={"☆"}
        isHalf={true}
        activeColor="#cb896a"
        onChange={(e) => {
          setrating(e);
        }}
      /></Container>
      
      <Container>
    
      <Textarea
      value={comment}
      onChange={(e)=>{setcomment(e.target.value)}}>
      </Textarea>
      <Button> 
      Publier avis</Button>
      </Container>
    </div>
  );
};

export default Reviews;
