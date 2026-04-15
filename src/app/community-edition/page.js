import RuleDivider from '@/components/RuleDivider';

export default function CommunityEditionPage() {
  const previewLinks = {
    one: [
      { href: '/downloads/GWCE-Preview-1.pdf', label: 'Preview 1' },
      {
        href: '/downloads/GWCE-Preview-1-Spreads.pdf',
        label: 'Preview 1 (Spreads)',
      },
      {
        href: '/downloads/GWCE-Preview-1-Character-Sheets.pdf',
        label: 'Preview 1 Character Sheets',
      },
    ],
    two: [
      { href: '/downloads/GWCE-Preview-2-Pages.pdf', label: 'Preview 2' },
      {
        href: '/downloads/GWCE-Preview-2-Spreads.pdf',
        label: 'Preview 2 (Spreads)',
      },
      {
        href: '/downloads/GWCE-Preview-2-Character-Sheets.pdf',
        label: 'Preview 2 Character Sheets',
      },
    ],
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl lg:text-5xl xl:text-5xl font-bold text-grimwild-green">
          Community Edition
        </h1>
        <RuleDivider className="w-full text-grimwild-green-light mt-2" />

        <div className="prose lg:prose-lg xl:prose-xl prose-h3:text-2xl prose-zinc prose-p:leading-snug prose-li:leading-snug prose-headings:text-grimwild-green prose-li:marker:text-grimwild-green-light max-w-none mt-8">
          <h2>What is the Community Edition?</h2>
          <p>
            Grimwild: Community Edition is a refinement of the original game. We
            wanted to expand the rules text, clarifying and simplifying where we
            could to make the game easier for newcomers. We've addressed
            consistent friction points and FAQs that have come up since the
            game's original release in January 2025. The game is now in the
            community's hands. Use it, change it, or build off of it, and tell
            exciting stories!
          </p>

          <ul className="list-none flex flex-row gap-4 p-0!">
            {previewLinks.two.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="bg-grimwild-yellow hover:bg-grimwild-yellow-dark text-grimwild-dark px-4 py-2 rounded-md font-bold no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <p>Previous previews:</p>

          <ul className="list-none p-0! m-0!">
            {previewLinks.one.map((link) => (
              <li key={link.href} className="m-0! p-0!">
                <a href={link.href} className="text-base">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <h2>Changes</h2>
          <h3>General</h3>
          <ul>
            <li>Chapters reordered.</li>
            <li>Overall clarity and guidance.</li>
          </ul>

          <h3>Chapter 1: Gameplay</h3>
          <ul>
            <li>Risk added as a section.</li>
            <li>
              Impossible decoupled from 3t, though general rolls should still
              have 0-2 thorns.
            </li>
            <li>
              Vantage scale replaced with
              certain/reasonable/doubtful/impossible.
            </li>
            <li>
              Critical Effect - Secondary Effect codified as perfect on a
              different, but related action.
            </li>
            <li>
              Any pool dropping 0d gains a secondary effect, or the PC can push
              themselves to drop 1d (not just on a 1d initial pool).
            </li>
            <li>
              Harm clarified as the standard weight of an impact move, not the
              default. Additional suggestions added.
            </li>
            <li>
              Bloodied and Rattled thorns only apply to their respective stats.
            </li>
            <li>
              Desperate added as harm upon second bloodied or rattled, instead
              of dropped. Additional harm leaves you dropped.
            </li>
            <li>
              "Death" options added, such as sacrifice, retirement, and another
              end.
            </li>
            <li>Treatment does not always carry risk, though often does.</li>
            <li>
              Potency is connected to vantage, no longer always removes all
              thorns.
            </li>
            <li>Changes</li>
            <li>Cantrips have been removed.</li>
            <li>
              Spells without risk are automatically successful and require no
              resource.
            </li>
            <li>
              Potent spells (like actions) no longer always remove all thorns.
            </li>
            <li>"What can spells do?" section added.</li>
            <li>
              Arcana overhauled into a new system that puts all arcana of the
              same tier on the same power level, acting like a spell-in-a-can.
            </li>
            <li>
              Arcana uses whichever stat makes the most sense, as any other
              action (or a story roll).
            </li>
            <li>
              Artifacts are arcana with special limitations, effects, or
              anything unique.
            </li>
          </ul>

          <h3>Chapter 2: Adventurers</h3>
          <ul>
            <li>Backgrounds.</li>
            <li>Heritage talent suggestions added.</li>
            <li>Investigator added as a background.</li>
            <li>Background talents added.</li>
            <li>Various talent updates to all paths.</li>
          </ul>

          <h3>Chapter 3: GM Toolkit</h3>
          <ul>
            <li>Stakes tied to harm, and split into Low/Regular/High/Dire.</li>
            <li>Story Moves cut completely, added as guidance.</li>
            <li>
              Suspense moves cut to resolve, foreshadow, build up, clue in.
            </li>
            <li>
              Impact moves cut to complicate things, hit hard, lock down,
              counter.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
