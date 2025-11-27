import { useState, useEffect } from 'react'
import App from './App.jsx'
import AppVibrante from './AppVibrante.jsx'

/**
 * AppWrapper - Componente que permite alternar entre versões do site
 * 
 * Permite ao usuário escolher entre:
 * - Versão Padrão: Design profissional e clássico
 * - Versão Vibrante: Design moderno com cores dinâmicas
 */
function AppWrapper() {
  const [theme, setTheme] = useState(() => {
    // Carrega o tema salvo no localStorage ou usa 'padrão' como padrão
    return localStorage.getItem('dorathasTheme') || 'padrao'
  })

  // Salva o tema no localStorage quando muda
  useEffect(() => {
    localStorage.setItem('dorathasTheme', theme)
  }, [theme])

  return (
    <div>
      {/* Botão flutuante para alternar tema */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setTheme(theme === 'padrao' ? 'vibrante' : 'padrao')}
          className={`
            px-6 py-3 rounded-full font-bold text-white shadow-2xl
            transition-all duration-300 transform hover:scale-110
            flex items-center gap-2
            ${theme === 'padrao' 
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' 
              : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
            }
          `}
          title={`Clique para alternar para versão ${theme === 'padrao' ? 'vibrante' : 'padrão'}`}
        >
          <span className="text-xl">
            {theme === 'padrao' ? '🎨' : '⚙️'}
          </span>
          <span className="hidden sm:inline">
            {theme === 'padrao' ? 'Versão Vibrante' : 'Versão Padrão'}
          </span>
        </button>
      </div>

      {/* Renderiza a versão apropriada */}
      {theme === 'padrao' ? <App /> : <AppVibrante />}
    </div>
  )
}

export default AppWrapper

