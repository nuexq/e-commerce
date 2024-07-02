import { Nav, NavLink } from "@/components/Nav";

export const dynamic = "force-dynamic";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav>
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink href="/admin">Dashboard</NavLink>
          <NavLink href="/admin/products">Products</NavLink>
          <NavLink href="/admin/users">Customers</NavLink>
          <NavLink href="/admin/orders">Sales</NavLink>
        </nav>
      </Nav>
      <div className="container my-6 flex-1">{children}</div>
    </div>
  );
}
