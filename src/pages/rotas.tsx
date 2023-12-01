import Link from 'next/link'
import Router, { useRouter } from 'next/router'

export default function rotas() {

    function navegacaoSimples(url) {
        Router.push(url)
    }

    function navegacaoComParams() {
        Router.push({
            pathname: "/codigo/rotasparams?id=12&nome=Ana",
            query: {
                id: 123,
                nome: 'Ana'
            }
        })
    }
    return (
        <div>
            <h1>Rota index</h1>
            <ul>
                <Link href="/codigo/rotasparams?id=12&nome=Ana">
                    <li>Params</li> </Link>
                <Link href="/codigo/buscar">
                    <li>Buscar</li> </Link>
                <Link href="/codigo/nome">
                    <li>David</li> </Link>
            </ul>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                <button onClick={navegacaoComParams}>Param</button>
                <button onClick={() => Router.push("/codigo/nome")}>Buscar</button>
                <button onClick={() => navegacaoSimples("/codigo/buscar")}>David</button>
            </div>
        </div>
    )
}