import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import BlogPage from './pages/BlogPage.jsx'
import BlogPostPage from './pages/BlogPostPage.jsx'
import AchievementsPage from './pages/AchievementsPage.jsx'

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
document.addEventListener('mouseover', e => { 
  const el = e.target.closest(hoverable);
  if(el){ 
    ring.classList.add('big'); 
    dot.style.transform='translate(-50%,-50%) scale(2)'; 
    if(el.getAttribute('data-cursor') === 'drag') {
      ring.innerHTML = '<span style="font-size:10px;font-weight:600;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);letter-spacing:1px;color:#fff;">DRAG</span>';
      ring.style.background = 'rgba(255,255,255,0.1)';
      ring.style.border = 'none';
      ring.style.width = '64px';
      ring.style.height = '64px';
      dot.style.opacity = '0';
    }
  }
});
document.addEventListener('mouseout',  e => { 
  const el = e.target.closest(hoverable);
  if(el){ 
    ring.classList.remove('big'); 
    dot.style.transform='translate(-50%,-50%) scale(1)'; 
    if(el.getAttribute('data-cursor') === 'drag') {
      ring.innerHTML = '';
      ring.style.background = 'transparent';
      ring.style.border = '1.5px solid rgba(255, 255, 255, 0.8)';
      ring.style.width = '';
      ring.style.height = '';
      if(!document.hidden) dot.style.opacity = '1';
    }
  }
});
document.addEventListener('mouseleave',()=>{ dot.style.opacity='0'; ring.style.opacity='0'; });
document.addEventListener('mouseenter',()=>{ dot.style.opacity='1'; ring.style.opacity='1'; });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
