import { 
  Ticket, 
  CheckCircle, 
  Users, 
  Shield, 
  Zap, 
  LayoutDashboard,
  ArrowRight,
  Menu,
  X,
  Plus,
  Minus,
  Star,
  Globe,
  Lock,
  MessageSquare,
  Quote,
  Activity,
  MousePointer2,
  Sparkles,
  Command,
  Monitor,
  Smartphone,
  Cpu,
  Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface LandingPageProps {
  onNavigateToAuth: () => void;
}

export function LandingPage({ onNavigateToAuth }: LandingPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-600 selection:text-white scroll-smooth overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        style={{ backgroundColor: navBackground }}
        className="fixed w-full z-[100] transition-all backdrop-blur-xl border-b border-transparent data-[scrolled=true]:border-slate-200/50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-slate-950 rounded-[18px] flex items-center justify-center text-white shadow-2xl shadow-blue-500/20 group-hover:rotate-6 transition-transform">
                <Ticket className="h-6 w-6" strokeWidth={2.5} />
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase italic leading-none">
                Fore<span className="text-blue-600">Sight</span>
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-12">
              <div className="flex items-center gap-10">
                {['Soluciones', 'Ecosistema', 'Precios', 'FAQ'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`} 
                    className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-blue-600 transition-all hover:-translate-y-0.5"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="h-8 w-[1px] bg-slate-200" />
              <Button 
                onClick={onNavigateToAuth}
                className="bg-slate-950 hover:bg-blue-600 text-white rounded-2xl px-10 h-14 text-xs font-black uppercase tracking-widest shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all hover:scale-105 active:scale-95 border-b-4 border-slate-800"
              >
                Acceso Sistema
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-100 text-slate-900 transition-all active:scale-90"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col gap-6 p-8">
                {['Soluciones', 'Ecosistema', 'Precios', 'FAQ'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`} 
                    className="text-2xl font-black uppercase tracking-tighter text-slate-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <Button onClick={onNavigateToAuth} className="w-full bg-blue-600 py-8 text-lg font-black uppercase rounded-3xl shadow-xl shadow-blue-500/20">
                  Ingresar al Portal
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-100 rounded-full blur-[160px] opacity-40 animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-100 rounded-full blur-[160px] opacity-40 animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-40 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border-2 border-slate-100 text-slate-900 font-black text-[10px] uppercase tracking-[0.25em] mb-12 shadow-2xl shadow-slate-200/50"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse" />
              Soporte de Nueva Generación
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[12vw] lg:text-[100px] font-black tracking-[-0.05em] leading-[0.85] text-slate-950 mb-10 uppercase italic"
            >
              Domina tu <span className="text-blue-600 not-italic">Infra</span><br />
              <span className="relative">
                estructura
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 h-4 bg-blue-600/10 -z-10" 
                />
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl lg:text-2xl text-slate-500 mb-16 max-w-2xl leading-relaxed font-medium"
            >
              La plataforma definitiva de <span className="text-slate-900 font-black uppercase italic tracking-tighter">Enterprise Support</span> diseñada para equipos que no aceptan el "mañana".
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-6 mb-24"
            >
              <Button 
                onClick={onNavigateToAuth}
                className="w-full sm:w-auto text-sm h-16 px-14 rounded-[22px] bg-blue-600 hover:bg-blue-700 text-white shadow-[0_30px_60px_-15px_rgba(37,99,235,0.4)] transition-all hover:scale-105 font-black uppercase tracking-widest border-b-4 border-blue-800"
              >
                Desplegar Ahora
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="w-full sm:w-auto text-sm h-16 px-14 rounded-[22px] border-2 border-slate-200 bg-white text-slate-900 hover:bg-slate-50 font-black uppercase tracking-widest transition-all hover:border-slate-300"
              >
                Explorar Demo
              </Button>
            </motion.div>

            {/* Dashboard Preview Mockup */}
            <motion.div 
              initial={{ opacity: 0, y: 100, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-6xl mx-auto group perspective-1000"
            >
              <div className="relative bg-slate-950 rounded-[3rem] p-3 shadow-[0_80px_100px_-20px_rgba(0,0,0,0.4)] border border-slate-800 transition-transform group-hover:scale-[1.02] duration-700">
                <div className="absolute -top-10 left-10 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                
                <div className="bg-[#fcfcfc] rounded-[2.5rem] overflow-hidden border border-slate-200">
                  <div className="flex h-[500px] lg:h-[700px]">
                    {/* Mock Sidebar */}
                    <div className="hidden lg:flex w-24 bg-slate-950 flex-col items-center py-10 gap-10">
                      <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                        <Ticket size={24} />
                      </div>
                      <div className="flex flex-col gap-8 opacity-40">
                        <LayoutDashboard size={24} className="text-white" />
                        <Users size={24} className="text-white" />
                        <Activity size={24} className="text-white" />
                        <Shield size={24} className="text-white" />
                      </div>
                    </div>
                    {/* Mock Content */}
                    <div className="flex-1 p-10 flex flex-col gap-10">
                       <div className="flex justify-between items-end">
                          <div className="space-y-2 text-left">
                            <div className="h-4 w-32 bg-slate-200 rounded-full animate-pulse" />
                            <div className="h-10 w-64 bg-slate-900 rounded-2xl animate-pulse" />
                          </div>
                          <div className="h-14 w-48 bg-blue-600 rounded-2xl shadow-xl shadow-blue-500/20" />
                       </div>
                       
                       <div className="grid grid-cols-3 gap-6">
                          <div className="h-32 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-6">
                            <div className="h-3 w-16 bg-slate-100 rounded-full mb-4" />
                            <div className="h-8 w-24 bg-slate-900 rounded-xl" />
                          </div>
                          <div className="h-32 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-6">
                            <div className="h-3 w-16 bg-slate-100 rounded-full mb-4" />
                            <div className="h-8 w-24 bg-slate-900 rounded-xl" />
                          </div>
                          <div className="h-32 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 p-6">
                            <div className="h-3 w-16 bg-slate-100 rounded-full mb-4" />
                            <div className="h-8 w-24 bg-slate-900 rounded-xl" />
                          </div>
                       </div>

                       <div className="flex-1 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 p-10 text-left">
                          <div className="space-y-6">
                             {[1, 2, 3].map(i => (
                               <div key={i} className="flex items-center justify-between pb-6 border-b border-slate-50 last:border-0">
                                  <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-100 rounded-2xl" />
                                    <div className="space-y-2">
                                      <div className="h-4 w-48 bg-slate-900 rounded-lg" />
                                      <div className="h-3 w-24 bg-slate-300 rounded-lg" />
                                    </div>
                                  </div>
                                  <div className="h-8 w-24 bg-slate-100 rounded-full" />
                               </div>
                             ))}
                          </div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Floating Micro-UI elements */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -right-16 top-1/4 bg-white p-6 rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 hidden xl:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                      <CheckCircle size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Status Sistema</p>
                      <p className="text-xl font-black text-slate-900 italic uppercase tracking-tighter">99.9% Online</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -left-16 bottom-1/4 bg-white p-6 rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 hidden xl:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                      <Activity size={28} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Carga Server</p>
                      <p className="text-xl font-black text-slate-900 italic uppercase tracking-tighter">12% Minimal</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By / Stats */}
      <section className="py-24 border-y border-slate-200/50 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
            <StatItem label="Operaciones Exitosas" value="2M+" sub="Mensuales" />
            <StatItem label="Latencia Promedio" value="<2ms" sub="Global" />
            <StatItem label="Soporte Activo" value="24/7" sub="Tier 3" />
            <StatItem label="Satisfacción" value="99.9%" sub="NPS Core" />
          </div>
          
          <div className="mt-24 pt-20 border-t border-slate-100">
             <p className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-12 italic">Powered by Advanced Infrastructure</p>
             <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-30 grayscale contrast-150">
                <span className="text-2xl font-black uppercase tracking-tighter italic">AWS</span>
                <span className="text-2xl font-black uppercase tracking-tighter italic">Azure</span>
                <span className="text-2xl font-black uppercase tracking-tighter italic">Datadog</span>
                <span className="text-2xl font-black uppercase tracking-tighter italic">Oracle</span>
                <span className="text-2xl font-black uppercase tracking-tighter italic">Fastly</span>
             </div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section id="soluciones" className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-24">
            <div className="max-w-2xl">
              <Badge className="bg-blue-600 text-white border-none rounded-lg px-4 py-1.5 font-black uppercase tracking-widest text-[10px] mb-6 shadow-lg shadow-blue-500/20">
                Core Engine
              </Badge>
              <h2 className="text-6xl lg:text-7xl font-black text-slate-950 uppercase italic tracking-tighter leading-none mb-8">
                Diseñado para la <span className="text-blue-600 not-italic">Velocidad</span>
              </h2>
              <p className="text-xl text-slate-500 font-medium">
                Hemos reconstruido el concepto de Help Desk desde cero. ForeSight no solo gestiona tickets, orquesta soluciones masivas en tiempo real.
              </p>
            </div>
            <div className="hidden lg:flex gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center text-slate-900 shadow-xl">
                <Cpu size={24} strokeWidth={2.5} />
              </div>
              <div className="w-16 h-16 rounded-2xl bg-slate-950 flex items-center justify-center text-white shadow-xl">
                <Layers size={24} strokeWidth={2.5} />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <SolutionCard 
              icon={<Zap className="h-8 w-8 text-blue-600" />}
              title="Carga Instantánea"
              description="Nuestra arquitectura distribuida garantiza tiempos de respuesta inferiores a 100ms en cualquier continente."
            />
            <SolutionCard 
              icon={<Shield className="h-8 w-8 text-indigo-600" />}
              title="Cifrado Militar"
              description="Protocolos AES-256 GCM y autenticación hardware FIDO2 para proteger cada bit de información corporativa."
            />
            <SolutionCard 
              icon={<MessageSquare className="h-8 w-8 text-blue-600" />}
              title="Smart Routing"
              description="Algoritmos de IA que predicen la carga de trabajo y asignan tareas dinámicamente según la experticia."
            />
            <SolutionCard 
              icon={<Monitor className="h-8 w-8 text-indigo-600" />}
              title="Multi-Workspace"
              description="Gestiona múltiples organizaciones, departamentos y filiales desde una única consola centralizada."
            />
            <SolutionCard 
              icon={<Globe className="h-8 w-8 text-blue-600" />}
              title="SLA Automático"
              description="Monitoreo de cumplimiento de ANS en tiempo real con alertas escalonadas preventivas."
            />
            <SolutionCard 
              icon={<Star className="h-8 w-8 text-indigo-600" />}
              title="Advanced Analytics"
              description="Deep-learning aplicado a métricas de soporte para identificar cuellos de botella antes de que ocurran."
            />
          </div>
        </div>
      </section>

      {/* Feature Showcase - The "Software Level" Section */}
      <section id="ecosistema" className="py-40 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-5xl lg:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-12">
                Ecosistema<br />
                <span className="text-blue-500 not-italic">Unificado</span>
              </h2>
              <div className="space-y-16">
                <FeatureItem 
                  title="Configuración Relámpago"
                  desc="Implementa tu instancia corporativa en menos de 5 minutos con nuestro setup guiado de alta eficiencia."
                />
                <FeatureItem 
                  title="Código de Enlace"
                  desc="Simplifica el onboarding. Un código único es todo lo que tus técnicos necesitan para unirse al despliegue."
                />
                <FeatureItem 
                  title="API First"
                  desc="Integra ForeSight con Slack, Jira o Microsoft Teams sin escribir una sola línea de código complejo."
                />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[4rem] bg-gradient-to-tr from-blue-600 to-indigo-900 p-[2px] shadow-[0_100px_100px_-50px_rgba(0,0,0,1)]">
                <div className="w-full h-full bg-slate-950 rounded-[4rem] overflow-hidden flex items-center justify-center relative p-12">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                  />
                  <div className="grid grid-cols-2 gap-6 w-full relative">
                    <div className="h-48 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex flex-col items-center justify-center gap-4 group hover:bg-blue-500/20 transition-colors">
                      <Users size={48} className="text-blue-500" />
                      <span className="font-black uppercase italic tracking-widest text-[10px]">Team Sync</span>
                    </div>
                    <div className="h-48 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-4 translate-y-12">
                      <Lock size={48} className="text-slate-400" />
                      <span className="font-black uppercase italic tracking-widest text-[10px]">Core Security</span>
                    </div>
                    <div className="h-48 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-4">
                      <Smartphone size={48} className="text-slate-400" />
                      <span className="font-black uppercase italic tracking-widest text-[10px]">Mobile Ready</span>
                    </div>
                    <div className="h-48 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex flex-col items-center justify-center gap-4 translate-y-12 group hover:bg-blue-500/20 transition-colors">
                      <Command size={48} className="text-blue-500" />
                      <span className="font-black uppercase italic tracking-widest text-[10px]">Dev Tools</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Premium Cards */}
      <section id="precios" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black text-slate-950 uppercase italic tracking-tighter mb-6">Planes de Despliegue</h2>
            <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto italic">
              Sin sorpresas. Sin límites artificiales. Solo potencia bruta para tu infraestructura.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <PricingCard 
              title="Basic Launch"
              price="0"
              desc="Perfecto para equipos IT pequeños que inician su transformación digital."
              features={['Hasta 5 Técnicos', 'Cifrado Estándar', 'Historial 30 días', 'Soporte Comunitario']}
            />
            <PricingCard 
              title="Enterprise Pro"
              price="89"
              desc="El estándar de oro para organizaciones que escalan agresivamente."
              features={['Técnicos Ilimitados', 'IA Smart Routing', 'API Access Full', 'Backup Horario', 'Soporte 24/7']}
              highlighted={true}
            />
            <PricingCard 
              title="Custom Global"
              price="Tailor"
              desc="Soluciones para corporaciones globales con necesidades de alta disponibilidad."
              features={['SLA 99.99%', 'Infraestructura Dedicada', 'Auditoría SSO/SAML', 'Account Manager']}
            />
          </div>
        </div>
      </section>

      {/* Testimonials - High Impact */}
      <section className="py-40 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <h2 className="text-5xl font-black text-slate-950 uppercase italic tracking-tighter leading-none mb-8">
                Lo que dicen los <span className="text-blue-600 not-italic">Líderes</span>
              </h2>
              <p className="text-lg text-slate-500 font-medium mb-12">
                Empresas que ya operan en el futuro del soporte técnico.
              </p>
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center text-slate-400">
                  <Star size={24} fill="currentColor" />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center text-slate-400">
                  <Star size={24} fill="currentColor" />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center text-slate-400">
                  <Star size={24} fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <TestimonialCard 
                quote="ForeSight no es una herramienta, es una ventaja competitiva. Hemos eliminado el lag operativo."
                author="Marcos Rivera"
                role="CTO, GlobalTech"
              />
              <TestimonialCard 
                quote="La interfaz es tan intuitiva que el tiempo de capacitación de nuevos técnicos es prácticamente cero."
                author="Elena Sanchis"
                role="Head of Support, FlowData"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-black text-center text-slate-950 uppercase italic tracking-tighter mb-20">Protocolo & FAQ</h2>
          <div className="space-y-6">
            <FaqItem 
              index={0}
              question="¿Cómo garantizan la seguridad de los datos?"
              answer="Implementamos cifrado de grado militar AES-256 para todos los datos en reposo y TLS 1.3 para datos en tránsito. Además, realizamos auditorías de seguridad mensuales."
              activeFaq={activeFaq}
              setActiveFaq={setActiveFaq}
            />
            <FaqItem 
              index={1}
              question="¿Puedo migrar mi base de datos actual?"
              answer="Sí, ofrecemos herramientas de importación masiva y asistencia técnica dedicada para migrar desde plataformas como Jira, Zendesk o Freshdesk sin pérdida de datos."
              activeFaq={activeFaq}
              setActiveFaq={setActiveFaq}
            />
            <FaqItem 
              index={2}
              question="¿Ofrecen soporte para múltiples zonas horarias?"
              answer="Nuestra plataforma está diseñada para la redundancia global. Los tiempos de respuesta y SLAs se ajustan automáticamente a la zona horaria de cada área operativa."
              activeFaq={activeFaq}
              setActiveFaq={setActiveFaq}
            />
          </div>
        </div>
      </section>

      {/* CTA Final - High Energy */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-slate-950 rounded-[4rem] p-16 lg:p-32 text-center text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-1000" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl lg:text-[100px] font-black uppercase italic tracking-tighter leading-[0.85] mb-12">
              ¿Listo para el<br />
              <span className="text-blue-500 not-italic">Despegue?</span>
            </h2>
            <p className="text-slate-400 text-xl lg:text-2xl mb-16 max-w-2xl mx-auto font-medium">
              Únete a las empresas que ya no miran atrás. El sistema de soporte definitivo te espera.
            </p>
            <Button 
              onClick={onNavigateToAuth}
              className="bg-blue-600 hover:bg-white hover:text-blue-600 text-white h-24 px-16 rounded-[30px] text-2xl font-black uppercase italic tracking-tighter shadow-3xl shadow-blue-500/20 transition-all hover:scale-110 active:scale-95 group-hover:shadow-[0_40px_100px_-20px_rgba(37,99,235,0.6)]"
            >
              Comenzar Despliegue Gratis
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer - Minimalist & Technical */}
      <footer className="bg-[#0a0a0a] text-slate-500 py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-24 mb-32">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-10 text-white">
                <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Ticket size={20} strokeWidth={3} />
                </div>
                <span className="text-3xl font-black tracking-tighter uppercase italic">ForeSight</span>
              </div>
              <p className="max-w-md text-lg leading-relaxed font-medium">
                Sistemas de orquestación de soporte para infraestructuras críticas. Diseñado para la velocidad, construido para la escala.
              </p>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10">Desarrollo</h4>
              <ul className="space-y-6 text-sm font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-blue-500 transition-colors">API Core</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Documentación</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Estado Nodos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-10">Legal</h4>
              <ul className="space-y-6 text-sm font-bold uppercase tracking-widest">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">SLA Global</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Términos</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-20 border-t border-white/5 font-black uppercase tracking-[0.4em] text-[9px]">
            <p>© 2024 ForeSight Systems v2.4.0_Production. All Rights Reserved.</p>
            <div className="flex gap-12">
              <span>Latency: 2ms</span>
              <span>Uptime: 99.9%</span>
              <span className="text-blue-500">Status: Stable</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sub-components with premium styling

function StatItem({ label, value, sub }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="text-5xl lg:text-7xl font-black text-slate-950 tracking-tighter italic uppercase">{value}</div>
      <div className="space-y-1">
        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{label}</div>
        <div className="text-[9px] font-bold uppercase tracking-widest text-blue-600 italic">{sub}</div>
      </div>
    </motion.div>
  );
}

function SolutionCard({ icon, title, description }: any) {
  return (
    <motion.div 
      whileHover={{ y: -15 }}
      className="group p-12 rounded-[3rem] bg-white border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] hover:shadow-[0_60px_100px_-20px_rgba(37,99,235,0.15)] transition-all duration-500"
    >
      <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-black text-slate-950 uppercase italic tracking-tighter mb-6">{title}</h3>
      <p className="text-slate-500 font-medium leading-relaxed italic">{description}</p>
    </motion.div>
  );
}

function FeatureItem({ title, desc }: any) {
  return (
    <div className="flex gap-8 group">
      <div className="mt-2 w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_20px_5px_rgba(37,99,235,0.4)]" />
      <div>
        <h4 className="text-2xl font-black uppercase italic tracking-tighter text-white mb-4 group-hover:text-blue-500 transition-colors">{title}</h4>
        <p className="text-slate-400 font-medium leading-relaxed italic">{desc}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ quote, author, role }: any) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="p-12 rounded-[3rem] bg-white border border-slate-200 shadow-xl flex flex-col gap-8 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[4rem] flex items-center justify-center text-slate-100">
        <Quote size={60} />
      </div>
      <p className="text-xl font-black text-slate-900 italic leading-relaxed tracking-tight relative z-10">
        "{quote}"
      </p>
      <div className="flex items-center gap-5 mt-auto relative z-10">
        <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-white font-black text-xl italic">
          {author[0]}
        </div>
        <div>
          <div className="font-black text-slate-900 uppercase italic tracking-tighter">{author}</div>
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{role}</div>
        </div>
      </div>
    </motion.div>
  );
}

