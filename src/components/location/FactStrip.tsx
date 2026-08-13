/**
 * FactStrip · four-cell stats band used under the location hero.
 * Data-driven so Bangor and Sans Souci can pass their own facts.
 */

export interface Fact {
  label: string;
  /** Big number, may include a trailing accent character (rendered separately) */
  value: string;
  /** Optional accent (e.g. "+" in `11+`) rendered in terra */
  valueAccent?: string;
  note: string;
}

export function FactStrip({ facts }: { facts: Fact[] }) {
  const cols =
    facts.length <= 2
      ? "md:grid-cols-2"
      : facts.length === 3
      ? "md:grid-cols-3"
      : "md:grid-cols-4";
  return (
    <div className="fact-strip">
      <div className={`max-w-[1360px] mx-auto grid grid-cols-2 ${cols} w-full`}>
        {facts.map((f) => (
          <div className="fact-cell" key={f.label}>
            <div className="allcaps text-ink-3">{f.label}</div>
            <div className="fact-num mt-3">
              {f.value}
              {f.valueAccent ? (
                <span className="text-terra">{f.valueAccent}</span>
              ) : null}
            </div>
            <div className="text-[13px] text-ink-2 mt-2">{f.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
