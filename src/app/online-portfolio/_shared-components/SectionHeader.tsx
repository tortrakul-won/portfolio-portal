export default function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-xl lg:text-2xl text-white bg-charcoal w-full text-center py-1 mt-4 lg:mt-0">{children}</h2>
    </>
  );
}
