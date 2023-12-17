import {useTranslation} from "react-i18next";

const useAlertsTranslations = (context?:string) => {
    const ALERTS:string = "alerts.";
    const {t} = useTranslation();

    const alerts= {
        DELETE: t(ALERTS+"delete.single",{context}),
        DELETE_MULTIPLE:t(`${ALERTS}delete.multiple`,{context})
    }

    return {
        alerts
    }
}

export default useAlertsTranslations;