function PricingCard({ title, price, desc, features, highlighted = false }: any) {
  return (
    <div className={`p-12 rounded-[4rem] flex flex-col transition-all duration-500 ${
      highlighted 
        ? 'bg-slate-950 text-white scale-105 shadow-[0_80px_100px_-30px_rgba(0,0,0,0.5)] border border-slate-800' 
        : 'bg-[#fcfcfc] border-2 border-slate-100 hover:border-blue-600/20 text-slate-900'
    }`}>
      <div className="mb-10 flex justify-between items-start">
        <h3 className="text-2xl font-black uppercase italic tracking-tighter leading-none">{title}</h3>
        {highlighted && <Badge className="bg-blue-600 text-[9px] font-black uppercase italic tracking-widest border-none px-3 py-1">Despliegue Recomendado</Badge>}
      </div>
      
      <div className="flex items-baseline gap-2 mb-8">
        <span className="text-7xl font-black tracking-tighter italic uppercase">
          {price !== 'Tailor' && <span className="text-4xl not-italic mr-1">$</span>}
          {price}
        </span>
        {price !== 'Tailor' && <span className={`text-xs font-black uppercase tracking-widest ${highlighted ? 'text-slate-500' : 'text-slate-400'}`}>/mes</span>}
      </div>

      <p className={`text-lg font-medium leading-relaxed mb-12 italic ${highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
        {desc}
      </p>

      <div className="space-y-6 mb-12">
        {features.map((f: string) => (
          <div key={f} className="flex items-center gap-4">
            <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${highlighted ? 'bg-blue-600/20 text-blue-500' : 'bg-slate-100 text-slate-900'}`}>
              <CheckCircle size={14} strokeWidth={3} />
            </div>
            <span className="text-xs font-black uppercase tracking-widest leading-none">{f}</span>
          </div>
        ))}
      </div>

      <Button className={`mt-auto h-20 rounded-[24px] text-sm font-black uppercase tracking-[0.2em] transition-all italic ${
        highlighted 
          ? 'bg-blue-600 hover:bg-white hover:text-blue-600 text-white shadow-xl shadow-blue-500/20 border-b-4 border-blue-800' 
          : 'bg-slate-100 hover:bg-slate-950 hover:text-white text-slate-900'
      }`}>
        Sincronizar {title}
      </Button>
    </div>
  );
}

function FaqItem({ index, question, answer, activeFaq, setActiveFaq }: any) {
  const isOpen = activeFaq === index;
  return (
    <div className={`rounded-[2rem] overflow-hidden transition-all duration-500 border-2 ${isOpen ? 'border-blue-600/20 bg-slate-50' : 'border-slate-100 bg-white'}`}>
      <button 
        onClick={() => setActiveFaq(isOpen ? null : index)}
        className="w-full p-10 text-left flex justify-between items-center transition-colors"
      >
        <span className="text-xl lg:text-2xl font-black text-slate-950 uppercase italic tracking-tighter">{question}</span>
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-900'}`}>
          {isOpen ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-10 pt-0 text-lg text-slate-500 font-medium leading-relaxed italic">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
