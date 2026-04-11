import FadeIn from '@/components/animations/FadeIn';

export default function About() {
  return (
    <section id="about" className="text-center">
      <FadeIn>
        <div className="section-header">
          <h2 className="green-text">About GREENSPROUT</h2>
          <p>We are a high-tech agritech startup focused on elevating traditional agriculture. We build sustainable, automated, solar-powered solutions like AGRISOLARBOT to overcome the limitations of manual farming and address labor shortages globally.</p>
        </div>
      </FadeIn>
    </section>
  );
}
