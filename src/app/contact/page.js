import RuleDivider from '@/components/RuleDivider';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfIcrLRWbTPtyFINi3abVF13AOnaDcv1QVVDjQ2_ggdimZQxA/viewform?embedded=true';

export const metadata = {
  title: 'Contact Us | Moxie Toolkit',
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold text-grimwild-green">
          Contact Us
        </h1>
        <RuleDivider className="w-full text-grimwild-green-light mt-2" />
      </div>
      <div className="w-full max-w-[640px]">
        <iframe
          src={FORM_URL}
          title="Contact form"
          className="w-full min-h-[554px] border-0"
        >
          Loading…{' '}
          <a href={FORM_URL.replace('?embedded=true', '')}>
            Open the contact form in a new page
          </a>
        </iframe>
      </div>
    </div>
  );
}
