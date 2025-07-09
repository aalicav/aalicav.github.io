import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti';
import Marquee from "@/components/ui/marquee";
import {
    Calendar,
    Clock,
    ChevronDown,
    User,
    MessageCircle,
    Send,
    Smile,
    CheckCircle,
    XCircle,
    HelpCircle,
} from 'lucide-react'
import { useState } from 'react';
import { formatEventDate } from '@/lib/formatEventDate';

export default function Wishes() {
    const [showConfetti, setShowConfetti] = useState(false);
    const [newWish, setNewWish] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [attendance, setAttendance] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const options = [
        { value: 'ATTENDING', label: 'Com certeza estarei lá!' },
        { value: 'NOT_ATTENDING', label: 'Infelizmente não poderei comparecer' },
        { value: 'MAYBE', label: 'Vou confirmar em breve' }
    ];
    // Example wishes - replace with your actual data
    const [wishes, setWishes] = useState([
        {
            id: 1,
            name: "João Silva",
            message: "Que vocês tenham uma vida repleta de amor, risadas e momentos especiais! 🎉",
            timestamp: "2024-12-24T23:20:00Z",
            attending: "attending"
        },
        {
            id: 2,
            name: "Maria Santos",
            message: "Que Deus abençoe essa união com muito amor, harmonia e felicidade! 💕",
            timestamp: "2024-12-24T23:20:00Z",
            attending: "attending"
        },
        {
            id: 3,
            name: "Pedro Oliveira",
            message: "Parabéns por esse momento tão especial! Que Deus abençoe vocês! 🤲",
            timestamp: "2024-12-25T23:08:09Z",
            attending: "maybe"
        }
    ]);

    const handleSubmitWish = async (e) => {
        e.preventDefault();
        if (!newWish.trim()) return;

        setIsSubmitting(true);
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        const newWishObj = {
            id: wishes.length + 1,
            name: "Convidado", // Replace with actual user name
            message: newWish,
            attend: "attending",
            timestamp: new Date().toISOString()
        };

        setWishes(prev => [newWishObj, ...prev]);
        setNewWish('');
        setIsSubmitting(false);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
    };
    const getAttendanceIcon = (status) => {
        switch (status) {
            case 'attending':
                return <CheckCircle className="w-4 h-4 text-verde-folha" />;
            case 'not-attending':
                return <XCircle className="w-4 h-4 text-laranja-flor" />;
            case 'maybe':
                return <HelpCircle className="w-4 h-4 text-dourado" />;
            default:
                return null;
        }
    };
    return (<>
        <section id="wishes" className="min-h-screen relative overflow-hidden">
            {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
            <div className="container mx-auto px-4 py-20 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-4 mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block text-dourado font-sans-modern font-medium"
                    >
                        Deixe Sua Mensagem Especial
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl font-serif-elegant text-marrom-claro"
                    >
                        Mensagens e Bênçãos
                    </motion.h2>

                    {/* Decorative Divider */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-center gap-4 pt-4"
                    >
                        <div className="h-[1px] w-12 bg-dourado" />
                        <MessageCircle className="w-5 h-5 text-dourado" />
                        <div className="h-[1px] w-12 bg-dourado" />
                    </motion.div>
                </motion.div>

                {/* Wishes List */}
                <div className="max-w-2xl mx-auto space-y-6">
                    <AnimatePresence>
                        <Marquee speed={20}
                            gradient={false}
                            className="[--duration:20s] py-2">
                            {wishes.map((wish, index) => (
                                <motion.div
                                    key={wish.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative w-[280px]"
                                >
                                    {/* Background gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-bege-claro/50 to-dourado/30 rounded-xl transform transition-transform group-hover:scale-[1.02] duration-300" />

                                    {/* Card content */}
                                    <div className="relative backdrop-blur-sm bg-white/80 p-4 rounded-xl border border-dourado/30 shadow-md">
                                        {/* Header */}
                                        <div className="flex items-start space-x-3 mb-2">
                                            {/* Avatar */}
                                            <div className="flex-shrink-0">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-dourado to-marrom-claro flex items-center justify-center text-white text-sm font-sans-modern font-medium">
                                                    {wish.name[0].toUpperCase()}
                                                </div>
                                            </div>

                                            {/* Name, Time, and Attendance */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center space-x-2">
                                                    <h4 className="font-sans-modern font-medium text-marrom-claro text-sm truncate">
                                                        {wish.name}
                                                    </h4>
                                                    {getAttendanceIcon(wish.attending)}
                                                </div>
                                                <div className="flex items-center space-x-1 text-marrom-claro text-xs">
                                                    <Clock className="w-3 h-3" />
                                                    <time className="truncate font-sans-modern">
                                                        {formatEventDate(wish.timestamp)}
                                                    </time>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <p className="text-marrom-claro font-sans-classic text-sm leading-relaxed mb-2 line-clamp-3">
                                            {wish.message}
                                        </p>

                                        {/* Optional: Time indicator for recent messages */}
                                        {Date.now() - new Date(wish.timestamp).getTime() < 3600000 && (
                                            <div className="absolute top-2 right-2">
                                                <span className="px-2 py-1 rounded-full bg-dourado/20 text-dourado text-xs font-sans-modern font-medium">
                                                    Novo
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </Marquee>
                    </AnimatePresence>
                </div>
                {/* Wishes Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-2xl mx-auto mt-12"
                >
                    <form onSubmit={handleSubmitWish} className="relative">
                        <div className="backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-dourado/30 shadow-lg">
                            <div className='space-y-2'>
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-marrom-claro text-sm mb-1">
                                        <User className="w-4 h-4" />
                                        <span>Seu Nome</span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Como você gostaria de ser chamado..."
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-dourado/30 focus:border-dourado/50 focus:ring focus:ring-dourado/20 focus:ring-opacity-50 transition-all duration-200 text-marrom-claro placeholder-marrom-claro"
                                        required
                                    />
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="space-y-2 relative"
                                >
                                    <div className="flex items-center space-x-2 text-marrom-claro text-sm mb-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>Você vai nos fazer essa alegria?</span>
                                    </div>

                                    {/* Custom Select Button */}
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-dourado/30 focus:border-dourado/50 focus:ring focus:ring-dourado/20 focus:ring-opacity-50 transition-all duration-200 text-left flex items-center justify-between"
                                    >
                                        <span className={attendance ? 'text-marrom-claro' : 'text-marrom-claro/50'}>
                                            {attendance ?
                                                options.find(opt => opt.value === attendance)?.label
                                                : 'Escolha sua resposta...'}
                                        </span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-marrom-claro/50 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                                                }`}
                                        />
                                    </button>

                                    {/* Dropdown Options */}
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="absolute z-10 w-full mt-1 bg-white rounded-xl shadow-lg border border-dourado/30 overflow-hidden"
                                            >
                                                {options.map((option) => (
                                                    <motion.button
                                                        key={option.value}
                                                        type="button"
                                                        onClick={() => {
                                                            setAttendance(option.value);
                                                            setIsOpen(false);
                                                        }}
                                                        whileHover={{ backgroundColor: 'rgb(255, 241, 242)' }}
                                                        className={`w-full px-4 py-2.5 text-left transition-colors
                                        ${attendance === option.value
                                                                ? 'bg-dourado/20 text-dourado'
                                                                : 'text-marrom-claro hover:bg-dourado/20'
                                                            }`}
                                                    >
                                                        {option.label}
                                                    </motion.button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                                {/* Wish Textarea */}
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-marrom-claro text-sm mb-1">
                                        <MessageCircle className="w-4 h-4" />
                                        <span>Sua mensagem especial</span>
                                    </div>
                                    <textarea
                                        placeholder="Deixe aqui sua mensagem de carinho e suas bênçãos para nós..."
                                        className="w-full h-32 p-4 rounded-xl bg-white/50 border border-dourado/30 focus:border-dourado/50 focus:ring focus:ring-dourado/20 focus:ring-opacity-50 resize-none transition-all duration-200"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <div className="flex items-center space-x-2 text-marrom-claro">
                                    <Smile className="w-5 h-5" />
                                    <span className="text-sm">Envie Sua Bênção</span>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl text-white font-medium transition-all duration-200
                    ${isSubmitting
                                            ? 'bg-marrom-claro/50 cursor-not-allowed'
                                            : 'bg-dourado hover:bg-dourado/20'}`}
                                >
                                    <Send className="w-4 h-4" />
                                    <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}</span>
                                </motion.button>
                            </div>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    </>)
}
