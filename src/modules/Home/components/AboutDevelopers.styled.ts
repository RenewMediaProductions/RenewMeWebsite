import { styled } from 'shared/theme';

export const AboutDevelopersWrapper = styled.div`
  .ad-image {
    animation: adImageAnim 800ms linear;
    animation-fill-mode: forwards;
    opacity: 0;
  }
  .ad-text {
    animation: fadeAnim 800ms linear;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  /* Animations */
  @keyframes adImageAnim {
    from {
      margin-top: -100px;
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    to {
      margin-top: 0;
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
`;
