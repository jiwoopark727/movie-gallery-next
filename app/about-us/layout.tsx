export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <h5>&copy; NextJS is great!</h5>
    </div>
  );
}
