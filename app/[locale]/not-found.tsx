import { Link } from "@/i18n/routing";
import { Leaf, TreeDeciduous, Sprout, Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a3a1a] text-[#f0f0f0]">
      <div className="max-w-2xl mx-auto px-4 py-8 text-center">
        <h1 className="text-6xl font-bold mb-4 text-[#ffd700]">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Oops! Page Not Found</h2>
        <p className="text-xl mb-8">It seems you&lsquo;ve wandered into uncharted territory.</p>
        
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <Leaf className="w-16 h-16 text-[#ffd700] mb-4" />
            <p>Lost in the foliage</p>
          </div>
          <div className="flex flex-col items-center">
            <TreeDeciduous className="w-16 h-16 text-[#2d5a2d] mb-4" />
            <p>Rooted in error</p>
          </div>
          <div className="flex flex-col items-center">
            <Sprout className="w-16 h-16 text-[#ffd700] mb-4" />
            <p>Growth in progress</p>
          </div>
        </div>
        
        <Link 
          href="/" 
          className="inline-flex items-center px-6 py-3 text-lg font-medium text-[#1a3a1a] bg-[#ffd700] rounded-full hover:bg-[#2d5a2d] hover:text-[#f0f0f0] transition-colors duration-300"
        >
          <Home className="w-5 h-5 mr-2" />
          Return to Home
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  )
}

