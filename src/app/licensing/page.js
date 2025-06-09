import RuleDivider from '@/components/RuleDivider';

export default function LicensingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold text-grimwild-green">
          Licensing
        </h1>
        <RuleDivider className="w-full text-grimwild-green-light mt-2" />
      </div>
      <article className="prose lg:prose-lg xl:prose-xl prose-h3:text-2xl prose-zinc prose-p:leading-snug prose-li:leading-snug prose-headings:text-grimwild-green prose-li:marker:text-grimwild-green-light max-w-none">
        <p>
          This work is based on Moxie © 2024 by J.D. Maxwell and Oddity Press,
          licensed under CC BY 4.0.
        </p>
        <p>
          For licensing details, visit{' '}
          <a href="https://www.odditypress.com/licensing">
            odditypress.com/licensing
          </a>
        </p>
      </article>
    </div>
  );
}
