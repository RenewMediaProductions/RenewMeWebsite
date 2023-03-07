import { styled } from 'shared/theme';

export const HeroWrapper = styled.div`
  .bg-bot {
    position: absolute;
    bottom: 0;
    height: 267px;
    width: 100%;
    background: linear-gradient(180deg, rgba(250, 250, 250, 0) 1.53%, #fafafa 51.67%);
  }
  .hero-image {
    animation: heroImageAnim 800ms linear;
    animation-fill-mode: forwards;
    opacity: 0;

    img {
      filter: drop-shadow(0px 15px 4px rgba(0, 0, 0, 0.25));
    }
  }
  .hero-text {
    animation: fadeAnim 800ms linear;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  .hero-buttons {
    animation: fadeAnim 800ms linear;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  /* Animations */
  @keyframes heroImageAnim {
    from {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeAnim {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ${({ theme }) => theme.screens.smallMedia} {
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
