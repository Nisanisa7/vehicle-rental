import styled from 'styled-components';

export const FlickityStyle = styled.div`
/* external css: flickity.css */

* { box-sizing: border-box; }

body { font-family: sans-serif; }

.carousel {

    margin: 0 60px; /* space for prev/next buttons */
}

/* .carousel_cell{ */
    /* width: 66%; */
    /* height: 200px; */
    /* margin-right: 10px;
    border-radius: 5px; */
    /* background-color: aquamarine; */
    /* counter-increment: carousel_cell;
  } */
  .carousel_cell:before {
    display: block;
    text-align: center;
    content: counter(carousel_cell);
    line-height: 0px;
    /* font-size: 80px; */
    color: white;
  }
  /* cell number */

  .carousel-cell {
  width: 25%;
  margin-right: 50px

}
.carousel-image {
    margin: 0 auto;
  width: 233px;
  height: 200px;
  border-radius: 10px;
  /* dim unselected */
 

}


/* smaller, dark, rounded square */
.flickity-prev-next-button {
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background: transparent;
}
/* arrow color */
.flickity-prev-next-button .arrow {
  fill:#4A4C53;
  width: 50px!important;
  height: 100px;
 
}
.flickity-prev-next-button .arrow:hover {
  fill:#F90;
 
}
.flickity-prev-next-button.no-svg {
  color: white;
}
/* position outside */
.flickity-prev-next-button.previous {
  left: -40px;
}
.flickity-prev-next-button.next {
  right: -40px;
}

`