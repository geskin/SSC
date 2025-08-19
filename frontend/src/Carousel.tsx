import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carousel() {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!carouselRef.current) return;
        const scrollAmount = 300; // px per click
        carouselRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative w-full">
            {/* Left Arrow */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-3 rounded-full hover:bg-black/70"
            >
                <ChevronLeft size={28} />
            </button>

            {/* Carousel */}
            <div
                ref={carouselRef}
                className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth"
            >
                {Array.from({ length: 10 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="min-w-[250px] h-[200px] bg-pink-400 flex items-center justify-center text-2xl font-bold rounded-xl shadow-md"
                    >
                        Item {i + 1}
                    </motion.div>
                ))}
            </div>

            {/* Right Arrow */}
            <button
                onClick={() => scroll("right")}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-3 rounded-full hover:bg-black/70"
            >
                <ChevronRight size={28} />
            </button>
        </div>
    );
}
