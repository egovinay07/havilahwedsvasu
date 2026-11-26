import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Maximize2, Sparkles, Users } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface BrideNoteFamilyHighlightProps {
  className?: string;
}

export const BrideNoteFamilyHighlight: React.FC<BrideNoteFamilyHighlightProps> = ({ className = '' }) => {
  const [photoOpen, setPhotoOpen] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`rounded-3xl bg-gradient-to-br from-cream-soft/90 via-white/95 to-cream-soft/75 dark:from-midnight-card dark:via-midnight-elevated/90 dark:to-midnight-card border-2 border-rose/35 dark:border-midnight-border shadow-wedding-lg relative overflow-hidden transition-colors ${className}`}
    >
      {/* Top Gradient Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-rose dark:via-champagne to-transparent" />

      {/* Main Container */}
      <div className="p-5 sm:p-8 lg:p-10">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose/10 dark:bg-champagne/15 border border-rose/30 dark:border-champagne/40 text-[0.7rem] sm:text-xs font-bold uppercase tracking-widest text-rose dark:text-champagne mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Friends Foundation Family &amp; Bride's Note</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h3 className="font-hobo uppercase text-2xl sm:text-3xl md:text-4xl font-normal text-plum dark:text-darktext-primary tracking-wide leading-tight py-1">
            FRIENDS FOUNDATION FAMILY
          </h3>
          <div className="w-16 h-[1.5px] bg-rose/40 dark:bg-champagne/40 mx-auto my-3" />
        </div>

        {/* 2-Column Responsive Layout: Side-by-side on desktop (lg:grid-cols-12), stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* COLUMN 1: THE PHOTO & FAMILY CARD */}
          <div className="lg:col-span-6 flex flex-col justify-between p-5 sm:p-7 rounded-2xl bg-white/80 dark:bg-midnight-card/90 border border-rose/20 dark:border-midnight-border shadow-sm">
            <div>
              {/* Photo Label */}
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-rose dark:text-champagne">
                  <Users className="w-4 h-4" />
                  Friends Foundation Family
                </span>
                <span className="text-[0.68rem] uppercase tracking-wider text-plum-soft dark:text-darktext-muted font-medium">
                  Engagement Ceremony
                </span>
              </div>

              {/* Photo Frame with Hover Effects */}
              <div
                onClick={() => setPhotoOpen(true)}
                className="relative aspect-[3/2] sm:aspect-[16/10] rounded-xl overflow-hidden border border-rose/25 dark:border-midnight-border shadow-md group cursor-pointer bg-black/5"
              >
                <img
                  src="./assets/images/friends-foundation-family.jpg"
                  alt="Friends Foundation Family - Engagement Ceremony of Mercy Havilah and Vasu"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-midnight/80 dark:from-midnight/90 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-end justify-between p-4 text-white">
                  <span className="font-serif text-xs sm:text-sm font-medium">
                    Tap to view fullscreen
                  </span>
                  <span className="p-2 rounded-full bg-rose/90 dark:bg-champagne dark:text-midnight shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>
              </div>

              {/* Photo Caption Card - Attached directly below the photo */}
              <div className="mt-3.5 p-3.5 sm:p-4 rounded-xl bg-rose/5 dark:bg-midnight-elevated/50 border border-rose/15 dark:border-midnight-border text-center shadow-xs">
                <h4 className="font-hobo uppercase text-base sm:text-lg md:text-xl font-normal text-plum dark:text-darktext-primary tracking-wide leading-snug py-0.5">
                  FRIENDS FOUNDATION FAMILY
                </h4>
                <p className="font-serif italic text-xs sm:text-sm text-plum-muted dark:text-darktext-secondary mt-1.5 leading-relaxed">
                  Pic : Friends Foundation, Hyderabad · 16 February 2026
                </p>
              </div>

              {/* Sisters' Reception Invitation Card - Fills red circled area */}
              <div className="mt-3.5 p-3 sm:p-3.5 rounded-xl bg-gradient-to-br from-rose/10 via-cream-soft/60 to-olive/10 dark:from-midnight-elevated/80 dark:via-midnight-card dark:to-midnight-elevated/80 border border-rose/25 dark:border-midnight-border text-center shadow-xs">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose/15 dark:bg-champagne/15 border border-rose/30 dark:border-champagne/40 text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-widest text-rose dark:text-champagne mb-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>Sisters of the Bride</span>
                  <Sparkles className="w-3 h-3" />
                </div>
                <p className="font-serif italic text-xs text-plum dark:text-darktext-primary font-medium leading-snug mb-2">
                  Warmly inviting you with love &amp; joy to the Wedding Reception!
                </p>
                <div className="grid grid-cols-4 gap-1.5 mb-2">
                  {[
                    'Jemima',
                    'Hepsiba',
                    'Nikitha',
                    'Swathi',
                    'Shruthi',
                    'Swapna',
                    'Little',
                    'Bhanu',
                  ].map((name) => (
                    <div
                      key={name}
                      className="px-1.5 py-1 rounded-lg bg-white/90 dark:bg-midnight/90 border border-rose/20 dark:border-midnight-border shadow-xs text-center hover:border-rose/50 transition-colors"
                    >
                      <span className="font-serif font-bold text-[0.72rem] sm:text-xs text-plum dark:text-darktext-primary block truncate">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Fellowship Blessing - Eliminates empty space and balances Column 2 */}
            <div className="mt-4 pt-3.5 border-t border-rose/20 dark:border-midnight-border/70 text-center">
              <p className="font-serif italic text-xs sm:text-sm text-plum-muted dark:text-darktext-secondary leading-relaxed">
                “Surrounded by prayers, nurtured in faith, and forever cherished in God's love.”
              </p>
              <div className="w-10 h-[1px] bg-rose/40 dark:bg-champagne/40 mx-auto my-2" />
              <span className="text-[0.68rem] uppercase tracking-widest text-rose dark:text-champagne font-bold">
                With Love &amp; Prayers · FF Family
              </span>
            </div>
          </div>

          {/* COLUMN 2: THE BRIDE'S NOTE (Beside the photo) */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-midnight-card/90 border border-rose/20 dark:border-midnight-border shadow-sm text-center">
            <div className="flex-1 flex flex-col justify-between py-1">
              {/* Note Badge */}
              <div className="mb-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose/10 dark:bg-champagne/15 border border-rose/25 dark:border-champagne/35 text-[0.68rem] font-bold uppercase tracking-widest text-rose dark:text-champagne">
                  <Heart className="w-3 h-3 fill-current text-rose dark:text-champagne" />
                  <span>Friends Foundation</span>
                  <span className="opacity-40">·</span>
                  <span>A Special Note from the Bride</span>
                </div>
              </div>

              {/* Sacred Cross & Note Title */}
              <div className="my-1.5">
                <div className="text-rose dark:text-champagne text-2xl font-serif mb-1" aria-hidden="true">
                  ✝
                </div>
                <h4 className="font-serif text-xl sm:text-2xl md:text-[1.65rem] font-bold text-plum dark:text-darktext-primary leading-snug">
                  From FF Home to a New Home, By God's Grace! ❤️
                </h4>
                <div className="w-14 h-[1.5px] bg-rose/40 dark:bg-champagne/40 mx-auto mt-2.5" />
              </div>

              {/* Note Text */}
              <div className="font-serif text-base sm:text-[1.05rem] leading-relaxed text-plum-muted dark:text-darktext-secondary space-y-4 text-center max-w-lg mx-auto my-2">
                <p className="italic font-medium text-plum dark:text-darktext-primary text-base sm:text-lg">
                  “A little girl who grew up surrounded by love, care, and prayers is now stepping into a beautiful new chapter of life.”
                </p>
                <p>
                  As the eldest girl of <span className="font-semibold text-rose dark:text-champagne">Friends Foundation</span>, it is a special blessing to celebrate the 7th wedding from FF Home.
                </p>
                <p>
                  Every step of this journey is a testimony of God's unconditional love and faithfulness.
                </p>
                <p>
                  With thankful hearts and joyful spirits, we invite you to be part of our beautiful beginning.
                </p>
              </div>

              {/* Scripture Promise & Gratitude - Perfectly balances the Sisters card in Column 1 */}
              <div className="my-2 p-3.5 sm:p-4 rounded-xl bg-gradient-to-br from-rose/10 via-cream-soft/60 to-olive/10 dark:from-midnight-elevated/80 dark:via-midnight-card dark:to-midnight-elevated/80 border border-rose/25 dark:border-midnight-border text-center shadow-xs">
                <p className="font-serif italic text-xs sm:text-sm text-plum dark:text-darktext-primary font-medium leading-relaxed">
                  “The Lord has done great things for us, and we are filled with joy.”
                </p>
                <span className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-widest text-rose dark:text-champagne font-bold font-sans mt-1.5 block">
                  — Psalm 126:3 —
                </span>
              </div>
            </div>

            {/* Praise & Signature - Centered, Balanced, Generous clearance without overlap */}
            <div className="mt-4 pt-3.5 border-t border-rose/20 dark:border-midnight-border/70 text-center">
              <p className="font-serif text-sm sm:text-base font-semibold text-rose dark:text-champagne mb-2">
                ✨ All glory to God! ✨
              </p>
              <div className="flex flex-col items-center justify-center">
                <span className="font-champagne text-3xl sm:text-4xl text-plum dark:text-champagne block leading-normal">
                  ~ Mercy Havilah ~
                </span>
                <span className="text-[0.68rem] uppercase tracking-[0.25em] text-plum-soft dark:text-darktext-muted font-bold font-sans block mt-3">
                  The Bride
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Fullscreen Lightbox for Friends Foundation Family Photo */}
      <Lightbox
        open={photoOpen}
        close={() => setPhotoOpen(false)}
        slides={[
          {
            src: './assets/images/friends-foundation-family.jpg',
            alt: 'Friends Foundation Family - Engagement Ceremony of Mercy Havilah and Vasu',
          },
        ]}
      />
    </motion.section>
  );
};
