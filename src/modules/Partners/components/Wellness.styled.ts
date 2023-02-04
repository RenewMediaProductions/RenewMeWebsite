import { styled } from 'shared/theme';

export const WellnessWrapper = styled.div<{
  imageOption: { gap: number; left: number; width: number };
}>`
  .wellness-img-placeholder {
    gap: ${({ imageOption }) => imageOption.gap}px;

    & > div {
      max-width: ${({ imageOption }) => imageOption.width}px;
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
