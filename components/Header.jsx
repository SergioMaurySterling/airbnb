import Image from "next/image"

export default function Header() {
  return (
    <header>
      {/* Left section */}
      <div className='relative flex items-center'>
        <Image src='https://links.papareact.com/qd3'
              alt='Airbnb logo'
              layout='fill'
              objectFit='contain'
              objectPosition='left'
        />
      </div>

      {/* Middle section */}
      <div>

      </div>

      {/* Right section */}
      <div>

      </div>
    </header>
  )
}
