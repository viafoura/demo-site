export default function VfTrayTrigger() {
  // `vf-feature-unity` opts the tray into the redesigned Unity shell ahead of
  // its GA default flip (COM-1690). Presence-based: an empty value is enough.
  // After COM-1643 removes the legacy tray the attribute becomes inert, so it
  // is safe to leave in place.
  return (
    <div className="viafoura">
      <vf-tray-trigger vf-feature-unity="" />
    </div>
  );
}
