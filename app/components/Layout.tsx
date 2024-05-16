import { ReactNode } from 'react';
import { CartProvider } from '@/hook/useCart';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
};

export default Layout;
