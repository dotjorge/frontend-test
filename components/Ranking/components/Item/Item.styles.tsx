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

  &:hover {
    background: #b93537;
  }
`;

const Photo = styled.span`
  position: relative;
  width: 50px;
  height: 50px;
  border: 4px solid #ba3538;
  border-radius: 100%;

  ${Item}:hover & {
    border-color: white;
  }
`;

const Info = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.p`
  color: red;
  margin: 0;
  font-weight: bold;

  ${Item}:hover & {
    color: white;
  }
`;

const SubTitle = styled.p`
  color: gray;
  margin: 0;
`;

export default { Item, Info, Title, SubTitle, Photo };
