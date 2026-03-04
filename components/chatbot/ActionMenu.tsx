import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MoreHorizontal, Phone, MessageCircleMore, CalendarPlus, X, Pointer } from 'lucide-react';
import { cn } from './utils';


export default function ActionMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleActionClick = (action: () => void) => {
        action();
        setIsMenuOpen(false);
    };

    const actions = [
        { id: 'whatsapp', icon: <MessageCircleMore size={30} />, label: 'Whatsapp', onClick: () => window.open('https://wa.me/995568611223', '_blank'), color: 'bg-[#25D366]' },
        { id: 'phone', icon: <Phone size={30} />, label: 'Call', onClick: () => window.open('tel:+995568611223', '_blank'), color: 'bg-blue-500' },
        { id: 'book', icon: <CalendarPlus size={30} />, label: 'Book Now', onClick: () => window.open("https://www.fresha.com/book-now/bregvasbusiness-efouvgsj/all-offer?share=true&pId=2786881", "_blank"), color: 'bg-brand-primary' },
    ];

    return (
        <div className="flex flex-col items-end gap-3">
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex flex-col gap-3 mb-2"
                    >
                        {actions.map((action, index) => (
                            <motion.div
                                key={action.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{
                                    delay: (actions.length - 1 - index) * 0.05,
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25
                                }}
                                className="flex items-center gap-3 group justify-end"
                            >
                                <span className="bg-white px-3 py-1.5 rounded-xl shadow-sm text-xs font-semibold text-gray-600 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                                    {action.label}
                                </span>
                                <button
                                    onClick={() => handleActionClick(action.onClick)}
                                    className={cn(
                                        "w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg shadow-black/5 transition-all hover:scale-110 active:scale-95",
                                        action.color
                                    )}
                                >
                                    {action.icon}
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className={cn(
                    "w-16 h-16 cursor-pointer rounded-full flex items-center justify-center shadow-2xl transition-all duration-300",
                    isMenuOpen
                        ? "bg-white text-gray-600 shadow-black/5"
                        : "bg-brand-primary text-white shadow-brand-primary/20"
                )}
            >
                {isMenuOpen ? <X size={24} /> : <MoreHorizontal size={24} />}
            </motion.button>
        </div>
    );
}
