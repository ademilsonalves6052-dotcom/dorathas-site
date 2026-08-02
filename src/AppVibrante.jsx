import React, { useState, useEffect } from 'react'
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
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Olá! Meu nome é ${formData.name || 'visitante do site'}.${formData.phone ? ` Meu telefone: ${formData.phone}.` : ''}${formData.email ? ` E-mail: ${formData.email}.` : ''} ${formData.message || 'Gostaria de saber mais sobre os serviços da Dorathas.'}`
    window.open(`https://wa.me/5519993914471?text=${encodeURIComponent(text)}`, '_blank')
    setFormSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

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
            <button onClick={() => scrollToSection('cases')} className="text-gray-700 hover:text-blue-600 font-medium">Cases</button>
            <button onClick={() => scrollToSection('blog')} className="text-gray-700 hover:text-blue-600 font-medium">Blog</button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 font-medium">Contato</button>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </header>

      {/* Mobile Menu Overlay — fixed full-screen, outside header to avoid clipping */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col overflow-y-auto md:hidden">
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            <img src={logoDorathas} alt="Dorathas" className="h-10" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-700"
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col p-6 space-y-3">
            <button onClick={() => scrollToSection('quem-somos')} className="px-4 py-3 text-left font-medium text-gray-800 border-b border-gray-100 hover:text-blue-600">Quem Somos</button>
            <button onClick={() => scrollToSection('termoplasticos')} className="px-4 py-3 text-left font-medium text-gray-800 border-b border-gray-100 hover:text-blue-600">Termoplásticos</button>
            <button onClick={() => scrollToSection('termofixos')} className="px-4 py-3 text-left font-medium text-gray-800 border-b border-gray-100 hover:text-blue-600">Termofixos</button>
            <button onClick={() => scrollToSection('moldes')} className="px-4 py-3 text-left font-medium text-gray-800 border-b border-gray-100 hover:text-blue-600">Moldes</button>
            <button onClick={() => scrollToSection('usinagem')} className="px-4 py-3 text-left font-medium text-gray-800 border-b border-gray-100 hover:text-blue-600">Usinagem</button>
            <button onClick={() => scrollToSection('equipamentos')} className="px-4 py-3 text-left font-medium text-gray-800 border-b border-gray-100 hover:text-blue-600">Equipamentos</button>
            <button onClick={() => scrollToSection('software')} className="px-4 py-3 text-left font-medium text-gray-800 border-b border-gray-100 hover:text-blue-600">Software</button>
            <button onClick={() => scrollToSection('cases')} className="px-4 py-3 text-left font-medium text-gray-800 border-b border-gray-100 hover:text-blue-600">Cases</button>
            <button onClick={() => scrollToSection('blog')} className="px-4 py-3 text-left font-medium text-gray-800 border-b border-gray-100 hover:text-blue-600">Blog</button>
            <button onClick={() => scrollToSection('contato')} className="px-4 py-3 text-left font-medium text-gray-800 hover:text-blue-600">Contato</button>
          </nav>
        </div>
      )}

      {/* Hero Carousel */}
      <section className="relative h-screen overflow-hidden">
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

      {/* Chamada Principal */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{color: '#FF6600'}}>Representação Técnica Industrial · Interior Paulista</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-3xl" style={{color: '#003366'}}>
            Conectamos fornecedores do interior paulista às indústrias de todo o Brasil.
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl leading-relaxed">
            A <strong>Dorathas</strong> é representante comercial técnico com <strong>+15 anos de mercado</strong>, especializada em levar as soluções de <strong>fabricantes do interior de São Paulo</strong> — injeção plástica, moldes, usinagem CNC, periféricos e tecnologia industrial — a empresas e indústrias em todo o <strong>estado de São Paulo e no Brasil</strong>.
          </p>
          <div className="flex flex-wrap gap-4 mb-3">
            <button
              onClick={() => scrollToSection('contato')}
              className="px-8 py-3 text-white font-bold rounded-lg transition-colors"
              style={{backgroundColor: '#FF6600'}}
              onMouseOver={e => e.currentTarget.style.backgroundColor='#cc5200'}
              onMouseOut={e => e.currentTarget.style.backgroundColor='#FF6600'}
            >
              Enviar Projeto para Cotação
            </button>
            <button
              onClick={openWhatsApp}
              className="px-8 py-3 border-2 font-bold rounded-lg transition-colors hover:text-white"
              style={{borderColor: '#003366', color: '#003366'}}
              onMouseOver={e => { e.currentTarget.style.backgroundColor='#003366'; e.currentTarget.style.color='white' }}
              onMouseOut={e => { e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.color='#003366' }}
            >
              Falar com Especialista Técnico
            </button>
          </div>
          <p className="text-sm text-gray-400 mb-12">Atendimento técnico para engenharia, compras e produção</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-100 pt-10">
            <div>
              <p className="text-4xl font-bold" style={{color: '#FF6600'}}>+15</p>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-2">Anos de Mercado</p>
            </div>
            <div>
              <p className="text-4xl font-bold" style={{color: '#FF6600'}}>200+</p>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-2">Clientes Atendidos</p>
            </div>
            <div>
              <p className="text-4xl font-bold" style={{color: '#FF6600'}}>500+</p>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-2">Projetos Realizados</p>
            </div>
            <div>
              <p className="text-4xl font-bold" style={{color: '#FF6600'}}>8+</p>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-2">Estados Atendidos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos */}
      <section id="quem-somos" style={{backgroundColor: '#f9f9f9', padding: '60px 20px'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <h2 style={{fontFamily: "'Montserrat', sans-serif", fontSize: '36px', color: '#003366', marginBottom: '20px'}}>+15 Anos Conectando o Interior Paulista ao Mercado Nacional</h2>
          <p style={{fontSize: '18px', color: '#333', lineHeight: '1.6'}}>
            A <strong>Dorathas Consultoria e Representações Industriais</strong> é especializada em representação comercial técnica, com sede em <strong>Limeira–SP</strong>. Nosso propósito é ser o elo estratégico entre <strong>fabricantes e fornecedores do interior paulista</strong> e as <strong>indústrias de todo o estado de São Paulo e do Brasil</strong>.
          </p>
          <p style={{fontSize: '18px', color: '#333', lineHeight: '1.6', marginTop: '16px'}}>
            Com mais de <strong>15 anos de mercado</strong>, atuamos em seis frentes industriais — injeção de termoplásticos, termofixos, ferramentaria e moldes, usinagem CNC, equipamentos periféricos e tecnologia (MeasureTech 4.0) — sempre com atendimento técnico personalizado para engenharia, compras e produção.
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
          <p className="text-xs font-bold tracking-widest uppercase text-center mb-3" style={{color: '#FF6600'}}>Representação Técnica · Interior Paulista</p>
          <h2 className="text-4xl font-bold mb-4 text-center" style={{color: '#003366'}}>Injeção de Termoplásticos</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">Representamos <strong>fabricantes especializados do interior de São Paulo</strong> em injeção de termoplásticos com PP, PE, ABS, Nylon, PC, POM, PBT e PET — levando soluções técnicas de precisão a indústrias em todo o Brasil.</p>
          
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
          <h2 className="text-4xl font-bold mb-4 text-center" style={{color: '#003366'}}>Termofixos (Baquelite, BMC, Melamina)</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">Conectamos <strong>empresas do interior paulista</strong> especializadas em moldagem por compressão de termofixos — Baquelite, BMC e Melamina — com indústrias que exigem alta resistência térmica e dielétrica em todo o Brasil.</p>
          
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
              <img src={dorathasPecasTermofixos} alt="Peças Termofixos" className="w-full h-64 object-cover object-top rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Moldes */}
      <section id="moldes" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center" style={{color: '#003366'}}>Ferramentaria e Moldes</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">Representamos <strong>ferramentarias de precisão do interior paulista</strong> na fabricação e manutenção de moldes para injeção e compressão, atendendo projetos em todo o estado de São Paulo e demais regiões do Brasil.</p>
          
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
          <h2 className="text-4xl font-bold mb-4 text-center" style={{color: '#003366'}}>Usinagem CNC</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">Levamos a capacidade de <strong>fornecedores de usinagem seriada do interior de SP</strong> — tornos CNC e centros automáticos — a indústrias de médio e grande porte em todo o Brasil que buscam precisão, prazo e escala.</p>
          
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
          <h2 className="text-4xl font-bold mb-4 text-center" style={{color: '#003366'}}>Equipamentos Periféricos</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">Representamos <strong>fabricantes do interior paulista</strong> em alimentadores, dosadores, moinhos, esteiras, secadores e centrais de alimentação — equipamentos essenciais para linhas de injeção e extrusão em todo o Brasil.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={hmMoinhoFresa} alt="Moinho de Fresa" className="w-full h-48 object-cover object-top" />
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
              <img src={hmAlimentadorMono} alt="Alimentador" className="w-full h-48 object-cover object-top" />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2" style={{color: '#003366'}}>Alimentadores</h4>
                <p className="text-gray-600 text-sm">Alimentadores monofásicos e trifásicos de alta performance.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={hmDosadorVol} alt="Dosador" className="w-full h-48 object-cover object-top" />
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
          <h2 className="text-4xl font-bold mb-4 text-center" style={{color: '#003366'}}>Software MeasureTech 4.0</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">Como <strong>representante autorizado do MeasureTech 4.0</strong> para o interior de São Paulo e demais regiões, a Dorathas leva tecnologia de gestão e apontamento de produção em tempo real a indústrias que buscam eficiência operacional — sem depender de grandes centros.</p>
          
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
                <h3 className="text-white text-xl font-bold text-center px-4">Usinagem CNC</h3>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold mb-2" style={{color: '#003366'}}>Usinagem CNC de Alta Performance: O Diferencial do Interior Paulista</h4>
                <p className="text-gray-600 mb-4">Do CAD/CAM ao CMM: como ferramentarias do interior paulista entregam tolerâncias de ±0,005 mm e Cpk ≥ 1,33 para montadoras e indústria médica.</p>
                <button onClick={() => scrollToSection('blog-article-cnc')} className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">Leia mais →</button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold text-center px-4">Sustentabilidade</h3>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold mb-2" style={{color: '#003366'}}>Moinho de Fresa: Economize até 60% em Matéria-Prima e Comprove para Auditoria ESG</h4>
                <p className="text-gray-600 mb-4">O ROI do moinho de fresa com payback de 4 meses, percentuais seguros de reprocessado por resina e como especificar o equipamento correto.</p>
                <button onClick={() => scrollToSection('blog-article-sustentabilidade')} className="text-green-600 hover:text-green-800 font-medium cursor-pointer">Leia mais →</button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold text-center px-4">Desenvolvimento de Moldes</h3>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold mb-2" style={{color: '#003366'}}>Molde Bem Projetado, Produção Livre de Refugo: Guia Técnico Completo</h4>
                <p className="text-gray-600 mb-4">P20 ou H13? Canal frio ou hot runner? Validação T0/T1/T2 e PPAP: o guia para quem vai desenvolver ou comprar um molde de injeção.</p>
                <button onClick={() => scrollToSection('blog-article-moldes')} className="text-purple-600 hover:text-purple-800 font-medium cursor-pointer">Leia mais →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artigos do Blog */}
      <section id="blog-article-cnc" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <button onClick={() => scrollToSection('blog')} className="text-blue-600 hover:text-blue-800 font-medium mb-6 cursor-pointer">
            ← Voltar ao Blog
          </button>
          <article className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-4" style={{color: '#003366'}}>Usinagem CNC de Alta Performance: O Diferencial do Interior Paulista</h1>
              <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                <span>📅 27 de Julho de 2026</span>
                <span>✍️ Dorathas</span>
                <span>📚 Usinagem · Ferramentaria</span>
                <span>⏱️ 8 min de leitura</span>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <h2 className="text-2xl font-bold mt-8 mb-4" style={{color: '#003366'}}>O que define uma peça CNC de alta precisão</h2>
              <p>Tolerância dimensional, rugosidade superficial e repetibilidade entre peças: esses três parâmetros separam uma peça CNC funcional de uma peça de alta performance. Centros de usinagem modernos operam com cursos superiores a 1.000 mm, capacidade de carga de até 800 kg e sistemas de fixação que eliminam o reposicionamento entre operações — mantendo tolerâncias de ±0,005 mm do início ao fim da produção.</p>
              <p>O diferencial não está somente na máquina. Está na combinação entre equipamento, programação CAM, seleção de ferramental e protocolo de inspeção. Cada etapa interfere diretamente no resultado final.</p>
              <h2 className="text-2xl font-bold mt-8 mb-4" style={{color: '#003366'}}>Centros verticais vs. horizontais: a escolha certa economiza tempo e dinheiro</h2>
              <p>Centros de usinagem vertical (VMC) dominam a maioria das ferramentarias do interior paulista e são ideais para peças de médio porte com usinagem em face superior. Já os centros horizontais (HMC) ganham espaço em produção seriada de peças prismáticas, com troca automática de paletes que mantém o eixo-árvore em corte por mais de 90% do turno.</p>
              <p>A escolha errada entre vertical e horizontal pode aumentar o tempo de setup em até 40% e reduzir a vida útil do ferramental por vibrações desnecessárias. Um representante técnico com experiência no setor consegue indicar a configuração correta antes da compra — evitando retrabalho custoso.</p>
              <h2 className="text-2xl font-bold mt-8 mb-4" style={{color: '#003366'}}>CAD/CAM e simulação: erros eliminados antes do primeiro corte</h2>
              <p>A programação off-line via software CAM (Mastercam, Hypermill, NX CAM) permite simular toda a operação em ambiente virtual antes de executar na máquina. A simulação detecta colisões entre porta-ferramenta e fixação, valida percursos de usinagem, estima tempo de ciclo e identifica regiões com risco de vibração.</p>
              <p>Empresas que integram CAD/CAM com pós-processador dedicado à máquina reduzem o tempo de setup em até 60% e praticamente eliminam sucatas por erro de programação — diferencial crítico em lotes pequenos com alto valor agregado.</p>
              <h2 className="text-2xl font-bold mt-8 mb-4" style={{color: '#003366'}}>Materiais: do aço ferramenta ao alumínio aeronáutico</h2>
              <p>Cada material exige uma estratégia diferente de usinagem:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Aço ferramenta P20 e H13:</strong> base de moldes e matrizes, exige pastilhas de metal duro com cobertura TiAlN</li>
                <li><strong>Alumínio 6061 e 7075:</strong> alta velocidade de corte acima de 1.000 m/min, acabamento espelhado sem retificação</li>
                <li><strong>Inox austenítico (AISI 304/316):</strong> baixa condutividade térmica exige boa refrigeração e ferramental específico</li>
                <li><strong>Latão e cobre:</strong> excelente usinabilidade, usados como eletrodos em eletroerosão por penetração (EDM)</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-4" style={{color: '#003366'}}>Inspeção dimensional: CMM e controle estatístico de processo</h2>
              <p>A inspeção por Máquina de Medição por Coordenadas (CMM) compara a peça física com o modelo 3D original, gerando relatório dimensional rastreável — exigência crescente de montadoras, indústria médica e aeronáutica.</p>
              <p>O controle estatístico de processo (CEP) monitora variações ao longo da produção e identifica tendências de desvio antes que a peça saia da especificação. Fornecedores com CEP implementado entregam Cpk ≥ 1,33 — padrão mínimo exigido pela IATF 16949 no setor automotivo.</p>
              <h2 className="text-2xl font-bold mt-8 mb-4" style={{color: '#003366'}}>Por que o interior paulista é referência nacional em usinagem</h2>
              <p>A região que vai de Campinas a São José do Rio Preto concentra décadas de tradição em ferramentaria, formação técnica consolidada (SENAI, FATEC, UNICAMP) e um ecossistema de fornecedores complementares — tratamento térmico, retífica, galvanoplastia, metrologia — que permite entregar peças acabadas com lead time competitivo.</p>
              <p>Esse ecossistema é exatamente o que a Dorathas conecta ao comprador industrial de qualquer parte do Brasil: acesso a capacidade técnica de alta performance sem precisar manter estrutura própria de prospecção e qualificação de fornecedores.</p>
            </div>

            <div className="mt-10 p-6 rounded-lg border" style={{backgroundColor: '#fff7ed', borderColor: '#FF6600'}}>
              <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{color: '#FF6600'}}>Precisa de peças usinadas?</p>
              <h3 className="text-xl font-bold mb-3" style={{color: '#003366'}}>A Dorathas conecta você ao ferramenteiro certo no interior paulista.</h3>
              <p className="text-gray-600 mb-5 text-sm">Envie o desenho técnico ou a demanda e nossa equipe indica a solução mais adequada — sem custo de consultoria.</p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => scrollToSection('contato')} className="px-6 py-2 text-white font-bold rounded-lg transition-colors text-sm" style={{backgroundColor: '#FF6600'}} onMouseOver={e => e.currentTarget.style.backgroundColor='#cc5200'} onMouseOut={e => e.currentTarget.style.backgroundColor='#FF6600'}>Solicitar Cotação</button>
                <button onClick={openWhatsApp} className="px-6 py-2 font-bold rounded-lg transition-colors text-sm border-2" style={{borderColor: '#003366', color: '#003366'}} onMouseOver={e => { e.currentTarget.style.backgroundColor='#003366'; e.currentTarget.style.color='white' }} onMouseOut={e => { e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.color='#003366' }}>Falar com Especialista</button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="blog-article-sustentabilidade" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <button onClick={() => scrollToSection('blog')} className="text-green-600 hover:text-green-800 font-medium mb-6 cursor-pointer">
            ← Voltar ao Blog
          </button>
          <article className="bg-gray-50 rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-4" style={{color: '#003366'}}>Moinho de Fresa na Injeção Plástica: Economize até 60% em Matéria-Prima e Comprove para Auditoria ESG</h1>
              <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                <span>📅 20 de Julho de 2026</span>
                <span>✍️ Dorathas</span>
                <span>📚 Sustentabilidade · Periféricos</span>
                <span>⏱️ 9 min de leitura</span>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <h2 className="text-2xl font-bold mt-8 mb-4" style={{color: '#003366'}}>O custo real do refugo plástico</h2>
              <p>Uma injetora de 250 toneladas rodando 20 horas por dia gera entre 80 e 200 kg de resíduo plástico por turno — entre galhos de bebedouro, purgas de troca de material e peças fora de especificação. A preço de resina virgem PP, isso representa entre R$ 400 e R$ 1.200 de material descartado por dia, fora o custo de coleta e destinação.</p>
              <p>Multiplicado por 22 dias úteis e 12 meses, o impacto financeiro anual pode ultrapassar R$ 300.000 em matéria-prima jogada fora — sem contar a responsabilidade crescente imposta pela Lei de Resíduos Sólidos (Lei 12.305/2010) e auditorias ESG de clientes do setor automotivo e de bens de consumo.</p>
              <h2 className="text-2xl font-bold mt-8 mb-4" style={{color: '#003366'}}>Como o moinho de fresa funciona na prática</h2>
              <p>O moinho de fresa tritura resíduos plásticos através de um conjunto de facas fixas e rotativas que reduzem o material a partículas granuladas de granulometria controlada — normalmente entre 4 e 12 mm, dependendo da abertura da peneira instalada. Os componentes que mais influenciam a qualidade do granulado:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Câmara de corte:</strong> dimensionamento correto evita embalagem e superaquecimento</li>
                <li><strong>Facas e contra-facas:</strong> aço ferramenta tratado, com manutenção periódica definida</li>
                <li><strong>Sistema de peneiras:</strong> controla granulometria e elimina finos que prejudicam a injeção</li>
                <li><strong>Extrator e soprador:</strong> conduz o moído para silos ou direto à tremonha da injetora</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-4" style={{color: '#003366'}}>Moinho lento vs. moinho rápido: qual escolher</h2>
              <p><strong>Moinhos de rotor lento (150–400 rpm)</strong> geram menos calor, produzem granulado mais uniforme e trabalham com ruído reduzido. Indicados para materiais sensíveis ao calor (PVC, ABS, PMMA) e operação próxima à injetora.</p>
              <p><strong>Moinhos de rotor rápido (600–1.500 rpm)</strong> têm maior produtividade volumétrica e são indicados para materiais duros (nylon carregado, PP copolímero) e operação centralizada. A especificação correta evita subdimensionamento (gargalo) ou superdimensionamento (investimento desnecessário e granulado irregular).</p>
              <h2 className="text-2xl font-bold mt-8 mb-4" style={{color: '#003366'}}>A matemática do ROI: um exemplo real</h2>
              <p>Empresa que injeta PP e gera 120 kg/dia de refugo:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Perda sem moinho: R$ 680/dia → <strong>~R$ 177.000/ano</strong></li>
                <li>Com moinho (~R$ 35.000 de investimento): economia de R$ 440/dia → <strong>~R$ 114.000/ano</strong></li>
                <li><strong>Payback: ~4 meses.</strong> A partir do 5º mês, R$ 9.500/mês de economia pura.</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-4" style={{color: '#003366'}}>Percentual seguro de reprocessado por resina</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>PP e PE:</strong> até 30% sem perda significativa de propriedades</li>
                <li><strong>ABS:</strong> até 20% — acima, queda de brilho e resistência ao impacto</li>
                <li><strong>Nylon (PA6/PA66):</strong> até 15% — suscetível à degradação hidrolítica</li>
                <li><strong>PVC:</strong> até 10% com estabilizante — exige moinho inox para evitar contaminação</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-4" style={{color: '#003366'}}>Equipamentos HM e o suporte técnico da Dorathas</h2>
              <p>A Dorathas representa a linha de periféricos HM, com moinhos projetados para o ambiente de injeção plástica e assistência técnica no interior paulista. Nossa equipe auxilia na especificação antes da compra: análise do volume de refugo, seleção do modelo, dimensionamento elétrico e layout de integração — sem custo adicional.</p>
            </div>

            <div className="mt-10 p-6 rounded-lg border" style={{backgroundColor: '#fff7ed', borderColor: '#FF6600'}}>
              <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{color: '#FF6600'}}>Quer implantar ou substituir um moinho de fresa?</p>
              <h3 className="text-xl font-bold mb-3" style={{color: '#003366'}}>A Dorathas especifica e fornece o modelo certo para o seu volume de refugo.</h3>
              <p className="text-gray-600 mb-5 text-sm">Informe o tipo de resina, volume de galho e layout da linha — nossa equipe indica o moinho ideal sem custo de consultoria.</p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => scrollToSection('contato')} className="px-6 py-2 text-white font-bold rounded-lg transition-colors text-sm" style={{backgroundColor: '#FF6600'}} onMouseOver={e => e.currentTarget.style.backgroundColor='#cc5200'} onMouseOut={e => e.currentTarget.style.backgroundColor='#FF6600'}>Solicitar Cotação</button>
                <button onClick={openWhatsApp} className="px-6 py-2 font-bold rounded-lg transition-colors text-sm border-2" style={{borderColor: '#003366', color: '#003366'}} onMouseOver={e => { e.currentTarget.style.backgroundColor='#003366'; e.currentTarget.style.color='white' }} onMouseOut={e => { e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.color='#003366' }}>Falar com Especialista</button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="blog-article-moldes" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <button onClick={() => scrollToSection('blog')} className="text-purple-600 hover:text-purple-800 font-medium mb-6 cursor-pointer">
            ← Voltar ao Blog
          </button>
          <article className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-4" style={{color: '#003366'}}>Molde Bem Projetado, Produção Livre de Refugo: O Guia Técnico Completo</h1>
              <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                <span>📅 13 de Julho de 2026</span>
                <span>✍️ Dorathas</span>
                <span>📚 Moldes · Injeção Plástica</span>
                <span>⏱️ 10 min de leitura</span>
              </div>
            </div>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <h2 className="text-2xl font-bold mt-8 mb-4" style={{color: '#003366'}}>A decisão mais crítica antes de injetar: o molde certo</h2>
              <p>O custo de um molde representa entre 15% e 40% do investimento total de um novo projeto de injeção plástica — e erros no projeto se propagam para cada peça produzida ao longo de toda a vida útil do ferramental. Um gate mal posicionado, refrigeração subdimensionada ou ângulo de saída insuficiente geram custos de retrabalho e paradas que superam em muito o valor do molde original.</p>
              <h2 className="text-2xl font-bold mt-8 mb-4" style={{color: '#003366'}}>Aço ferramenta: P20, H13 ou inox 420?</h2>
              <p>O aço do molde determina vida útil, custo de fabricação e capacidade de acabamento:</p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>P20:</strong> pré-temperado a 28–34 HRC, fácil de usinar e polir. Vida útil: 500.000 a 1.000.000 ciclos para materiais não abrasivos (PP, PE, ABS)</li>
                <li><strong>H13:</strong> para materiais abrasivos (nylon GF, PP com talco) e altas temperaturas. Temperado a 44–52 HRC, vida útil acima de 1.000.000 ciclos</li>
                <li><strong>Inox 420:</strong> obrigatório para materiais corrosivos (PVC, retardantes halogenados) e contato alimentar. Custo 20–35% maior que P20</li>
                <li><strong>Alumínio 7075:</strong> protótipos ou baixo volume (até 100.000 ciclos), lead time 50–60% menor que o aço</li>
              </ul>
              <h2 className="text-2xl font-bold mt-8 mb-4" style={{color: '#003366'}}>Sistema de alimentação: canal frio vs. câmara quente</h2>
              <p><strong>Canal frio:</strong> simples e de baixo custo. O galho pode ser reaproveitado no moinho de fresa, mas aumenta o tempo de ciclo e o consumo de material por peça.</p>
              <p><strong>Câmara quente (hot runner):</strong> elimina o galho, reduz o ciclo em 15–30% e permite injeção em múltiplos pontos com pressão balanceada. Investimento de R$ 15.000 a R$ 80.000 se justifica a partir de 500.000 peças/ano.</p>
              <h2 className="text-2xl font-bold mt-8 mb-4" style={{color: '#003366'}}>Refrigeração: a engenharia que determina a produtividade</h2>
              <p>O resfriamento representa 60–80% do tempo total de ciclo. Um sistema mal projetado força ciclos longos, causa empenamento e cria tensão residual que compromete a resistência mecânica do produto. Técnicas como conformational cooling e simulação via Moldflow permitem dimensionar antes da fabricação — reduzindo ciclo em até 30% e eliminando empenamento em peças de parede fina.</p>
              <h2 className="text-2xl font-bold mt-8 mb-4" style={{color: '#003366'}}>Acabamento superficial e escala VDI</h2>
              <p>A escala VDI classifica o acabamento de VDI 45 (textura grossa, 18 µm Ra) a VDI 0 (espelhado, Ra &lt; 0,05 µm). O ângulo de saída deve ser calculado conforme o acabamento: superfícies texturizadas exigem 1° a 3° por 0,025 mm de profundidade — regra que, ignorada, gera arranhões em 100% das peças.</p>
              <h2 className="text-2xl font-bold mt-8 mb-4" style={{color: '#003366'}}>Etapas de validação: T0, T1, T2 e PPAP</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>T0 (First Shot):</strong> primeira injeção experimental, verifica preenchimento e funcionamento básico</li>
                <li><strong>T1:</strong> ajustes aplicados, parâmetros definidos, inspeção dimensional 100% das amostras</li>
                <li><strong>T2:</strong> validação com parâmetros finais e análise de repetibilidade entre ciclos e turnos</li>
                <li><strong>PPAP:</strong> pacote completo com FMEA, plano de controle, relatório dimensional e Cpk ≥ 1,67 para características críticas</li>
              </ol>
              <p>A Dorathas representa ferramenteiros com mais de 20 anos de experiência e acompanha o processo técnico junto ao fornecedor — garantindo molde, processo e documentação completa para o comprador.</p>
            </div>

            <div className="mt-10 p-6 rounded-lg border" style={{backgroundColor: '#fff7ed', borderColor: '#FF6600'}}>
              <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{color: '#FF6600'}}>Precisa de um molde novo ou manutenção de ferramental?</p>
              <h3 className="text-xl font-bold mb-3" style={{color: '#003366'}}>A Dorathas conecta você ao ferramenteiro certo — com acompanhamento técnico de T0 ao PPAP.</h3>
              <p className="text-gray-600 mb-5 text-sm">Envie o projeto ou a demanda e indicamos a ferramentaria mais adequada para o seu material, cavitação e volume de produção.</p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => scrollToSection('contato')} className="px-6 py-2 text-white font-bold rounded-lg transition-colors text-sm" style={{backgroundColor: '#FF6600'}} onMouseOver={e => e.currentTarget.style.backgroundColor='#cc5200'} onMouseOut={e => e.currentTarget.style.backgroundColor='#FF6600'}>Solicitar Cotação</button>
                <button onClick={openWhatsApp} className="px-6 py-2 font-bold rounded-lg transition-colors text-sm border-2" style={{borderColor: '#003366', color: '#003366'}} onMouseOver={e => { e.currentTarget.style.backgroundColor='#003366'; e.currentTarget.style.color='white' }} onMouseOut={e => { e.currentTarget.style.backgroundColor='transparent'; e.currentTarget.style.color='#003366' }}>Falar com Especialista</button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Cases de Sucesso */}
      <section id="cases" className="py-16" style={{backgroundColor: '#f9f9f9'}}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{color: '#003366'}}>Cases de Sucesso</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center bg-white p-8 rounded-lg shadow-lg">
            <img src={logo_plastek_colorido} alt="Plastek" className="h-20 object-contain" />
            <img src={logo_electrolux_colorido} alt="Electrolux" className="h-20 object-contain" />
            <img src={logo_novel_colorido} alt="Novel" className="h-20 object-contain" />
            <img src={logo_fabercastel_colorido} alt="Faber Castel" className="h-20 object-contain" />
            <img src={logo_multilaser_colorido} alt="Multilaser" className="h-20 object-contain" />
            <img src={logo_plasticor_colorido} alt="Plasticor" className="h-20 object-contain" />
            <img src={logo_anauger_colorido} alt="EBF" className="h-20 object-contain" />
            <img src={logo_isopower} alt="ISOPOWER" className="h-20 object-contain" />
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
              <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>

              {formSubmitted ? (
                <div className="p-6 bg-green-600 rounded-lg text-center">
                  <p className="text-xl font-bold mb-2">Mensagem enviada!</p>
                  <p className="text-green-100">Redirecionamos você para o WhatsApp. Responderemos em breve.</p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-green-50 transition"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Seu nome *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-white"
                  />
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-white"
                  />
                  <input
                    type="tel"
                    placeholder="Seu telefone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-white"
                  />
                  <textarea
                    rows={4}
                    placeholder="Sua mensagem *"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:border-white resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-bold text-lg transition"
                  >
                    Enviar via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© {new Date().getFullYear()} Dorathas - Representações em Serviços e Equipamentos Industriais</p>
          <p className="text-gray-400">Conectando empresas às melhores soluções industriais desde 2009</p>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-20 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition z-50"
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

export default AppVibrante

