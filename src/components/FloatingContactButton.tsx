import Link from "next/link";

export function FloatingContactButton() {
  return (
    <Link
      href="/contact"
      aria-label="Contact us"
      className="floating-contact"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v11a1.5 1.5 0 0 1-1.5 1.5H9.62l-4.12 3.2a.6.6 0 0 1-.97-.47V5.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <span className="floating-contact-label">Contact us</span>
    </Link>
  );
}
