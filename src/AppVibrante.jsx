import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react'
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

// Import logos coloridos
import logo_plastek_colorido from './assets/logo_plastek_colorido.png'
import logo_multilaser_colorido from './assets/multilaser-logo.jpg'
import logo_fabercastel_colorido from './assets/logo_fabercastel_colorido.png'
import logo_novel_colorido from './assets/novel-logo.png'
import logo_electrolux_colorido from './assets/logo_electrolux_novo.png'
import logo_anauger_colorido from './assets/ebf-logo.png'
import logo_plasticor_colorido from './assets/plasticor-logo.jpg'
import logo_metagal_colorido from './assets/metagal-logo.png'
import logo_isopower from './assets/isopower-logo.webp'

// Import imagens ilustrativas
import moldeInjecao1 from './assets/molde_injecao_ilustrativo_1.png'
import moldeInjecao2 from './assets/molde_injecao_ilustrativo_2.jpg'
import moldeInjecao3 from './assets/molde_injecao_ilustrativo_3.png'
import pecasUsinadas1 from './assets/pecas_usinadas_ilustrativo_1.jpg'
import pecasUsinadas2 from './assets/pecas_usinadas_ilustrativo_2.jpg'
import pecasUsinadasLatao from './assets/pecas_usinadas_latao.jpg'
import pecasUsinadasAco from './assets/pecas_usinadas_aco.jpg'
import maquinaCncUsinando from './assets/maquina_cnc_usinando.png'

/**
 * AppVibrante - Versão alternativa com cores do site antigo e conteúdo completo
 * Cores: #003366 (azul escuro), #005599 (azul médio), #FF6600 (laranja), #00CC99 (verde)
 */
