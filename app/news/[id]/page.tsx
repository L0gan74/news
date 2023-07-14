import Image from "next/image";
import style from "../style.module.css";
import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  return {
    title: id,
    description: "Описание карточки товара по id",
  };
}

async function idNews(id: string) {
  const response = await fetch(`http://localhost:3001/posts/${id}`, {
    next: {
      revalidate: 120,
    },
  });

  return response.json();
}

export default async function PageNews({ params: { id } }: Props) {
  const post = await idNews(id);

  return (
    <div className={style.item}>
      <Image src={post.image} width={760} height={506} alt={post.title} />
      <h1>{post.title}</h1>
      <p className={style.text}>{post.text}</p>
      <Link href={post.link}>Ссылка</Link>
      <span>
        <p className={style.data}>{post.date}</p>
        <p className={style.type}>{post.type}</p>
      </span>
    </div>
  );
}
