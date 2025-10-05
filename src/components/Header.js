import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BarChart3, 
  Search, 
  Users, 
  FileText, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', shortName: 'Dashboard', href: '/dashboard', icon: BarChart3 },
    { name: 'Customer Lookup', shortName: 'Lookup', href: '/customer-lookup', icon: Search },
    { name: 'Retention List', shortName: 'Retention', href: '/retention-list', icon: Users },
    { name: 'Reports', shortName: 'Reports', href: '/reports', icon: FileText },
    { name: 'Settings', shortName: 'Settings', href: '/settings', icon: Settings },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-blue-600 border-b border-blue-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2 min-w-0 flex-shrink-0">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-bold text-sm">RB</span>
            </div>
            <div className="min-w-0">
              <h1 className="text-white font-semibold text-sm truncate">Rwanda Banking</h1>
              <p className="text-blue-100 text-xs truncate hidden sm:block">Churn Prediction</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 flex-1 justify-center max-w-2xl">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 px-2 py-2 rounded-lg transition-all duration-200 text-xs ${
                    isActive(item.href)
                      ? 'bg-white text-blue-600'
                      : 'text-white hover:text-blue-100 hover:bg-blue-500'
                  }`}
                >
                  <Icon size={16} />
                  <span className="font-medium hidden lg:inline whitespace-nowrap">{item.name}</span>
                  <span className="font-medium lg:hidden whitespace-nowrap">{item.shortName}</span>
                </Link>
              );
            })}
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-2 flex-shrink-0">
            <div className="flex items-center space-x-1 text-white">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xs font-medium">RA</span>
              </div>
              <span className="text-xs whitespace-nowrap">Admin</span>
            </div>
            <button className="flex items-center space-x-1 text-white hover:text-blue-100 transition-colors text-xs">
              <LogOut size={14} />
              <span className="whitespace-nowrap">Logout</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-blue-100 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-700">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-white text-blue-600'
                        : 'text-white hover:text-blue-100 hover:bg-blue-500'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-blue-700">
                <div className="flex items-center space-x-3 px-4 py-3 text-white">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-xs font-medium">RA</span>
                  </div>
                  <span className="text-sm">Rwanda Admin</span>
                </div>
                <button className="flex items-center space-x-3 px-4 py-3 text-white hover:text-blue-100 transition-colors w-full">
                  <LogOut size={16} />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

