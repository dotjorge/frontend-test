import styled from "styled-components";

const Item = styled.li`
  --primary_125: #ba3638;
  --primary: #ba3538;
  --primary_75: #b93537;
  --primary_25: #330d0e;
  --white: #ffffff;
  --white_50: #909090;
  width: 340px;
  height: 80px;
  display: flex;
  align-items: center;
  background: white;
  list-style-type: none;
  gap: 20px;
  padding: 10px;
  cursor: default;

  &:nth-of-type(2) {
    background: var(--white);
  }

  .ranking__item__photo {
    position: relative;
    width: 50px;
    height: 50px;
    border: 4px solid var(--primary);
    border-radius: 100%;
  }

  .ranking__item__info {
    display: flex;
    gap: 2px;
    flex-direction: column;
    align-items: flex-start;

    .ranking__item__info__name {
      color: var(--primary_125);
      margin: 0;
      font-weight: bold;
    }

    .ranking__item__info__description {
      color: var(--white_50);
      margin: 0;
    }
  }

  &:hover {
    background: var(--primary_75);

    .ranking__item__photo {
      border-color: var(--white);
    }

    .ranking__item__info {
      .ranking__item__info__name {
        color: var(--white);
      }

      .ranking__item__info__description {
        color: var(--primary_25);
      }
    }
  }
`;

export default { Item };
