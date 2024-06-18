import LeftSidebar from "@/components/LeftSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <LeftSidebar />
        {children}
        <p className="text-white">right</p>
      </main>
    </div>
  );
}
