import Testimonials from '@/components/testimonials';
import MadeWithMoxieLogo from '@/components/MadeWithMoxieLogo';
import MadeWithMoxieLogoBlack from '@/components/MadeWithMoxieLogoBlack';
import RuleDivider from '@/components/RuleDivider';
import grimwildCover from '@/assets/images/grimwildCover.webp';
import Image from 'next/image';

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
          text: 'Watch Actual Play Videos',
          href: '#videos',
        },
        {
          text: 'Join the Community',
          href: '#community',
        },
      ],
    },
  },
];

export default function Home() {
  return (
    <div>
      <section className="flex flex-col gap-y-2 items-center justify-center pt-32 text-grimwild-dark mb-16">
        <MadeWithMoxieLogoBlack className="w-[400px] h-auto mb-8  -rotate-2" />
        <h1 className="text-6xl font-bold text-grimwild-green tracking-tight">
          Made with Moxie Toolkit
        </h1>
        <h2 className="text-4xl italic">
          Enter a World Where Fantasy Meets Cinematic Action
        </h2>
        <p className="text-xl max-w-3xl mt-4 text-center">
          Moxie is a tabletop RPG designed for players who crave storytelling
          packed with drama, suspense, and breathtaking action. Immerse yourself
          in epic narratives, dynamic combat, and vivid character-driven scenes
          that leap off your table.
        </p>
      </section>

      <section>
        <div className="flex flex-row gap-x-8 divide-x divide-grimwild-green-light/50">
          {promoSections.map((section) => (
            <div className="pe-8 text-lg leading-tight">
              <h2 className="text-3xl text-balance font-bold leading-none text-grimwild-green-light mb-4">
                {section.title}
              </h2>
              {section.content.type === 'list' ? (
                <ul className="list-disc space-y-4 pl-4">
                  {section.content.items.map((item) => (
                    <li className="marker:text-grimwild-yellow-dark">
                      <strong>{item.heading}</strong>: {item.text}
                    </li>
                  ))}
                </ul>
              ) : (
                <>
                  <p>{section.content.text}</p>
                  <ul className="list-disc space-y-4 pl-4 mt-4">
                    {section.content.links.map((item) => (
                      <li className="marker:text-grimwild-yellow-dark">
                        <a
                          href={item.href}
                          className="underline decoration-solid underline-offset-4 decoration-grimwild-yellow-dark"
                        >
                          {item.text}
                        </a>
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
        <div className="bg-grimwild-green text-white/90 p-6 rounded-lg my-32 max-w-3xl mx-auto">
          <Image
            src={grimwildCover}
            alt="Grimwild Cover"
            className="w-[200px] -rotate-2 -ms-12 -mt-12 me-8 border-2 border-grimwild-green/30 float-left"
          />
          <div>
            <h2 className="text-4xl font-bold mb-4">Grimwild RPG</h2>
            <p className="text-lg leading-tight mb-8">
              The moxie toolkit is based on the Grimwild, a cinematic,
              narrative-driven RPG.
            </p>
            <div className="flex flex-row gap-4">
              <a
                href="https://www.drivethrurpg.com/product/445800/Grimwild"
                className="bg-grimwild-yellow hover:bg-grimwild-yellow-dark text-grimwild-dark px-4 py-2 rounded-md font-bold"
              >
                DriveThruRPG
              </a>
              <a
                href="https://moxiecode.itch.io/grimwild"
                className="bg-grimwild-yellow hover:bg-grimwild-yellow-dark text-grimwild-dark px-4 py-2 rounded-md font-bold"
              >
                Itch.io
              </a>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
