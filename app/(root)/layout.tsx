import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = null;
  return (
    <main>
      {/* Desktop layout  */}
      <div className="hidden md:flex">
        <Sidebar user={loggedIn} />
        {children}
      </div>

      {/* Mobile layout  */}
      <div className="md:hidden">
        <div className="root-layout">
          <h1 className="text-xl font-semibold text-slate-700 uppercase">Alec Kuti</h1>
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}

{
  /* <main className="flex">
      <Sidebar user={loggedIn} />

      <div className="">
        <div className="root-layout">
          <h1 className="text-xl font-semibold text-slate-700 ">Brian Suyi</h1>
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main> */
}

{
  /* <main className="home">
      <div className="overflow-x-hidden hidden md:block">
        <h1 className="bg-gray-500 h-screen fixed top-0 left-0 w-[20vw]">
          SIDEBAR
        </h1>
        <div className="ml-[20vw] bg-blue-300 w-[80vw]">{children}</div>
      </div>

      <div className="md:hidden">
        <div className="root-layout">
          <h1>Brian</h1>
          <h2>Hello</h2>
        </div>
        {children}
      </div>
    </main> */
}
