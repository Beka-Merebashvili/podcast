
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
          <main>
        <p className="text-white">left</p>
        {children}
        <p className="text-white">right</p>
    </main>
    </div>
  );
}
