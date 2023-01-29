import ScheduleCard from '@components/Schedule';
import CTAMainSection from '@components/Sections/ctamain';
import LogoSection from '@components/Sections/logo';
import LABackdropVideoSection from '@components/Sections/main';

function ContactPage() {
  return (
    <div className="bg-white min-h-full min-w-full mx-auto">
      <LogoSection />
      <ScheduleCard/>
    </div>
  );
}

export default ContactPage;
