import MadeWithMoxieLogoBlack from '@/components/MadeWithMoxieLogoBlack';
import ExternalLink from '@/components/ExternalLink';
import grimwildCover from '@/assets/images/grimwildCover.webp';
import Image from 'next/image';
import clsx from 'clsx';

export const metadata = {
  title: 'Moxie Toolkit',
  description: "Rules and more for games 'Made with Moxie'",
};

const promoSections = [
  {
    title: 'Your Adventure Starts Here',
    content: {
      type: 'list',
      items: [
        {
          heading: 'Explore the Rules',
          text: 'Access everything you need to play, from character creation to cinematic combat mechanics.',
        },
        {
          heading: 'Watch & Learn',
          text: 'Dive into our curated library of actual play videos. See Grimwild in action, get inspired, and sharpen your storytelling skills.',
        },
      ],
    },
  },
  {
    title: 'What Makes Grimwild Different?',
    content: {
      type: 'list',
      items: [
        {
          heading: 'Cinematic Gameplay',
          text: 'Crafted to feel like your favorite fantasy movies, each session brims with tension, triumph, and unforgettable moments.',
        },
        {
          heading: 'Narrative First',
          text: 'Prioritize storytelling and character arcs, bringing dramatic depth to every game night.',
        },
        {
          heading: 'Easy to Master',
          text: 'Rules that are intuitive yet deep, enabling smooth, fast-paced gameplay without compromising strategy or immersion.',
        },
      ],
    },
  },
  {
    title: 'Join the Grimwild Community',
    content: {
      type: 'text',
      text: 'Become part of our vibrant community of players and storytellers. Share your stories, find games, and embark on unforgettable adventures.',
      links: [
        {
          text: 'Join the Community on Discord',
          href: 'https://discord.gg/2mpHtdHKFJ',
          external: true,
        },
      ],
    },
  },
];

export default function Home() {
  return (
    <div>
      <section className="flex flex-col gap-y-2 items-center justify-center pt-16 lg:pt-32 text-grimwild-dark mb-16 text-center">
        <MadeWithMoxieLogoBlack className="lg:w-[400px] w-[300px] h-auto mb-8  -rotate-2" />
        <h1 className="md:text-6xl text-5xl text-balance font-bold text-grimwild-green tracking-tight">
          Made with Moxie Toolkit
        </h1>
        <p className="md:text-4xl text-3xl text-balance italic">
          Enter a World Where Fantasy Meets Cinematic Action
        </p>
        <p className="text-lg md:text-xl max-w-3xl mt-4">
          Moxie is a tabletop RPG designed for players who crave storytelling
          packed with drama, suspense, and breathtaking action. Immerse yourself
          in epic narratives, dynamic combat, and vivid character-driven scenes
          that leap off your table.
        </p>
      </section>

      <section>
        <div className="flex flex-col md:flex-row gap-8 md:divide-x md:divide-grimwild-green-light/50">
          {promoSections.map((section) => (
            <div key={section.title} className="md:pe-8 text-lg leading-tight">
              <h2 className="text-3xl text-balance font-bold leading-none text-grimwild-green-light mb-4">
                {section.title}
              </h2>
              {section.content.type === 'list' ? (
                <ul className="list-disc space-y-4 pl-4">
                  {section.content.items.map((item) => (
                    <li
                      className="marker:text-grimwild-yellow-dark"
                      key={item.heading}
                    >
                      <strong>{item.heading}</strong>: {item.text}
                    </li>
                  ))}
                </ul>
              ) : (
                <>
                  <p>{section.content.text}</p>
                  <ul className="list-disc space-y-4 pl-4 mt-4">
                    {section.content.links.map((item) => (
                      <li
                        key={item.href}
                        className="marker:text-grimwild-yellow-dark"
                      >
                        {item.external ? (
                          <ExternalLink
                            href={item.href}
                            className="underline decoration-solid underline-offset-4 decoration-grimwild-yellow-dark"
                          >
                            {item.text}
                          </ExternalLink>
                        ) : (
                          <a
                            href={item.href}
                            className="underline decoration-solid underline-offset-4 decoration-grimwild-yellow-dark"
                          >
                            {item.text}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="bg-grimwild-green text-white/90 p-6 rounded-lg my-16 md:my-32 max-w-3xl mx-auto">
          <Image
            src={grimwildCover}
            alt="Grimwild Cover"
            className={clsx(
              'border-2 border-grimwild-green/30',
              'w-[130px] -rotate-2 float-right -me-8 -mt-10 ms-6 mb-4',
              'md:w-[200px] md:-ms-12 md:-mt-12 md:me-8 md:float-left',
            )}
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Grimwild RPG
            </h2>
            <p className="text-lg leading-tight mb-8">
              The moxie toolkit is based on the Grimwild, a cinematic,
              narrative-driven RPG.
            </p>
            <div className="flex flex-row gap-4">
              <ExternalLink
                href="https://www.drivethrurpg.com/en/product/508618/grimwild-cinematic-fantasy-roleplaying?affiliate_id=144937"
                className="bg-grimwild-yellow hover:bg-grimwild-yellow-dark text-grimwild-dark px-4 py-2 rounded-md font-bold"
              >
                DriveThruRPG
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-y-2 items-center justify-center pt-8 lg:pt-8 text-grimwild-dark mb-16 text-center border-t border-solid border-grimwild-green-light/50">
        <h2>
          Made with <span aria-hidden="true">❤️</span> by{' '}
          <ExternalLink href="https://amazingrando.com">
            Amazing Rando
          </ExternalLink>
        </h2>
      </section>
    </div>
  );
}
