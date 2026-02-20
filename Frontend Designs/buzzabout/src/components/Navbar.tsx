import { Slack } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-600 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-blue-600 font-bold text-sm">B</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">buzzabout</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#features" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Features</a>
          <a href="#pricing" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Pricing</a>
          <a
            href="#"
            className="flex items-center gap-2 bg-white text-blue-600 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Slack size={16} />
            Add to Slack
          </a>
        </div>
      </div>
    </nav>
  );
}
