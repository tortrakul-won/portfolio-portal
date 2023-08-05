export default function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-2xl text-white bg-charcoal w-full text-center py-1">{children}</h2>
    </>
  );
}
