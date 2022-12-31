import styled from "styled-components";

const Item = styled.li`
  --primary_125: #ba3638;
  --primary: #ba3538;
  --primary_75: #b93537;
  --primary_50: #872628;
  --primary_25: #330d0e;
  --white: #ffffff;
  --white_50: #909090;
  --radius: 10px;
  position: relative;
  /* width: 340px; */
  width: 100%;
  /* height: 80px; */
  display: flex;
  align-items: center;
  background: white;
  list-style-type: none;
  gap: 20px;
  padding: 15px;
  cursor: default;
  // Top border-raadius
  &:first-of-type {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }

  // Bottom border-radius
  &:last-of-type {
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }

  &:nth-of-type(2) {
    background: var(--white);
  }

  .ranking__item__photo {
    position: relative;
    width: 66px;
    height: 66px;
    border: 4px solid var(--primary);
    border-radius: 100%;

    .ranking__item__photo__bullet {
      --size: 20px;
      --offset: 5px;
      position: absolute;
      width: var(--size);
      height: var(--size);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
      color: var(--white_50);
      right: var(--offset);
      bottom: var(--offset);
      background: var(--white);
      border: 1px solid var(--white_50);
      border-radius: 100%;
      transform: translate(50%, 50%);
    }
  }

  .ranking__item__info {
    display: flex;
    gap: 2px;
    flex-direction: column;
    align-items: flex-start;

    .ranking__item__info__name {
      color: var(--primary_125);
      margin: 0;
      font-weight: 600;
      font-size: 18px;
    }

    .ranking__item__info__description {
      color: var(--white_50);
      margin: 0;
      font-size: 12px;
      font-weight: 600;
    }
  }

  .ranking__item__tooltip {
    --distance: 20px;
    position: absolute;
    display: flex;
    right: 0;
    padding: 10px;
    padding-left: var(--distance);
    align-items: center;
    /* transform: translateX(100%); */
    transform: translateX(0%);
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
    will-change: transform, opacity;

    // Left arrow
    /* &:before {
      --size: 10px;
      content: "";
      position: absolute;
      left: calc((var(--size) * -2) - (var(--distance) * -1));
      border: 10px solid transparent;
      border-right: 10px solid var(--white);
    } */

    .ranking__item__tooltip__reputation {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      // Left arrow
      &:first-of-type {
        &:before {
          --size: 10px;
          content: "";
          position: absolute;
          left: calc((var(--size) * -2));
          border: 10px solid transparent;
          border-right: 10px solid var(--white);
        }
      }

      // Separator
      &:not(:last-of-type) {
        &:after {
          content: "";
          position: absolute;
          right: 0;
          width: 1px;
          height: 100%;
          background: black;
          border-right: 1px solid white;
          opacity: 0.4;
        }
      }

      // First item
      &:first-child {
        .ranking__item__tooltip__reputation_title {
          border-top-left-radius: 10px;
        }

        .ranking__item__tooltip__reputation__likes {
          border-bottom-left-radius: 10px;
        }
      }

      // Last item
      &:last-child {
        .ranking__item__tooltip__reputation_title {
          border-top-right-radius: 10px;
        }

        .ranking__item__tooltip__reputation__likes {
          border-bottom-right-radius: 10px;
        }
      }

      .ranking__item__tooltip__reputation_title {
        width: 100%;
        text-align: center;
        font-size: 10px;
        font-weight: bold;
        color: var(--white);
        background: var(--primary);
        padding: 5px 10px;
        text-transform: uppercase;
      }

      .ranking__item__tooltip__reputation__likes {
        width: 100%;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        color: var(--white_50);
        padding: 5px 10px;
        background: var(--white);
      }
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

    .ranking__item__tooltip {
      transform: translateX(100%);
      opacity: 1;
    }
  }

  @media screen and (max-width: 900px) {
    &:hover {
      .ranking__item__info {
        opacity: 0.25;
      }

      .ranking__item__tooltip {
        transform: translateX(0%);
        .ranking__item__tooltip__reputation_title {
          background: var(--primary_50);
        }
      }
    }
  }
`;

export default { Item };
