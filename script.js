/* ==========================================================================
   VALE IMPERIAL — Curadoria de Turismo & Imóveis em Petrópolis (RJ)
   JavaScript Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initCustomCursor();
  initPropertyFilter();
  initModals();
  initFormHandling();
  initScrollAnimations();
});

/* --- Header Scroll Effect --- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* --- Mobile Menu Drawer --- */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  function toggleMenu() {
    toggleBtn.classList.toggle('open');
    drawer.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
  }

  toggleBtn.addEventListener('click', toggleMenu);

  links.forEach(link => {
    link.addEventListener('click', () => {
      if (drawer.classList.contains('open')) {
        toggleMenu();
      }
    });
  });
}

/* --- Custom Floating Magnetic Cursor --- */
function initCustomCursor() {
  const cursor = document.querySelector('.custom-cursor');
  const label = document.querySelector('.custom-cursor-label');

  if (!cursor || window.innerWidth < 1024) {
    if (cursor) cursor.style.display = 'none';
    if (label) label.style.display = 'none';
    return;
  }

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.18;
    cursorY += (mouseY - cursorY) * 0.18;

    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
    if (label) {
      label.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -150%)`;
    }

    requestAnimationFrame(renderCursor);
  }
  requestAnimationFrame(renderCursor);

  // Interactive Hover Targets
  const interactiveTargets = document.querySelectorAll('[data-cursor]');

  interactiveTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
      const text = target.getAttribute('data-cursor') || 'Ver';
      cursor.classList.add('hovering-interactive');
      if (label) {
        label.textContent = text;
        label.classList.add('active');
      }
    });

    target.addEventListener('mouseleave', () => {
      cursor.classList.remove('hovering-interactive');
      if (label) {
        label.classList.remove('active');
      }
    });
  });
}

/* --- Imóveis Filter Tabs --- */
function initPropertyFilter() {
  const tabs = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.property-card');

  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-category');

      // Active tab styling
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Filter property cards
      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* --- Editorial Modals for Experiences, Properties & Articles --- */
function initModals() {
  const modal = document.querySelector('#editorialModal');
  if (!modal) return;

  const backdrop = modal.querySelector('.modal-backdrop');
  const closeBtn = modal.querySelector('.btn-modal-close');
  const modalTag = modal.querySelector('.modal-header-tag');
  const modalTitle = modal.querySelector('.modal-title');
  const modalImg = modal.querySelector('.modal-media-img');
  const modalBody = modal.querySelector('.modal-body-text');
  const modalActionBtn = modal.querySelector('.modal-action-btn');

  function openModal(data) {
    modalTag.textContent = data.tag || 'VALE IMPERIAL';
    modalTitle.textContent = data.title || '';
    modalImg.src = data.img || '';
    modalImg.alt = data.title || 'Imagem Vale Imperial';
    modalBody.innerHTML = data.content || '';
    
    if (modalActionBtn) {
      modalActionBtn.textContent = data.actionText || 'Solicitar Atendimento';
      modalActionBtn.onclick = () => {
        closeModal();
        const contactSec = document.querySelector('#contato');
        if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
      };
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  // Bind click events on Experience cards
  document.querySelectorAll('.exp-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.exp-title')?.textContent || '';
      const img = card.querySelector('img')?.src || '';
      const duration = card.querySelector('.exp-duration')?.textContent || '';
      const desc = card.querySelector('.exp-desc')?.textContent || '';

      openModal({
        tag: `EXPERIÊNCIA TURÍSTICA • ${duration}`,
        title: title,
        img: img,
        content: `
          <p class="modal-lead" style="font-size:1.15rem; color:var(--color-forest-dark); margin-bottom:1rem; font-weight:500;">
            ${desc}
          </p>
          <p style="margin-bottom:1rem;">
            Nossas roteirizações turísticas em Petrópolis são 100% personalizadas. Acompanhados por historiadores e guias nativos credenciados, oferecemos transporte privativo de alto conforto, acervos a portas fechadas no Centro Histórico e degustações exclusivas nos melhores refúgios gastronômicos da serra fluminense.
          </p>
          <ul style="margin-left:1.5rem; margin-bottom:1.5rem; color:var(--color-ink-muted);">
            <li>Transporte de luxo e receptivo privativo</li>
            <li>Acesso prioritário a palácios e casarões históricos</li>
            <li>Harmonização gastronômica e produtos artesanais locais</li>
          </ul>
        `,
        actionText: 'Reservar esta Experiência'
      });
    });
  });

  // Bind click events on Property cards
  document.querySelectorAll('.property-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.property-title')?.textContent || '';
      const price = card.querySelector('.property-price')?.textContent || '';
      const bairro = card.querySelector('.property-tag-bairro')?.textContent || '';
      const img = card.querySelector('img')?.src || '';
      const specs = card.querySelector('.property-specs')?.innerHTML || '';
      const quote = card.querySelector('.property-curator-quote')?.textContent || '';

      openModal({
        tag: `CURADORIA IMOBILIÁRIA • ${bairro} • ${price}`,
        title: title,
        img: img,
        content: `
          <div style="background-color:var(--color-cream-card); padding:1rem 1.2rem; border-radius:4px; margin-bottom:1.5rem; font-size:0.9rem; border-left:3px solid var(--color-terracotta);">
            <strong>Especificações:</strong> ${specs}
          </div>
          <p style="font-style:italic; color:var(--color-forest-dark); margin-bottom:1.2rem; font-size:1.05rem;">
            "${quote}"
          </p>
          <p style="margin-bottom:1rem;">
            Este imóvel passou pelo rigoroso processo de seleção da Vale Imperial: verificação documental completa, avaliação de insolação nos meses de inverno e análise de privacidade em relação à vegetação nativa.
          </p>
          <p>
            Agende uma visita privativa com nossos sócios nativos para conhecer a propriedade e o estilo de vida do bairro em detalhes.
          </p>
        `,
        actionText: 'Agendar Visita Privativa'
      });
    });
  });

  // Bind click events on Journal cards
  document.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.article-title')?.textContent || '';
      const category = card.querySelector('.article-meta .category')?.textContent || 'JORNAL DA SERRA';
      const img = card.querySelector('img')?.src || '';
      const excerpt = card.querySelector('.article-excerpt')?.textContent || '';

      openModal({
        tag: `EDITORIAL • ${category}`,
        title: title,
        img: img,
        content: `
          <p style="font-size:1.15rem; font-weight:500; color:var(--color-forest-dark); margin-bottom:1.5rem; line-height:1.6;">
            ${excerpt}
          </p>
          <p style="margin-bottom:1rem;">
            Petrópolis possui um microclima único e uma relação singular entre o ritmo da serra e a proximidade da capital fluminense. Enquanto o inverno traz as noites frias propícias para lareiras, fondue e o Festival de Inverno, as estações amenas revelam trilhas radiantes e a florada das hortênsias pelos vales de Itaipava e Corrêas.
          </p>
          <p style="margin-bottom:1rem;">
            Seja para quem busca investir em um refúgio de fim de semana ou planeja a transição definitiva para a serra, a escolha da localização correta exige entender a topografia, a orientação solar e a acessibilidade da região durante todo o ano.
          </p>
          <p>
            No Jornal da Serra, compartilhamos bimestralmente ensaios e análises de mercado elaborados por nossos fundadores nativos.
          </p>
        `,
        actionText: 'Falar com a Curadoria'
      });
    });
  });
}

/* --- Form Handling --- */
function initFormHandling() {
  const form = document.querySelector('#contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando mensagem...';

    setTimeout(() => {
      alert('Obrigado pelo contato! Sua mensagem foi recebida pela curadoria da Vale Imperial. Retornaremos em até 24 horas.');
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }, 1200);
  });
}

/* --- Scroll Animations (IntersectionObserver) --- */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.exp-card, .property-card, .article-card, .dif-card, .manifesto-grid').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.7s cubic-bezier(0.25, 1, 0.5, 1), transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)';
    observer.observe(el);
  });

  // Animation active state class
  document.addEventListener('scroll', () => {
    document.querySelectorAll('.animate-in').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  });
}
