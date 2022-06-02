import React, { useState } from "react";

export default function Banner() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="text-white">
      {visible && (
        <div className="text-sm md:text-md px-10 relative mx-auto text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 py-3 font-normal">
          📣 Tailwind Master Kit: 100+ Professional, ready to embed &nbsp;
          <a
            href="https://tailwindmasterkit.com"
            target="__blank"
            className="underline font-semibold"
          >
            Tailwind Components
          </a>
          <button
            className="absolute right-0 mr-2"
            onClick={() => setVisible(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
