import React from 'react';
import { ExternalLink, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

const PinCard = ({ pin }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            onClick={() => navigate(`/blog/${pin._id}`)}
            className="break-inside-avoid mb-6 group cursor-pointer"
        >
            <div className="relative overflow-hidden rounded-2xl premium-card shadow-sm hover:shadow-xl transition-shadow duration-300">
                <img
                    src={pin.imageUrl}
                    alt={pin.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                    <div className="flex justify-end">
                        <button 
                            className="bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/40 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                // Add heart logic if needed
                            }}
                        >
                            <Heart className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        <Link
                            to={`/blog/${pin._id}`}
                            className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold truncate hover:bg-gray-100 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Read More
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        
                        {pin.affiliateUrl && (
                             <a
                                href={pin.affiliateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2 text-sm font-bold shadow-md"
                                onClick={(e) => e.stopPropagation()}
                            >
                                Buy Now <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-2 px-1">
                <h3 className="font-bold text-sm truncate group-hover:text-primary transition-colors">{pin.title}</h3>
                <div className="flex flex-wrap gap-1 mt-1">
                    {pin.hashtags && pin.hashtags.map((tag, i) => (
                        <span key={i} className="text-[10px] text-primary font-bold">#{tag.replace('#', '')}</span>
                    ))}
                </div>
                <p className="text-gray-500 text-[10px] mt-1 uppercase tracking-tighter">{pin.category} • {pin.author || 'Admin'}</p>
            </div>
        </motion.div>
    );
};

export default PinCard;
