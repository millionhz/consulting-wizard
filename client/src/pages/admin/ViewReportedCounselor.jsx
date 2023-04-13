import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import NavBarAdmin from '../../components/NavBarAdmin';
import Footer from '../../components/Footer';
import ignoreIcon from '../../assets/ignore.png';
import deactivateIcon from '../../assets/deactivate.png';
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

  const goToProfile = (id) => {
    window.location.href = `/consultant/${id}`;
  };

  return (
    <div>
      <NavBarAdmin page="Reported Counselors" />
      <Background>
        {userList.map((userDeactivation) => (
          <>
            <ReportedItem>
              <UserDetails>
                <TextReport>User: {userDeactivation.displayName}</TextReport>
                <ProfileLink onClick={() => goToProfile(userDeactivation._id)}>
                  View Account
                </ProfileLink>
              </UserDetails>
              <Icons>
                <IconElement
                  className="ignoreButton"
                  onClick={() => {
                    removeUser(userDeactivation._id);
                    ignoreHandler(userDeactivation._id);
                  }}
                >
                  <IconImage src={ignoreIcon} alt="ignore" />
                  <IconText>Ignore Request</IconText>
                </IconElement>
                <IconElement
                  className="deactivateButton"
                  onClick={() => {
                    removeUser(userDeactivation._id);
                    deactivationHandler(userDeactivation._id);
                  }}
                >
                  <IconImage src={deactivateIcon} alt="deactivate" />
                  <IconText>Deactivate Account</IconText>
                </IconElement>
              </Icons>
            </ReportedItem>

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
  padding: 3.5rem 3.5rem 6rem 3.5rem;
  color: #000000;
  border-radius: 0.5rem;
`;

const SeparatingLine = styled.div`
  width: 100%;
  border-bottom: solid 1px #aaaaaa;
  margin: auto;
  margin-top: 0.7rem;
`;

const ReportedItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2.5rem 2rem 0rem 2rem;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextReport = styled.p`
  text-align: left;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0;
`;

const ProfileLink = styled.button`
  border: none;
  padding: 0;
  background: none;
  text-align: left;
  margin-top: 0;
  font-weight: 500;
  font-size: 0.7rem;
  color: #0b0b45;
  text-decoration: none;
  pointer: cursor;

  &:hover {
    text-decoration: underline;
    color: #0b0b45;
  }
`;

const IconElement = styled.button`
  background: #ffffff;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &.ignoreButton {
    color: #2ec309;
  }

  &.deactivateButton {
    color: #fb1e1e;
    margin-left: 1rem;
  }
`;

const IconImage = styled.img`
  width: 20px;
  height: 20px;
`;

const IconText = styled.p`
  font-size: 9px;
  margin: 0;
`;

export default ViewReportedCounselor;
