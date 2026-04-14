import { PortalShell } from "@/app/components/PortalShell";

const PRODUCTS_APP_URL = process.env.NEXT_PUBLIC_PRODUCTS_APP_URL || "http://localhost:3001";

export default function ProductsPage() {
    return (
        <PortalShell
            title="Base de Productos"
            subtitle="Acceso al módulo externo de inventario"
            activePath="/products"
        >
            <section className="space-y-6">
                <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <iframe
                        title="Módulo de Base de Productos"
                        src={PRODUCTS_APP_URL}
                        className="h-[75vh] w-full rounded-xl border border-slate-200"
                    />
                </article>
            </section>
        </PortalShell>
    );
}