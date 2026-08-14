interface BtnProps {
  label?: string;
  href?: string;
  className?: string;
}

export function ContactButton({
  label = "Contact Me",
  href = "mailto:jawadsyed421@gmail.com",
  className = "",
}: BtnProps) {
  return (
    <a
      href={href}
      className={`inline-block rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className}`}
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow:
          "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
        outline: "2px solid #FFFFFF",
        outlineOffset: "-3px",
        color: "#FFFFFF",
      }}
    >
      {label}
    </a>
  );
}

export function LiveProjectButton({
  label = "Live Project",
  href = "https://github.com/JAWAD-72",
}: BtnProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-block rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      {label}
    </a>
  );
}
