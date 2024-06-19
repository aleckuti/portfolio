import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = null;
  return (
    <main className="flex h-screen w-full">
      <Sidebar user={loggedIn} />

      <div className="flex flex-col size-full">
        <div className="root-layout">
          <h1>Brian Suyi</h1>
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
