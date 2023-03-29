import styled from '@emotion/styled';

function Footer() {
  return (
    <FooterDiv>
      <p>Copyright @ ConsultingWizards 2023</p>
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
  color: #938d8d;
  text-align: left;
  padding: 0.2rem 3rem 0.2rem 3rem;
  font-size: 0.9rem;
  border-top: 1px solid #938d8d;
`;

export default Footer;