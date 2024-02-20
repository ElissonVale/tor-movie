import Image from "next/image";
import { CSSProperties } from "react";

const SplashScreen = () => {

    return (
        <>
            <div style={{ position: "absolute", width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div>
                    <Image src="/loading.gif" alt="Loading" width={300} height={300} />
                    <h5 style={{ color: "rgba(255, 255, 255, .5)", textAlign: "center", margin: 10 }}> Carregando </h5>
                </div>
            </div>
        </>
    )
}

export default SplashScreen;

