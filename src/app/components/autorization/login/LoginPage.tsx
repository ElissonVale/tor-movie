import { useState } from "react";
import { Card } from "../../Card";
import { Field } from "../../form/Field";
import Alert from "../../form/Alert";

const LoginPage = () => {

    const [errorMessage, setErrorMessage] = useState("Erro ao realizar login");

    const handlerSubmit = (event: any) => {
        event.preventDefault();

        localStorage.setItem("codeFree", "092323");

        window.location.reload();
    }

    return (
        <>
            <div className="grid place-items-center h-screen">
                <Card>
                    <form onSubmit={handlerSubmit} className="form col col-12">

                        <Field name="login_name" type="text" title="Nome" required />

                        <Field name="login_code" type="text" title="Código de acesso" required />

                        {errorMessage && <Alert message={errorMessage} onClose={() => setErrorMessage("")}/>}

                        <div className="flex justify-center">
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Entrar</button>
                        </div>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default LoginPage;