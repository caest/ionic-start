import i18n from "../i18n";
import settingsService from "../modules/shared/settings-service";
import { isValidPhoneNumber } from "libphonenumber-js";

export const getLanguageDirection = (lng: string) => {
  const rtlLangs = ["he", "ar", "he_IL", "fa"]; // Добавьте все языки, которые должны быть 'rtl'
  return rtlLangs.includes(lng.split("-")[0]) ? "rtl" : "ltr";
};

export function cleanAndFormatString(input: string) {
  let cleaned = input
    .toUpperCase()
    .replace(/[^A-Z0-9\s_-]/gi, "")
    .replace(/\s+/g, " ")
    .replace(/\s/g, "_")
    .trim();

  return cleaned;
}
export const checkEmailIsValid = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
export function isValidIsraeliID(id: string) {
  // Convert ID to a string
  var idString = String(id).trim();

  // Ensure that the ID number is 9 digits long
  if (!idString.match(/^\d{9}$/)) {
    return false;
  }

  // Calculate the checksum using the Luhn algorithm
  var sum = 0;
  for (var i = 0; i < 9; i++) {
    var digit = parseInt(idString.charAt(i), 10);

    // Double the value of every second digit
    if (i % 2 === 1) {
      digit *= 2;
    }

    // If doubling resulted in a number greater than 9, subtract 9
    if (digit > 9) {
      digit -= 9;
    }

    sum += digit;
  }

  // The ID is valid if the sum modulo 10 is 0
  return sum % 10 === 0;
}
export function currencyFormat(
  num: number | string,
  currency: string,
  lang?: string
) {
  if (lang == "he_IL") {
    lang = "he-IL";
  }
  if (lang == "ru_RU") {
    lang = "ru-RU";
  }
  if (!lang) {
    lang = i18n.language;
  }

  try {
    const formatter = new Intl.NumberFormat(lang, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
    });
    return formatter.format(parseFloat(num.toString()));
  } catch (e) {
    const formatter = new Intl.NumberFormat("he-IL", {
      style: "currency",
      currency: "ILS",
      minimumFractionDigits: 0,
    });
    return formatter.format(parseFloat(num.toString())).replace(/\s/g, '');
  }
}
export function getGreeting() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 6 && currentHour < 12) {
    return "GOOD_MORNING";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "GOOD_DAY";
  } else {
    return "GOOD_EVENING";
  }
}

export function formatDate(date: any, lang: string = "he-IL") {
  const dateTime = new Date(date);

  if (lang == "he_IL") {
    lang = "he-IL";
  }
  if (lang == "ru_RU") {
    lang = "ru-RU";
  }

  const time = dateTime.toLocaleString(lang, {
    hour: "2-digit",
    minute: "2-digit",
  });
  const day = dateTime.toLocaleString(lang, { day: "2-digit" });
  const month = dateTime.toLocaleString(lang, { month: "2-digit" });
  const year = dateTime.toLocaleString(lang, { year: "numeric" });

  return `${day}/${month}/${year} ${time}`;
}

export function formatDateShort(date: any, lang: string = "he-IL") {
  const dateTime = new Date(date);

  if (lang == "he_IL") {
    lang = "he-IL";
  }
  if (lang == "ru_RU") {
    lang = "ru-RU";
  }

  const time = dateTime.toLocaleString(lang, {
    hour: "2-digit",
    minute: "2-digit",
  });
  const day = dateTime.toLocaleString(lang, { day: "2-digit" });
  const month = dateTime.toLocaleString(lang, { month: "2-digit" });
  const year = dateTime.toLocaleString(lang, { year: "numeric" });

  return `${day}/${month}/${year}`;
}

export function isValidIsraeliPhoneNumber(phone: string) {
  if (!phone) return false;
  // Удаляем пробелы и прочие нецифровые символы
  const cleaned = phone.replace(/\D/g, "");

  // Проверяем, что номер соответствует одному из форматов
  const matchDomestic = cleaned.match(/^(0[1-9]\d{7,8})$/); // Домашний формат: 0501234567 или 07212345678
  const matchInternational = cleaned.match(/^972[1-9]\d{7,8}$/); // Международный формат: 972501234567 или 9727212345678

  return Boolean(matchDomestic || matchInternational);
}

export const numberFilter = (value: string) => {
  return value.replace(/[^0-9]/g, "");
};
export const phoneNumberFilter = (value: string) => {
  return value.replace(/[^0-9+]/g, "");
};

export function convertIsraeliShortPhoneNumbeWithCode(phone: string) {
  if (!phone) return "";
  phone = phoneNumberFilter(phone?.toString());
  if (isValidIsraeliPhoneNumber(phone)) {
    return phone.replace(/^0/, "+972");
  } else {
    return phone;
  }
}

export function checkIsIsValidPhoneNumber(phone: any) {
  if (!phone) return false;
  try {
    let str = phone.toString();
    return isValidPhoneNumber(str);
  } catch (e) {
    return false;
  }
}
