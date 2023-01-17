import { styled } from 'shared/theme';

export const Service2Wrapper = styled.div`
  .bg {
    height: 700px;
    width: 700px;
    height: 500px;
    width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(50% 50% at 50% 50%, #7090bd 0%, rgba(243, 243, 243, 0) 80.42%);
  }

  ${({ theme }) => theme.screens.smallMedia} {
  }
  ${({ theme }) => theme.screens.mediumMedia} {
    .bg {
      height: 700px;
      width: 700px;
    }
  }
  ${({ theme }) => theme.screens.largeMedia} {
  }
  ${({ theme }) => theme.screens.xLargeMedia} {
    .bg {
      height: 1000px;
      width: 1000px;
    }
  }
  ${({ theme }) => theme.screens.xxLargeMedia} {
  }
`;
