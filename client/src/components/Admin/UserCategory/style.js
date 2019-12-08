import styled from 'styled-components';

const UserBodyWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  font-variant-caps: all-small-caps;
  text-align: center;
`;

const UserTable = styled.table`
  display: flex;
  flex-direction: column;
  width: 80%;
  border: 1px solid black;
`;

const UserThead = styled.thead`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const UserTh = styled.th`
  width: 20%;
  border: 1px solid black;
`;

const UserTbody = styled.tbody`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const UserTr = styled.tr`
  width: 100%;
  display: flex;
`;

const UserTd = styled.td`
  width: 40%;
`;

const DeleteButton = styled.button`
  width: fit-content;
  background-color: brown;
`;

const UpdateButton = styled.button`
  width: fit-content;
  background-color: sandybrown;
`;

export {
  UserBodyWrapper, UserTable, UserTh, UserTd, UserThead, UserTr, UserTbody, DeleteButton, UpdateButton,
};