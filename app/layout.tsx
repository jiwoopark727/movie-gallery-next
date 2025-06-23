import '../styles/global.css';
import { Metadata } from 'next';
import Navigation from '../components/navigation';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    template: '%s | Movie Gallery',
    default: 'Movie Gallery',
  },
  description: 'The best movies on the best framework',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
