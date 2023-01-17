import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { ROUTES } from 'shared/constants/Routes';
import { styled } from 'shared/theme';

const NotFoundPageWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    `s-maxage=${60 * 60 * 24 * 365}, stale-while-revalidate=${60 * 60 * 24}`
  );

  return {
    props: {},
  };
};

const NotFoundPage: NextPage = () => {
  const { push: navigate } = useRouter();

  return (
    <NotFoundPageWrapper>
      <span>Sorry, the page you visited does not exist.</span>
      <button onClick={() => navigate(ROUTES.HOME)}>Back Home</button>
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;
