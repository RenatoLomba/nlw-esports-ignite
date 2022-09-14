import { MagnifyingGlassPlus } from 'phosphor-react'

import logoImg from './assets/logo-nlw-esports.svg'
import { GameCard } from './components/game-card'

import './styles/global.css'

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="flex items-center justify-center py-20">
        <img src={logoImg} alt="Logotipo" />
      </header>

      <h1 className="text-center text-6xl text-white font-black">
        Seu{' '}
        <span className="bg-clip-text text-transparent bg-nlw-gradient">
          duo
        </span>{' '}
        está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameCard
          title="League of Legends"
          imgSrc="/image 1.png"
          adsCount={4}
        />
        <GameCard title="Dota 2" imgSrc="/image 2.png" adsCount={4} />
        <GameCard title="Counter Strike" imgSrc="/image 3.png" adsCount={4} />
        <GameCard title="Apex Legends" imgSrc="/image 5.png" adsCount={4} />
        <GameCard title="Fortnite" imgSrc="/image 6.png" adsCount={4} />
        <GameCard
          title="World of Warcraft"
          imgSrc="/image 7.png"
          adsCount={4}
        />
      </div>

      <div className="mt-8 bg-nlw-gradient rounded-lg pt-1 overflow-hidden">
        <div className="bg-[#2A2634] pb-6 pt-5 px-8 rounded-t-md flex justify-between items-center">
          <div>
            <strong className="block text-white text-2xl font-black">
              Não encontrou seu duo?
            </strong>
            <span className="block text-zinc-400">
              Publique um anúncio para encontrar novos players
            </span>
          </div>

          <button className="py-3 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 transition-colors flex gap-3">
            <MagnifyingGlassPlus size={24} />
            <span>Publicar anúncio</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export { App }
