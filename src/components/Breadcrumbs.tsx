import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="container pt-8 text-sm" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-slate-500">
        <li>
          <Link className="font-medium text-slate-700 hover:text-sky-700" href="/">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link className="font-medium text-slate-700 hover:text-sky-700" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
