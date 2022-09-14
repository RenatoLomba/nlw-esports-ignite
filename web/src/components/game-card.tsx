type GameCardProps = {
  title: string
  adsCount: number
  imgSrc: string
}

export function GameCard({ imgSrc, title, adsCount }: GameCardProps) {
  return (
    <a href="#" className="relative overflow-hidden rounded-lg">
      <img src={imgSrc} alt={title} className="w-full" />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">{adsCount} anúncios</span>
      </div>
    </a>
  )
}
