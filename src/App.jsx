import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'
import './App.css'

// Import images
import logoDorathas from './assets/logo-dorathas.png'
import dorathasMaquinaInjecao from './assets/dorathas_maquina_injecao.jpeg'
import dorathasPecasPlasticas from './assets/dorathas_pecas_plasticas.jpeg'
import dorathaspensaTermofixos from './assets/dorathas_prensa_termofixos.jpeg'
import dorathasPecasTermofixos from './assets/dorathas_pecas_termofixos.jpeg'
import dorathasCentroUsinagem from './assets/dorathas_centro_usinagem_cnc.jpeg'
import dorathasTornoAutomatico from './assets/dorathas_torno_automatico.jpeg'
import dorathasPecasUsinadas from './assets/dorathas_pecas_usinadas.jpeg'
import hmAlimentadorMono from './assets/hm_alimentador_monofasico_novo.jpeg'
import hmAlimentadorTri from './assets/hm_alimentador_trifasico.jpeg'
import hmDosadorVol from './assets/hm_dosador_volumetrico.jpeg'
import hmDosadorGrav from './assets/hm_dosador_gravimetrico_novo.jpeg'
import hmEsteiras from './assets/hm_esteiras_industriais.jpeg'
import hmMoinhoFresa from './assets/hm_moinho_fresa.jpeg'
import hmSecagem from './assets/hm_secagem.webp'
import hmSiloArmazenagem from './assets/hm_silo_armazenagem.jpeg'
import hmCentralAlimentacao from './assets/hm_central_alimentacao.jpeg'

// Import logos das empresas
import logo_plastek_colorido from './assets/logo_plastek_colorido.png';
import logo_multilaser_colorido from './assets/multilaser-logo.jpg';
import logo_fabercastel_colorido from './assets/logo_fabercastel_colorido.png';
import logo_novel_colorido from './assets/novel-logo.png';
import logo_electrolux_colorido from './assets/logo_electrolux_novo.png';
import logo_anauger_colorido from './assets/ebf-logo.png';
import logo_plasticor_colorido from './assets/plasticor-logo.jpg';
import logo_isopower from './assets/isopower-logo.webp';

// Import imagens ilustrativas de moldes
import moldeInjecao1 from './assets/molde_injecao_ilustrativo_1.png';
import moldeInjecao2 from './assets/molde_injecao_ilustrativo_2.jpg';

