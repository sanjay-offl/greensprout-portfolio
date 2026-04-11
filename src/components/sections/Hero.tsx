import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="tech-illustration-bg"></div>
      <div className="grid-2">
        <FadeIn>
          <div className="hero-content">
            <h1>The Future of <br/><span>Smart Farming</span></h1>
            <h2>AGRISOLARBOT</h2>
            <p>A Bluetooth-controlled, solar-powered smart farming vehicle integrating IoT, automation, and sensors for sustainable agriculture.</p>
            <div className="btn-group">
              <Link href="/solution">
                <Button variant="primary">Explore Project &rarr;</Button>
              </Link>
              <Link href="/features">
                <Button variant="secondary">View Features</Button>
              </Link>
            </div>
          </div>
        </FadeIn>
        
        <div className="hero-image floating">
          <Image src="/images/hero.png" width={600} height={400} alt="AGRISOLARBOT" priority />
        </div>
      </div>
      
      <style jsx>{`
        .hero { display: flex; align-items: center; min-height: 100vh; padding-top: 10rem; }
        .hero-content { position: relative; z-index: 2; }
        .hero-content h1 span { font-family: 'Poppins', sans-serif; }
        .hero-content h2 { font-weight: 500; }
        .hero-image { position: relative; z-index: 1; }
        .hero-image :global(img) { width: 100%; height: auto; border-radius: 32px; box-shadow: var(--shadow-hover); }
        .btn-group { display: flex; gap: 1rem; margin-top: 2rem; }
        
        .tech-illustration-bg {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 120%; height: 120%;
          background: radial-gradient(circle, rgba(111,175,94,0.15) 0%, transparent 70%);
          z-index: -1;
          border-radius: 50%;
          animation: pulse 8s infinite alternate;
        }
      `}</style>
    </section>
  );
}
