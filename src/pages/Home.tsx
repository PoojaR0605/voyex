import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Users, Sparkles, Car, Hotel, UtensilsCrossed, Map, Shield, Clock, ArrowRight, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import GlassCard from '../components/GlassCard';
import { destinations, testimonials } from '../data/mockData';

const Home = () => {
  const navigate = useNavigate();
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  // ✅ AUTH PROTECTION (ONLY ADDITION)
  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      navigate("/signup"); // or "/login"
    }
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  const features = [
    {
      icon: Car,
      title: 'Door to Door Service',
      description: 'Pickup from your home, drop at destination. Complete travel solution.',
    },
    {
      icon: Hotel,
      title: 'Premium Stays',
      description: 'Handpicked hotels and resorts for your comfort and luxury.',
    },
    {
      icon: UtensilsCrossed,
      title: 'Curated Dining',
      description: 'Best local restaurants and authentic cuisine experiences.',
    },
    {
      icon: Map,
      title: 'AI Itinerary',
      description: 'Smart trip planning powered by AI for optimal experiences.',
    },
    {
      icon: Shield,
      title: '24/7 Support',
      description: 'Round the clock assistance for a worry-free journey.',
    },
    {
      icon: Clock,
      title: 'Live Tracking',
      description: 'Real-time updates and location tracking throughout your trip.',
    },
  ];

  const steps = [
    { number: 1, title: 'Choose Destination', description: 'Select from our curated destinations' },
    { number: 2, title: 'Set Preferences', description: 'Travelers, budget, and travel style' },
    { number: 3, title: 'Pick Vehicle', description: 'Choose from our premium fleet' },
    { number: 4, title: 'Select Hotels', description: 'Book the perfect stay' },
    { number: 5, title: 'Plan Activities', description: 'Dining and sightseeing' },
    { number: 6, title: 'Confirm & Go', description: 'Sit back and enjoy the journey' },
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-brand-cyan rounded-full"
              style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold font-syne mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-brand-indigo via-brand-cyan to-brand-indigo bg-clip-text text-transparent">
                Travel Smarter.
              </span>
              <br />
              <span className="text-white">Door to Door, Zero Stress.</span>
            </motion.h1>

            <motion.p
              className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Experience seamless travel with VOYEX. From your doorstep to your destination, we handle everything.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <GlassCard className="p-6 sm:p-8 max-w-4xl mx-auto" hover={false}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Destination</label>
                  <div className="flex items-center space-x-2 bg-dark-lighter/50 rounded-lg px-4 py-3 border border-white/10">
                    <MapPin className="w-5 h-5 text-brand-cyan" />
                    <input type="text" placeholder="Where to?" className="bg-transparent border-none outline-none text-white w-full" />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Check In</label>
                  <div className="flex items-center space-x-2 bg-dark-lighter/50 rounded-lg px-4 py-3 border border-white/10">
                    <Calendar className="w-5 h-5 text-brand-cyan" />
                    <input type="date" className="bg-transparent border-none outline-none text-white w-full" />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Check Out</label>
                  <div className="flex items-center space-x-2 bg-dark-lighter/50 rounded-lg px-4 py-3 border border-white/10">
                    <Calendar className="w-5 h-5 text-brand-cyan" />
                    <input type="date" className="bg-transparent border-none outline-none text-white w-full" />
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Travelers</label>
                  <div className="flex items-center space-x-2 bg-dark-lighter/50 rounded-lg px-4 py-3 border border-white/10">
                    <Users className="w-5 h-5 text-brand-cyan" />
                    <input type="number" placeholder="2" min="1" className="bg-transparent border-none outline-none text-white w-full" />
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/plan')}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-brand-indigo to-brand-cyan text-white font-semibold text-lg"
              >
                Start Planning
              </button>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;