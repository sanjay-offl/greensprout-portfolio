import type { Metadata } from 'next';
import '@/styles/globals.css';
import ProgressBar from '@/components/ui/ProgressBar';

export const metadata: Metadata = {
  title: 'GREENSPROUT | AGRISOLARBOT – Smart Solar Farming Vehicle',
  description: 'GREENSPROUT is a government-recognized agri-tech startup from Tamil Nadu, India, building AGRISOLARBOT — a solar-powered, Bluetooth-controlled smart farming vehicle with IoT sensors.',
  keywords: 'smart farming India, solar agriculture Tamil Nadu, agri automation startup, AGRISOLARBOT, farming robot India, IoT agriculture Coimbatore, MSME agri-tech',
  authors: [{ name: 'GREENSPROUT Pvt. Ltd.' }],
  openGraph: {
    title: 'GREENSPROUT | AGRISOLARBOT – Smart Solar Farming Vehicle',
    description: 'Solar-powered autonomous farming vehicle for sustainable agriculture. MSME registered, TN-EDII funded, government recognized.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'GREENSPROUT',
    url: 'https://greensprouts-offl.netlify.app',
    images: [
      {
        url: 'https://greensprouts-offl.netlify.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GREENSPROUT AGRISOLARBOT - Smart Solar-Powered Farming Vehicle',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GREENSPROUT | AGRISOLARBOT',
    description: 'Next-gen smart solar farming vehicle for Indian agriculture',
    images: ['https://greensprouts-offl.netlify.app/og-image.png'],
    creator: '@GREENSPROUT',
    site: '@GREENSPROUT',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-dark antialiased">
        {/* Top navigation progress bar — shows on every route change */}
        <ProgressBar />
        {children}
      </body>
    </html>
  );
}
