
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Bell, 
  Settings, 
  User, 
  Search,
  Menu,
  LogIn
} from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleExperienceAI = () => {
    window.open('https://www.coze.cn/s/PcAN_7Qo7v0/', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
              <Shield className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">税研智审通</h1>
                <p className="text-xs text-gray-500">研发费用智能审核助手</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('audit-process')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              审核流程
            </button>
            <button 
              onClick={() => scrollToSection('core-features')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              功能介绍
            </button>
            <button 
              onClick={() => scrollToSection('risk-monitor')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              风险监控
            </button>
            <button 
              onClick={() => scrollToSection('benefits')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              产品优势
            </button>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="h-4 w-4 mr-2" />
              搜索
            </Button>
            
            <Badge variant="secondary" className="bg-blue-100 text-blue-700 hidden sm:flex">
              <Shield className="h-3 w-3 mr-1" />
              安全认证
            </Badge>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleExperienceAI}>
              <LogIn className="h-4 w-4 mr-2" />
              体验智能助手
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('audit-process')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-left"
              >
                审核流程
              </button>
              <button 
                onClick={() => scrollToSection('core-features')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-left"
              >
                功能介绍
              </button>
              <button 
                onClick={() => scrollToSection('risk-monitor')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-left"
              >
                风险监控
              </button>
              <button 
                onClick={() => scrollToSection('benefits')} 
                className="text-gray-700 hover:text-blue-600 font-medium text-left"
              >
                产品优势
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
