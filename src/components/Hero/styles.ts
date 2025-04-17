import styled from 'styled-components'

export const Form = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--cor-principal);
    content: '';
    opacity: 0.7;
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

export const Container = styled.div`
  position: relative;
  z-index: 2; /* Fica acima do ::before */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  color: #eee;
`

export const HeroTitle = styled.h2`
  font-family: 'Gloock', serif;
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
