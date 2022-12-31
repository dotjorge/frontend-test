import styled from "styled-components";

const Item = styled.li`
  width: 340px;
  height: 80px;
  display: flex;
  align-items: center;
  background: white;
  list-style-type: none;
  gap: 20px;
  padding: 10px;
  &:nth-of-type(2) {
    background: #f2f1f1;
  }

  .ranking__item__photo {
    position: relative;
    width: 50px;
    height: 50px;
    border: 4px solid #ba3538;
    border-radius: 100%;
  }

  .ranking__item__info {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;

    .ranking__item__info__name {
      color: red;
      margin: 0;
      font-weight: bold;
    }

    .ranking__item__info__description {
      color: gray;
      margin: 0;
    }
  }

  &:hover {
    background: #b93537;

    .ranking__item__photo {
      border-color: white;
    }

    .ranking__item__info {
      .ranking__item__info__name {
        color: white;
      }
    }
  }
`;

export default { Item };
