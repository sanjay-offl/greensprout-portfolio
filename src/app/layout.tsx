import type { Metadata } from 'next';
import '@/styles/globals.css';
import ProgressBar from '@/components/ui/ProgressBar';

export const metadata: Metadata = {
  title: 'GREENSPROUT | AGRISOLARBOT – Smart Solar Farming Vehicle',
  description: 'GREENSPROUT is a government-recognized agri-tech startup from Tamil Nadu, India, building AGRISOLARBOT — a solar-powered, Bluetooth-controlled smart farming vehicle with IoT sensors.',
  keywords: 'smart farming India, solar agriculture Tamil Nadu, agri automation startup, AGRISOLARBOT, farming robot India, IoT agriculture Coimbatore, MSME agri-tech',
  authors: [{ name: 'GREENSPROUT Pvt. Ltd.' }],
  openGraph: {
    title: 'GREENSPROUT – AGRISOLARBOT Smart Farming Vehicle',
    description: 'Sustainable smart farming automation from Tamil Nadu, India. TN-EDII funded, MSME registered.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'GREENSPROUT',
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