// Import imagens ilustrativas de peças usinadas
import pecasUsinadas1 from './assets/pecas_usinadas_ilustrativo_1.jpg';
import pecasUsinadas2 from './assets/pecas_usinadas_ilustrativo_2.jpg';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const slides = [
    {
      title: "Representações em Serviços e Equipamentos",
      subtitle: "Representação e Consultoria em Serviços",
      background: dorathasMaquinaInjecao,
      target: 'termoplasticos'
    },
    {
      title: "Termofixos",
      subtitle: "Representação e Consultoria em Serviços",
      background: dorathaspensaTermofixos,
      target: 'termofixos'
    },
    {
      title: "Desenvolvimento de Moldes",
      subtitle: "Representação e Consultoria em Serviços",
      background: dorathasCentroUsinagem,
      target: 'moldes'
    },
    {
      title: "Usinagem de Precisão",
      subtitle: "Representação e Consultoria em Serviços",
      background: dorathasTornoAutomatico,
      target: 'usinagem'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/5519993914471?text=Olá! Gostaria de saber mais sobre os serviços da Dorathas.', '_blank')
  }

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/ade88/', '_blank')
  }

  const openInstagram = () => {
    window.open('https://www.instagram.com/dorathas_88/', '_blank')
  }

  const openFacebook = () => {
    window.open('https://www.facebook.com/dorathascom/', '_blank')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Olá! Meu nome é ${formData.name || 'visitante do site'}.${formData.phone ? ` Meu telefone: ${formData.phone}.` : ''}${formData.email ? ` E-mail: ${formData.email}.` : ''} ${formData.message || 'Gostaria de saber mais sobre os serviços da Dorathas.'}`
    window.open(`https://wa.me/5519993914471?text=${encodeURIComponent(text)}`, '_blank')
    setFormSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={logoDorathas} 
                alt="Dorathas" 
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              <button 
                onClick={() => scrollToSection('quem-somos')} 
                className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors text-sm font-medium"
              >
                Quem Somos
              </button>
              <button 
                onClick={() => scrollToSection('termoplasticos')} 
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
              >
                Termoplásticos
              </button>
              <button 
                onClick={() => scrollToSection('termofixos')} 
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
              >
                Termofixos
              </button>
              <button 
                onClick={() => scrollToSection('moldes')} 
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm font-medium"
              >
                Moldes
              </button>
              <button 
                onClick={() => scrollToSection('usinagem')} 
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
              >
                Usinagem
              </button>
              <button 
                onClick={() => scrollToSection('equipamentos')} 
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors text-sm font-medium"
              >
                Equipamentos
              </button>
              <button
                onClick={() => scrollToSection('software')}
                className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors text-sm font-medium"
              >
                Software
              </button>
              <button
                onClick={() => scrollToSection('cases')}
                className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors text-sm font-medium"
              >
                Cases
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm font-medium"
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contato')} 
                className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors text-sm font-medium"
              >
                Contato
              </button>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-800">(19) 99391-4471</p>
                <p className="text-xs text-gray-600">Limeira, SP</p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-gray-800"></div>
                <div className="w-full h-0.5 bg-gray-800"></div>
                <div className="w-full h-0.5 bg-gray-800"></div>
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay — fixed full-screen, outside header to avoid clipping */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col overflow-y-auto lg:hidden">
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            <img src={logoDorathas} alt="Dorathas" className="h-10" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-700"
              aria-label="Fechar menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col p-6 space-y-3">
            <button onClick={() => scrollToSection('quem-somos')} className="px-4 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors text-sm font-medium text-left">Quem Somos</button>
            <button onClick={() => scrollToSection('termoplasticos')} className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium text-left">Termoplásticos</button>
            <button onClick={() => scrollToSection('termofixos')} className="px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium text-left">Termofixos</button>
            <button onClick={() => scrollToSection('moldes')} className="px-4 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm font-medium text-left">Moldes</button>
            <button onClick={() => scrollToSection('usinagem')} className="px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium text-left">Usinagem</button>
            <button onClick={() => scrollToSection('equipamentos')} className="px-4 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors text-sm font-medium text-left">Equipamentos</button>
            <button onClick={() => scrollToSection('software')} className="px-4 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors text-sm font-medium text-left">Software</button>
            <button onClick={() => scrollToSection('cases')} className="px-4 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors text-sm font-medium text-left">Cases</button>
            <button onClick={() => scrollToSection('blog')} className="px-4 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm font-medium text-left">Blog</button>
            <button onClick={() => scrollToSection('contato')} className="px-4 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors text-sm font-medium text-left">Contato</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${slides[currentSlide].background})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
            {slides[currentSlide].subtitle}
          </p>
          <button
            onClick={() => scrollToSection(slides[currentSlide].target)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors animate-fade-in-delay-2"
          >
            SAIBA MAIS
          </button>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators - Removed, using arrows instead */}
      </section>

      {/* Chamada Principal */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-5">Representação Técnica Industrial · Interior Paulista</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight max-w-3xl">
            Conectamos fornecedores do interior paulista às indústrias de todo o Brasil.
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
            A <strong>Dorathas</strong> é representante comercial técnico com <strong>+15 anos de mercado</strong>, especializada em levar as soluções de <strong>fabricantes do interior de São Paulo</strong> — injeção plástica, moldes, usinagem CNC, periféricos e tecnologia industrial — a empresas e indústrias em todo o <strong>estado de São Paulo e no Brasil</strong>.
          </p>
          <div className="flex flex-wrap gap-4 mb-3">
            <button
              onClick={() => scrollToSection('contato')}
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors"
            >
              Enviar Projeto para Cotação
            </button>
            <button
              onClick={openWhatsApp}
              className="px-8 py-3 border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 font-bold rounded-lg transition-colors"
            >
              Falar com Especialista Técnico
            </button>
          </div>
          <p className="text-sm text-gray-400 mb-12">Atendimento técnico para engenharia, compras e produção</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-100 pt-10">
            <div>
              <p className="text-4xl font-bold text-orange-500">+15</p>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-2">Anos de Mercado</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500">200+</p>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-2">Clientes Atendidos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500">500+</p>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-2">Projetos Realizados</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-orange-500">8+</p>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-2">Estados Atendidos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" style={{fontFamily: "'Lato', sans-serif", padding: "60px 20px", backgroundColor: "#f9f9f9"}}>
        <div style={{maxWidth: "1200px", margin: "0 auto"}}>
          <h2 style={{fontFamily: "'Montserrat', sans-serif", fontSize: "36px", color: "#003366", marginBottom: "20px"}}>+15 Anos Conectando o Interior Paulista ao Mercado Nacional</h2>
          <p style={{fontSize: "18px", color: "#333", lineHeight: "1.6"}}>
            A <strong>Dorathas Consultoria e Representações Industriais</strong> é especializada em representação comercial técnica, com sede em <strong>Limeira–SP</strong>. Nosso propósito é ser o elo estratégico entre <strong>fabricantes e fornecedores do interior paulista</strong> e as <strong>indústrias de todo o estado de São Paulo e do Brasil</strong>.
          </p>
          <p style={{fontSize: "18px", color: "#333", lineHeight: "1.6", marginTop: "16px"}}>
            Com mais de <strong>15 anos de mercado</strong>, atuamos em seis frentes industriais — injeção de termoplásticos, termofixos, ferramentaria e moldes, usinagem CNC, equipamentos periféricos e tecnologia (MeasureTech 4.0) — sempre com atendimento técnico personalizado para engenharia, compras e produção.
          </p>

          <h3 style={{fontSize: "28px", color: "#003366", marginTop: "40px"}}>O Que Fazemos</h3>
          <div style={{display: "flex", flexWrap: "wrap", gap: "40px", marginTop: "20px"}}>
            <div style={{flex: "1", minWidth: "250px"}}>
              <h4 style={{fontSize: "22px", color: "#005599"}}>Serviços Industriais</h4>
              <ul style={{fontSize: "16px", color: "#444", lineHeight: "1.8"}}>
                <li>Injeção de Termoplásticos</li>
                <li>Moldagem a quente por compressão de termofixos (baquelite etc)</li>
                <li>Desenvolvimento de Moldes</li>
                <li>Usinagem de Precisão</li>
              </ul>
            </div>
            <div style={{flex: "1", minWidth: "250px"}}>
              <h4 style={{fontSize: "22px", color: "#005599"}}>Equipamentos e Tecnologia</h4>
              <ul style={{fontSize: "16px", color: "#444", lineHeight: "1.8"}}>
                <li>Equipamentos Periféricos</li>
                <li>Automação Industrial</li>
                <li>Sistemas de Alimentação</li>
                <li>Dosadores e Transportadores</li>
              </ul>
            </div>
          </div>

          <h3 style={{fontSize: "28px", color: "#003366", marginTop: "40px"}}>Nossa Missão</h3>
          <p style={{fontSize: "18px", color: "#333", lineHeight: "1.6"}}>
            Facilitar o acesso às melhores tecnologias e serviços do mercado, com <strong>suporte técnico especializado</strong>, <strong>condições comerciais competitivas</strong> e parcerias com empresas <strong>certificadas e reconhecidas pela qualidade</strong>.
          </p>

          <div style={{marginTop: "40px", padding: "20px", backgroundColor: "#e6f0ff", borderLeft: "5px solid #005599"}}>
            <p style={{fontSize: "20px", color: "#003366", fontWeight: "bold"}}>
              +15 anos de experiência conectando empresas às melhores soluções industriais.
            </p>
          </div>
        </div>
      </section>

      {/* Termoplásticos */}
      <section id="termoplasticos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest text-orange-500 uppercase mb-3">Representação Técnica · Interior Paulista</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Injeção de Termoplásticos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Representamos <strong>fabricantes especializados do interior de São Paulo</strong> em injeção de termoplásticos com PP, PE, ABS, Nylon, PC, POM, PBT e PET — levando soluções técnicas de precisão a indústrias em todo o Brasil.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={dorathasMaquinaInjecao} 
                alt="Máquina de Injeção" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src={dorathasPecasPlasticas} 
                alt="Peças Plásticas" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Injeção de Termoplásticos</h3>
              <p className="text-gray-600 mb-6">
                Oferecemos serviços especializados em injeção de termoplásticos para diversos segmentos industriais. 
                Trabalhamos com uma ampla gama de materiais, garantindo qualidade e precisão em cada projeto.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Materiais Diversos</h4>
                    <p className="text-gray-600">Polipropileno, poliestireno, polietileno, PVC, ABS, Nylon, PBT, Acrílico, POM, entre outras.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Atendimento Estadual</h4>
                    <p className="text-gray-600">Atendemos clientes em todo o estado de São Paulo, com preços competitivos e entrega garantida.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Qualidade Garantida</h4>
                    <p className="text-gray-600">Entre em contato conosco e solicite um orçamento sem compromisso.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Termofixos */}
      <section id="termofixos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Termofixos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Conectamos <strong>empresas do interior paulista</strong> especializadas em moldagem por compressão de termofixos — Baquelite, BMC e Melamina — com indústrias que exigem alta resistência térmica e dielétrica em todo o Brasil.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Moldagem a Quente por Compactação e Transfer</h3>
              <p className="text-gray-600 mb-6">
                Especializados em moldagem a quente por compactação e transfer de materiais termofixos, oferecemos soluções completas 
                para a produção de peças com alta resistência térmica e mecânica.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Materiais Termofixos para Moldagem por Compressão e Transferência</h4>
                    <div className="text-gray-600 space-y-2">
                      <p><strong>• Fenólica (Baquelite):</strong> Resina resistente ao calor e à eletricidade, ideal para peças técnicas e isoladores elétricos.</p>
                      <p><strong>• Melamínica:</strong> Alta dureza e resistência a riscos, usada em utensílios domésticos e componentes elétricos.</p>
                      <p><strong>• Poliéster com Fibra de Vidro (BMC/SMC):</strong> Compósito leve e resistente, indicado para peças estruturais e carcaças técnicas.</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Aplicações Diversas</h4>
                    <p className="text-gray-600">Componentes elétricos, peças automotivas, utensílios domésticos e industriais.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Tecnologia Avançada</h4>
                    <p className="text-gray-600">Equipamentos modernos e processos otimizados para máxima eficiência.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src={dorathaspensaTermofixos} 
                alt="Prensa de Termofixos" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              {/* PENDENTE: verificar se imagem contém marca visível — Issue 5: object-top corrige faixa preta inferior */}
              <img
                src={dorathasPecasTermofixos}
                alt="Peças de Termofixos"
                className="w-full h-48 object-cover object-top rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Desenvolvimento de Moldes */}
      <section id="moldes" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Ferramentaria e Moldes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Representamos <strong>ferramentarias de precisão do interior paulista</strong> na fabricação e manutenção de moldes para injeção e compressão, atendendo projetos em todo o estado de São Paulo e demais regiões do Brasil.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={dorathasCentroUsinagem} 
                alt="Centro de Usinagem CNC" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src={dorathasMaquinaInjecao} 
                alt="Máquina de Injeção" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src={moldeInjecao1} 
                alt="Molde de Injeção Ilustrativo" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src={moldeInjecao2} 
                alt="Molde de Injeção Plástica" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Moldes de Alta Precisão</h3>
              <p className="text-gray-600 mb-6">
                Se você está em busca de empresas que oferecem serviços de desenvolvimento de 
                moldes para injeção de termoplásticos, alumínio e termofixos, parabéns, você 
                acaba de encontrar a solução para suas necessidades! Representamos empresas 
                com mais de duas décadas de experiência no mercado.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Moldes para Termoplásticos</h4>
                    <p className="text-gray-600">Desenvolvimento completo de moldes para injeção de termoplásticos.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Moldes para Injeção de Alumínio</h4>
                    <p className="text-gray-600">Moldes projetados exclusivamente para o processo de injeção de alumínio, garantindo precisão dimensional e bom acabamento das peças.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Moldes para Termofixos</h4>
                    <p className="text-gray-600">Moldes utilizados na compactação e injeção de materiais termofixos, com alta precisão e durabilidade.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Ferramentais e Acessórios</h4>
                    <p className="text-gray-600">Desenvolvimento de ferramentas especializadas e acessórios para complementar os moldes, garantindo eficiência máxima na produção.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usinagem */}
      <section id="usinagem" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Usinagem CNC</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Levamos a capacidade de <strong>fornecedores de usinagem seriada do interior de SP</strong> — tornos CNC e centros automáticos — a indústrias de médio e grande porte em todo o Brasil que buscam precisão, prazo e escala.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Serviços e Desenvolvimento de Peças Usinadas</h3>
              <p className="text-gray-600 mb-6">
                Você está procurando empresas que fazem serviços e desenvolvimento de peças usinadas de pequeno porte em tornos automáticos e CNC? 
                Então você veio ao lugar certo. Nós representamos empresas que oferecem soluções completas em usinagem de peças, desde o projeto até a execução.
              </p>
              
              <p className="text-gray-600 mb-6">
                Temos tornos automáticos e CNC de última geração, que permitem usinar peças com precisão e rapidez. Usamos materiais como aço, alumínio e inox, 
                para produzir peças usinadas de diversos tipos, como parafusos, porcas, pinos, buchas, engrenagens etc. Estamos situados em Limeira SP, 
                mas atendemos clientes em toda a região e em todo o Brasil.
              </p>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <p className="text-green-800 font-semibold">
                  Todas as empresas que nós representamos são certificadas pela ISO 9000, garantindo a qualidade e a confiabilidade dos seus serviços.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Tornos Automáticos e CNC</h4>
                    <p className="text-gray-600">Equipamentos de última geração para usinagem de peças de pequeno porte com precisão e rapidez.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Materiais Diversos</h4>
                    <p className="text-gray-600">Aço, alumínio, inox e outros materiais para produção de parafusos, porcas, pinos, buchas, engrenagens.</p>
                  </div>
                </div>


              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src={dorathasTornoAutomatico} 
                alt="Torno Automático" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src={dorathasPecasUsinadas} 
                alt="Peças Usinadas" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src={pecasUsinadas1} 
                alt="Peças Usinadas em CNC" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src={pecasUsinadas2} 
                alt="Componentes Usinados" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Setores Atendidos */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Setores Atendidos</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Automotivo</h4>
                <p className="text-gray-600 text-sm">Peças de precisão para o setor automotivo</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Agrícola</h4>
                <p className="text-gray-600 text-sm">Componentes para máquinas agrícolas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Alimentício</h4>
                <p className="text-gray-600 text-sm">Peças para indústria alimentícia</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Metalmecânica</h4>
                <p className="text-gray-600 text-sm">Componentes metalmecânicos diversos</p>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Equipamentos Periféricos */}
      <section id="equipamentos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Equipamentos Periféricos</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Representamos <strong>fabricantes do interior paulista</strong> em alimentadores, dosadores, moinhos, esteiras, secadores e centrais de alimentação — equipamentos essenciais para linhas de injeção e extrusão em todo o Brasil.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={hmAlimentadorMono}
                alt="Alimentador Monofásico"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Alimentador Monofásico</h3>
                <p className="text-gray-600">Sistema de alimentação automática para pequenas e médias produções.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* PENDENTE: remover marca HM */}
              <img
                src={hmAlimentadorTri}
                alt="Alimentador Trifásico"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Alimentador Trifásico</h3>
                <p className="text-gray-600">Alimentação de alta capacidade para grandes volumes de produção.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={hmDosadorVol}
                alt="Dosador Volumétrico"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Dosador Volumétrico</h3>
                <p className="text-gray-600">Dosagem precisa por volume para diversos tipos de materiais.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={hmDosadorGrav} 
                alt="Dosador Gravimétrico" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Dosador Gravimétrico</h3>
                <p className="text-gray-600">Dosagem de alta precisão por peso com controle automático.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={hmEsteiras} 
                alt="Esteiras Transportadoras" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Esteiras Transportadoras</h3>
                <p className="text-gray-600">Sistemas de transporte para otimização do fluxo produtivo.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* PENDENTE: remover marca Siletes */}
              <img
                src={hmMoinhoFresa}
                alt="Moinhos Fresa"
                className="w-full h-48 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Moinho de Fresa</h3>
                <p className="text-gray-600">
                  Equipamento robusto que tritura materiais plásticos, transformando-os em partículas uniformes para reaproveitamento. 
                  Baixo nível de ruído, baixíssimo consumo de energia e alta durabilidade. Fácil de operar com manutenção simples. 
                  Essencial para reciclagem e sustentabilidade. Garantia de 1 ano contra defeitos de fabricação.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={hmSecagem} 
                alt="Sistemas de Secagem" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Sistemas de Secagem</h3>
                <p className="text-gray-600">
                  Equipamentos indispensáveis para eliminar umidade dos grânulos plásticos antes do processamento. 
                  Com controle preciso de temperatura, otimizam o consumo de energia e garantem qualidade, 
                  evitando defeitos como bolhas, trincas ou perda de resistência. Garantia de 1 ano.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={hmSiloArmazenagem} 
                alt="Silos de Armazenagem" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Silos de Armazenagem</h3>
                <p className="text-gray-600">
                  Reservatórios projetados para armazenar materiais plásticos, protegendo contra contaminação e umidade. 
                  Design durável com visor, tampa removível, rodízios com freio. Capacidades de 25L a 1000L. 
                  Fabricados em aço carbono ou inox. Garantia de 1 ano.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={hmCentralAlimentacao} 
                alt="Central de Alimentação" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Central de Alimentação</h3>
                <p className="text-gray-600">
                  Soluções completas e personalizadas para abastecimento de materiais plásticos granulados ou moídos. 
                  Projeto 3D exclusivo, tecnologia de vácuo, painéis intuitivos, alarmes automáticos e limpeza de filtro. 
                  Componentes 100% nacionais. Garantia de 1 ano.
                </p>
              </div>
            </div>
          </div>

          {/* Benefícios e Aplicações */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Benefícios dos Equipamentos Periféricos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Automação</h4>
                <p className="text-gray-600 text-sm">Redução de mão de obra e aumento da eficiência</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Precisão</h4>
                <p className="text-gray-600 text-sm">Dosagem e alimentação com alta precisão</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Produtividade</h4>
                <p className="text-gray-600 text-sm">Aumento significativo da produtividade</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Qualidade</h4>
                <p className="text-gray-600 text-sm">Melhoria na qualidade do produto final</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Produtos Adicionais</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Peças e Acessórios para Periféricos</li>
                <li>• Componentes Elétricos e Mecânicos</li>
                <li>• Sistemas de Refrigeração (Chillers)</li>
                <li>• Equipamentos Sob Encomenda</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Serviços Especializados</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Manutenção Preventiva e Corretiva (Todas as Marcas)</li>
                <li>• Recondicionamento de Equipamentos</li>
                <li>• Instalação e Comissionamento</li>
                <li>• Manutenção de Chillers e Sistemas de Resfriamento</li>
                <li>• Suporte Técnico Especializado</li>
                <li>• Treinamento Operacional</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Setores Atendidos</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Indústria de Plásticos</li>
                <li>• Setor Alimentício</li>
                <li>• Indústria Farmacêutica</li>
                <li>• Setor Automotivo</li>
                <li>• Indústria Química</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cases de Sucesso - Carousel */}
      <section id="cases" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Cases de Sucesso
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empresas que confiam em nossos serviços e representações
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src={logo_plastek_colorido}
                  alt="Plastek"
                  className="max-h-20 max-w-full object-contain transition-all duration-300 hover:scale-110"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src={logo_electrolux_colorido}
                  alt="Electrolux"
                  className="max-h-20 max-w-full object-contain transition-all duration-300 hover:scale-110"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src={logo_novel_colorido}
                  alt="Novel"
                  className="max-h-20 max-w-full object-contain transition-all duration-300 hover:scale-110"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src={logo_fabercastel_colorido}
                  alt="FABER CASTEL"
                  className="max-h-20 max-w-full object-contain transition-all duration-300 hover:scale-110"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src={logo_multilaser_colorido}
                  alt="Multilaser"
                  className="max-h-20 max-w-full object-contain transition-all duration-300 hover:scale-110"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src={logo_plasticor_colorido}
                  alt="Plasticor"
                  className="max-h-20 max-w-full object-contain transition-all duration-300 hover:scale-110"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src={logo_anauger_colorido}
                  alt="EBF"
                  className="max-h-20 max-w-full object-contain transition-all duration-300 hover:scale-110"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src={logo_isopower}
                  alt="ISOPOWER"
                  className="max-h-20 max-w-full object-contain transition-all duration-300 hover:scale-110"
                />
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm">
                Empresas de diversos segmentos que confiam na qualidade e expertise da Dorathas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Software */}
      <section id="software" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Software MeasureTech 4.0</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Como <strong>representante autorizado do MeasureTech 4.0</strong> para o interior de São Paulo e demais regiões, a Dorathas leva tecnologia de gestão e apontamento de produção em tempo real a indústrias que buscam eficiência operacional — sem depender de grandes centros.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Quem Somos */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Quem Somos?</h3>
              <p className="text-gray-700 leading-relaxed">
                A MeasureTech é uma empresa de tecnologia voltada em desenvolver soluções em automação de registro de processos, permitindo o registro dos dados de forma automática sem a intervenção do usuário. Nossa plataforma oferece controle completo do processo na palma da mão!
              </p>
            </div>

            {/* Dificuldades */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Quais Dificuldades Resolvemos?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Garantir a consistência dos dados registrados pelos colaboradores de forma manual é um desafio constante. Nossa solução automatiza esse processo, eliminando erros e inconsistências.
              </p>
            </div>

            {/* Como Resolvemos */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Como Resolvemos?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nossa equipe de profissionais desenvolveu uma interface conectada nas injetoras de plástico, permitindo a coleta de dados de forma automática. O sistema integra-se perfeitamente com suas máquinas existentes.
              </p>
            </div>

            {/* Resultados */}
            <div className="bg-cyan-50 rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-cyan-800 mb-6">Resultados Alcançados</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cyan-600 font-bold mr-3">✓</span>
                  <span><strong>Monitoramento do processo em tempo real:</strong> Acompanhe sua produção em tempo real com dados precisos e atualizados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 font-bold mr-3">✓</span>
                  <span><strong>Planejamento da produção mais dinâmico:</strong> Tome decisões baseadas em dados reais e históricos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 font-bold mr-3">✓</span>
                  <span><strong>Tomada de decisões mais assertivas:</strong> Identifique gargalos e oportunidades de melhoria</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 font-bold mr-3">✓</span>
                  <span><strong>Redução de pausa das máquinas:</strong> Minimize downtime com monitoramento contínuo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 font-bold mr-3">✓</span>
                  <span><strong>Consistência nos dados gerados:</strong> Dados confiáveis e automatizados sem erros manuais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 font-bold mr-3">✓</span>
                  <span><strong>Ganho de produtividade:</strong> Aumente a eficiência operacional com automação inteligente</span>
                </li>
              </ul>
            </div>

            {/* Relatórios */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Relatórios Inteligentes</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Todos os relatórios são gerados em planilhas Excel, permitindo a criação de gráficos que irão auxiliar na tomada de decisões. Os dados são organizados por máquina, produto, operador e período, oferecendo visibilidade completa do seu processo produtivo.
              </p>
              <div className="bg-gray-50 p-4 rounded border-l-4 border-cyan-500">
                <p className="text-gray-600 text-sm">
                  <strong>Funcionalidades:</strong> Visualização de produção em unidades, gráficos de tendências, análise de performance por máquina, relatórios customizáveis e exportação de dados.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <button 
                onClick={() => scrollToSection('contato')}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Solicite uma Demonstração
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Blog</h2>
            <p className="text-xl text-gray-600">Fique por dentro das novidades do setor industrial</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">Usinagem CNC</h3>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Usinagem CNC de Alta Performance: O Diferencial do Interior Paulista</h4>
                <p className="text-gray-600 mb-4">Do CAD/CAM ao CMM: como ferramentarias do interior paulista entregam tolerâncias de ±0,005 mm e Cpk ≥ 1,33 para montadoras e indústria médica.</p>
                <button
                  onClick={() => scrollToSection('blog-article-cnc')}
                  className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
                >
                  Leia mais →
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-48 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">Sustentabilidade</h3>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Moinho de Fresa: Economize até 60% em Matéria-Prima e Comprove para Auditoria ESG</h4>
                <p className="text-gray-600 mb-4">O ROI do moinho de fresa com payback de 4 meses, percentuais seguros de reprocessado por resina e como especificar o equipamento correto.</p>
                <button
                  onClick={() => scrollToSection('blog-article-sustentabilidade')}
                  className="text-green-600 hover:text-green-800 font-medium cursor-pointer"
                >
                  Leia mais →
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-48 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">Desenvolvimento de Moldes</h3>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Molde Bem Projetado, Produção Livre de Refugo: Guia Técnico Completo</h4>
                <p className="text-gray-600 mb-4">P20 ou H13? Canal frio ou hot runner? Validação T0/T1/T2 e PPAP: o guia técnico completo para quem vai desenvolver ou comprar um molde de injeção.</p>
                <button
                  onClick={() => scrollToSection('blog-article-moldes')}
                  className="text-purple-600 hover:text-purple-800 font-medium cursor-pointer"
                >
                  Leia mais →
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">Novos artigos técnicos em breve — fique de olho.</p>
          </div>
        </div>
      </section>

      {/* Artigos do Blog */}
      <section id="blog-article-cnc" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <button 
            onClick={() => scrollToSection('blog')}
            className="text-blue-600 hover:text-blue-800 font-medium mb-6 cursor-pointer"
          >
            ← Voltar ao Blog
          </button>
          
          <article className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Usinagem CNC de Alta Performance: O Diferencial do Interior Paulista</h1>
              <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                <span>📅 27 de Julho de 2026</span>
                <span>✍️ Dorathas</span>
                <span>📚 Usinagem · Ferramentaria</span>
                <span>⏱️ 8 min de leitura</span>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">O que define uma peça CNC de alta precisão</h2>
              <p>Tolerância dimensional, rugosidade superficial e repetibilidade entre peças: esses três parâmetros separam uma peça CNC funcional de uma peça de alta performance. Centros de usinagem modernos operam com cursos superiores a 1.000 mm, capacidade de carga de até 800 kg e sistemas de fixação que eliminam o reposicionamento entre operações — mantendo tolerâncias de ±0,005 mm do início ao fim da produção.</p>
              <p>O diferencial não está somente na máquina. Está na combinação entre equipamento, programação CAM, seleção de ferramental e protocolo de inspeção. Cada etapa interfere diretamente no resultado final.</p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Centros verticais vs. horizontais: a escolha certa economiza tempo e dinheiro</h2>
              <p>Centros de usinagem vertical (VMC) dominam a maioria das ferramentarias do interior paulista e são ideais para peças de médio porte com usinagem em face superior. Já os centros horizontais (HMC) ganham espaço em produção seriada de peças prismáticas, com troca automática de paletes que mantém o eixo-árvore em corte por mais de 90% do turno.</p>
              <p>A escolha errada entre vertical e horizontal pode aumentar o tempo de setup em até 40% e reduzir a vida útil do ferramental por vibrações desnecessárias. Um representante técnico com experiência no setor consegue indicar a configuração correta antes da compra — evitando retrabalho custoso.</p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">CAD/CAM e simulação: erros eliminados antes do primeiro corte</h2>
              <p>A programação off-line via software CAM (Mastercam, Hypermill, NX CAM) permite simular toda a operação em ambiente virtual antes de executar na máquina. A simulação detecta colisões entre porta-ferramenta e fixação, valida percursos de usinagem, estima tempo de ciclo e identifica regiões com risco de vibração.</p>
              <p>Empresas que integram CAD/CAM com pós-processador dedicado à máquina reduzem o tempo de setup em até 60% e praticamente eliminam sucatas por erro de programação — diferencial crítico em lotes pequenos com alto valor agregado.</p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Materiais: do aço ferramenta ao alumínio aeronáutico</h2>
              <p>Cada material exige uma estratégia diferente de usinagem:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li><strong>Aço ferramenta P20 e H13</strong>: base de moldes e matrizes, exige avanços conservadores e pastilhas de metal duro com cobertura TiAlN</li>
                <li><strong>Alumínio 6061 e 7075</strong>: alta velocidade de corte acima de 1.000 m/min em centros 5 eixos, acabamento espelhado possível sem retificação</li>
                <li><strong>Inox austenítico (AISI 304/316)</strong>: baixa condutividade térmica exige boa refrigeração e ferramental específico para evitar encruamento</li>
                <li><strong>Latão e cobre</strong>: excelente usinabilidade, usados como eletrodos em eletroerosão por penetração (EDM)</li>
              </ul>
              <p className="mt-4">A Dorathas representa ferramentarias com capacidade técnica para operar nessa diversidade de materiais, garantindo que o comprador receba a peça certa no prazo acordado.</p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Inspeção dimensional: CMM e controle estatístico de processo</h2>
              <p>Peça usinada sem inspeção documentada é peça sem garantia de conformidade. A inspeção por Máquina de Medição por Coordenadas (CMM) compara a peça física com o modelo 3D original, gerando relatório dimensional rastreável — exigência crescente de montadoras, indústria médica e aeronáutica.</p>
              <p>O controle estatístico de processo (CEP) vai além: monitora variações ao longo da produção, identifica tendências de desvio antes que a peça saia da especificação e reduz o índice de refugo. Fornecedores com CEP implementado entregam Cpk ≥ 1,33 — padrão mínimo exigido pela IATF 16949 no setor automotivo.</p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Por que o interior paulista é referência nacional em usinagem</h2>
              <p>A região que vai de Campinas a São José do Rio Preto concentra décadas de tradição em ferramentaria, formação técnica consolidada (SENAI, FATEC, UNICAMP) e um ecossistema de fornecedores complementares — tratamento térmico, retífica, galvanoplastia, metrologia — que permite entregar peças acabadas com lead time competitivo.</p>
              <p>Esse ecossistema é exatamente o que a Dorathas conecta ao comprador industrial de qualquer parte do Brasil: acesso a capacidade técnica de alta performance sem precisar manter estrutura de prospecção e qualificação de fornecedores.</p>
            </div>

            <div className="mt-10 p-6 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">Precisa de peças usinadas?</p>
              <h3 className="text-xl font-bold text-gray-800 mb-3">A Dorathas conecta você ao ferramenteiro certo no interior paulista.</h3>
              <p className="text-gray-600 mb-5 text-sm">Envie o desenho técnico ou a demanda e nossa equipe indica a solução mais adequada — sem custo de consultoria.</p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => scrollToSection('contato')} className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors text-sm">Solicitar Cotação</button>
                <button onClick={openWhatsApp} className="px-6 py-2 border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 font-bold rounded-lg transition-colors text-sm">Falar com Especialista</button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="blog-article-sustentabilidade" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <button 
            onClick={() => scrollToSection('blog')}
            className="text-green-600 hover:text-green-800 font-medium mb-6 cursor-pointer"
          >
            ← Voltar ao Blog
          </button>
          
          <article className="bg-gray-50 rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Moinho de Fresa na Injeção Plástica: Economize até 60% em Matéria-Prima e Comprove para Auditoria ESG</h1>
              <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                <span>📅 20 de Julho de 2026</span>
                <span>✍️ Dorathas</span>
                <span>📚 Sustentabilidade · Periféricos</span>
                <span>⏱️ 9 min de leitura</span>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">O custo real do refugo plástico</h2>
              <p>Uma injetora de 250 toneladas rodando 20 horas por dia, 5 dias por semana, gera entre 80 e 200 kg de resíduo plástico por turno — entre galhos de bebedouro, purgas de troca de material e peças fora de especificação. A preço de resina virgem PP, isso representa entre R$ 400 e R$ 1.200 de material descartado por dia, fora o custo de coleta e destinação.</p>
              <p>Multiplicado por 22 dias úteis e 12 meses, o impacto financeiro anual pode ultrapassar R$ 300.000 em matéria-prima jogada fora — sem contar a responsabilidade ambiental crescente imposta pela Lei de Resíduos Sólidos (Lei 12.305/2010) e auditorias ESG de clientes do setor automotivo e de bens de consumo.</p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Como o moinho de fresa funciona na prática</h2>
              <p>O moinho de fresa tritura resíduos plásticos através de um conjunto de facas fixas e rotativas que reduzem o material a partículas granuladas de granulometria controlada — normalmente entre 4 e 12 mm, dependendo da abertura da peneira instalada.</p>
              <p>Os principais componentes que determinam a qualidade do granulado gerado:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li><strong>Câmara de corte</strong>: dimensionamento correto evita embalagem e superaquecimento do material</li>
                <li><strong>Facas e contra-facas</strong>: aço ferramenta tratado, com regularidade de manutenção definida</li>
                <li><strong>Sistema de peneiras</strong>: controla granulometria do moído e elimina finos que prejudicam a injeção</li>
                <li><strong>Extrator e soprador</strong>: conduz o material moído para silos ou diretamente à tremonha da injetora</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Moinho lento vs. moinho rápido: qual escolher</h2>
              <p><strong>Moinhos de rotor lento (150–400 rpm)</strong> geram menos calor, produzem granulado mais uniforme e trabalham com ruído reduzido. São indicados para materiais sensíveis ao calor (PVC, ABS, PMMA) e operação próxima à injetora.</p>
              <p><strong>Moinhos de rotor rápido (600–1.500 rpm)</strong> têm maior produtividade volumétrica e são indicados para materiais duros (nylon carregado, PP copolímero) e operação centralizada, distante das injetoras.</p>
              <p>A especificação errada gera dois problemas opostos: subdimensionar cria gargalo na reciclagem; superdimensionar eleva o investimento e produz granulado irregular por câmara grande demais para o volume de refugo gerado.</p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">A matemática do ROI: um exemplo real</h2>
              <p>Considere uma empresa que injeta polipropileno e gera 120 kg/dia de refugo:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Custo do refugo descartado: R$ 600/dia (R$ 5,00/kg × 120 kg)</li>
                <li>Custo de coleta e destinação: R$ 80/dia</li>
                <li><strong>Perda total sem moinho: R$ 680/dia → ~R$ 177.000/ano</strong></li>
              </ul>
              <p className="mt-3">Com moinho instalado (investimento ~R$ 35.000 para modelo de 75 kW):</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Material reutilizado (80% do refugo): R$ 480/dia recuperados</li>
                <li>Custo de energia do moinho: ~R$ 40/dia</li>
                <li><strong>Economia líquida: R$ 440/dia → ~R$ 114.000/ano</strong></li>
              </ul>
              <p className="mt-3"><strong>Payback médio: 4 meses.</strong> A partir do 5º mês, R$ 9.500/mês de economia pura.</p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Percentual seguro de reprocessado por resina</h2>
              <p>O percentual de material moído que pode ser misturado sem degradar as propriedades mecânicas varia por resina e precisa ser validado com testes:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li><strong>PP e PE</strong>: até 30% de reprocessado sem perda significativa de propriedades</li>
                <li><strong>ABS</strong>: até 20% — acima disso, queda de brilho e resistência ao impacto</li>
                <li><strong>Nylon (PA6/PA66)</strong>: até 15% — altamente suscetível à degradação hidrolítica por reprocessamento</li>
                <li><strong>PVC</strong>: até 10% com estabilizante — exige moinho inox para evitar contaminação cruzada</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Equipamentos HM e o suporte técnico da Dorathas</h2>
              <p>A Dorathas representa a linha de periféricos HM, com moinhos de fresa projetados para o ambiente de injeção plástica — câmaras dimensionadas para os volumes típicos do mercado brasileiro e assistência técnica no interior paulista.</p>
              <p>Nossa equipe auxilia na especificação técnica correta antes da compra: análise do volume de refugo, seleção do modelo, dimensionamento elétrico e layout de integração à linha — sem custo adicional.</p>
            </div>

            <div className="mt-10 p-6 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">Quer implantar ou substituir um moinho de fresa?</p>
              <h3 className="text-xl font-bold text-gray-800 mb-3">A Dorathas especifica e fornece o modelo certo para o seu volume de refugo.</h3>
              <p className="text-gray-600 mb-5 text-sm">Informe o tipo de resina, volume de galho e layout da linha — nossa equipe indica o moinho ideal sem custo de consultoria.</p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => scrollToSection('contato')} className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors text-sm">Solicitar Cotação</button>
                <button onClick={openWhatsApp} className="px-6 py-2 border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 font-bold rounded-lg transition-colors text-sm">Falar com Especialista</button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="blog-article-moldes" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <button 
            onClick={() => scrollToSection('blog')}
            className="text-purple-600 hover:text-purple-800 font-medium mb-6 cursor-pointer"
          >
            ← Voltar ao Blog
          </button>
          
          <article className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Molde Bem Projetado, Produção Livre de Refugo: O Guia Técnico Completo</h1>
              <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                <span>📅 13 de Julho de 2026</span>
                <span>✍️ Dorathas</span>
                <span>📚 Moldes · Injeção Plástica</span>
                <span>⏱️ 10 min de leitura</span>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">A decisão mais crítica antes de injetar: o molde certo</h2>
              <p>O custo de um molde representa entre 15% e 40% do investimento total de um novo projeto de injeção plástica — e erros no projeto do molde se propagam para cada uma das peças produzidas ao longo de toda a vida útil do ferramental. Um gate mal posicionado, um sistema de refrigeração subdimensionado ou um ângulo de saída insuficiente geram custos de retrabalho e paradas de produção que superam em muito o valor do molde original.</p>
              <p>Por isso, a escolha do ferramenteiro e a especificação técnica correta do molde são decisões que precisam ser tomadas antes mesmo de cotar a resina.</p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Aço ferramenta: P20, H13 ou inox 420?</h2>
              <p>O aço do molde determina vida útil, custo de fabricação e capacidade de acabamento:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li><strong>P20</strong>: o mais utilizado em moldes de termoplásticos, pré-temperado a 28–34 HRC, fácil de usinar e polir. Vida útil: 500.000 a 1.000.000 ciclos para materiais não abrasivos (PP, PE, ABS)</li>
                <li><strong>H13</strong>: indicado para materiais abrasivos (nylon com fibra de vidro, PP com talco) e altas temperaturas de injeção. Temperado a 44–52 HRC. Vida útil: acima de 1.000.000 ciclos</li>
                <li><strong>Inox 420</strong>: obrigatório para materiais corrosivos (PVC, retardantes de chama halogenados) ou produtos para contato alimentar. Custo 20–35% superior ao P20</li>
                <li><strong>Alumínio 7075 e QC-10</strong>: moldes de prototipagem ou baixo volume (até 100.000 ciclos), com lead time de fabricação 50–60% menor que o aço</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Sistema de alimentação: canal frio vs. câmara quente</h2>
              <p>O sistema de canais define quanto material vira galho (refugo) a cada ciclo e qual é o tempo de ciclo mínimo possível.</p>
              <p><strong>Canal frio</strong>: simples e de baixo custo, adequado para séries menores. O galho pode ser reaproveitado no moinho de fresa, mas aumenta o tempo de ciclo e o consumo de material por peça.</p>
              <p><strong>Câmara quente (hot runner)</strong>: elimina o galho, reduz o tempo de ciclo em 15–30% e permite injetar em múltiplos pontos com pressão balanceada. O investimento adicional (R$ 15.000 a R$ 80.000 dependendo do número de bicos) se justifica em produções a partir de 500.000 peças/ano.</p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Refrigeração: a engenharia que determina a produtividade</h2>
              <p>O resfriamento do molde representa 60–80% do tempo total de ciclo de injeção. Um sistema de refrigeração mal projetado força ciclos longos, causa empenamento das peças e cria pontos de tensão residual que comprometem a resistência mecânica do produto.</p>
              <p>Técnicas como conformational cooling (canais conformais fabricados por manufatura aditiva em aço) e simulação de fluxo térmico via Moldflow ou Cadmould permitem dimensionar o sistema antes da fabricação — reduzindo tempo de ciclo em até 30% e eliminando empenamento em peças de parede fina.</p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Acabamento superficial, desmoldagem e escala VDI</h2>
              <p>O acabamento da cavidade define a textura da superfície da peça. A escala VDI classifica de VDI 45 (textura grossa, 18 µm Ra) a VDI 0 (polimento espelhado, Ra &lt; 0,05 µm). O ângulo de saída deve ser calculado em função do acabamento: superfícies texturizadas exigem ângulos de 1° a 3° por 0,025 mm de profundidade de textura — regra que, quando ignorada, gera arranhões em 100% das peças.</p>

              <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Etapas de validação: T0, T1, T2 e aprovação em série</h2>
              <p>Um molde sai da ferramentaria apenas quando passa pelas etapas formais de validação:</p>
              <ol className="list-decimal list-inside space-y-2 mt-2">
                <li><strong>T0 (First Shot)</strong>: primeira injeção experimental, verifica preenchimento, marcas de fluxo e funcionamento básico</li>
                <li><strong>T1</strong>: ajustes aplicados, parâmetros de processo definidos, inspeção dimensional 100% das amostras</li>
                <li><strong>T2</strong>: validação com parâmetros finais, análise de repetibilidade entre ciclos e turnos</li>
                <li><strong>PPAP</strong>: exigido por montadoras e indústria médica — pacote com FMEA, plano de controle, relatório dimensional e Cpk ≥ 1,67 para características críticas</li>
              </ol>
              <p className="mt-4">A Dorathas representa ferramenteiros com mais de 20 anos de experiência e acompanha o processo técnico junto ao fornecedor — garantindo que o comprador receba não apenas o molde, mas a documentação completa exigida pelos seus clientes finais.</p>
            </div>

            <div className="mt-10 p-6 bg-orange-50 border border-orange-200 rounded-lg">
              <p className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-2">Precisa de um molde novo ou manutenção de ferramental?</p>
              <h3 className="text-xl font-bold text-gray-800 mb-3">A Dorathas conecta você ao ferramenteiro certo — com acompanhamento técnico de T0 ao PPAP.</h3>
              <p className="text-gray-600 mb-5 text-sm">Envie o projeto ou a demanda e indicamos a ferramentaria mais adequada para o seu material, cavitação e volume de produção.</p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => scrollToSection('contato')} className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors text-sm">Solicitar Cotação</button>
                <button onClick={openWhatsApp} className="px-6 py-2 border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 font-bold rounded-lg transition-colors text-sm">Falar com Especialista</button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-300">Vamos conversar sobre suas necessidades</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-orange-400 mr-4" />
                  <div>
                    <p className="font-semibold">(19) 99391-4471</p>
                    <p className="text-gray-400">Para um atendimento prático e rápido, entre em contato pelo WhatsApp.</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-orange-400 mr-4" />
                  <div>
                    <p className="font-semibold">contato@dorathas.com.br</p>
                    <p className="text-gray-400">Para melhor documentação e formalidade, atendemos também por e-mail!</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-orange-400 mr-4" />
                  <div>
                    <p className="font-semibold">Limeira, São Paulo</p>
                    <p className="text-gray-400">A Dorathas está localizada em Limeira, mas atende todo estado de São Paulo!</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-orange-400 mr-4" />
                  <div>
                    <p className="font-semibold">Horário de Atendimento</p>
                    <p className="text-gray-400">Segunda a Sexta: 8h às 18h</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <button 
                    onClick={openLinkedIn}
                    className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={openInstagram}
                    className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={openFacebook}
                    className="bg-blue-800 hover:bg-blue-900 p-3 rounded-full transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Envie uma Mensagem</h3>
              {formSubmitted ? (
                <div className="text-center py-8">
                  <p className="text-green-400 text-xl font-semibold mb-2">Mensagem enviada!</p>
                  <p className="text-gray-400 mb-6">Você foi redirecionado para o WhatsApp. Em breve entraremos em contato.</p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                      placeholder="(19) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem</label>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                      placeholder="Descreva sua necessidade..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Enviar pelo WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Dorathas - Representações em Serviços e Equipamentos Industriais. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-20 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50"
        title="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.85L.057 23.571a.5.5 0 0 0 .612.612l5.72-1.475A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.52-5.17-1.426l-.37-.22-3.392.874.893-3.296-.24-.383A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </button>
    </div>
  )
}

export default App
// Force rebuild Mon Apr 20 14:34:20 EDT 2026
// Force rebuild Mon Apr 20 15:01:59 EDT 2026
