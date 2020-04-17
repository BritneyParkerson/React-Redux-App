import React from "react";
import styled from "styled-components";

const Recipes = props => {
  const Container = styled.div`
   
  `;

  const RecipeContainer = styled.div`
    
  `;

  const RecipeHeading = styled.h1`
    
  `;

  const PuppyRecipes = styled.p`
    
  `;

  return (
    <Container>
      <RecipeContainer>
        <RecipeHeading>{props.info.title}</RecipeHeading>
        <PuppyRecipes>{props.info.ingredients}</PuppyRecipes>
      </RecipeContainer>
    </Container>
  );
};

export default Recipes;