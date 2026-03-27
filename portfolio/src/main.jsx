import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/* ── ZJ-style cursor: tiny dot + lagging ring ─── */
const dot  = Object.assign(document.createElement('div'), { id:'cur-dot' });
const ring = Object.assign(document.createElement('div'), { id:'cur-ring' });
document.body.append(dot, ring);

let mx=0, my=0, rx=0, ry=0;
const onMove = e => { mx=e.clientX; my=e.clientY; dot.style.cssText+=`left:${mx}px;top:${my}px;`; };
document.addEventListener('mousemove', onMove);

(function tick(){ rx+=(mx-rx)*.1; ry+=(my-ry)*.1;
  ring.style.left=`${rx}px`; ring.style.top=`${ry}px`;
  requestAnimationFrame(tick); })();

const hoverable = 'a,button,[role="button"],input,textarea,select,label,[data-cursor]';
document.addEventListener('mouseover', e => { if(e.target.closest(hoverable)){ ring.classList.add('big'); dot.style.transform='translate(-50%,-50%) scale(2)'; }});
document.addEventListener('mouseout',  e => { if(e.target.closest(hoverable)){ ring.classList.remove('big'); dot.style.transform='translate(-50%,-50%) scale(1)'; }});
document.addEventListener('mouseleave',()=>{ dot.style.opacity='0'; ring.style.opacity='0'; });
document.addEventListener('mouseenter',()=>{ dot.style.opacity='1'; ring.style.opacity='1'; });

createRoot(document.getElementById('root')).render(
  <StrictMode><App /></StrictMode>
)
