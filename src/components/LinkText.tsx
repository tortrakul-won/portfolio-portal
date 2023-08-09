export default function LinkText({ textColor, children }: { textColor: string; children: React.ReactNode }) {
  return (
    <h2
      className="w-fit text-3xl md:text-4xl origin-left hover:scale-[1.10] ease-in-out duration-100 active:hover:scale-90 "
      style={{ color: textColor }}
    >
      {children}
    </h2>
  );
}
