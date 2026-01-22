export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="p-8 text-white font-bold bg-pink-400 h-30 text-4xl flex justify-center items-center">
        Check out the new and ultimate version of our product
      </div>
      {children}
    </div>
  );
}
