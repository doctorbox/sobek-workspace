import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

interface MainHeadingProps {
  name: string
}

export function MainHeading({ name }: MainHeadingProps) {

  return (
    <div className={`${inter.className} text-white p-[15px]`}>
      <h2 className="text-[24px] font-semibold">Good Morning, {name}</h2>
      <h3 className="text-[24px] font-semibold text-indigo-200">Welcome to Sobek GPS for mRNA Drug Design.</h3>
    </div>
  )
}

