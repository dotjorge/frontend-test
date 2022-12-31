import { GetServerSideProps } from "next";
import { Fazenda, FC } from "types";

interface PageProps {
  fazenda: Fazenda;
}

const Index = (props: FC<PageProps>) => {
  return <>{JSON.stringify(props.fazenda)}</>;
};

export default Index;

// Fetch server-side em toda request/acesso
export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const fazendaRes = await fetch("http://localhost:3000/api/fazenda");
  const fazenda: Fazenda = await fazendaRes.json();

  return {
    props: {
      fazenda,
    },
  };
};
