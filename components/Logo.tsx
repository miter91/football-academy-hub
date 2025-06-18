import Image from 'next/image'

interface LogoProps {
  size?: 'small' | 'medium' | 'large'
  showText?: boolean
}

export function Logo({ size = 'medium', showText = true }: LogoProps) {
  const sizes = {
    small: { width: 40, height: 40, text: 'text-sm' },
    medium: { width: 50, height: 50, text: 'text-base' },
    large: { width: 80, height: 80, text: 'text-xl' }
  }

  const { width, height, text } = sizes[size]

  return (
    <div className="flex items-center gap-3">
      <Image
        src="/images/football-code-academy-logo.png"
        alt="Football Code Academy"
        width={width}
        height={height}
        className="object-contain"
      />
      {showText && (
        <div>
          <h1 className={`font-bold ${text}`}>Football Code Academy</h1>
        </div>
      )}
    </div>
  )
}