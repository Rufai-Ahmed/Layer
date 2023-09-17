import React, { useRef, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./Router/MainRouter";
import loading from "./Asset/loading.gif";

function App() {
  const ShowRef: any = useRef();
  const loadRef: any = useRef();

  useEffect(() => {
    setTimeout(() => {
      loadRef.current.style.display = "none";
      ShowRef.current.style.display = "block";
    }, 3000);
  }, [RouterProvider]);

  return (
    <div>
      <Container ref={loadRef}>
        <img src={loading} alt="" />
      </Container>
      <Hold ref={ShowRef}>
        <RouterProvider router={MainRouter} />
      </Hold>
    </div>
  );
}

export default App;

const Hold = styled.div`
  display: none;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
