import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import en from "./public/locales/en/common.json";
import uz from "./public/locales/uz/common.json";
import ru from "./public/locales/ru/common.json";

i18n.use(initReactI18next).init({
    resources: {
        en: {common: en},
        uz: {common: uz},
        ru: {common: ru},
    },
    lng: "uz", // Standart til
    fallbackLng: "uz",
    interpolation: {escapeValue: false},
});

export default i18n;
