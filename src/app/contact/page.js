import RuleDivider from '@/components/RuleDivider';

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold text-grimwild-green">
          Contact Us
        </h1>
        <RuleDivider className="w-full text-grimwild-green-light mt-2" />
      </div>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfIcrLRWbTPtyFINi3abVF13AOnaDcv1QVVDjQ2_ggdimZQxA/viewform?embedded=true" width="640" height="554" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  );
}