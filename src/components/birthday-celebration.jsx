"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Heart, Sparkles, Gift, Cake } from "lucide-react"

export default function BirthdayCelebration() {
  const [isCardOpen, setIsCardOpen] = useState(false)
  const [activePhoto, setActivePhoto] = useState(0)

  const photos = [
    "/images/44864915825.jpg",
    "/images/8e1a19fb6dc74c8a8869da19d586714b.jpg",
    "/images/WhatsApp Image 2026-09-17 at 22.26.36.jpeg",
    "/images/WhatsApp Image 2026-09-17 at 22.26.37 (1).jpeg",
    "/images/WhatsApp Image 2026-09-17 at 22.26.37.jpeg",
    "/images/WhatsApp Image 2026-09-17 at 22.26.38 (1).jpeg",
    "/images/WhatsApp Image 2026-09-17 at 22.26.38.jpeg",
    "/images/WhatsApp Image 2026-09-18 at 10.38.00 (1).jpeg",
    "/images/WhatsApp Image 2026-09-18 at 10.38.00.jpeg",
    "/images/WhatsApp Image 2026-09-18 at 10.38.02 (1).jpeg",
    "/images/WhatsApp Image 2026-09-18 at 10.38.02.jpeg",
    "/images/WhatsApp Image 2026-09-18 at 10.38.03 (1).jpeg",
    "/images/WhatsApp Image 2026-09-18 at 10.38.03.jpeg",
  ]

  const showNextPhoto = () => {
    setActivePhoto((currentPhoto) => (currentPhoto + 1) % photos.length)
  }

  const showPreviousPhoto = () => {
    setActivePhoto((currentPhoto) => (currentPhoto - 1 + photos.length) % photos.length)
  }

  const openCard = () => {
    setIsCardOpen(true)
    setActivePhoto(0)
  }

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.3,
        }}
        className="relative mb-2"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-pink-600 mb-2">Happy Birthday, My Love</h1>
        <div className="flex justify-center gap-3">
          <Cake className="w-8 h-8 text-pink-500" />
          <Sparkles className="w-8 h-8 text-yellow-500" />
          <Heart className="w-8 h-8 text-pink-500" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-pink-600 mt-2">by ZYX</h3>
      </motion.div>

      <motion.div
        className="w-full max-w-md mx-auto my-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className={`relative transition-all duration-700 ease-in-out transform ${isCardOpen ? "rotate-0" : "rotate-2"}`}>
          <div
            className={`min-h-[420px] sm:min-h-[460px] bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl p-14 sm:p-10 shadow-lg transition-all duration-700 transform ${isCardOpen ? "scale-95" : "scale-100"
              }`}
          >
            <div className="absolute top-2 right-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-yellow-200" />
              </motion.div>
            </div>

            {!isCardOpen && <button
              type="button"
              onClick={openCard}
              className="w-full text-center text-white cursor-pointer"
              aria-label="Open your birthday card"
            >
              <p className="text-lg font-medium mb-4">Tap to open your card</p>
              <div className="flex justify-center">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Gift className="w-14 h-14 text-white" />
                </motion.div>
              </div>
            </button>}
          </div>

          {/* Card content */}
          <AnimatePresence>
            {isCardOpen && <motion.div
              className="absolute inset-0 bg-white rounded-3xl p-4 shadow-xl shadow-rose-100 flex flex-col items-center justify-center"
              initial={{ rotate: 2, rotateX: -90, opacity: 0 }}
              animate={{
                rotate: isCardOpen ? 0 : 2,
                rotateX: isCardOpen ? 0 : -90,
                opacity: isCardOpen ? 1 : 0,
                zIndex: isCardOpen ? 10 : -1,
              }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={showNextPhoto}
                  className="relative w-full flex-1 min-h-0 rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus:ring-4 focus:ring-pink-300"
                  aria-label={`Show photo ${activePhoto + 1} of ${photos.length}. Click for the next photo.`}
                >
                  <img
                    src={photos[activePhoto]}
                    alt={`Birthday memory ${activePhoto + 1} of ${photos.length}`}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                    Tap photo for next
                  </span>
                </button>
                <div className="flex items-center justify-between w-full gap-2">
                  <button type="button" onClick={showPreviousPhoto} className="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-700 hover:bg-pink-200" aria-label="Show previous photo">Previous</button>
                  <span className="text-sm text-purple-700">{activePhoto + 1} / {photos.length}</span>
                  <button type="button" onClick={showNextPhoto} className="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-700 hover:bg-pink-200" aria-label="Show next photo">Next</button>
                </div>
                <button type="button" onClick={() => setIsCardOpen(false)} className="text-sm text-purple-600 underline">Close card</button>
              </div>
            </motion.div>}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        className="w-full max-w-md mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="text-center">
          <p className="text-lg text-purple-700 mb-4">
          May every wish you make today come true. You deserve the world, and I’ll always be here to remind you of that.
          </p>
          <div className="flex justify-center items-center gap-2">
            <p className="text-pink-600 font-medium">Let’s always stay like this... together, forever 🫶</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
