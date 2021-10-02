import React from "react";
import style from "./HightlightText.module.css"

export const HightlightText: React.FC<HightlightTextPropsType> = ({filter, str}) => {

    if (!filter) return <>{str}</>

    const regexp = new RegExp(filter, 'ig')

    const matchValue = str.match(regexp)

    if (matchValue) {
        return <>{
            str.split(regexp).map((s, index, array) => {
                if (index < array.length - 1) {
                    const c = matchValue.shift()
                    return <>{s}<span className={style.heightLights}>{c}</span></>
                }
                return s
            })
        }</>
    }
    return <>{str}</>
}

//type
type HightlightTextPropsType = {
    filter: string
    str: string
}
