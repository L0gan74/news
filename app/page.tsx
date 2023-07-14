"use client";

import React from "react";
import Image from "next/image";
import style from "./main.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Categories from "@/components/category/categories";
import { setCategoryId } from "@/store/slices/filterSlice";
import axios from "axios";

export default function Home() {

  const dispatch = useDispatch();
  //@ts-ignore
  const categoryId = useSelector((state) => state.filter.categoryId);

  console.log(categoryId);

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const category = categoryId > 0 ? `categoryId=${categoryId}` : "";
    const getPosts = async () => {
      const response = await axios.get(
        `http://localhost:3001/posts?_sort=id&_order=desc&${category}`
      );
      setData(response.data);
    };

    getPosts();
  }, [categoryId]);

  // React.useEffect(() => {
  //   const category = categoryId > 0 ? `categoryId=${categoryId}` : "";

  //   fetch(`http://localhost:3001/posts?_sort=id&_order=desc&${category}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((arr) => {
  //       setData(arr);
  //     });
  //   window.scrollTo(0, 0);
  // }, [categoryId]);

  const onChangeCategory = (idx: number) => {
    dispatch(setCategoryId(idx));
  };

  return (
    <>
      <h1>Новости</h1>
      <Categories value={categoryId} onChangeCategory={onChangeCategory} />
      <div className={style.news}>
        {data.map((item: any) => (
          <Link key={item.id} href={`/news/${item.id}`}>
            <div className={style.item}>
              <Image src={item.image} alt="Cart" width={320} height={320} />
              <h3>{item.title}</h3>
              <p className={style.category}>{item.type}</p>
              <p className={style.date}>{item.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
