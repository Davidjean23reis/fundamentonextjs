import Link from 'next/link'

export default function rotas() {
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
        </div>
    )
}