'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '9922851263';

  const message = encodeURIComponent(
    'Hello! I would like to inquire about your fire safety services.'
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-4
        right-4
        z-40
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-green-500
        text-white
        shadow-xl
        transition-all
        duration-300
        hover:scale-110
        hover:bg-green-600
        sm:bottom-6
        sm:right-6
        sm:h-16
        sm:w-16
      "
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />

      <span className="absolute right-full mr-3 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded bg-gray-900 px-3 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 sm:block">
        Chat with us
      </span>
    </a>
  );
}