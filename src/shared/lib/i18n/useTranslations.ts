import { translations } from "./locales";

import { LOCALES } from "@/shared/config";

import type { TranslationKeys, TranslationObject } from "./types";

const useTranslations = () => {
  const loadTranslation = (locale: TranslationKeys): TranslationObject => {
    return translations[locale];
  };

  return (key: string) => {
    const translation = loadTranslation(LOCALES[0]);

    const parts = key.split(".");

    let result: any = translation;
    for (const part of parts) {
      if (result && typeof result === "object" && part in result) {
        result = result[part];
      } else {
        return key;
      }
    }

    if (typeof result === "string") {
      return result;
    }

    return key;
  };
};

export default useTranslations;
