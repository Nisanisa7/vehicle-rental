import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Card_Item = (props) => {
  return (
    <Styles className={props.className} key={props.key}>
      <Link href={`/product_page/detail/${props.id}`}>
        <a>
          <div className="image-wrap">
            <img src={props.src} alt="" className="image" />
          </div>
        </a>
      </Link>
      <div className="card-small">
        <div className="location">{props.location}</div>
        <div className="city">{props.city}</div>
      </div>
    </Styles>
  );
};

export default Card_Item;
const Styles = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
.image-wrap{
    width: 255px;
    height: 337px;
    background-color: #dcdcdc;
    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 6px;
    }
}

  .card-small {
    background: white;
    width: 120px;
    height: 56px;
    /* background: black; */
    position: absolute;
    top: 84%;
    padding-left: 1px;
    z-index: 1;

    /* border-radius: 0px 6px 0px 0px; */
    .location {
      padding-top: 5px;
      padding-left: 5px;
      font-family: "Nunito";
      font-style: normal;
      font-size: 17px;
      color: #042521;
    }
    .city {
      padding-left: 5px;
      font-family: "Nunito";
      font-style: normal;
      font-size: 15px;
      color: #adadad;
    }
  }
`;
