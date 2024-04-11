import {useTranslation} from "react-i18next";
import { useMemo } from "react";

const useEmptyTranslations = (context:string) => {
    const EMPTY:string = "empty.";
    const {t} = useTranslation();

    const empty= useMemo(()=>({
        MESSAGE: t(EMPTY + "message",{context}),
        DESCRIPTION: t(EMPTY + "description",{context}),
        CLICK_HERE: t(EMPTY + "clickHere")
    }),[])

    return {
        empty
    }
}

export default useEmptyTranslations;