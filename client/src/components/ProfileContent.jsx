import styled from '@emotion/styled';
import ProfileItem from './ProfileItem';

function ProfileContent() {
  const userData = {
    displayName: 'John Doe',
    email: 'johndoe@email.com',
    major: 'Computer Science',
    yearOfGraduation: 2021,
    bio: 'I am a computer science major who is passionate about helping others.',
  };

  return (
    <ContentDiv>
      <TitleDiv>
        <ProfileIcon>
          <Initial>
            {userData.displayName
              .split(' ')
              .map((el) => el.charAt(0))
              .join('')}
          </Initial>
        </ProfileIcon>
        <Title>{userData.displayName}</Title>
      </TitleDiv>

      <Fields key={userData.email}>
        <ProfileItem title="Name" description={userData.displayName} disabled />
        <ProfileItem title="Email" description={userData.email} disabled />
        <ProfileItem title="Major" description={userData.major} disabled />
        <ProfileItem
          title="Year of Graduation"
          description={userData.yearOfGraduation}
          disabled
        />
        <ProfileItem
          title="Additional Information"
          description={userData.bio}
          disabled
        />
      </Fields>
    </ContentDiv>
  );
}

const ContentDiv = styled.div`
  padding: 4rem 3.5rem 6rem 3.5rem;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ProfileIcon = styled.div`
  background: #bfab25;
  border: 1px solid #bfab25;
  border-radius: 100%;
  width: 75px;
  height: 75px;
`;

const Initial = styled.p`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-top: 0.8rem;
`;

const Title = styled.h1`
  margin-bottom: 0;
  font-weight: 700;
  font-size: 1.8rem;
  margin: auto 2rem;
`;

const Fields = styled.div`
  margin-top: 5rem;
  text-align: justify;
`;

export default ProfileContent;
