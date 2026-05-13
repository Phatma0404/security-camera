import { useState } from "react";
import { Check, Camera, Eye, Moon, Shield, ShoppingBag } from "lucide-react";
import Container from "../components/Container";
import { useLanguage } from "../context/LanguageContext";
import { useCart } from "../context/CartContext";
import { cameras, brands, types } from "../data/cameras";
import { cn } from "../lib/utils";

const Products = () => {
  const { t } = useLanguage();
  const [brand, setBrand] = useState("all");
  const [type, setType] = useState("all");

  const filtered = cameras.filter(
    (c) =>
      (brand === "all" || c.brand === brand) &&
      (type === "all" || c.type === type)
  );

  return (
    <section className="pb-16 sm:pb-24">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#002b3d] via-[#003f56] to-[#002b3d] dark:from-[#0a0a0a] dark:via-[#1a1a1a] dark:to-[#0a0a0a] text-white py-16 sm:py-20 mb-12 sm:mb-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#687892]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-[#687892]/10 rounded-full blur-3xl" />
        <Container>
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <span className="inline-block text-white/70 font-semibold tracking-widest uppercase text-sm mb-3">
              {t("products.label")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              {t("products.title")}
            </h1>
            <p className="text-white/70 text-base sm:text-lg">
              {t("products.desc")}
            </p>
          </div>
        </Container>
      </div>

      <Container>
        {/* Filters */}
        <div className="mb-10 space-y-5">
          <FilterGroup
            label={t("products.brandLabel")}
            options={brands}
            value={brand}
            onChange={setBrand}
            allLabel={t("products.all")}
          />
          <FilterGroup
            label={t("products.typeLabel")}
            options={types}
            value={type}
            onChange={setType}
            allLabel={t("products.all")}
          />
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-[#7a7777] dark:text-gray-400">
            {t("products.empty")}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((cam) => (
              <ProductCard key={cam.id} cam={cam} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

const FilterGroup = ({ label, options, value, onChange, allLabel }) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
    <span className="text-sm font-semibold text-[#002b3d] dark:text-gray-300 min-w-[60px]">
      {label}:
    </span>
    <div className="flex flex-wrap gap-2">
      <FilterButton active={value === "all"} onClick={() => onChange("all")}>
        {allLabel}
      </FilterButton>
      {options.map((opt) => (
        <FilterButton
          key={opt}
          active={value === opt}
          onClick={() => onChange(opt)}
        >
          {opt}
        </FilterButton>
      ))}
    </div>
  </div>
);

const FilterButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={cn(
      "px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer border",
      active
        ? "bg-[#002b3d] dark:bg-[#687892] text-white border-[#002b3d] dark:border-[#687892] shadow-sm"
        : "bg-white dark:bg-[#1a1a1a] text-[#002b3d] dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-[#687892] dark:hover:border-[#687892]"
    )}
  >
    {children}
  </button>
);

const ProductCard = ({ cam }) => {
  const { t } = useLanguage();
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem(cam);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const specItems = [
    { icon: <Camera size={14} />, label: t("products.resolution"), value: cam.specs.resolution },
    { icon: <Moon size={14} />, label: t("products.nightVision"), value: cam.specs.nightVision },
    { icon: <Eye size={14} />, label: t("products.viewingAngle"), value: cam.specs.viewingAngle },
    { icon: <Shield size={14} />, label: t("products.weatherProof"), value: cam.specs.weatherProof },
  ];

  return (
    <div className="group bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={cam.image}
          alt={cam.model}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-sm text-[#002b3d] dark:text-white text-xs font-bold px-3 py-1.5 rounded-full">
          {cam.brand}
        </span>
        <span className="absolute top-3 right-3 bg-[#002b3d] dark:bg-[#687892] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
          {cam.type}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <h2 className="text-[#002b3d] dark:text-white text-lg font-bold mb-2 leading-snug">
          {cam.model}
        </h2>
        <p className="text-[#7a7777] dark:text-gray-400 text-sm leading-relaxed mb-5">
          {cam.desc}
        </p>

        {/* Specs */}
        <ul className="space-y-2 mb-6 text-sm">
          {specItems.map((s, i) => (
            <li key={i} className="flex items-center gap-2 text-[#555] dark:text-gray-300">
              <span className="text-[#687892] dark:text-[#a0aec0] shrink-0">{s.icon}</span>
              <span className="text-[#7a7777] dark:text-gray-400">{s.label}:</span>
              <span className="font-medium ml-auto text-right">{s.value}</span>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="mt-auto pt-5 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-3">
          <div>
            <span className="text-2xl font-bold text-[#002b3d] dark:text-white">
              {cam.price}
            </span>
            <span className="text-sm text-[#687892] dark:text-[#a0aec0] ml-1">
              {t("products.currency")}
            </span>
          </div>
          <button
            onClick={handleAdd}
            disabled={justAdded}
            className={cn(
              "inline-flex items-center gap-1.5 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all cursor-pointer",
              justAdded
                ? "bg-green-600 hover:bg-green-600"
                : "bg-[#002b3d] hover:bg-[#003f56] dark:bg-[#687892] dark:hover:bg-[#7a8aa3] hover:gap-2"
            )}
          >
            {justAdded ? (
              <>
                <Check size={14} />
                {t("products.added")}
              </>
            ) : (
              <>
                <ShoppingBag size={14} />
                {t("products.addToCart")}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
