'use client'

import { useEffect, useState } from "react";
import LoginPage from "./login/LoginPage";
import SplashScreen from "../SplashScreen";

type Props = {
    children: any
}

const Authorize = ({ children }: Props) => {

    const [codeFree, setCodeFree] = useState<string>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {

        // login check
        let code = localStorage.getItem("codeFree")

        if(code)
            setCodeFree(code)
        
        setLoading(false)

    }, [])

    if(codeFree === '092323')
        return children;

    if(loading)
        return <SplashScreen />
    
    return (
        <LoginPage />
    )
}

export default Authorize;