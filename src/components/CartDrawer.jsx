import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import { cn } from "../lib/utils";

const CartDrawer = () => {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQty,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();
  const { t } = useLanguage();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [closeCart]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-[70] h-full w-full sm:w-[420px] bg-white dark:bg-[#1a1a1a] shadow-2xl transition-transform duration-300 ease-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-[#002b3d] dark:text-white" />
            <h2 className="text-lg font-bold text-[#002b3d] dark:text-white">
              {t("cart.title")}
            </h2>
            {totalItems > 0 && (
              <span className="text-sm text-[#687892] dark:text-[#a0aec0]">
                ({totalItems} {totalItems === 1 ? t("cart.item") : t("cart.items")})
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-[#002b3d] dark:text-white transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
              <ShoppingBag size={32} className="text-[#687892]" />
            </div>
            <h3 className="text-lg font-bold text-[#002b3d] dark:text-white mb-2">
              {t("cart.empty")}
            </h3>
            <p className="text-sm text-[#7a7777] dark:text-gray-400 mb-6">
              {t("cart.emptyDesc")}
            </p>
            <Link
              to="/products"
              onClick={closeCart}
              className="inline-flex items-center gap-2 bg-[#002b3d] dark:bg-[#687892] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#003f56] dark:hover:bg-[#7a8aa3] transition-colors"
            >
              {t("cart.browse")}
              <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 bg-gray-50 dark:bg-gray-800 rounded-xl p-3 border border-gray-100 dark:border-gray-700"
                >
                  <img
                    src={item.image}
                    alt={item.model}
                    className="w-20 h-20 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-[#002b3d] dark:text-white leading-snug truncate">
                        {item.model}
                      </h4>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label={t("cart.remove")}
                        className="shrink-0 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-xs text-[#687892] dark:text-[#a0aec0] mb-2">
                      {item.brand}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          aria-label="Decrease"
                          className="w-7 h-7 flex items-center justify-center text-[#002b3d] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-l-lg cursor-pointer"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-7 text-center text-sm font-semibold text-[#002b3d] dark:text-white">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          aria-label="Increase"
                          className="w-7 h-7 flex items-center justify-center text-[#002b3d] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-r-lg cursor-pointer"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-[#002b3d] dark:text-white">
                        {item.price * item.qty} {t("products.currency")}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="text-xs text-[#687892] hover:text-red-500 transition-colors cursor-pointer underline"
              >
                {t("cart.clear")}
              </button>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 dark:border-gray-800 p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[#7a7777] dark:text-gray-400">
                  {t("cart.subtotal")}
                </span>
                <span className="text-lg font-bold text-[#002b3d] dark:text-white">
                  {totalPrice} {t("products.currency")}
                </span>
              </div>
              <Link
                to="/cart"
                onClick={closeCart}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#002b3d] hover:bg-[#003f56] dark:bg-[#687892] dark:hover:bg-[#7a8aa3] text-white font-semibold px-5 py-3 rounded-lg transition-colors"
              >
                {t("cart.viewCart")}
                <ArrowRight size={16} />
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
