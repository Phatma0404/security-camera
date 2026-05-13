import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
} from "lucide-react";
import Container from "../components/Container";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";

const Cart = () => {
  const { items, removeItem, updateQty, clearCart, totalItems, totalPrice } =
    useCart();
  const { t } = useLanguage();

  return (
    <section className="pb-16 sm:pb-24">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#002b3d] via-[#003f56] to-[#002b3d] dark:from-[#0a0a0a] dark:via-[#1a1a1a] dark:to-[#0a0a0a] text-white py-16 sm:py-20 mb-12 sm:mb-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#687892]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-[#687892]/10 rounded-full blur-3xl" />
        <Container>
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <span className="inline-block text-white/70 font-semibold tracking-widest uppercase text-sm mb-3">
              {t("cart.title")}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              {t("cart.pageTitle")}
            </h1>
            <p className="text-white/70 text-base sm:text-lg">
              {t("cart.pageDesc")}
            </p>
          </div>
        </Container>
      </div>

      <Container>
        {items.length === 0 ? (
          <EmptyCart t={t} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Items list */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#7a7777] dark:text-gray-400 text-sm">
                  {totalItems} {totalItems === 1 ? t("cart.item") : t("cart.items")}
                </span>
                <button
                  onClick={clearCart}
                  className="text-sm text-[#687892] hover:text-red-500 transition-colors cursor-pointer underline"
                >
                  {t("cart.clear")}
                </button>
              </div>

              {items.map((item) => (
                <CartRow
                  key={item.id}
                  item={item}
                  t={t}
                  onUpdate={updateQty}
                  onRemove={removeItem}
                />
              ))}

              <Link
                to="/products"
                className="inline-flex items-center gap-2 mt-4 text-[#002b3d] dark:text-white hover:text-[#687892] dark:hover:text-[#a0aec0] text-sm font-semibold transition-colors"
              >
                <ArrowLeft size={16} />
                {t("cart.continueShopping")}
              </Link>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-gray-800 p-6 sm:p-8 sticky top-24 shadow-sm">
                <h2 className="text-xl font-bold text-[#002b3d] dark:text-white mb-6">
                  {t("cart.orderSummary")}
                </h2>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#7a7777] dark:text-gray-400">
                      {t("cart.subtotal")}
                    </span>
                    <span className="font-semibold text-[#002b3d] dark:text-white">
                      {totalPrice} {t("products.currency")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#7a7777] dark:text-gray-400">
                      {t("cart.shipping")}
                    </span>
                    <span className="font-semibold text-green-600 dark:text-green-400">
                      {t("cart.shippingFree")}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-100 dark:border-gray-800 pt-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#002b3d] dark:text-white">
                      {t("cart.total")}
                    </span>
                    <span className="text-2xl font-bold text-[#002b3d] dark:text-white">
                      {totalPrice} {t("products.currency")}
                    </span>
                  </div>
                </div>

                <Link
                  to="/contactUs"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#002b3d] hover:bg-[#003f56] dark:bg-[#687892] dark:hover:bg-[#7a8aa3] text-white font-semibold px-5 py-3.5 rounded-lg transition-colors shadow-sm hover:shadow-md"
                >
                  {t("cart.checkout")}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

const EmptyCart = ({ t }) => (
  <div className="text-center py-12 sm:py-20">
    <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-6">
      <ShoppingBag size={40} className="text-[#687892]" />
    </div>
    <h2 className="text-2xl sm:text-3xl font-bold text-[#002b3d] dark:text-white mb-3">
      {t("cart.empty")}
    </h2>
    <p className="text-[#7a7777] dark:text-gray-400 mb-8 max-w-md mx-auto">
      {t("cart.emptyDesc")}
    </p>
    <Link
      to="/products"
      className="inline-flex items-center gap-2 bg-[#002b3d] hover:bg-[#003f56] dark:bg-[#687892] dark:hover:bg-[#7a8aa3] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
    >
      {t("cart.browse")}
      <ArrowRight size={16} />
    </Link>
  </div>
);

const CartRow = ({ item, t, onUpdate, onRemove }) => (
  <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-gray-800 p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-5 shadow-sm">
    {/* Image */}
    <img
      src={item.image}
      alt={item.model}
      className="w-full sm:w-28 h-28 rounded-xl object-cover shrink-0"
    />

    {/* Details */}
    <div className="flex-1 min-w-0 flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-1">
        <div className="min-w-0">
          <span className="inline-block text-xs font-bold text-[#687892] dark:text-[#a0aec0] uppercase tracking-wider mb-1">
            {item.brand}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-[#002b3d] dark:text-white leading-snug">
            {item.model}
          </h3>
        </div>
        <button
          onClick={() => onRemove(item.id)}
          aria-label={t("cart.remove")}
          className="shrink-0 w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors cursor-pointer"
        >
          <Trash2 size={16} />
        </button>
      </div>

      <div className="text-sm text-[#7a7777] dark:text-gray-400 mb-3">
        {t("cart.unitPrice")}: {item.price} {t("products.currency")}
      </div>

      <div className="mt-auto flex items-center justify-between gap-3">
        {/* Quantity */}
        <div className="flex items-center gap-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <button
            onClick={() => onUpdate(item.id, item.qty - 1)}
            aria-label="Decrease"
            className="w-9 h-9 flex items-center justify-center text-[#002b3d] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-l-lg cursor-pointer"
          >
            <Minus size={14} />
          </button>
          <span className="w-10 text-center text-sm font-semibold text-[#002b3d] dark:text-white">
            {item.qty}
          </span>
          <button
            onClick={() => onUpdate(item.id, item.qty + 1)}
            aria-label="Increase"
            className="w-9 h-9 flex items-center justify-center text-[#002b3d] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-r-lg cursor-pointer"
          >
            <Plus size={14} />
          </button>
        </div>

        {/* Line total */}
        <div className="text-right">
          <div className="text-xs text-[#7a7777] dark:text-gray-400">
            {t("cart.lineTotal")}
          </div>
          <div className="text-lg sm:text-xl font-bold text-[#002b3d] dark:text-white">
            {item.price * item.qty} {t("products.currency")}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Cart;
