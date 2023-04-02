import React from "react";
import styled from "styled-components";

import Section from "./Section";

const Home = () => {
  return (
    
    <Container>
      <Section
        title="Model S"
        description="Order Online For Touchless Delivery"
        leftButton="Custom Order"
        bg="/images/model-s.jpg"
        rightButton="Existing Inventory"
      />
      <Section
        title="Model X"
        bg="/images/model-x.jpg"
        description="Order Online For Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Model Y"
        bg="/images/model-y.jpg"
        description="Order Online For Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Model 3"
        bg="/images/model-3.jpg"
        description="Order Online For Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        bg="/images/solar-panel.jpg"
        description="Money-back Gurrantee"
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Section
        title="Solar For New Roofs"
        bg="/images/solar-roof.jpg"
        description="Solar Roof Costs Less Than A New Roof Plus Solar Panels"
        leftButton="Order Now"
        rightButton="Learn More"
      />
      <Section
        title="Accessories"
        bg="/images/accessories.jpg"
        description=""
        leftButton="Shop Now"
      
      />
    </Container>

  );
};

export default Home;
const Container = styled.div`
  height: 100vh;
`;
