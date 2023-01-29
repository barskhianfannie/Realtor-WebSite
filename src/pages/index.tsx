import CTAMainSection from '@components/Sections/ctamain';
import LogoSection from '@components/Sections/logo';
import LABackdropVideoSection from '@components/Sections/main';

function HomePage() {
  return (
    <div className="bg-white min-h-full min-w-full mx-auto">
      <LogoSection />
      <LABackdropVideoSection />
      <CTAMainSection />
    </div>
  );
}

export default HomePage;
