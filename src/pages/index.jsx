import { withSSRAuth } from '@utils/withSSRAuth';

export const getServerSideProps = withSSRAuth(async () => ({
  props: {},
}));

export default function Home() {
  return <h1>home </h1>;
}
