import './globals.css';
import { Header } from '../components/header/Header';

export const metadata = {
  title: 'Boubs Foodies',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
          
        <Header />
          {children}
        
        
      </body>
    </html>
  );
}
