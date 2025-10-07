"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Workshop", "Seminar", "Event"];

const galleryImagesData = [
  // Workshop
  { url: "/gallery-img/W2.jpg", aspectRatio: "aspect-square", category: "Workshop", alt: "Team Collaboration" },
  { url: "/gallery-img/W1.jpg", aspectRatio: "aspect-video", category: "Workshop", alt: "Presentation Session" },
  { url: "/gallery-img/W4.jpg", aspectRatio: "aspect-[3/2]", category: "Workshop", alt: "Interactive Workshop" },
  { url: "/gallery-img/W5.jpg", aspectRatio: "aspect-square", category: "Workshop", alt: "Hands-on Training" },
  { url: "/gallery-img/W6.jpg", aspectRatio: "aspect-video", category: "Workshop", alt: "Group Discussion" },
  // Seminar
  { url: "/gallery-img/S1.JPG", aspectRatio: "aspect-[2/2]", category: "Seminar", alt: "Guest Speaker" },
  { url: "/gallery-img/S2.jpg", aspectRatio: "aspect-[2/2.4]", category: "Seminar", alt: "Audience View" },
  { url: "/gallery-img/S3.jpg", aspectRatio: "aspect-[4/5]", category: "Seminar", alt: "Panel Discussion" },
  { url: "/gallery-img/S4.jpg", aspectRatio: "aspect-[2/3]", category: "Seminar", alt: "Keynote Address" },
  // Event
  { url: "gallery-img/E1.png", aspectRatio: "aspect-square", category: "Event", alt: "Networking" },
  { url: "gallery-img/E2.png", aspectRatio: "aspect-[3/4]", category: "Event", alt: "Product Launch" },
  { url: "gallery-img/E3.jpg", aspectRatio: "aspect-[2/2]", category: "Event", alt: "Award Ceremony" },
  { url: "gallery-img/E4.jpg", aspectRatio: "aspect-square", category: "Event", alt: "Celebration" },
  { url: "gallery-img/E5.jpg", aspectRatio: "aspect-video", category: "Event", alt: "Concert" },
  { url: "gallery-img/E6.jpg", aspectRatio: "aspect-[2/3]", category: "Event", alt: "Staff Party" },
  { url: "gallery-img/E7.jpg", aspectRatio: "aspect-square", category: "Event", alt: "Team Photo" },
  { url: "gallery-img/E8.jpg", aspectRatio: "aspect-[2/2]", category: "Event", alt: "Exhibition" },
  { url: "gallery-img/E9.jpg", aspectRatio: "aspect-square", category: "Event", alt: "Meeting" },
  { url: "gallery-img/E10.jpg", aspectRatio: "aspect-[5/4]", category: "Event", alt: "Reception" },
  { url: "gallery-img/E11.jpg", aspectRatio: "aspect-square", category: "Event", alt: "Outdoor Event" },
  { url: "gallery-img/E12.jpg", aspectRatio: "aspect-video", category: "Event", alt: "Fireworks" },
  { url: "gallery-img/E13.jpg", aspectRatio: "aspect-square", category: "Event", alt: "Dinner" },
  { url: "gallery-img/E14.jpg", aspectRatio: "aspect-[3/4]", category: "Event", alt: "Welcome" },
  { url: "gallery-img/E15.jpeg", aspectRatio: "aspect-[3/4]", category: "Event", alt: "Welcome" },
];

// Button component with dark mode support
const FilterButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`relative px-5 py-2 text-sm font-semibold transition-all duration-300 rounded-full 
      ${
        active
          ? "text-white bg-indigo-600 shadow-lg"
          : "text-gray-700 bg-gray-100 hover:bg-indigo-50 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
      }`}
  >
    {children}
    {active && (
      <motion.div
        layoutId="underline"
        className="absolute inset-0 rounded-full bg-indigo-600 -z-10"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    )}
  </button>
);

export default function ProfessionalGallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = useMemo(
    () =>
      activeFilter === "All"
        ? galleryImagesData
        : galleryImagesData.filter((img) => img.category === activeFilter),
    [activeFilter]
  );

  return (
    <section className="py-16 bg-gray-50 text-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black dark:text-white transition-colors duration-500">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">Our Moments</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Capturing innovation, collaboration, and creativity from our events and workshops.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </FilterButton>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4"
        >
          <AnimatePresence>
            {filteredImages.length > 0 ? (
              filteredImages.map((image) => (
                <motion.div
                  key={image.url}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-xl shadow-lg dark:shadow-gray-800 group mb-4 break-inside-avoid"
                >
                  <div className={`${image.aspectRatio || "aspect-square"} w-full`}>
                    <img
                      src={image.url}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
                    <p className="text-sm font-medium text-white line-clamp-1">
                      {image.alt || image.category}
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-gray-500 dark:text-gray-400 text-lg">
                No images found for the "{activeFilter}" category.
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
