import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [
      { label: 'Home', href: '/' }
    ];

    pathnames.forEach((pathname, index) => {
      const href = `/${pathnames.slice(0, index + 1).join('/')}`;
      
      let label = '';
      switch (pathname) {
        case 'diensten':
          label = 'Diensten';
          break;
        case 'portfolio':
          label = 'Portfolio';
          break;
        case 'over-ons':
          label = 'Over Ons';
          break;
        case 'contact':
          label = 'Contact';
          break;
        default:
          label = pathname.charAt(0).toUpperCase() + pathname.slice(1);
      }

      items.push({
        label,
        href: index === pathnames.length - 1 ? undefined : href
      });
    });

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  if (breadcrumbItems.length <= 1) {
    return null; // Don't show breadcrumbs on homepage
  }

  return (
    <nav aria-label="Breadcrumb" className="py-4 bg-gray-50 border-b">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
              )}
              {item.href ? (
                <Link 
                  to={item.href}
                  className="text-primary hover:text-primary-hover transition-colors flex items-center"
                >
                  {index === 0 && <Home className="w-4 h-4 mr-1" />}
                  {item.label}
                </Link>
              ) : (
                <span className="text-muted-foreground font-medium">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;