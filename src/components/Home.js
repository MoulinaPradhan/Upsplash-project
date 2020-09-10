import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "./Loader";
import { UnsplashImage } from "./UnsplashImage";
import styled from "styled-components";
const WrapperImages = styled.section`
  max-width: 80rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-auto-rows: 400px;
`;
function Home() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (count = 20) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(
        `${apiRoot}/collections/190727/photos?&client_id=${accessKey}&count=${count}`
      )
      .then((res) => {
        setImage([...images, ...res.data]);
      });
  };
  return (
    <div>
      <h1>My Gallery</h1>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImages>
          {images.map((image) => (
            <UnsplashImage url={image.urls.thumb} key={image.id} />
          ))}
        </WrapperImages>
      </InfiniteScroll>
    </div>
  );
}

export default Home;
