// /story — full-screen snap slides with story bars and letters that flip in.
const main = document.querySelector('main')!;
const sections = [...document.querySelectorAll<HTMLElement>('main > section')];
const bars = document.querySelector('.bars')!;
const count = document.getElementById('count')!;
const pad = (n: number) => String(n).padStart(2, '0');

sections.forEach(() => bars.appendChild(document.createElement('i')));

// Shrink a headline until it fits its slide, in both directions.
function fit() {
  sections.forEach(s => {
    const big = s.querySelector<HTMLElement>('.big')!;
    big.style.fontSize = '';
    const max = s.clientWidth * 0.9 - (innerWidth < 700 ? 0 : 60);
    const widest = Math.max(...[...big.children].map(l => l.scrollWidth));
    let size = parseFloat(getComputedStyle(big).fontSize);
    if (widest > max) size *= max / widest;
    big.style.fontSize = size + 'px';
    for (let i = 0; i < 10 && s.scrollHeight > s.clientHeight + 1; i++) {
      size *= 0.94;
      big.style.fontSize = size + 'px';
    }
  });
}
document.fonts.ready.then(fit);
addEventListener('resize', fit);

function update() {
  const c = main.scrollTop / main.clientHeight;
  const active = Math.round(c);
  sections.forEach((s, i) => s.classList.toggle('in', i === active));
  [...bars.children].forEach((b, i) => (b as HTMLElement).style.setProperty('--w', Math.max(0, Math.min(1, c - i + 1)) * 100 + '%'));
  count.textContent = pad(active + 1) + ' / ' + pad(sections.length);
}
main.addEventListener('scroll', update, { passive: true });
update();

// cursor trail (mouse only)
let last = 0;
addEventListener('pointermove', e => {
  if (e.pointerType !== 'mouse' || e.timeStamp - last < 28) return;
  last = e.timeStamp;
  const t = document.createElement('i');
  t.className = 'trail';
  t.style.left = e.clientX - 6 + 'px';
  t.style.top = e.clientY - 6 + 'px';
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 600);
});

addEventListener('keydown', e => {
  if (e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); main.scrollBy({ top: main.clientHeight, behavior: 'smooth' }); }
  if (e.key === 'ArrowUp') { e.preventDefault(); main.scrollBy({ top: -main.clientHeight, behavior: 'smooth' }); }
});
