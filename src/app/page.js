import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold">Moxie toolkit is coming soon.</h1>
      <p className="text-lg">
        In the meantime Grimwild&apos;s free rules are available at{' '}
        <a
          href="https://www.drivethrurpg.com/en/product/507201/grimwild-free-edition?affiliate_id=144937"
          className="text-grimwild-blue underline"
        >
          DriveThruRPG
        </a>
        .
      </p>

      <article className="prose lg:prose-lg max-w-2xl mx-auto">
        <h1 className="!mb-0">
          Baruch Senior Wins United Nations Association-USA Fellowship
        </h1>
        <p className="!mt-3">January 31, 2025</p>

        <p>
          Baruch College student Adriana Maria Lopez-Tavares (’25) is set to
          fulfill her dream of advancing human rights by joining the United
          Nations Secretariat, Office for Disarmament in the spring.
        </p>
        <p>
          Lopez-Tavares won a coveted United Nations Association-USA Fellowship
          (UNA-USA) which provides financial assistance to those from
          underrepresented communities who receive internships with the United
          Nations. This Fellowship, a &ldquo;first-of-its-kind&rdquo;
          scholarship, comes with numerous benefits such as stipends of up to
          $13,000, mentorships, networking opportunities, and access to
          expert-led conferences and meetings on international peace and
          security.
        </p>
        <p>
          &ldquo;This experience will broaden my horizons, helping me see what
          the world has to offer and encouraging me to think bigger for my
          career,&rdquo; said Lopez-Tavares, who is majoring in business
          administration with Honors in Economics and a minor in Latin America
          and Caribbean Studies.
        </p>
        <p>
          She added, &ldquo;As a first-generation low-income student, unpaid
          internships can present financial challenges, but this fellowship has
          provided the necessary support to overcome them. This internship will
          be instrumental in shaping my understanding of global security issues
          and human rights efforts.&rdquo;
        </p>
        <h2>Career Focus on Human Rights</h2>
        <p>
          For Lopez-Tavares, the mission of the United Nations Office for
          Disarmament Affairs—which provides support to disarmament issues,
          preventive measures, and regional disarmament efforts—align with her
          deep interest in human rights.
        </p>
        <p>
          &ldquo;Disarmament is a critical aspect of human rights that helps end
          violence and allows communities to grow and thrive,&rdquo;
          Lopez-Tavares explained. &ldquo;I am so grateful for the opportunity
          to explore this field through the initiatives my office
          pursues.&rdquo;
        </p>
        <blockquote>
          &ldquo;The field of human rights attracts me because I want to serve
          others and contribute to community development.&rdquo;
        </blockquote>
        <p>
          Lopez-Tavares credits her background for inspiring her to pursue
          solutions to economic disparities and supporting marginalized
          communities.
        </p>
        <p>
          &ldquo;My family is from a small village in the Dominican Republic,
          and we immigrated to Brooklyn, New York when I was a child,&rdquo; she
          stated. &ldquo;My background has fueled my interest in addressing
          poverty, empowering low-income communities, and advancing human rights
          through international economic development.&rdquo;
        </p>
        <p>
          &ldquo;The field of human rights attracts me because I want to serve
          others and contribute to community development.&rdquo;
        </p>
        <h2>About the UNA-USA Fellowship</h2>
        <p>
          Announced in 2022 by Ambassador Linda Thomas-Greenfield, the{' '}
          <a
            href="https://unausa.org/programs/fellowship/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UNA-USA Fellowship
          </a>{' '}
          engages students, faculty, and staff at Historically Black Colleges
          and Universities, Tribal Colleges, Hispanic Serving Institutions,
          Schools for the Blind and Deaf, and the LGBTQ community to build
          student success, expand networks, and develop the next generation of
          global leaders that reflects the diversity of the audiences they
          serve.
        </p>
        <h2>Fellowship Advising Support for Baruch Students&nbsp;</h2>
        <p>
          Baruch College&rsquo;s Fellowship Advising Office supports students
          interested in applying for nationally competitive scholarships to
          study abroad, get professional development, and receive graduate study
          assistance.
        </p>
        <p>
          <a
            href="https://blogs.baruch.cuny.edu/fellowships/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>{' '}
          about how the office mentors and advises all Baruch students through
          the application process for various fellowships and scholarships such
          as Fulbright awards, Schwarzman Scholarships, Jeannette K. Watson
          Fellowships, Gilman International Scholarships, Freeman-ASIA
          scholarships, and more.
        </p>
      </article>

      <Testimonials />
    </div>
  );
}
