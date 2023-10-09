import i18n from "i18next";
//import Backend from "i18next-http-backend";
//import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { initStorage } from "./utils/storage";

const fallbackLanguage = "he_IL";

const projectToken = "";
const apiKey = "";
const cdnBaseUrl = "https://cdn.simplelocalize.io";
const environment = "_latest"; // or "_production"

const loadPath = `${cdnBaseUrl}/${projectToken}/${environment}/{{lng}}`;
const loadPathWithNamespaces = `${cdnBaseUrl}/${projectToken}/${environment}/{{lng}}/{{ns}}`;
const endpoint = `https://api.simplelocalize.io/api/v1/translations?importOptions=REPLACE_TRANSLATION_IF_FOUND`;
const missingKeysPushInterval = 10_000; // 10 seconds

let missingKeysRequests: any[] = [];
export const supportedLngs = ["en", "he_IL"];
export const supportedLanguages = [
  {
    code: "en",
    name: "English",
    url: "/en.png",
  },
  {
    code: "he_IL",
    name: "עברית",
    url: "/he.png",
  },
];
const missingKeyHandler = (
  languages: readonly string[],
  namespace: string,
  key: string,
  fallbackValue: string
) => {
  missingKeysRequests.push({
    key,
    language: "en",
    text: fallbackValue,
  });
};

const pushMissingKeys = () => {
  if (missingKeysRequests.length > 0) {
    console.log(
      `[SimpleLocalize] Pushing missing keys: ${missingKeysRequests.length}`
    );
    const requestBody = {
      content: missingKeysRequests,
    };
    fetch(endpoint, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "X-SimpleLocalize-Token": apiKey,
      },
      body: JSON.stringify(requestBody),
    });
    missingKeysRequests = [];
  }
};

// @refresh reset
setInterval(() => pushMissingKeys(), missingKeysPushInterval);

i18n
//  .use(Backend)
//  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: supportedLngs,
    fallbackLng: fallbackLanguage,
    react: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: [
        "br",
        "strong",
        "i",
        "b",
        "p",
        "span",
        "a",
        "div",
        "ul",
        "li",
        "ol",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
      ],
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: loadPath, // comment if you use namespaces
      //loadPath: loadPathWithNamespaces # uncomment if you use namespaces
    },
    saveMissing: true,
    lng: fallbackLanguage,
    missingKeyHandler,
  });

i18n.on("languageChanged", (lng) => {
  initStorage().then((storage) => {
    storage?.set("language", lng);
  });
});

export default i18n;
