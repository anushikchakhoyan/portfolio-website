import ContactHeader from "@/components/custom/contact/header";
import ContactForm from "@/components/custom/contact/form";
import ContactInfo from "@/components/custom/contact/info";
import ContactTitle from "@/components/custom/contact/title";
import PageLayout from "@/components/custom/page-layout";

const ContactUs = () => (
  <PageLayout id="contact" className="!py-0">
    <ContactHeader />
    <div className="py-10 w-full flex flex-col items-center justify-center gap-10 max-w-6xl mx-auto">
      <ContactTitle />
      <div className="w-full flex flex-col md:flex-row items-start justify-center gap-10">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  </PageLayout>
);

export default ContactUs;