import { LOCALES } from "@/shared/config";

export type TranslationKeys = (typeof LOCALES)[number];
export type TranslationObject = object;
export type TranslationLanguageObject = Record<
  TranslationKeys,
  TranslationObject
>;
