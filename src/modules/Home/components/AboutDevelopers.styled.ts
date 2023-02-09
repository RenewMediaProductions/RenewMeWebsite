import { styled } from 'shared/theme';

export const AboutDevelopersWrapper = styled.div`
  .bg {
    position: absolute;
    width: 600px;
    height: 600px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(240, 126, 88, 0.5) 0%,
      rgba(243, 243, 243, 0) 80.42%
    );
  }

  @media (min-width: 575px) {
    .bg {
      height: 700px;
      width: 700px;
    }
  }
  ${({ theme }) => theme.screens.mediumMedia} {
  }
  ${({ theme }) => theme.screens.largeMedia} {
  }
  ${({ theme }) => theme.screens.xLargeMedia} {
  }
  ${({ theme }) => theme.screens.xxLargeMedia} {
  }
`;
