import { useState, useEffect } from "react";
import i18n from "i18next";
import { getLanguageDirection } from "./common";

const useTextDirection = () => {
  // Предположим, что языки с "rtl" - это арабский и иврит

  const [direction, setDirection] = useState(
    getLanguageDirection(i18n.language)
  );

  useEffect(() => {
    const changeDirection = (lang: string) => {
      setDirection(getLanguageDirection(lang));
    };

    // Подписка на событие
    i18n.on("languageChanged", changeDirection);

    // Отписка при размонтировании
    return () => {
      i18n.off("languageChanged", changeDirection);
    };
  }, []);
  return direction;
};

export default useTextDirection;
