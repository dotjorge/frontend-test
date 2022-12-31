import styled from "styled-components";

const Ranking = styled.div`
  padding: 140px 40px;
  max-width: 430px;
  width: 100%;

  .ranking__header {
    position: relative;
    display: flex;
    width: 100%;

    .ranking__header__title__logo {
      position: absolute;
      width: 179px;
      height: 179px;
      aspect-ratio: 1;
      bottom: -8px;
      left: -25px;
      z-index: 5;
      flex: 1;

      .ranking__header__title__logo__img {
        object-fit: contain;
      }
    }

    .ranking__header__title {
      position: relative;
      min-width: 100%;
      /* font-size: 30px; */
      font-size: clamp(1em, 1em + 1vw, 30px);
      background: white;
      color: #272727;
      font-weight: 800;
      letter-spacing: -1.5px;
      border-radius: 10px;
      display: flex;
      justify-content: flex-end;
      padding: 10px;
      padding-left: 120px;
      padding-right: 34px;
      flex: 0;
    }
  }
`;

export default { Ranking };
