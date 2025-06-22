window.addEventListener("load", () => {
  const container = document.getElementById("star-container");
  const triggerArea = document.documentElement; // or document.documentElement for full page


  let lastMouseX = 0;
  let lastMouseY = 0;
  let throttle = false;

  function createTossedPickle(x, y, dx = 1, dy = 1) {
    const star = document.createElement("div");
    star.classList.add("shooting-star");

    const size = Math.random() * 1.2 + 1.2;
    const duration = Math.random() * 2 + 4;
    const distance = 300 + Math.random() * 300;
    const angle = Math.atan2(dy, dx);
    const arcHeight = 100 + Math.random() * 200;

    const endX = Math.cos(angle) * distance + (Math.random() - 0.5) * 20;
    const endY = Math.sin(angle) * distance + 100 + Math.random() * 100;
    const animName = `toss-${Math.random().toString(36).substr(2, 6)}`;


// 🎯 Adjust pickle frequency (10% chance)
const isPickle = Math.random() < 0.3;
const color = isPickle
  ? 'hsl(120, 97.30%, 29.40%)'  // pickle green
  : [
      'hsl(260, 35.50%, 56.90%)',
      'hsl(270, 36.00%, 43.50%)',
      'hsl(240, 70%, 65%)',
      'hsl(250, 92.20%, 30.00%)',
      'hsl(244, 71.40%, 23.30%)',
      'hsl(300, 94.80%, 22.70%)'
    ][Math.floor(Math.random() * 6)];

    // 🥒 Style shape by type
// Width and height per type
// Define dimensions
let width, height;

if (isPickle) {
  width = 50 + Math.random() * 15;   // 50–60 px
  height = 9 + Math.random() * 15;   // 10–12 px
} else {
  width = 80 + Math.random() * 110;   // 30–90 px
  height = 80 + Math.random() * 110;  // 10–35 px
}


const offsetX = (Math.random() - 0.5) * 10; // ±10px
const offsetY = (Math.random() - 0.5) * 10;

star.style.left = `${x + offsetX}px`;
star.style.top = `${y + offsetY}px`;
star.style.transform = `rotate(${angle}rad)`; // Only rotation here


    star.style.width = `${width}px`;
    star.style.height = `${height}px`;
    star.style.opacity = 0.5;
    star.style.borderRadius = isPickle ? '20px / 10px' : '50%';
    star.style.filter = isPickle ? 'blur(.1px)' : 'blur(30px)';
    star.style.background = `radial-gradient(circle at center, ${color} 0%, #222 100%)`;
    star.style.boxShadow = isPickle
      ? `0 0 6px ${color}, 0 0 12px ${color}, 0 0 16px rgba(255,255,255,0.2)`
      : `0 0 12px ${color}, 0 0 24px ${color}, 0 0 32px rgba(255,255,255,0.3)`;

    star.style.animation = `${animName} ${duration}s ease-in-out forwards`;

    // 🌈 Create arc animation in 60 steps
    let keyframes = `@keyframes ${animName} {\n`;
    for (let i = 0; i <= 100; i++) {
      const progress = i / 100; 
  const tx = endX * progress;
  const arcY = -2 * arcHeight * (progress - 0.5) ** 2 + arcHeight;
  const ty = endY * progress - arcY;
  const rot = angle + 0.002 * i;

      //smoothing of pickle entry/exit  
   // Smoother opacity easing: fade in slow, peak around middle, fade out
  const fadeIn = Math.min(progress / 0.1, 1);         // fade in over 40%
  const fadeOut = Math.max((1 - progress) / 0.9, 0);  // fade out over last 60%
  const op = Math.min(fadeIn, fadeOut);               // peak around middle

      keyframes += `  ${Math.round(progress * 100)}% { transform: translate(${tx.toFixed(1)}px, ${ty.toFixed(1)}px) rotate(${rot.toFixed(2)}rad); opacity: ${op.toFixed(2)}; }\n`;
    }
    keyframes += `}`;

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    container.appendChild(star);

    setTimeout(() => star.remove(), duration * 1000);
  }

  // 🖱 Mouse toss listener
  triggerArea.addEventListener("mousemove", (e) => {
    if (throttle) return;
    throttle = true;

    const dx = e.clientX - lastMouseX;
    const dy = e.clientY - lastMouseY;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;

const x = e.clientX;
const y = e.clientY;


    createTossedPickle(x, y, dx, dy);

    setTimeout(() => {
      throttle = false;
    }, 90); //speed of pickle toss
  });
});
