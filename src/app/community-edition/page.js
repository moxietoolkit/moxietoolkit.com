import RuleDivider from '@/components/RuleDivider';

export const metadata = {
  title: 'Community Edition | Moxie Toolkit',
};

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
    four: [
      {
        href: '/downloads/GWCE-Preview-4-CE-Change-Log.pdf',
        label: 'Preview 4 CE Change Log',
      },
      {
        href: '/downloads/GWCE-Preview-4-Character-Sheets.pdf',
        label: 'Preview 4 Character Sheets',
      },
      {
        href: '/downloads/GWCE-Preview-4-Pages.pdf',
        label: 'Preview 4 Pages',
      },
      {
        href: '/downloads/GWCE-Preview-4-Player-Options-Sheets.pdf',
        label: 'Preview 4 Player Options Sheets',
      },
      {
        href: '/downloads/GWCE-Preview-4-Spreads.pdf',
        label: 'Preview 4 Spreads',
      },
    ],
    five: [
      {
        href: '/downloads/GWCE-Preview-5-CE-Change-Log.pdf',
        label: 'Preview 5 CE Change Log',
      },
      {
        href: '/downloads/GWCE-Preview-5-Character-Sheets.pdf',
        label: 'Preview 5 Character Sheets',
      },
      {
        href: '/downloads/GWCE-Preview-5-Pages.pdf',
        label: 'Preview 5 Pages',
      },
      {
        href: '/downloads/GWCE-Preview-5-Spreads.pdf',
        label: 'Preview 5 Spreads',
      },
    ],
    fiveDotTwo: [
      {
        href: '/downloads/GWCE-Preview-5.2-Pages.pdf',
        label: 'Preview 5.2 Pages',
      },
      {
        href: '/downloads/GWCE-Preview-5.2-Spreads.pdf',
        label: 'Preview 5.2 Spreads',
      },
      {
        href: '/downloads/GWCE-Preview-5.2-Character-Sheets.pdf',
        label: 'Preview 5.2 Character Sheets',
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
            {previewLinks.fiveDotTwo.map((link) => (
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

          <ul className="list-none p-0! m-0! mb-4!">
            {previewLinks.one.map((link) => (
              <li key={link.href} className="m-0! p-0!">
                <a href={link.href} className="text-base">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="list-none p-0! m-0! mb-4!">
            {previewLinks.two.map((link) => (
              <li key={link.href} className="m-0! p-0!">
                <a href={link.href} className="text-base">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="list-none p-0! m-0! mb-4!">
            {previewLinks.three.map((link) => (
              <li key={link.href} className="m-0! p-0!">
                <a href={link.href} className="text-base">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="list-none p-0! m-0! mb-4!">
            {previewLinks.four.map((link) => (
              <li key={link.href} className="m-0! p-0!">
                <a href={link.href} className="text-base">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="list-none p-0! m-0! mb-4!">
            {previewLinks.five.map((link) => (
              <li key={link.href} className="m-0! p-0!">
                <a href={link.href} className="text-base">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <h2>1.5 (Original) to Current CE Version</h2>

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
            <li>Story (meta-currency) renamed Thread.</li>
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
            <li>
              Party concepts updated: added Merchants and Scholars, cut Avengers
              and Vassals.
            </li>
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
            <li>Berserker path talents War Songs replaced with Warcry.</li>
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
                <li>Added Augury.</li>
                <li>Changed Primordial Bonds, renamed Primordial Forces.</li>
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
                <li>Ritualist renamed to Blood Rituals, slight buff.</li>
                <li>Eldritch Weaponry renamed to Magus, reworked.</li>
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
            <li>Legacy talents, those cut from previous editions added.</li>
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

          <h3>Chapter 4: Exploration</h3>
          <ul>
            <li>
              All points of interest, paths, buildings, and rooms are explained.
            </li>
            <li>Repeated words on crucibles were replaced.</li>
            <li>Expanded to include Downtime and Stronghold rules.</li>
          </ul>

          <h3>Chapter 5: Monsters</h3>
          <ul>
            <li>The occasional monster role has been updated.</li>
            <li>Added the Kraken, Land Shark, and Mephit.</li>
          </ul>

          <h3>Chapter 6: Game Options</h3>
          <ul>
            <li>Setting Dials added.</li>
            <li>Optional Rules added.</li>
            <li>Flavors of Fantasy expanded to one page each.</li>
            <li>
              Story Kit Explanation added, with full kits moved to printable
              sheets.
            </li>
            <li>Expanded solo play rules.</li>
          </ul>

          <h3>Chapter 7: Extras</h3>
          <ul>
            <li>Hex Flowers added as GM Tool.</li>
            <li>Story Kit Explanation added.</li>
            <li>Expanded solo play rules added.</li>
            <li>List of Arcana added.</li>
            <li>Random Potion Generator updated from 1.4.</li>
          </ul>

          <RuleDivider className="w-full text-grimwild-green-light my-8" />

          <h2>1.5 to Preview 1</h2>

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
              Artifacts are arcana with special limitations, effects, or
              anything unique.
            </li>
          </ul>

          <h3>Chapter 2: Adventurers</h3>
          <ul>
            <li>Heritage talent suggestions added.</li>
            <li>Investigator added as a background.</li>
            <li>Background talents added.</li>
            <li>The Warlock core talent has been replaced.</li>
            <li>
              Bard, Fighter, Ranger, Rogue core talents have been reworked.
            </li>
            <li>Various path talent updates to all paths.</li>
            <li>Inspiration boxes added under various talents.</li>
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
            <li>The Brute and Overseer roles were removed.</li>
          </ul>

          <RuleDivider className="w-full text-grimwild-green-light my-8" />

          <h2>Preview 1 to Preview 2</h2>

          <h3>Chapter 1: Gameplay</h3>
          <ul>
            <li>Rituals are cast with invocations instead of rites.</li>
          </ul>

          <h3>Chapter 2: Adventurers</h3>
          <ul>
            <li>Bonus Dice section added.</li>
            <li>Clerics cast with Rites.</li>
            <li>Warlock core talent replaced.</li>
            <li>Ranger core updated.</li>
          </ul>

          <h3>Chapter 4: Exploration (New)</h3>
          <ul>
            <li>
              All points of interest, paths, buildings, and rooms are explained.
            </li>
            <li>Repeated words on crucibles were replaced.</li>
          </ul>

          <RuleDivider className="w-full text-grimwild-green-light my-8" />

          <h2>Preview 2 to Preview 3</h2>

          <h3>Chapter 1: Gameplay</h3>
          <ul>
            <li>Push Yourself always gives a mark.</li>
            <li>Arcana section clarified.</li>
            <li>Artifacts are now a 6d power pool.</li>
          </ul>

          <h3>Chapter 2: Adventurers</h3>
          <ul>
            <li>
              Some talents with Push Yourself changed to have a free activation.
            </li>
          </ul>

          <h3>Chapter 3: GM Toolkit</h3>
          <ul>
            <li>The Brute replaced the Marauder monster role.</li>
          </ul>

          <h3>Chapter 5: Monsters (New)</h3>
          <ul>
            <li>The occasional monster role has been updated.</li>
          </ul>

          <h3>Chapter 6: Player Options (New)</h3>
          <ul>
            <li>
              Artificer core talent replaced.
              <ul>
                <li>
                  Removed Anchorshot, Automatons, Double-Barreled Blunderbuss,
                  Mechanical Mount, Steamhammer, Swiftwing.
                </li>
                <li>
                  Added Animate Objects, Artificial Parts, Mischief Maker,
                  Tinkerer, Trap Making, Wandslinger.
                </li>
                <li>Minor Changes Grenades.</li>
              </ul>
            </li>
            <li>
              Psion core talent replaced.
              <ul>
                <li>Removed Mind Seed, Tumultuous Mind, Wilder.</li>
                <li>Added Echo, Foresight, Shift Form.</li>
                <li>Mind Thief renamed to Mind Blast, updated for new core.</li>
                <li>Disturbed Mind renamed to Tumultuous Mind.</li>
              </ul>
            </li>
            <li>
              The Summoner, Swashbuckler, and Witch have been added as new path
              options.
            </li>
          </ul>

          <h3>Chapter 7: Game Options (New)</h3>
          <ul>
            <li>Setting Dials added.</li>
            <li>Optional Rules added.</li>
            <li>Flavors of Fantasy expanded to one page each.</li>
          </ul>

          <RuleDivider className="w-full text-grimwild-green-light my-8" />

          <h2>Preview 3 to Preview 4</h2>

          <h3>Chapter 1: Gameplay</h3>
          <ul>
            <li>Story (meta-currency) renamed Thread.</li>
            <li>Protecting Others (from v1.4 assists) added.</li>
            <li>Arcana expanded, Artifacts merged with Mythic.</li>
          </ul>

          <h3>Chapter 2: Adventurers</h3>
          <ul>
            <li>
              Party concepts updated: added Merchants and Scholars, cut Avengers
              and Vassals.
            </li>
            <li>Berserker: Flesh Wounds updated to be more like original.</li>
            <li>Ranger: Quarry widened to include anyone attacking.</li>
            <li>Sorcerer: Eldritch Growth clarified.</li>
            <li>
              Warlock: Core Updated.
              <ul>
                <li>Ritualist renamed Blood Rituals, slight buff.</li>
                <li>Eldritch Weaponry renamed Magus, reworked.</li>
              </ul>
            </li>
            <li>Wizard: Archivist updated for new arcana rules.</li>
          </ul>

          <h3>Chapter 3: GM Toolkit</h3>
          <ul>
            <li>
              Build Up is no longer required to introduce Challenges, only
              suggested.
            </li>
            <li>Examples of play updated.</li>
          </ul>

          <h3>Chapter 4: Exploration</h3>
          <ul>
            <li>Expanded to include Downtime rules.</li>
          </ul>

          <h3>Chapter 5: Monsters</h3>
          <ul>
            <li>Added the Kraken, Land Shark, and Mephit.</li>
          </ul>

          <h3>Chapter 6: Player Options</h3>
          <ul>
            <li>
              Artificer: Core Updated.
              <ul>
                <li>Tinkerer renamed Magnum Opus, reworked.</li>
              </ul>
            </li>
            <li>Psion: Wilder cut, replaced with Shift Form.</li>
            <li>
              Summoner: Universal Language updated to match new Witch core.
            </li>
            <li>Swashbuckler: Core Updated.</li>
            <li>Witch: Core Updated.</li>
          </ul>

          <h3>Chapter 8: Extras (new)</h3>
          <ul>
            <li>Hex Flowers added as GM Tool.</li>
            <li>Story Kit Explanation added.</li>
            <li>Expanded solo play rules added.</li>
            <li>List of Arcana added.</li>
            <li>Random Potion Generator updated from 1.4.</li>
          </ul>

          <RuleDivider className="w-full text-grimwild-green-light my-8" />

          <h2>Preview 4 to Preview 5 (final!)</h2>

          <h3>Chapter 1: Gameplay</h3>
          <ul>
            <li>"Thematic Path Talent" section added.</li>
            <li>Magic Examples clarified.</li>
            <li>Spellcasting Talents page added.</li>
          </ul>

          <h3>Chapter 2: Adventurers</h3>
          <ul>
            <li>Rationale added to Legacy Core Talents.</li>
            <li>Legacy Bard talent added.</li>
            <li>Bard: Jack of all Trades updated.</li>
            <li>
              Sorcerer: Magic Sense buffed and clarified. Spelleater minor
              changes.
            </li>
            <li>
              Summoner: Core Updated.
              <ul>
                <li>Universal Language replaced with Monster Menagerie.</li>
                <li>Chosen Eidolon replaced with Shared Soul.</li>
              </ul>
            </li>
            <li>Wizard: Familiar replaced by Countermagic.</li>
            <li>Witch: Karmic Debt cut. Replaced by Familiar.</li>
            <li>Herbalism and Primal Growth switched paths (Druid + Witch).</li>
            <li>Magus switched to using the weapon as the touchstones.</li>
            <li>Added Pint-Sized as Background talent.</li>
            <li>More purple guidance boxes added.</li>
          </ul>

          <h3>Chapter 3: GM Toolkit</h3>
          <ul>
            <li>Attacking Multiple added to Combat Rulings.</li>
          </ul>

          <h3>Chapter 6: Player Options (Removed)</h3>
          <ul>
            <li>
              Paths and talents moved to Chapter 2: Adventurers. Group-Building
              Questions and Distinctive Features (reworked to NPC Crucibles)
              moved to Chapter 7: Extras.
            </li>
          </ul>

          <h3>Chapter 7: Extras</h3>
          <ul>
            <li>
              Writers' Room, Homebrew Guidance, and Rest Resets added to
              Optional Rules.
            </li>
            <li>INDEX / GLOSSARY added.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
