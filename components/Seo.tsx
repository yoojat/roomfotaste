import Head from "next/head";

interface IProps {
  title: string;
}

export default function Seo({ title }: IProps) {
  return (
    <Head>
      {title ? (
        <title>{title} | 취향의 방</title>
      ) : (
        <title>서동여관-취향의 방</title>
      )}
    </Head>
  );
}
