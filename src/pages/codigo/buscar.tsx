import Link from "next/link";
import { useRouter } from "next/router";

export default function buscar() {
    const router = useRouter()
    const codigo = router.query.codigo
    return (
        <div>
            <h1> Rotas/ buscar /{codigo} vindo de codigo buscar</h1>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>
        </div>
    )
}