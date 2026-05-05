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
    three: [
      {
        href: '/downloads/GWCE-Preview-3-CE-Change-Log.pdf',
        label: 'Preview 3 CE Change Log',
      },
      {
        href: '/downloads/GWCE-Preview-3-Character-Sheets.pdf',
        label: 'Preview 3 Character Sheets',
      },
      {
        href: '/downloads/GWCE-Preview-3-Pages.pdf',
        label: 'Preview 3 Pages',
      },
      {
        href: '/downloads/GWCE-Preview-3-Player-Options-Sheets.pdf',
        label: 'Preview 3 Player Options Sheets',
      },
      {
        href: '/downloads/GWCE-Preview-3-Spreads.pdf',
        label: 'Preview 3 Spreads',
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

          <ul className="list-none flex flex-wrap gap-x-2 gap-y-2 p-0! max-w-full">
            {previewLinks.three.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="bg-grimwild-yellow hover:bg-grimwild-yellow-dark text-grimwild-dark px-4 py-2 rounded-md font-bold no-underline whitespace-nowrap"
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
            {previewLinks.two.map((link) => (
              <li key={link.href} className="m-0! p-0!">
                <a href={link.href} className="text-base">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <h2>1.4 (Original) to Current CE Version</h2>

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
              Critical Effect - Secondary Effect: codified as perfect on a
              different, but related action.
            </li>
            <li>
              Any pool dropping 0d gains a secondary effect, or the PC can push
              themselves to drop 1d (not just on a 1d initial pool).
            </li>
            <li>Push Yourself always gives a mark.</li>
            <li>
              Harm clarified as the standard weight of an impact move, not the
              default. Additional harm suggestions added.
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
              Potency is connected to vantage, and no longer always removes all
              thorns.
            </li>
            <li>Cantrips have been removed.</li>
            <li>
              Spells without risk are automatically successful and require no
              resource.
            </li>
            <li>Rituals are cast with invocations, instead of rites.</li>
            <li>
              Potent spells (like actions) no longer always remove all thorns.
            </li>
            <li>"What can spells do?" section added.</li>
            <li>
              Arcana was overhauled into a new system that puts all arcana of
              the same tier on the same power level.
            </li>
            <li>
              Arcana uses whichever stat makes the most sense, as any other
              action (or a story roll).
            </li>
            <li>
              Artifacts are arcana with a 6d power pool, and any special
              limitations or effects.
            </li>
          </ul>

          <h3>Chapter 2: Adventurers</h3>
          <ul>
            <li>Heritage talent suggestions added.</li>
            <li>Investigator added as a background.</li>
            <li>Background talents added.</li>
            <li>Guidance and inspiration boxes added under various talents.</li>
            <li>All talents can only be taken once.</li>
            <li>Talents that affect Vigilance have been made more general.</li>
            <li>
              Bard core talent reworked.
              <ul>
                <li>Removed Influence.</li>
                <li>Added Folk Hero.</li>
                <li>Changed Jack of All Trades.</li>
              </ul>
            </li>
            <li>Berserker path talent War Songs replaced with Warcry.</li>
            <li>
              Clerics cast with rite pools instead of domain pools, and have had
              their growth increased.
              <ul>
                <li>Buffed Healer.</li>
                <li>Changed Iron Will to a resource pool.</li>
              </ul>
            </li>
            <li>
              Druid Wild Shape pool is a resource pool (and so works even if
              dropped to 0d), and its size has been lowered to compensate.
              <ul>
                <li>
                  Removed Verdant Whispers (effects added to Kindred Spirits).
                </li>
              </ul>
            </li>
            <li>
              Fighter core talent replaced.
              <ul>
                <li>Changed Bulwark to a resource pool.</li>
              </ul>
            </li>
            <li>
              Monk path talents changed.
              <ul>
                <li>Removed Flow State and Primordial Forces.</li>
                <li>Added Redirect and Resonance.</li>
                <li>Slight buff to Tether.</li>
              </ul>
            </li>
            <li>
              Paladin path talents changed.
              <ul>
                <li>
                  Aegis and Guardian changed, each with parts of both. Aegis is
                  focused on self-protection, and Guardian is focused on
                  protecting allies.
                </li>
              </ul>
            </li>
            <li>Ranger core talent buffed.</li>
            <li>
              Rogue core talent expanded to allow picking skills, growth
              changed.
              <ul>
                <li>Removed Trap Sense.</li>
                <li>Added Distraction.</li>
                <li>Changed According to Plan to include all flashbacks.</li>
              </ul>
            </li>
            <li>
              Sorcerer core talent expanded to allow different Magical Twists.
              <ul>
                <li>
                  Changed Subtle Casting to Metamagic, allowing multiple spell
                  changes.
                </li>
                <li>Changed Wisps.</li>
              </ul>
            </li>
            <li>
              Warlock core talent replaced.
              <ul>
                <li>Removed Hex.</li>
                <li>Added Affliction.</li>
                <li>Slight buff to Knowing Gaze.</li>
                <li>Changed Visions and Wayfarer.</li>
              </ul>
            </li>
            <li>
              Wizard path talent changed.
              <ul>
                <li>
                  Removed Prepared Spell (Rogue's According to Plan covers
                  effects).
                </li>
                <li>Added Component Pouch.</li>
                <li>Changed Arcanist to Archivist for new arcana rules.</li>
              </ul>
            </li>
          </ul>

          <h3>Chapter 3: GM Toolkit</h3>
          <ul>
            <li>
              Stakes are tied to potential harm and split into
              Low/Regular/High/Dire.
            </li>
            <li>
              Story Moves cut completely, added as guidance. Spotlight is now a
              system term.
            </li>
            <li>
              Suspense moves cut to Resolve, Foreshadow, Build Up, and Clue In.
            </li>
            <li>Build Up can be used to introduce Challenges.</li>
            <li>
              Impact moves cut to Complicate Things, Hit Hard, Lock Down, and
              Counter.
            </li>
            <li>
              Lock Down combines the old moves Force A Choice and Lock It In.
            </li>
            <li>Battlegrounds added as a Challenge option.</li>
            <li>The Marauder and Overseer monster roles were removed.</li>
          </ul>

          <h3>Chapter 4: Exploration (New)</h3>
          <ul>
            <li>
              All points of interest, paths, buildings, and rooms are explained.
            </li>
            <li>Repeated words on crucibles were replaced.</li>
          </ul>

          <h3>Chapter 5: Monsters (New)</h3>
          <ul>
            <li>The occasional monster role has been updated.</li>
          </ul>

          <h3>Chapter 6: Player Options (New)</h3>
          <ul>
            <li>
              The Psion core talent has been replaced, with many path talent
              changes.
            </li>
            <li>
              The Artificer core talent has been reworked, with many path talent
              changes.
            </li>
            <li>
              The Summoner, Swashbuckler, and Witch have been added as new path
              options.
            </li>
            <li>
              Legacy talents, those cut from previous editions, were added.
            </li>
          </ul>

          <h3>Chapter 7: Game Options (New)</h3>
          <ul>
            <li>Setting Dials added.</li>
            <li>Optional Rules added.</li>
            <li>Flavors of Fantasy expanded to one page each.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
