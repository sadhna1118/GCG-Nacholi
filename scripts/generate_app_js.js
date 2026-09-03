const fs = require('fs');
const path = require('path');

const appJsContent = `// GCG Nacholi - Single-Page Multi-View Router & Application Controller
// Empowered with 100% Official Scraped Data & Interactive Features

const App = {
  activeNoticeCategory: 'All',
  currentLightboxIndex: 0,
  currentPage: 'home',
  filteredGallery: [],

  init() {
    this.filteredGallery = (typeof COLLEGE_DATA !== 'undefined' && COLLEGE_DATA.gallery) ? COLLEGE_DATA.gallery : [];
    this.renderHomeComponents();
    this.bindNavigation();
    this.bindHeroSlider();
    this.bindAccessibility();
    this.bindSearch();
    this.bindModals();
    this.bindBackToTop();
    this.bindRouter();

    if (typeof FormsManager !== 'undefined') FormsManager.init();
    if (typeof ChatbotManager !== 'undefined') ChatbotManager.init();
  },

  // =========================================================================
  // Router Engine (Same Tab Navigation with Instant Transition)
  // =========================================================================
  bindRouter() {
    window.addEventListener('hashchange', () => {
      this.handleHashChange();
    });

    // Check initial hash on page load
    this.handleHashChange();
  },

  handleHashChange() {
    const hash = window.location.hash.replace('#', '').trim();
    if (!hash || hash === 'home') {
      this.showHomeView();
    } else {
      this.renderSubpageBySlug(hash);
    }
  },

  navigateTo(pageKey, title, parentMenu) {
    window.location.hash = pageKey;
    this.renderSubpage(pageKey, title, parentMenu);
  },

  showHomeView() {
    this.currentPage = 'home';
    const homeView = document.getElementById('home-view');
    const subpageView = document.getElementById('subpage-view');

    if (homeView) homeView.style.display = 'block';
    if (subpageView) {
      subpageView.style.display = 'none';
      subpageView.classList.remove('active');
    }

    document.title = "GCG Nacholi | Government College for Girls, Nacholi (Faridabad)";

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const homeLink = document.querySelector('.nav-link[data-slug="home"]');
    if (homeLink) homeLink.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  renderSubpage(pageKey, title, parentMenu) {
    this.currentPage = pageKey;
    const homeView = document.getElementById('home-view');
    const subpageView = document.getElementById('subpage-view');
    const breadcrumbCurrent = document.getElementById('breadcrumb-current');
    const breadcrumbParent = document.getElementById('breadcrumb-parent');
    const container = document.getElementById('subpage-content-container');

    if (homeView) homeView.style.display = 'none';
    if (subpageView) {
      subpageView.style.display = 'block';
      subpageView.classList.add('active');
    }

    if (breadcrumbParent) breadcrumbParent.innerText = parentMenu || 'Section';
    if (breadcrumbCurrent) breadcrumbCurrent.innerText = title || pageKey;

    document.title = \`\${title || pageKey} | GCG Nacholi\`;

    // Render Content from PageContent registry
    if (container) {
      if (typeof PageContent !== 'undefined' && typeof PageContent[pageKey] === 'function') {
        container.innerHTML = PageContent[pageKey]();
      } else if (typeof PageContent !== 'undefined' && typeof PageContent.generic === 'function') {
        container.innerHTML = PageContent.generic(title || pageKey, parentMenu || 'Information');
      } else {
        container.innerHTML = \`<div class="subpage-card"><h3>\${title || pageKey}</h3><p>Information under compilation.</p></div>\`;
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  renderSubpageBySlug(slug) {
    const map = {
      'history': { title: "History", parent: "About Us" },
      'principalbio': { title: "Principal's desk", parent: "About Us" },
      'accreditation': { title: "Rank/Accreditation Status", parent: "About Us" },
      'infrastructure': { title: "Infrastructure", parent: "About Us" },
      'idp': { title: "Institutional Development Plan", parent: "About Us" },
      'recognition': { title: "Recognition/Approval 2(f), 12B", parent: "About Us" },
      'aicte': { title: "All India Council for Technical Education", parent: "About Us" },
      'staffstatement': { title: "Non-Teaching Staff", parent: "About Us" },
      'studentenrollment': { title: "Student Enrollment", parent: "About Us" },
      'facilities': { title: "Facilities", parent: "About Us" },
      'entrepreneurship': { title: "Entrepreneurship", parent: "About Us" },
      'luminaries': { title: "Luminaries", parent: "About Us" },
      'projects': { title: "Projects", parent: "About Us" },
      'achievements': { title: "Extracurricular Achievements", parent: "About Us" },
      'unnatbharat': { title: "Unnat Bharat Abhiyan", parent: "About Us" },
      'rti': { title: "Mandatory disclosure under RTI", parent: "About Us" },
      'annualreport': { title: "Annual Report", parent: "About Us" },
      'emagazine': { title: "e-Magazine", parent: "About Us" },

      'academiccalendar': { title: "Academic Calendar", parent: "Academics" },
      'holidays': { title: "List of Holidays", parent: "Academics" },
      'departments': { title: "Departments", parent: "Academics" },
      'programmes': { title: "Programmes/Courses", parent: "Academics" },
      'timetable': { title: "Time Table", parent: "Academics" },
      'lessonplan': { title: "Lesson Plan", parent: "Academics" },
      'exams': { title: "Exams", parent: "Academics" },
      'results': { title: "Results", parent: "Academics" },
      'apprenticeship': { title: "Apprenticeship", parent: "Academics" },
      'placements': { title: "Placements", parent: "Academics" },
      'skillcourses': { title: "Skill Courses", parent: "Academics" },
      'freelancing': { title: "Freelancing", parent: "Academics" },
      'programoutcomes': { title: "Program Outcomes", parent: "Academics" },
      'library': { title: "Library", parent: "Academics" },
      'collaborations': { title: "Academic Collaborations", parent: "Academics" },
      'nirf': { title: "NIRF", parent: "Academics" },

      'admissionprocedure': { title: "Admission Process and Guidelines", parent: "Admissions & Fee" },
      'feerefund': { title: "Fee Refund Policy", parent: "Admissions & Fee" },

      'research': { title: "Research and Development Cell", parent: "Research" },
      'incubation': { title: "Incubation Centre/Start-ups/Entrepreneurship Cell", parent: "Research" },

      'sportsfacilities': { title: "Sports Facilities", parent: "Students" },
      'hostel': { title: "Hostel Details", parent: "Students" },
      'grievance': { title: "Grievance Redressal Committee", parent: "Students" },
      'health': { title: "Health Facilities", parent: "Students" },
      'socioeconomic': { title: "Socio Economically Disadvantaged Groups Cell", parent: "Students" },
      'differentlyabled': { title: "Facilities for differently-abled", parent: "Students" },
      'nccnss': { title: "NCC & NSS", parent: "Students" },
      'scholarships': { title: "Awards/Scholarships", parent: "Students" },
      'onlinelearning': { title: "Online Learning Portals", parent: "Students" },
      'codeofconduct': { title: "Code of conduct for students", parent: "Students" },
      'helpline': { title: "Student Helpline", parent: "Students" },
      'perceptionindex': { title: "Perception Index", parent: "Students" },
      'eservicesstudents': { title: "E-services", parent: "Students" },
      'econtent': { title: "E-Content", parent: "Students" },

      'faculty': { title: "Teaching Staff", parent: "Faculty" },
      'directories': { title: "Directories", parent: "Faculty" },
      'facultycode': { title: "Code of conduct for faculty", parent: "Faculty" },
      'trainingpolicy': { title: "Training Policy", parent: "Faculty" },
      'antiragging': { title: "Anti Ragging", parent: "Faculty" },
      'icc': { title: "Anti Sexual Harassment/ICC", parent: "Faculty" },
      'committees': { title: "Committees", parent: "Faculty" },
      'servicerules': { title: "Service Rules", parent: "Faculty" },
      'researchpapers': { title: "Research Papers", parent: "Faculty" },
      'eservicesfaculty': { title: "E-services for faculty", parent: "Faculty" },

      'news': { title: "News", parent: "Media" },
      'events': { title: "Events and Activities", parent: "Media" },
      'gallery': { title: "Photo Gallery", parent: "Media" },
      'videos': { title: "Video Gallery", parent: "Media" },

      'notices': { title: "Circulars & Notices", parent: "Information Corner" },
      'studentnotices': { title: "Student Notices", parent: "Information Corner" },
      'tenders': { title: "Tenders", parent: "Information Corner" },
      'downloads': { title: "Download Forms", parent: "Information Corner" },

      'iqac': { title: "IQAC -Quality Cell", parent: "IQAC" },
      'aqar': { title: "AQAR", parent: "IQAC" },
      'iqacmeetings': { title: "Proceedings of the Meetings of IQAC", parent: "IQAC" },
      'feedback': { title: "Feedback", parent: "IQAC" },
      'feedbackreport': { title: "Feedback Report", parent: "IQAC" },

      'alumniregistration': { title: "Alumni Registration", parent: "Alumni" },
      'alumniengagement': { title: "Alumni Engagement", parent: "Alumni" },
      'alumnilist': { title: "Alumni List", parent: "Alumni" },
      'alumnifeedback': { title: "Alumni Feedback", parent: "Alumni" },
      'alumnifeedbackreport': { title: "Alumni Feedback Report", parent: "Alumni" },

      'contactus': { title: "Contact Details", parent: "Contact Us" },
      'sitemap': { title: "Site Map", parent: "Contact Us" }
    };

    const target = map[slug] || { title: slug.toUpperCase(), parent: "Information" };
    this.renderSubpage(slug, target.title, target.parent);
  },

  // =========================================================================
  // Homepage Renderers
  // =========================================================================
  renderHomeComponents() {
    this.renderNotices();
    this.renderSpotlightGallery();
  },

  renderNotices() {
    const container = document.getElementById('notice-list-container');
    if (!container || typeof COLLEGE_DATA === 'undefined') return;

    let html = '';
    COLLEGE_DATA.notices.forEach(item => {
      const [day, month, year] = item.date.split('/');
      const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
      const monthStr = monthNames[parseInt(month, 10) - 1] || 'NOT';

      html += \`
        <div class="notice-item" style="display:flex; gap:16px; padding:14px 0; border-bottom:1px solid var(--border-subtle); align-items:flex-start;">
          <div class="notice-date-badge" style="flex:0 0 54px; text-align:center; background:var(--primary-dark); color:#ffffff; padding:6px; border-radius:var(--radius-md);">
            <div class="day" style="font-size:1.15rem; font-weight:800; line-height:1;">\${day}</div>
            <div class="month-year" style="font-size:0.65rem; text-transform:uppercase; color:#fbbf24;">\${monthStr} '\${(year||'').slice(-2)}</div>
          </div>
          <div class="notice-details" style="flex:1;">
            <div class="notice-meta-tags" style="display:flex; align-items:center; gap:8px; margin-bottom:4px;">
              <span class="badge badge-primary" style="font-size:0.65rem;">\${item.category}</span>
              \${item.isNew ? '<span class="badge badge-danger" style="font-size:0.65rem;">NEW</span>' : ''}
              <span style="font-size:0.75rem; color:var(--text-subtle);">\${item.rawDate || item.date}</span>
            </div>
            <h4 class="notice-title" style="font-size:0.95rem; font-weight:700; margin:0 0 4px 0; line-height:1.4;">
              <a href="\${item.fileUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--text-main); text-decoration:none;">
                \${item.title}
              </a>
            </h4>
            <p style="font-size:0.8125rem; color:var(--text-muted); margin:0 0 6px 0; line-height:1.5;">\${item.description}</p>
            <a href="\${item.fileUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding:2px 10px; font-size:0.7rem;">
              <i class="fas fa-file-pdf"></i> Download Official Notice PDF
            </a>
          </div>
        </div>
      \`;
    });

    container.innerHTML = html;
  },

  renderSpotlightGallery() {
    const container = document.getElementById('home-spotlight-gallery');
    if (!container || typeof COLLEGE_DATA === 'undefined') return;

    const spotlightPhotos = COLLEGE_DATA.gallery.slice(0, 6);
    container.innerHTML = spotlightPhotos.map((item, idx) => \`
      <div class="spotlight-card" style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); overflow:hidden; box-shadow:var(--shadow-sm); cursor:pointer; transition:transform var(--transition-fast);" onclick="App.openLightbox(\${idx})">
        <div style="height:180px; overflow:hidden; position:relative;">
          <img src="\${item.image}" alt="\${item.title}" style="width:100%; height:100%; object-fit:cover; display:block;">
          <span class="badge" style="position:absolute; top:8px; right:8px; background:rgba(15,23,42,0.85); color:#ffffff; font-size:0.65rem;">\${item.category}</span>
        </div>
        <div style="padding:12px;">
          <div style="font-size:0.7rem; color:var(--text-subtle); font-weight:600;"><i class="far fa-calendar-alt"></i> \${item.date}</div>
          <h5 style="margin:4px 0 0 0; font-size:0.85rem; font-weight:700; color:var(--text-main); line-height:1.3;">\${item.title}</h5>
        </div>
      </div>
    \`).join('');
  },

  // =========================================================================
  // Interactive Feature 1: Admission Fee & Eligibility Calculator
  // =========================================================================
  calculateFee() {
    const courseSelect = document.getElementById('calc-course-select');
    const catSelect = document.getElementById('calc-cat-select');
    const feeDisplay = document.getElementById('calc-fee-display');
    const seatDisplay = document.getElementById('calc-seat-display');
    const eligBox = document.getElementById('calc-eligibility-box');

    if (!courseSelect || !catSelect || typeof COLLEGE_DATA === 'undefined') return;

    const courseCode = courseSelect.value;
    const cat = catSelect.value;
    const course = COLLEGE_DATA.courses.find(c => c.code === courseCode) || COLLEGE_DATA.courses[0];

    let fee = course.annualFeeGen;
    if (cat === 'SC') fee = course.annualFeeSC;
    if (cat === 'BC') fee = course.annualFeeBC;

    if (feeDisplay) feeDisplay.innerText = \`₹ \${fee.toLocaleString('en-IN')} /-\`;
    if (seatDisplay) seatDisplay.innerText = \`Intake: \${course.seats} Sanctioned Seats • Subsidized Govt Fee\`;
    if (eligBox) eligBox.innerHTML = \`<b>Eligibility:</b> \${course.eligibility}\`;
  },

  // =========================================================================
  // Interactive Feature 2: Online Grievance Redressal & Live Status Tracker
  // =========================================================================
  submitGrievance(event) {
    event.preventDefault();
    const name = document.getElementById('grv-name').value.trim();
    const roll = document.getElementById('grv-roll').value.trim();
    const course = document.getElementById('grv-course').value;
    const cat = document.getElementById('grv-category').value;
    const details = document.getElementById('grv-details').value.trim();

    const trackingId = 'GCG-GRV-2026-' + Math.floor(1000 + Math.random() * 9000);
    const date = new Date().toLocaleDateString('en-GB');

    const grvObj = {
      trackingId,
      name,
      roll,
      course,
      category: cat,
      details,
      date,
      status: 'Under Active Review by Grievance Committee',
      step: 2
    };

    const existing = JSON.parse(localStorage.getItem('gcg_grievances') || '[]');
    existing.unshift(grvObj);
    localStorage.setItem('gcg_grievances', JSON.stringify(existing));

    const resultBox = document.getElementById('grv-track-result');
    if (resultBox) {
      resultBox.innerHTML = \`
        <div style="background:rgba(16, 185, 129, 0.1); border:1px solid var(--success); border-radius:var(--radius-md); padding:16px; margin-top:14px;">
          <h4 style="color:var(--success); margin:0 0 6px 0;"><i class="fas fa-check-circle"></i> Grievance Submitted Successfully!</h4>
          <p style="font-size:0.875rem; margin:0 0 8px 0;">Your unique tracking ID is: <b style="color:var(--primary-dark); font-size:1.1rem; background:#ffffff; padding:2px 8px; border-radius:4px; border:1px solid var(--border-medium);">\${trackingId}</b></p>
          <p style="font-size:0.75rem; color:var(--text-muted); margin:0;">Please save this ID to track resolution status. Committee action expected within 7 working days.</p>
        </div>
      \`;
    }

    document.getElementById('grievance-form').reset();
  },

  trackGrievance() {
    const input = document.getElementById('grv-search-id');
    const resultBox = document.getElementById('grv-track-result');
    if (!input || !resultBox) return;

    const id = input.value.trim().toUpperCase();
    if (!id) {
      resultBox.innerHTML = '<div style="color:var(--danger); font-size:0.85rem; padding:8px 0;">Please enter a Tracking ID.</div>';
      return;
    }

    const list = JSON.parse(localStorage.getItem('gcg_grievances') || '[]');
    const found = list.find(g => g.trackingId === id);

    if (found) {
      resultBox.innerHTML = \`
        <div style="background:var(--bg-subtle); border:1px solid var(--border-medium); border-radius:var(--radius-md); padding:16px; margin-top:12px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <span class="badge badge-primary">\${found.trackingId}</span>
            <span style="font-size:0.75rem; color:var(--text-subtle);">Filed on: \${found.date}</span>
          </div>
          <div style="font-size:0.9rem; font-weight:700; color:var(--text-main);">\${found.name} (\${found.course} - \${found.roll})</div>
          <div style="font-size:0.8125rem; color:var(--primary); font-weight:600; margin:4px 0 8px 0;">Category: \${found.category}</div>
          <div style="font-size:0.85rem; color:var(--text-muted); background:#ffffff; padding:8px; border-radius:4px; border:1px solid var(--border-subtle); margin-bottom:8px;">
            "\${found.details}"
          </div>
          <div style="display:flex; align-items:center; gap:6px; font-size:0.85rem; color:var(--success); font-weight:700;">
            <i class="fas fa-spinner fa-spin"></i> Status: \${found.status}
          </div>
        </div>
      \`;
    } else {
      resultBox.innerHTML = \`
        <div style="background:rgba(239, 68, 68, 0.08); border:1px solid var(--danger); border-radius:var(--radius-md); padding:12px; margin-top:12px; font-size:0.85rem; color:var(--danger);">
          <i class="fas fa-exclamation-circle"></i> No record found for Tracking ID "<b>\${id}</b>". Please verify the ID or file a fresh grievance.
        </div>
      \`;
    }
  },

  // =========================================================================
  // Interactive Feature 3: Live Search for Notices
  // =========================================================================
  searchNotices() {
    const input = document.getElementById('notice-search-input');
    const container = document.getElementById('notices-list-container');
    if (!input || !container || typeof COLLEGE_DATA === 'undefined') return;

    const q = input.value.trim().toLowerCase();
    const filtered = COLLEGE_DATA.notices.filter(n => 
      n.title.toLowerCase().includes(q) || 
      n.category.toLowerCase().includes(q) || 
      n.description.toLowerCase().includes(q)
    );

    if (filtered.length === 0) {
      container.innerHTML = \`<div style="text-align:center; padding:30px; color:var(--text-subtle);">No notices matching "\${q}".</div>\`;
      return;
    }

    container.innerHTML = filtered.map(n => \`
      <div class="notice-full-card" style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-left:5px solid var(--primary); border-radius:var(--radius-md); padding:18px; box-shadow:var(--shadow-sm);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:8px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="badge badge-primary">\${n.category}</span>
            \${n.isNew ? '<span class="badge badge-danger">NEW</span>' : ''}
            <span style="font-size:0.8rem; color:var(--text-subtle);"><i class="far fa-calendar-alt"></i> \${n.date}</span>
          </div>
          <a href="\${n.fileUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="padding:4px 12px; font-size:0.75rem;">
            <i class="fas fa-download"></i> View / Download
          </a>
        </div>
        <h4 style="font-size:1.05rem; font-weight:700; color:var(--text-main); margin:8px 0 6px 0;">
          \${n.title}
        </h4>
        <p style="font-size:0.875rem; color:var(--text-muted); margin:0;">\${n.description}</p>
      </div>
    \`).join('');
  },

  // =========================================================================
  // Interactive Feature 4: Gallery Category Filter & Fullscreen Lightbox
  // =========================================================================
  filterGallery(category) {
    const btns = document.querySelectorAll('.gallery-filter-btn');
    btns.forEach(b => {
      if (b.getAttribute('data-cat') === category) {
        b.classList.remove('btn-outline');
        b.classList.add('btn-primary');
      } else {
        b.classList.remove('btn-primary');
        b.classList.add('btn-outline');
      }
    });

    const cards = document.querySelectorAll('.gallery-photo-card');
    cards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      if (category === 'All' || cardCat === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  },

  openLightbox(index) {
    if (typeof COLLEGE_DATA === 'undefined' || !COLLEGE_DATA.gallery) return;
    this.currentLightboxIndex = index;
    const item = COLLEGE_DATA.gallery[index];
    if (!item) return;

    const overlay = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');

    if (overlay && img && caption) {
      img.src = item.image;
      caption.innerHTML = \`
        <div style="font-size:1.05rem; font-weight:800; color:#ffffff; margin-bottom:4px;">\${item.title}</div>
        <div style="font-size:0.8125rem; color:#fbbf24;">\${item.category} • \${item.date}</div>
        <div style="font-size:0.75rem; color:#cbd5e1; margin-top:4px;">Photo \${index + 1} of \${COLLEGE_DATA.gallery.length} • Scraped from gcgnacholi.ac.in</div>
      \`;
      overlay.classList.add('active');
    }
  },

  closeLightbox() {
    const overlay = document.getElementById('lightbox-modal');
    if (overlay) overlay.classList.remove('active');
  },

  prevLightbox() {
    if (typeof COLLEGE_DATA === 'undefined' || !COLLEGE_DATA.gallery) return;
    const len = COLLEGE_DATA.gallery.length;
    this.currentLightboxIndex = (this.currentLightboxIndex - 1 + len) % len;
    this.openLightbox(this.currentLightboxIndex);
  },

  nextLightbox() {
    if (typeof COLLEGE_DATA === 'undefined' || !COLLEGE_DATA.gallery) return;
    const len = COLLEGE_DATA.gallery.length;
    this.currentLightboxIndex = (this.currentLightboxIndex + 1) % len;
    this.openLightbox(this.currentLightboxIndex);
  },

  // =========================================================================
  // Interactive Feature 5: Alumni Submit Action
  // =========================================================================
  submitAlumni(event) {
    event.preventDefault();
    alert('Thank you for registering in the GCG Nacholi Alumni Association! Our alumni coordination team will contact you soon.');
    event.target.reset();
  },

  // =========================================================================
  // Navigation & Dropdowns
  // =========================================================================
  bindNavigation() {
    const links = document.querySelectorAll('[data-slug]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const slug = link.getAttribute('data-slug');
        const title = link.getAttribute('data-title') || link.innerText.trim();
        const parent = link.getAttribute('data-parent') || 'Section';

        if (slug === 'home') {
          window.location.hash = '';
          this.showHomeView();
        } else {
          this.navigateTo(slug, title, parent);
        }

        const navMenu = document.getElementById('nav-menu');
        if (navMenu && window.innerWidth <= 768) {
          navMenu.classList.remove('open');
        }
      });
    });

    const toggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (toggle && navMenu) {
      toggle.addEventListener('click', () => navMenu.classList.toggle('open'));
    }

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      const link = item.querySelector('.nav-link');
      const dropdown = item.querySelector('.dropdown-menu');
      if (dropdown && link) {
        link.addEventListener('click', (e) => {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            item.classList.toggle('open-sub');
          }
        });
      }
    });
  },

  bindHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    if (slides.length === 0) return;

    let current = 0;
    const total = slides.length;

    const showSlide = (idx) => {
      slides.forEach(s => s.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      slides[idx].classList.add('active');
      if (dots[idx]) dots[idx].classList.add('active');
      current = idx;
    };

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => showSlide(idx));
    });

    setInterval(() => {
      let next = (current + 1) % total;
      showSlide(next);
    }, 6000);
  },

  bindAccessibility() {
    const fontBtns = document.querySelectorAll('.font-scale-btn');
    fontBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        fontBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const scale = btn.getAttribute('data-scale');
        document.body.classList.remove('font-sm', 'font-md', 'font-lg');
        document.body.classList.add(\`font-\${scale}\`);
      });
    });

    const themeToggle = document.getElementById('theme-toggle-btn');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const nextTheme = currentTheme === 'light' ? 'dark' : (currentTheme === 'dark' ? 'high-contrast' : 'light');
        document.documentElement.setAttribute('data-theme', nextTheme);
        themeToggle.innerHTML = nextTheme === 'dark' ? '<i class="fas fa-sun"></i>' : (nextTheme === 'high-contrast' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-moon"></i>');
      });
    }
  },

  bindSearch() {
    const openBtn = document.getElementById('open-search-btn');
    const overlay = document.getElementById('search-overlay');
    const closeBtn = document.getElementById('search-close-btn');
    const input = document.getElementById('global-search-input');
    const results = document.getElementById('global-search-results');

    if (openBtn && overlay) {
      openBtn.addEventListener('click', () => {
        overlay.classList.add('active');
        if (input) input.focus();
      });
    }

    if (closeBtn && overlay) {
      closeBtn.addEventListener('click', () => overlay.classList.remove('active'));
    }

    if (input && results) {
      input.addEventListener('input', () => {
        const query = input.value.trim().toLowerCase();
        if (!query || typeof COLLEGE_DATA === 'undefined') {
          results.innerHTML = \`<div style="padding:20px; text-align:center; color:var(--text-subtle);">Type keywords like "Courses", "Faculty", "Admission", "Notices"...</div>\`;
          return;
        }

        let matches = [];

        // Search Courses
        COLLEGE_DATA.courses.forEach(c => {
          if (c.title.toLowerCase().includes(query) || c.description.toLowerCase().includes(query)) {
            matches.push({ type: 'Programme', title: \`\${c.title} (\${c.category})\`, slug: 'programmes', parent: 'Academics' });
          }
        });

        // Search Faculty
        COLLEGE_DATA.faculty.forEach(f => {
          if (f.name.toLowerCase().includes(query) || f.department.toLowerCase().includes(query)) {
            matches.push({ type: 'Faculty', title: \`\${f.name} - \${f.designation}\`, slug: 'faculty', parent: 'Faculty' });
          }
        });

        // Search Notices
        COLLEGE_DATA.notices.forEach(n => {
          if (n.title.toLowerCase().includes(query)) {
            matches.push({ type: 'Notice', title: n.title, slug: 'notices', parent: 'Information Corner' });
          }
        });

        // Search Gallery
        COLLEGE_DATA.gallery.forEach((g, idx) => {
          if (g.title.toLowerCase().includes(query) || g.category.toLowerCase().includes(query)) {
            if (matches.length < 10) {
              matches.push({ type: 'Photo/Event', title: g.title, slug: 'gallery', parent: 'Media' });
            }
          }
        });

        if (matches.length === 0) {
          results.innerHTML = \`<div style="padding:20px; text-align:center; color:var(--text-subtle);">No matching results found for "\${query}".</div>\`;
        } else {
          results.innerHTML = matches.map(m => \`
            <div class="search-result-row" onclick="App.navigateTo('\${m.slug}', '\${m.title}', '\${m.parent}'); document.getElementById('search-overlay').classList.remove('active');" style="cursor:pointer; padding:12px; border-bottom:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
              <div>
                <span class="badge badge-primary" style="font-size:0.7rem; margin-right:8px;">\${m.type}</span>
                <span style="font-size:0.9rem; font-weight:600; color:var(--text-main);">\${m.title}</span>
              </div>
              <i class="fas fa-chevron-right" style="font-size:0.75rem; color:var(--text-subtle);"></i>
            </div>
          \`).join('');
        }
      });
    }
  },

  bindModals() {
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxOverlay = document.getElementById('lightbox-modal');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');

    if (lightboxClose) lightboxClose.addEventListener('click', () => this.closeLightbox());
    if (lightboxOverlay) {
      lightboxOverlay.addEventListener('click', (e) => {
        if (e.target === lightboxOverlay) this.closeLightbox();
      });
    }
    if (lightboxPrev) lightboxPrev.addEventListener('click', () => this.prevLightbox());
    if (lightboxNext) lightboxNext.addEventListener('click', () => this.nextLightbox());

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeLightbox();
        const search = document.getElementById('search-overlay');
        if (search) search.classList.remove('active');
      } else if (e.key === 'ArrowLeft') {
        this.prevLightbox();
      } else if (e.key === 'ArrowRight') {
        this.nextLightbox();
      }
    });
  },

  bindBackToTop() {
    const btn = document.getElementById('back-to-top-btn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.style.opacity = '1';
        btn.style.visibility = 'visible';
      } else {
        btn.style.opacity = '0';
        btn.style.visibility = 'hidden';
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
`;

fs.writeFileSync(path.join(__dirname, '..', 'js', 'app.js'), appJsContent, 'utf8');
console.log('Successfully updated js/app.js!');
