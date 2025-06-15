"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "../../hooks/use-outside-click";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

type CardType = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel: React.FC<CarouselProps> = ({
  items,
  initialScroll = 0,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollability = () => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (el) {
      el.scrollLeft = initialScroll;
      checkScrollability();
      const handle = () => checkScrollability();
      el.addEventListener("scroll", handle);
      return () => el.removeEventListener("scroll", handle);
    }
  }, [initialScroll]);

  const scrollOffset = () => (window.innerWidth < 768 ? 234 : 392);

  const handleLeft = () =>
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });

  const handleRight = () =>
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  const onCardClose = (idx: number) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollTo({
      left: scrollOffset() * (idx + 1),
      behavior: "smooth",
    });
    setCurrentIndex(idx);
  };

  return (
    <CarouselContext.Provider value={{ onCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          className="flex overflow-x-auto scroll-smooth py-10 md:py-20 scrollbar-hide"
          ref={carouselRef}
        >
          <div className="absolute right-0 w-1/20 bg-gradient-to-l from-white to-transparent dark:from-neutral-900" />
          <div className="flex gap-4 pl-4 mx-auto max-w-7xl">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2 mr-10">
          <button
            onClick={handleLeft}
            disabled={!canScrollLeft}
            className="h-10 flex items-center justify-center w-10 rounded-full bg-gray-100 disabled:opacity-50"
          >
            <IconArrowNarrowLeft className="w-6 h-6 text-gray-500" />
          </button>
          <button
            onClick={handleRight}
            disabled={!canScrollRight}
            className="h-10 w-10 rounded-full bg-gray-100 disabled:opacity-50 flex items-center justify-center"
          >
            <IconArrowNarrowRight className="w-6 h-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card: React.FC<{
  card: CardType;
  index: number;
  layout?: boolean;
}> = ({ card, index, layout = false }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null!);
  const { onCardClose } = useContext(CarouselContext);

  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") close();
  };
  const openModal = () => {
    document.body.style.overflow = "hidden";
    setOpen(true);
  };
  const close = () => {
    document.body.style.overflow = "";
    setOpen(false);
    onCardClose(index);
  };

  useEffect(() => {
    if (open) window.addEventListener("keydown", handleKey);
    else window.removeEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  useOutsideClick(containerRef, close);

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 m-auto max-w-5xl bg-white dark:bg-neutral-900 rounded-3xl p-4 md:p-10 overflow-auto"
            >
              <button
                onClick={close}
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-black dark:bg-white flex items-center justify-center"
              >
                <IconX className="w-6 h-6 text-white dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl md:text-5xl text-white font-semibold"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={openModal}
        className="relative z-10 flex h-80 w-56 md:h-[40rem] md:w-96 flex-col rounded-3xl overflow-hidden bg-gray-100 dark:bg-neutral-900"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
        <div className="relative z-10 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-sm md:text-base font-medium text-white"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 text-xl md:text-3xl font-semibold text-white"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute inset-0 z-0"
        />
      </motion.button>
    </>
  );
};

export const BlurImage: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  ...props
}) => {
  const [loading, setLoading] = useState(true);
  return (
    <Image
      src={src}
      alt={alt || "Carousel image"}
      className={cn(
        "h-full w-full transition duration-300",
        loading ? "blur-sm" : "blur-0",
        className
      )}
      onLoadingComplete={() => setLoading(false)}
      {...props}
    />
  );
};
