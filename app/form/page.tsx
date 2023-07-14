"use client";

import axios from "axios";
import React from "react";
import style from "./style.module.css";

export default function Form() {
  const [formData, setFormData] = React.useState({
    image: "",
    title: "",
    text: "",
    categoryId: "",
    type: "",
    date: "",
    link: "",
  });
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/posts",
        formData
      );
      setFormData({
        image: "",
        title: "",
        text: "",
        categoryId: "",
        type: "",
        date: "",
        link: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        placeholder="Введите Название"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        type="text"
      />
      <input
        placeholder="Введите ссылку на фотографию"
        name="image"
        id="image"
        value={formData.image}
        onChange={handleChange}
        type="text"
      />
      <input
        placeholder="Введите категорию"
        name="categoryId"
        id="categoryId"
        value={formData.categoryId}
        onChange={handleChange}
        type="number"
      />
      <textarea
        placeholder="Введите текст"
        name="text"
        id="text"
        value={formData.text}
        onChange={handleChange}
      ></textarea>
      <input
        placeholder="Введите тип новости(новости)"
        name="type"
        id="type"
        value={formData.type}
        onChange={handleChange}
        type="text"
      />
      <input
        placeholder="Введите дату"
        name="date"
        id="date"
        value={formData.date}
        onChange={handleChange}
        type="text"
      />
      <input
        placeholder="Введите ссылку на пост"
        name="link"
        id="link"
        value={formData.link}
        onChange={handleChange}
        type="text"
      />
      <button type="submit">Отправить</button>
    </form>
  );
}