function AppVibrante() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const slides = [
    {
      title: "Representações em Serviços e Equipamentos Industriais",
      subtitle: "Consultoria Técnica e Comercial Especializada",
      background: dorathasMaquinaInjecao,
      color: '#003366'
    },
    {
      title: "Moldagem por Compactação de Termofixos",
      subtitle: "Peças com Alta Resistência Térmica",
      background: dorathaspensaTermofixos,
      color: '#005599'
    },
    {
      title: "Usinagem de Precisão",
      subtitle: "Peças Usinadas de Pequeno e Médio Porte",
      background: dorathasTornoAutomatico,
      color: '#FF6600'
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img src={logoDorathas} alt="Dorathas" className="h-12" />
          
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('quem-somos')} className="text-gray-700 hover:text-blue-600 font-medium">Quem Somos</button>
            <button onClick={() => scrollToSection('termoplasticos')} className="text-gray-700 hover:text-blue-600 font-medium">Termoplásticos</button>
            <button onClick={() => scrollToSection('termofixos')} className="text-gray-700 hover:text-blue-600 font-medium">Termofixos</button>
            <button onClick={() => scrollToSection('moldes')} className="text-gray-700 hover:text-blue-600 font-medium">Moldes</button>
            <button onClick={() => scrollToSection('usinagem')} className="text-gray-700 hover:text-blue-600 font-medium">Usinagem</button>
            <button onClick={() => scrollToSection('equipamentos')} className="text-gray-700 hover:text-blue-600 font-medium">Equipamentos</button>
            <button onClick={() => scrollToSection('software')} className="text-gray-700 hover:text-blue-600 font-medium">Software</button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-blue-600 font-medium">Blog</button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 font-medium">Contato</button>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden bg-gray-50 p-4 space-y-2">
            <button onClick={() => scrollToSection('quem-somos')} className="block w-full text-left p-2 hover:bg-gray-200">Quem Somos</button>
            <button onClick={() => scrollToSection('termoplasticos')} className="block w-full text-left p-2 hover:bg-gray-200">Termoplásticos</button>
            <button onClick={() => scrollToSection('termofixos')} className="block w-full text-left p-2 hover:bg-gray-200">Termofixos</button>
            <button onClick={() => scrollToSection('moldes')} className="block w-full text-left p-2 hover:bg-gray-200">Moldes</button>
            <button onClick={() => scrollToSection('usinagem')} className="block w-full text-left p-2 hover:bg-gray-200">Usinagem</button>
            <button onClick={() => scrollToSection('equipamentos')} className="block w-full text-left p-2 hover:bg-gray-200">Equipamentos</button>
            <button onClick={() => scrollToSection('software')} className="block w-full text-left p-2 hover:bg-gray-200">Software</button>
            <button onClick={() => scrollToSection('blog')} className="block w-full text-left p-2 hover:bg-gray-200">Blog</button>
            <button onClick={() => scrollToSection('contato')} className="block w-full text-left p-2 hover:bg-gray-200">Contato</button>
          </nav>
        )}
      </header>

      {/* Hero Carousel */}
      <section className="relative h-96 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.7), rgba(0, 85, 153, 0.7)), url(${slide.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="h-full flex items-center justify-center text-center text-white">
              <div>
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full z-10"
        >
          <ChevronRight size={24} />
        </button>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" style={{backgroundColor: '#f9f9f9', padding: '60px 20px'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '36px', color: '#003366', marginBottom: '20px'}}>Quem Somos</h2>
          <p style={{fontSize: '18px', color: '#333', lineHeight: '1.6'}}>
            A <strong>Dorathas</strong> é uma representante comercial especializada em serviços industriais e equipamentos periféricos. Com mais de <strong>15 anos de experiência</strong>, conectamos empresas às melhores soluções do mercado, oferecendo <strong>consultoria técnica e comercial</strong> para diversos segmentos da indústria.
          </p>

          <h3 style={{fontSize: '28px', color: '#003366', marginTop: '40px'}}>O Que Fazemos</h3>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '40px', marginTop: '20px'}}>
            <div style={{flex: '1', minWidth: '250px'}}>
              <h4 style={{fontSize: '22px', color: '#005599'}}>Serviços Industriais</h4>
              <ul style={{fontSize: '16px', color: '#444', lineHeight: '1.8'}}>
                <li>✓ Injeção de Termoplásticos</li>
                <li>✓ Moldagem a Quente por Compactação de Termofixos</li>
                <li>✓ Desenvolvimento de Moldes</li>
                <li>✓ Usinagem de Precisão</li>
              </ul>
            </div>
            <div style={{flex: '1', minWidth: '250px'}}>
              <h4 style={{fontSize: '22px', color: '#005599'}}>Equipamentos e Tecnologia</h4>
              <ul style={{fontSize: '16px', color: '#444', lineHeight: '1.8'}}>
                <li>✓ Equipamentos Periféricos HM</li>
                <li>✓ Automação Industrial</li>
                <li>✓ Sistemas de Alimentação</li>
                <li>✓ Software de Controle de Produção</li>
              </ul>
            </div>
          </div>

          <h3 style={{fontSize: '28px', color: '#003366', marginTop: '40px'}}>Nossa Missão</h3>
          <p style={{fontSize: '18px', color: '#333', lineHeight: '1.6'}}>
            Facilitar o acesso às melhores tecnologias e serviços do mercado, com <strong>suporte técnico especializado</strong>, <strong>condições comerciais competitivas</strong> e parcerias com empresas <strong>certificadas e reconhecidas pela qualidade</strong>.
          </p>

          <div style={{marginTop: '40px', padding: '20px', backgroundColor: '#e6f0ff', borderLeft: '5px solid #005599'}}>
            <p style={{fontSize: '20px', color: '#003366', fontWeight: 'bold'}}>
              +15 anos de experiência conectando empresas às melhores soluções industriais.
            </p>
          </div>
        </div>
      </section>

      {/* Termoplásticos */}
      <section id="termoplasticos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{color: '#003366'}}>Injeção de Termoplásticos</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src={dorathasMaquinaInjecao} alt="Máquina de Injeção" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              <img src={dorathasPecasPlasticas} alt="Peças Plásticas" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6" style={{color: '#005599'}}>Serviços Especializados</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Oferecemos serviços especializados em injeção de termoplásticos para diversos segmentos industriais. Trabalhamos com uma ampla gama de materiais, garantindo qualidade e precisão em cada projeto.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full mt-2 mr-3" style={{backgroundColor: '#FF6600'}}></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Polietileno (PE)</h4>
                    <p className="text-gray-600">Material versátil para embalagens e componentes</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full mt-2 mr-3" style={{backgroundColor: '#FF6600'}}></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Polipropileno (PP)</h4>
                    <p className="text-gray-600">Excelente resistência térmica e química</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-3 h-3 rounded-full mt-2 mr-3" style={{backgroundColor: '#FF6600'}}></div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Policarbonato (PC)</h4>
                    <p className="text-gray-600">Alta resistência e transparência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Termofixos */}
      <section id="termofixos" className="py-16" style={{backgroundColor: '#f0f8ff'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{color: '#003366'}}>Moldagem por Compactação de Termofixos</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6" style={{color: '#005599'}}>Materiais Termofixos</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2" style={{color: '#003366'}}>Fenólica (Baquelite)</h4>
                  <p className="text-gray-600">Resina resistente ao calor e à eletricidade, ideal para peças técnicas e isoladores elétricos.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2" style={{color: '#003366'}}>Melamínica</h4>
                  <p className="text-gray-600">Alta dureza e resistência a riscos, usada em utensílios domésticos e componentes elétricos.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="font-bold text-lg mb-2" style={{color: '#003366'}}>Poliéster com Fibra de Vidro (BMC/SMC)</h4>
                  <p className="text-gray-600">Compósito leve e resistente, indicado para peças estruturais e carcaças técnicas.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src={dorathaspensaTermofixos} alt="Prensa Termofixos" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              <img src={dorathasPecasTermofixos} alt="Peças Termofixos" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Moldes */}
      <section id="moldes" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{color: '#003366'}}>Desenvolvimento de Moldes</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
            <div className="grid grid-cols-2 gap-4">
              <img src={moldeInjecao1} alt="Molde 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              <img src={moldeInjecao2} alt="Molde 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              <img src={moldeInjecao3} alt="Molde 3" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              <img src={dorathasCentroUsinagem} alt="Centro Usinagem" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6" style={{color: '#005599'}}>Moldes de Precisão</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 pl-4" style={{borderColor: '#FF6600'}}>
                  <h4 className="font-bold text-lg mb-2" style={{color: '#003366'}}>Moldes para Termoplásticos</h4>
                  <p className="text-gray-600">Desenvolvimento completo de moldes para injeção de termoplásticos com alta precisão.</p>
                </div>

                <div className="border-l-4 pl-4" style={{borderColor: '#FF6600'}}>
                  <h4 className="font-bold text-lg mb-2" style={{color: '#003366'}}>Moldes para Alumínio</h4>
                  <p className="text-gray-600">Moldes especializados para injeção de alumínio com acabamento superior.</p>
                </div>

                <div className="border-l-4 pl-4" style={{borderColor: '#FF6600'}}>
                  <h4 className="font-bold text-lg mb-2" style={{color: '#003366'}}>Moldes para Termofixos</h4>
                  <p className="text-gray-600">Moldes para compactação e transferência com alta durabilidade.</p>
                </div>

                <div className="border-l-4 pl-4" style={{borderColor: '#FF6600'}}>
                  <h4 className="font-bold text-lg mb-2" style={{color: '#003366'}}>Ferramentais e Acessórios</h4>
                  <p className="text-gray-600">Ferramentas especializadas para complementar os moldes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usinagem */}
      <section id="usinagem" className="py-16" style={{backgroundColor: '#f0f8ff'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{color: '#003366'}}>Usinagem de Precisão</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6" style={{color: '#005599'}}>Peças Usinadas</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Temos tornos automáticos e CNC de última geração, que permitem usinar peças com precisão e rapidez. Usamos materiais como <strong>aço, alumínio e inox</strong>, para produzir peças usinadas de diversos tipos.
              </p>

              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-3" style={{backgroundColor: '#00CC99'}}></div>
                  <span className="text-gray-700">Parafusos, porcas e pinos</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-3" style={{backgroundColor: '#00CC99'}}></div>
                  <span className="text-gray-700">Buchas e engrenagens</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-3" style={{backgroundColor: '#00CC99'}}></div>
                  <span className="text-gray-700">Peças técnicas personalizadas</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full mr-3" style={{backgroundColor: '#00CC99'}}></div>
                  <span className="text-gray-700">Componentes para eletrodomésticos</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src={dorathasTornoAutomatico} alt="Torno Automático" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              <img src={pecasUsinadasLatao} alt="Peças Usinadas - Latão" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              <img src={pecasUsinadasAco} alt="Peças Usinadas - Aço" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              <img src={maquinaCncUsinando} alt="Máquina CNC Usinando" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Equipamentos */}
      <section id="equipamentos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{color: '#003366'}}>Equipamentos Periféricos</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={hmMoinhoFresa} alt="Moinho de Fresa" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2" style={{color: '#003366'}}>Moinhos de Fresa</h4>
                <p className="text-gray-600 text-sm">Equipamentos para moagem e reciclagem de plásticos com tecnologia avançada.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={hmSecagem} alt="Secagem" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2" style={{color: '#003366'}}>Sistemas de Secagem</h4>
                <p className="text-gray-600 text-sm">Secagem de última geração para termoplásticos.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={hmSiloArmazenagem} alt="Silo" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2" style={{color: '#003366'}}>Silos de Armazenagem</h4>
                <p className="text-gray-600 text-sm">Armazenagem segura e eficiente de matérias-primas.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={hmCentralAlimentacao} alt="Central" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2" style={{color: '#003366'}}>Central de Alimentação</h4>
                <p className="text-gray-600 text-sm">Sistemas automáticos de alimentação para máquinas injetoras.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={hmAlimentadorMono} alt="Alimentador" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2" style={{color: '#003366'}}>Alimentadores</h4>
                <p className="text-gray-600 text-sm">Alimentadores monofásicos e trifásicos de alta performance.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={hmDosadorVol} alt="Dosador" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2" style={{color: '#003366'}}>Dosadores</h4>
                <p className="text-gray-600 text-sm">Dosadores volumétricos e gravimétricos com precisão.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4" style={{color: '#003366'}}>Serviços Especializados</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="text-lg mr-3" style={{color: '#FF6600'}}>✓</span> Manutenção Preventiva e Corretiva</li>
                  <li className="flex items-center"><span className="text-lg mr-3" style={{color: '#FF6600'}}>✓</span> Recondicionamento de Equipamentos</li>
                  <li className="flex items-center"><span className="text-lg mr-3" style={{color: '#FF6600'}}>✓</span> Instalação e Comissionamento</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="text-lg mr-3" style={{color: '#FF6600'}}>✓</span> Manutenção de Chillers</li>
                  <li className="flex items-center"><span className="text-lg mr-3" style={{color: '#FF6600'}}>✓</span> Suporte Técnico Especializado</li>
                  <li className="flex items-center"><span className="text-lg mr-3" style={{color: '#FF6600'}}>✓</span> Treinamento Operacional</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software */}
      <section id="software" className="py-16" style={{backgroundColor: '#f0f8ff'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{color: '#003366'}}>Software Industrial - MeasureTech</h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-3xl font-bold mb-6 text-center" style={{color: '#005599'}}>Apontamento Automático de Produção</h3>
            
            <p className="text-gray-600 mb-8 text-lg text-center">
              Representamos a <strong>MeasureTech</strong>, especializada em soluções de software para automação e otimização de processos industriais. Nossa solução principal é o <strong>Apontamento Automático de Produção</strong> para injeção de peças plásticas, utilizando tablets para coleta de dados em tempo real.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h4 className="text-xl font-bold mb-3" style={{color: '#003366'}}>Coleta em Tempo Real</h4>
                <p className="text-gray-600">Tablets para apontamento automático de produção nas máquinas de injeção plástica</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h4 className="text-xl font-bold mb-3" style={{color: '#003366'}}>Monitoramento Integrado</h4>
                <p className="text-gray-600">Visibilidade total da produção com sincronização automática de dados</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h4 className="text-xl font-bold mb-3" style={{color: '#003366'}}>Gestão Eficiente</h4>
                <p className="text-gray-600">Controle de qualidade e otimização de recursos em tempo real</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-center" style={{color: '#003366'}}>Funcionalidades Principais:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <span className="text-lg mr-3" style={{color: '#FF6600'}}>✓</span>
                  <span className="text-gray-700"><strong>Apontamento Automático:</strong> Coleta de dados sem intervenção manual</span>
                </div>
                <div className="flex items-start">
                  <span className="text-lg mr-3" style={{color: '#FF6600'}}>✓</span>
                  <span className="text-gray-700"><strong>Controle de Qualidade:</strong> Verificação em tempo real de peças</span>
                </div>
                <div className="flex items-start">
                  <span className="text-lg mr-3" style={{color: '#FF6600'}}>✓</span>
                  <span className="text-gray-700"><strong>Gestão de Recursos:</strong> Otimização de máquinas e operadores</span>
                </div>
                <div className="flex items-start">
                  <span className="text-lg mr-3" style={{color: '#FF6600'}}>✓</span>
                  <span className="text-gray-700"><strong>Conformidade ISO:</strong> Rastreabilidade completa da produção</span>
                </div>
                <div className="flex items-start">
                  <span className="text-lg mr-3" style={{color: '#FF6600'}}>✓</span>
                  <span className="text-gray-700"><strong>Redução de Custos:</strong> Eliminação de desperdícios e retrabalho</span>
                </div>
                <div className="flex items-start">
                  <span className="text-lg mr-3" style={{color: '#FF6600'}}>✓</span>
                  <span className="text-gray-700"><strong>Visibilidade Total:</strong> Dashboard com métricas em tempo real</span>
                </div>
              </div>
              <div className="text-center mt-6">
                <button onClick={() => scrollToSection('contato')} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Solicitar Demonstração
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{color: '#003366'}}>Blog</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold text-center px-4">Otimização de Processos</h3>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold mb-2" style={{color: '#003366'}}>Software de Apontamento de Produção</h4>
                <p className="text-gray-600 mb-4">Como o software de apontamento pode reduzir desperdícios e aumentar a produtividade em 40%.</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">Leia mais →</button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold text-center px-4">Controle de Qualidade</h3>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold mb-2" style={{color: '#003366'}}>Transformação Digital em Tempo Real</h4>
                <p className="text-gray-600 mb-4">Tecnologia de monitoramento em tempo real para redução de defeitos e conformidade ISO.</p>
                <button className="text-green-600 hover:text-green-800 font-medium">Leia mais →</button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold text-center px-4">Gestão de Recursos</h3>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold mb-2" style={{color: '#003366'}}>Do Papel para o Digital</h4>
                <p className="text-gray-600 mb-4">Integração de sistemas para visibilidade total e otimização de recursos na Indústria 4.0.</p>
                <button className="text-purple-600 hover:text-purple-800 font-medium">Leia mais →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases de Sucesso */}
      <section className="py-16" style={{backgroundColor: '#f9f9f9'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{color: '#003366'}}>Cases de Sucesso</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center bg-white p-8 rounded-lg shadow-lg">
            <img src={logo_plastek_colorido} alt="Plastek" className="h-20 object-contain" />
            <img src={logo_electrolux_colorido} alt="Electrolux" className="h-20 object-contain" />
            <img src={logo_novel_colorido} alt="Novel" className="h-20 object-contain" />
            <img src={logo_fabercastel_colorido} alt="Faber Castel" className="h-20 object-contain" />
            <img src={logo_multilaser_colorido} alt="Multilaser" className="h-20 object-contain" />
            <img src={logo_plasticor_colorido} alt="Plasticor" className="h-20 object-contain" />
            <img src={logo_metagal_colorido} alt="Metagal" className="h-20 object-contain" />
            <img src={logo_anauger_colorido} alt="Anauger" className="h-20 object-contain" />
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg">
              Todas as empresas que nós representamos são certificadas pela <strong>ISO 9000</strong>, garantindo a qualidade e a confiabilidade dos seus serviços.
            </p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16" style={{backgroundColor: '#003366', color: 'white'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Entre em Contato</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">(19) 99391-4471</p>
                    <p className="text-blue-200">WhatsApp e Telefone</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">contato@dorathas.com.br</p>
                    <p className="text-blue-200">Email</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Limeira, SP - Brasil</p>
                    <p className="text-blue-200">Localização</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-blue-200">Horário de Funcionamento</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <button onClick={openWhatsApp} className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition">
                  WhatsApp
                </button>
                <button onClick={() => window.open('https://www.linkedin.com/in/ade88/', '_blank')} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2">
                  <Linkedin size={20} /> LinkedIn
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Redes Sociais</h3>
              
              <div className="space-y-4">
                <button onClick={() => window.open('https://www.instagram.com/dorathas_88/', '_blank')} className="w-full bg-white/10 hover:bg-white/20 text-white p-4 rounded-lg text-left flex items-center gap-3 transition">
                  <Instagram size={24} />
                  <span>Instagram: @dorathas_88</span>
                </button>

                <button onClick={() => window.open('https://www.facebook.com/dorathascom/', '_blank')} className="w-full bg-white/10 hover:bg-white/20 text-white p-4 rounded-lg text-left flex items-center gap-3 transition">
                  <Facebook size={24} />
                  <span>Facebook: Dorathas</span>
                </button>

                <button onClick={() => window.open('https://www.linkedin.com/in/ade88/', '_blank')} className="w-full bg-white/10 hover:bg-white/20 text-white p-4 rounded-lg text-left flex items-center gap-3 transition">
                  <Linkedin size={24} />
                  <span>LinkedIn: Ade88</span>
                </button>
              </div>

              <div className="mt-8 p-6 bg-white/10 rounded-lg">
                <p className="text-blue-100">
                  Estamos sempre prontos para ajudar com consultoria técnica e comercial especializada. Entre em contato conosco!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 Dorathas - Representações em Serviços e Equipamentos Industriais</p>
          <p className="text-gray-400">Conectando empresas às melhores soluções industriais desde 2009</p>
        </div>
      </footer>

      {/* Botão flutuante para alternar tema */}
      <button
        onClick={() => window.location.reload()}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        title="Voltar para versão padrão"
      >
        ← Versão Padrão
      </button>
    </div>
  )
}

export default AppVibrante

