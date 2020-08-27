import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background: ${props => props.theme.background};
  padding-top: 32px;
  padding-bottom: 32px;
  height: 100vh;
`;

export const Title = styled.h1`
  color: ${props => props.theme.fontColor.heading};
  font-size: 42px;
`;

export const Link = styled.a`
  color: ${props => props.theme.button.fore};
  text-decoration: none;
  padding: 18px 32px;
  background-color: ${props => props.theme.button.back};
  border-radius:8px;
  border: 2px solid ${props => props.theme.button.border};
  min-width: 300px;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 20px;
  &:hover{
    background-color: ${props => props.theme.button.hover};
  }
  svg, img.icon{
    height:24px;
    margin-right:8px;
  }
`;

export const Links = styled.div`
  margin: 16px 32px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  a + a{
    margin-top: 8px;
  } 
`;

export const TitleContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;

export const ProfileImage = styled.img`
  width: 50vw;
  height: 50vw;
  max-width:200px;
  max-height:200px;
  border-radius: 50%;
  margin-bottom: 16px;
`;

