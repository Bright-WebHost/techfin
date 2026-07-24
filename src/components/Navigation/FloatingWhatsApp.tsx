import Link from 'next/link';

export default function FloatingWhatsApp() {
  const phoneNumber = '918147989035';
  const message = encodeURIComponent('Hello TechFin, I would like to enquire about your security solutions.');

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with TechFin on WhatsApp"
      className="fixed bottom-4 right-4 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_48px_rgba(37,211,102,0.45)] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" aria-hidden="true">
        <path d="M12.001 2.002A9.998 9.998 0 0 0 2.003 12a9.94 9.94 0 0 0 1.322 4.95L2 22l5.16-1.35A9.99 9.99 0 1 0 12.001 2.002Zm0 18.06a8.06 8.06 0 0 1-4.1-1.13l-.29-.17-3.06.8.82-2.98-.19-.31A8.06 8.06 0 1 1 12 20.06Zm4.48-6.06c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.19-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.86.84-.86 2.05 0 1.21.88 2.37 1 2.54.12.17 1.73 2.64 4.2 3.69.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.47-.07 1.44-.59 1.65-1.16.21-.56.21-1.05.15-1.15-.06-.11-.22-.17-.46-.29Z" />
      </svg>
    </Link>
  );
}
