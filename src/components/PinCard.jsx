import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const PinCard = ({ pin }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="break-inside-avoid mb-6 group cursor-pointer"
        >
            <div className="relative overflow-hidden rounded-2xl premium-card">
                <img
                    src={pin.imageUrl}
                    alt={pin.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                    <div className="flex justify-end">
                        <button className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors">
                            <Heart className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        <a
                            href={pin.affiliateUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold truncate hover:bg-gray-100 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {pin.type === 'product' ? 'Buy Now' : 'Read More'}
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-2 px-1">
                <h3 className="font-bold text-sm truncate">{pin.title}</h3>
                <div className="flex flex-wrap gap-1 mt-1">
                    {pin.hashtags && pin.hashtags.map((tag, i) => (
                        <span key={i} className="text-[10px] text-primary font-bold">#{tag}</span>
                    ))}
                </div>
                <p className="text-gray-500 text-[10px] mt-1">{pin.author} • {pin.category}</p>
            </div>
        </motion.div>
    );
};

export default PinCard;
