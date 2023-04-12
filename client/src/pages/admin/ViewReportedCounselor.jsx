import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import NavBarAdmin from '../../components/NavBarAdmin';
import Footer from '../../components/Footer';
import {
  getReportedCounsultants,
  falseReportOfConsultant,
  deactivateConsultant,
} from '../../api/backend';

function ViewReportedCounselor() {
  const [userList, setuserList] = useState([]);
  useEffect(() => {
    getReportedCounsultants().then(({ data }) => setuserList(data));
  }, []);
  function removeUser(id) {
    const newList = userList.filter((user) => user.id !== id);
    setuserList(newList);
  }
  function deactivationHandler(id) {
    // send delete request to backend.Need the format in which the request needs to be sent
    deactivateConsultant(id);
    removeUser(id);
  }
  function ignoreHandler(id) {
    // send unflag request to backend. Need the format in which the request needs to be sent
    falseReportOfConsultant(id);
    removeUser(id);
  }
  return (
    <div>
      <NavBarAdmin page="Reported Counselor" />
      <Background>
        {userList.map((userDeactivation) => (
          <>
            <TextReport>Name: {userDeactivation.displayName}</TextReport>
            <div>
              <IgnoreIcon
                onClick={() => {
                  removeUser(userDeactivation._id);
                  ignoreHandler(userDeactivation._id);
                }}
              >
                <TextReport>Ignore</TextReport>
              </IgnoreIcon>
              <DeactIcon
                onClick={() => {
                  removeUser(userDeactivation._id);
                  deactivationHandler(userDeactivation._id);
                }}
              >
                <TextReport>Deactivate</TextReport>
              </DeactIcon>
            </div>

            <SeparatingLine />
          </>
        ))}
      </Background>
      <Footer />
    </div>
  );
}

const Background = styled.div`
  min-height: 100vh;
  width: 50vw;
  background: #ffffff;
  margin: auto;
  margin-top: 15vh;
  margin-bottom: 5rem;
  border-radius: 0rem;
  padding: 6rem 3.5rem 6rem 3.5rem;
  color: #000000;
`;
const SeparatingLine = styled.div`
  display: flex;
  width: 50vw;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: solid 1px #aaaaaa;
  margin: auto;
  margin-top: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
`;
const TextReport = styled.p`
  text-align: left;
  font-weight: 500;
  font-size: 0.8rem;
`;
const DeactIcon = styled.button`
  margin-left: 20px;
  color: #fb1e1e;
  background: #ffffff;
  border: 2px #fb1e1e;
  cursor: pointer;
  padding: 0.5rem 0.3rem 0.3rem 0.3rem;
`;

const IgnoreIcon = styled.button`
  color: #2ec309;
  background: #ffffff;
  border: 2px #2ec309;
  cursor: pointer;
  padding: 0rem 0rem 0rem 0rem;
`;

export default ViewReportedCounselor;