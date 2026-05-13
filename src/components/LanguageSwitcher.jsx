import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { cn } from "../lib/utils";

const languages = [
  { code: "en", label: "EN" },
  { code: "az", label: "AZ" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = languages.find((l) => l.code === language);

  return (
    <div ref={ref} className="relative ml-2">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Select language"
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1 text-sm font-semibold text-[#003148] dark:text-white hover:text-[#687892] dark:hover:text-[#a0aec0] transition-colors cursor-pointer"
      >
        {current.label}
        <ChevronDown
          size={14}
          className={cn("transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <ul
        role="listbox"
        className={cn(
          "absolute right-0 mt-2 w-20 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transition-all duration-200 origin-top",
          open
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
        )}
      >
        {languages.map((lang) => (
          <li key={lang.code} role="option" aria-selected={lang.code === language}>
            <button
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              className={cn(
                "w-full text-left px-3 py-2 text-sm font-semibold cursor-pointer transition-colors",
                lang.code === language
                  ? "bg-gray-100 dark:bg-gray-800 text-[#003148] dark:text-white"
                  : "text-[#003148] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
              )}
            >
              {lang.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
