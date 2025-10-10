import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
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

// Import logos das empresas famosas para cases
import logo_plastek from './assets/logo_plastek_novo.png';
import logo_multilaser from './assets/logo_multilaser_novo.png';
import logo_fabercastel from './assets/logo_fabercastel_novo.png';
import logo_novel from './assets/logo_novel_novo.jpg';
import logo_electrolux from './assets/logo_electrolux_novo.png';
import logo_anauger from './assets/logo_anauger_novo.png';
import logo_plasticor from './assets/logo_plasticor_novo.jpg';
import logo_latina from './assets/logo_latina_novo.jpeg';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const slides = [
    {
      title: "Representações em Serviços e Equipamentos",
      subtitle: "Representação e Consultoria em Serviços",
      background: dorathasMaquinaInjecao
    },
    {
      title: "Termofixos",
      subtitle: "Representação e Consultoria em Serviços", 
      background: dorathaspensaTermofixos
    },
    {
      title: "Desenvolvimento de Moldes",
      subtitle: "Representação e Consultoria em Serviços",
      background: dorathasCentroUsinagem
    },
    {
      title: "Usinagem de Precisão",
      subtitle: "Representação e Consultoria em Serviços",
      background: dorathasTornoAutomatico
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => scrollToSection('quem-somos')} 
                  className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors text-sm font-medium text-left"
                >
                  Quem Somos
                </button>
                <button 
                  onClick={() => scrollToSection('termoplasticos')} 
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium text-left"
                >
                  Termoplásticos
                </button>
                <button 
                  onClick={() => scrollToSection('termofixos')} 
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium text-left"
                >
                  Termofixos
                </button>
                <button 
                  onClick={() => scrollToSection('moldes')} 
                  className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm font-medium text-left"
                >
                  Moldes
                </button>
                <button 
                  onClick={() => scrollToSection('usinagem')} 
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium text-left"
                >
                  Usinagem
                </button>
                <button 
                  onClick={() => scrollToSection('equipamentos')} 
                  className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors text-sm font-medium text-left"
                >
                  Equipamentos
                </button>
                <button 
                  onClick={() => scrollToSection('software')} 
                  className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors text-sm font-medium text-left"
                >
                  Software
                </button>
                <button 
                  onClick={() => scrollToSection('blog')} 
                  className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm font-medium text-left"
                >
                  Blog
                </button>
                <button 
                  onClick={() => scrollToSection('contato')} 
                  className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors text-sm font-medium text-left"
                >
                  Contato
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

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
            onClick={() => scrollToSection('termoplasticos')}
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

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Quem Somos</h2>
              <p className="text-xl text-gray-600">Conectando empresas às melhores soluções industriais</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Nossa Expertise</h3>
                <p className="text-gray-600 mb-6">
                  A Dorathas atua como representante comercial especializado, conectando empresas 
                  às melhores soluções em serviços industriais e equipamentos periféricos. 
                  Com mais de 15 anos de experiência no mercado, oferecemos consultoria técnica 
                  e comercial para diversos segmentos da indústria.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">Serviços</h4>
                    <ul className="text-blue-700 space-y-2">
                      <li>• Injeção de Termoplásticos</li>
                      <li>• Prensagem de Termofixos</li>
                      <li>• Desenvolvimento de Moldes</li>
                      <li>• Usinagem de Precisão</li>
                    </ul>
                  </div>

                  <div className="bg-teal-50 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-teal-800 mb-3">Equipamentos</h4>
                    <ul className="text-teal-700 space-y-2">
                      <li>• Equipamentos Periféricos</li>
                      <li>• Automação Industrial</li>
                      <li>• Sistemas de Alimentação</li>
                      <li>• Dosadores e Transportadores</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-gray-600">
                  Nossa missão é facilitar o acesso às melhores tecnologias e serviços do mercado, 
                  oferecendo suporte técnico especializado e condições comerciais competitivas. 
                  Trabalhamos apenas com empresas certificadas e reconhecidas pela qualidade 
                  de seus produtos e serviços.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg text-center mt-6">
                  <p className="text-xl font-semibold text-gray-800 mb-2">
                    Mais de 15 anos de experiência no mercado industrial
                  </p>
                  <p className="text-gray-600">
                    Conectando empresas às melhores soluções em serviços e equipamentos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Termoplásticos */}
      <section id="termoplasticos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Termoplásticos</h2>
            <p className="text-xl text-gray-600">Injeção de termoplásticos com qualidade e precisão</p>
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
            <p className="text-xl text-gray-600">Prensagem de termofixos com tecnologia avançada</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Prensagem de Termofixos</h3>
              <p className="text-gray-600 mb-6">
                Especializados em prensagem de materiais termofixos, oferecemos soluções completas 
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
              <img 
                src={dorathasPecasTermofixos} 
                alt="Peças de Termofixos" 
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Desenvolvimento de Moldes */}
      <section id="moldes" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Desenvolvimento de Moldes</h2>
            <p className="text-xl text-gray-600">Moldes de precisão para injeção e prensagem</p>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usinagem */}
      <section id="usinagem" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Usinagem de Precisão</h2>
            <p className="text-xl text-gray-600">Usinagem CNC com tecnologia de ponta e mais de 25 anos de experiência</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Serviços e Desenvolvimento de Peças Usinadas</h3>
              <p className="text-gray-600 mb-6">
                Você está procurando empresas que fazem serviços e desenvolvimento de peças usinadas de pequeno porte em tornos automáticos e CNC? 
                Então você veio ao lugar certo. Nós representamos empresas que oferecem soluções completas em usinagem de peças, desde o projeto até a execução.
              </p>
              
              <p className="text-gray-600 mb-6">
                Temos tornos automáticos e CNC de última geração, que permitem usinar peças com precisão e rapidez. Usamos materiais como latão, alumínio e aço, 
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
                    <p className="text-gray-600">Latão, alumínio, aço e outros materiais para produção de parafusos, porcas, pinos, buchas, engrenagens.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Centros de Usinagem Vertical</h4>
                    <p className="text-gray-600">Equipamentos de alta precisão para usinagem de peças até 800kg com cursos extensos (até 1000mm).</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Fresadoras e Retíficas</h4>
                    <p className="text-gray-600">Fresadoras ferramenteiras de alta precisão e retífica plana para acabamento dimensional superior.</p>
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

          {/* Capacidades Técnicas */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Equipamentos Disponíveis</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Centros de Usinagem Vertical (até 1000mm de curso)</li>
                <li>• Fresadoras Ferramenteiras de Alta Precisão</li>
                <li>• Retífica Plana com Curso de 800mm</li>
                <li>• Rosqueadeira Elétrica com Braço Articulado</li>
                <li>• Equipamentos para Recuperação de Peças</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Serviços Especializados</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Fabricação de Peças Usinadas</li>
                <li>• Recuperação de Equipamentos</li>
                <li>• Fabricação de Ferramentas</li>
                <li>• Usinagem de Protótipos</li>
                <li>• Manutenção Industrial</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipamentos Periféricos */}
      <section id="equipamentos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Equipamentos Periféricos</h2>
            <p className="text-xl text-gray-600">Soluções Completas para Indústria de Transformação de Plásticos</p>
          </div>

          <div className="mb-12">
            <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
              Oferecemos soluções inovadoras em automação industrial para diversos setores, incluindo o alimentício, 
              farmacêutico, automotivo e, com especialização, o setor de plásticos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={hmAlimentadorMono} 
                alt="Alimentador Monofásico" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Alimentador Monofásico</h3>
                <p className="text-gray-600">Sistema de alimentação automática para pequenas e médias produções.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={hmAlimentadorTri} 
                alt="Alimentador Trifásico" 
                className="w-full h-48 object-cover"
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
                className="w-full h-48 object-cover"
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
              <img 
                src={hmMoinhoFresa} 
                alt="Moinhos Fresa" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Moinhos Fresa</h3>
                <p className="text-gray-600">
                  Equipamentos robustos que trituram materiais plásticos, transformando-os em partículas uniformes para reaproveitamento. 
                  Alta durabilidade, fáceis de operar, manutenção simples. Essenciais para reciclagem e sustentabilidade. 
                  Garantia de 1 ano contra defeitos de fabricação.
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
                <li>• Sistemas de Secagem</li>
                <li>• Central de Alimentação</li>
                <li>• Silos de Armazenagem</li>
                <li>• Moinhos Fresa</li>
                <li>• Sistemas de Transporte</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Serviços Especializados</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Manutenção Preventiva e Corretiva</li>
                <li>• Recondicionamento de Equipamentos</li>
                <li>• Instalação e Comissionamento</li>
                <li>• Serviços de Refrigeração Industrial</li>
                <li>• Suporte Técnico 24h</li>
                <li>• Consultoria Técnica Especializada</li>
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
                  src={logo_plastek}
                  alt="Plastek"
                  className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src={logo_electrolux}
                  alt="Electrolux"
                  className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src={logo_novel}
                  alt="Novel"
                  className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src={logo_fabercastel}
                  alt="FABER CASTEL"
                  className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src={logo_multilaser}
                  alt="Multilaser"
                  className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src={logo_plasticor}
                  alt="Plasticor"
                  className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src={logo_latina}
                  alt="LATINA"
                  className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <img
                  src={logo_anauger}
                  alt="Anauger"
                  className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Software Industrial</h2>
            <p className="text-xl text-gray-600">Soluções em software para otimização de processos industriais</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-24 h-24 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SW</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Soluções em Software Industrial
              </h3>
              
              <p className="text-gray-600 mb-6 text-lg">
                Representamos empresas especializadas em desenvolvimento de software para automação e 
                otimização de processos industriais. Soluções personalizadas para aumentar a eficiência 
                e produtividade da sua operação.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-cyan-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-cyan-800 mb-3">Automação</h4>
                  <p className="text-cyan-700">Software para controle e automação de processos industriais</p>
                </div>
                <div className="bg-cyan-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-cyan-800 mb-3">Monitoramento</h4>
                  <p className="text-cyan-700">Sistemas de monitoramento em tempo real da produção</p>
                </div>
                <div className="bg-cyan-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-cyan-800 mb-3">Gestão</h4>
                  <p className="text-cyan-700">Ferramentas de gestão e controle de qualidade</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  <strong>Em breve:</strong> Informações detalhadas sobre nossas soluções em software industrial. 
                  Entre em contato para saber mais sobre como podemos ajudar a otimizar seus processos.
                </p>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Entre em Contato
                </button>
              </div>
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
                <h3 className="text-white text-xl font-semibold">Inovações em Usinagem</h3>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Tecnologias CNC Avançadas</h4>
                <p className="text-gray-600 mb-4">Descubra as últimas tendências em usinagem CNC e como elas podem revolucionar sua produção.</p>
                <button 
                  onClick={() => window.open('https://www.dorathas.com.br/blog/inovacoes-usinagem', '_blank')}
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
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Reciclagem de Plásticos</h4>
                <p className="text-gray-600 mb-4">Como os moinhos fresa contribuem para uma produção mais sustentável e econômica.</p>
                <button 
                  onClick={() => window.open('https://www.dorathas.com.br/blog/sustentabilidade-plasticos', '_blank')}
                  className="text-green-600 hover:text-green-800 font-medium cursor-pointer"
                >
                  Leia mais →
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-48 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">Moldes de Precisão</h3>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Desenvolvimento de Moldes</h4>
                <p className="text-gray-600 mb-4">Técnicas avançadas para desenvolvimento de moldes para termoplásticos e termofixos.</p>
                <button 
                  onClick={() => window.open('https://www.dorathas.com.br/blog/moldes-precisao', '_blank')}
                  className="text-purple-600 hover:text-purple-800 font-medium cursor-pointer"
                >
                  Leia mais →
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => window.open('https://www.dorathas.com.br/blog', '_blank')}
              className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
            >
              Ver Todos os Artigos
            </button>
          </div>
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
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">E-mail</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                    placeholder="(19) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white"
                    placeholder="Descreva sua necessidade..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Dorathas - Representações em Serviços e Equipamentos Industriais. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50"
      >
        <Phone className="w-6 h-6" />
      </button>
    </div>
  )
}

export default App
