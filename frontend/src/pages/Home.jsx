import HeroCarousel from '../components/HeroCarousel'
import ServicesSection from '../components/ServicesSection'
import ValuesSection from '../components/ValuesSection'
import BirthdaySection from '../features/birthdays/BirthdaySection'
import ConfidentialForm from '../features/confidential/ConfidentialForm'

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ServicesSection />
      <ValuesSection />
      <BirthdaySection />
      <ConfidentialForm />
    </>
  )
}
