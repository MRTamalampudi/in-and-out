import {useTranslation} from "react-i18next";
import { useMemo } from "react";

const useAlertsTranslations = (context?:string) => {
    const ALERTS:string = "alerts.";
    const {t} = useTranslation();

    const alerts= useMemo(()=>({
        DELETE: t(ALERTS+"delete.single",{context}),
        DELETE_MULTIPLE:t(`${ALERTS}delete.multiple`,{context})
    }),[])

    return {
        alerts
    }
}

export default useAlertsTranslations;