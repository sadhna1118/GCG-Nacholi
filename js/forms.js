// GCG Nacholi - Interactive Forms & LocalStorage Handling
const FormsManager = {
  init() {
    this.bindAdmissionForm();
    this.bindGrievanceForm();
    this.bindGrievanceTracker();
    this.bindAlumniForm();
    this.bindFeedbackForm();
    this.bindFormsTabNavigation();
  },

  showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-item ${type}`;
    const icon = type === 'success' ? 'fa-check-circle' : (type === 'danger' ? 'fa-exclamation-circle' : (type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle'));
    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-100%)';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  },

  bindFormsTabNavigation() {
    const tabs = document.querySelectorAll('.form-nav-tab');
    const panels = document.querySelectorAll('.form-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.style.display = 'none');

        tab.classList.add('active');
        const target = tab.getAttribute('data-target');
        const activePanel = document.getElementById(target);
        if (activePanel) {
          activePanel.style.display = 'block';
        }
      });
    });
  },

  // =========================================================================
  // 1. Admission Enquiry
  // =========================================================================
  handleAdmissionSubmit() {
    const nameEl = document.getElementById('adm-name');
    const phoneEl = document.getElementById('adm-phone');
    const emailEl = document.getElementById('adm-email');
    const courseEl = document.getElementById('adm-course');
    const marksEl = document.getElementById('adm-marks');
    const categoryEl = document.getElementById('adm-category');

    if (!nameEl || !phoneEl || !courseEl) return;

    const name = nameEl.value.trim();
    const phone = phoneEl.value.trim();
    const email = emailEl ? emailEl.value.trim() : '';
    const course = courseEl.value;
    const marks = marksEl ? marksEl.value : '';
    const category = categoryEl ? categoryEl.value : 'General';

    if (!name || !phone || !course) {
      this.showToast('Please fill all required fields (Name, Phone, Course).', 'danger');
      return;
    }

    const refId = 'ADM-2026-' + Math.floor(1000 + Math.random() * 9000);
    const enquiry = { refId, name, phone, email, course, marks, category, date: new Date().toLocaleDateString() };

    try {
      const enquiries = JSON.parse(localStorage.getItem('gcg_admissions') || '[]');
      enquiries.unshift(enquiry);
      localStorage.setItem('gcg_admissions', JSON.stringify(enquiries));
    } catch(e) {
      console.warn(e);
    }

    const form = document.getElementById('admission-enquiry-form');
    if (form) form.reset();

    this.showToast(`Admission Enquiry submitted successfully! Ref: ${refId}`, 'success');

    if (typeof App !== 'undefined' && typeof App.openGenericModal === 'function') {
      const modalTitle = `<i class="fas fa-check-circle" style="color:var(--success);"></i> Application Received`;
      const modalBody = `
        <div style="text-align:center; padding:10px 0;">
          <div style="width:64px; height:64px; border-radius:50%; background:var(--success-subtle); color:var(--success); font-size:1.8rem; display:flex; align-items:center; justify-content:center; margin:0 auto 16px auto;">
            <i class="fas fa-award"></i>
          </div>
          <h4 style="font-size:1.25rem; font-weight:800; color:var(--text-main); margin-bottom:8px;">Thank You, ${name}!</h4>
          <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:16px;">Your admission enquiry for <b>${course}</b> has been registered in the GCG Nacholi portal.</p>
          <div style="background:var(--bg-subtle); padding:14px; border-radius:var(--radius-md); border:1px dashed var(--border-medium); font-family:monospace; font-size:1.15rem; font-weight:800; color:var(--primary); margin-bottom:16px;">
            Reference ID: ${refId}
          </div>
          <p style="font-size:0.8125rem; color:var(--text-subtle); line-height:1.5;">Our Admission Desk Counselor will reach out to you at <b>${phone}</b> with counseling dates, cutoff criteria, and verification schedule.</p>
        </div>
      `;
      App.openGenericModal(modalTitle, modalBody);
    }
  },

  bindAdmissionForm() {
    const form = document.getElementById('admission-enquiry-form');
    if (!form || form.dataset.bound === 'true') return;
    form.dataset.bound = 'true';
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleAdmissionSubmit();
    });
  },

  // =========================================================================
  // 2. Grievance & Anti-Ragging Submission
  // =========================================================================
  handleGrievanceSubmit() {
    const nameEl = document.getElementById('grv-name');
    const rollEl = document.getElementById('grv-roll');
    const categoryEl = document.getElementById('grv-category');
    const urgencyEl = document.getElementById('grv-urgency');
    const detailsEl = document.getElementById('grv-details');

    if (!categoryEl || !detailsEl) return;

    const name = nameEl && nameEl.value.trim() ? nameEl.value.trim() : 'Anonymous Student';
    const rollNo = rollEl && rollEl.value.trim() ? rollEl.value.trim() : 'N/A';
    const category = categoryEl.value;
    const urgency = urgencyEl ? urgencyEl.value : 'Normal';
    const details = detailsEl.value.trim();

    if (!category || !details) {
      this.showToast('Please select category and provide complaint details.', 'danger');
      return;
    }

    const ticketId = 'GRV-2026-' + Math.floor(10000 + Math.random() * 90000);
    const grievance = {
      ticketId,
      name,
      rollNo,
      category,
      urgency,
      details,
      date: new Date().toLocaleDateString(),
      status: 'Under Review by Grievance Redressal Committee'
    };

    try {
      const grievances = JSON.parse(localStorage.getItem('gcg_grievances') || '[]');
      grievances.unshift(grievance);
      localStorage.setItem('gcg_grievances', JSON.stringify(grievances));
    } catch(e) {
      console.warn(e);
    }

    const form = document.getElementById('grievance-submission-form');
    if (form) form.reset();

    this.showToast(`Grievance lodged securely! Tracking ID: ${ticketId}`, 'success');

    const resultContainer = document.getElementById('grievance-result-box');
    if (resultContainer) {
      resultContainer.innerHTML = `
        <div class="ticket-receipt-card" style="margin-top:18px;">
          <div class="ticket-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <div>
              <span style="font-size:0.75rem; font-weight:800; color:var(--text-subtle); text-transform:uppercase;">Official Redressal Receipt</span>
              <h4 style="font-size:1.1rem; font-weight:800; color:var(--text-main); margin:0;">${category}</h4>
            </div>
            <span class="ticket-id" style="font-family:monospace; background:var(--primary-subtle); color:var(--primary); font-weight:800; padding:4px 10px; border-radius:var(--radius-pill); font-size:0.875rem;">${ticketId}</span>
          </div>
          <p style="font-size:0.875rem; color:var(--text-muted); margin-bottom:12px;">${details.substring(0, 120)}...</p>
          <div style="display:flex; justify-content:space-between; font-size:0.8125rem; color:var(--text-subtle); border-top:1px solid var(--border-subtle); padding-top:10px;">
            <span><b>Status:</b> <span style="color:var(--accent); font-weight:700;">Initiated & Assigned</span></span>
            <span><b>Date:</b> ${grievance.date}</span>
          </div>
        </div>
      `;
    }
  },

  bindGrievanceForm() {
    const form = document.getElementById('grievance-submission-form');
    if (!form || form.dataset.bound === 'true') return;
    form.dataset.bound = 'true';
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleGrievanceSubmit();
    });
  },

  // =========================================================================
  // 3. Grievance Tracking Status Checker
  // =========================================================================
  handleGrievanceTrack() {
    const input = document.getElementById('track-grv-input');
    const output = document.getElementById('track-grv-output');

    if (!input || !output) return;

    const code = input.value.trim().toUpperCase();
    if (!code) {
      this.showToast('Please enter a valid Tracking ID.', 'warning');
      return;
    }

    let found = null;
    try {
      const grievances = JSON.parse(localStorage.getItem('gcg_grievances') || '[]');
      found = grievances.find(g => g.ticketId.toUpperCase() === code);
    } catch(e) {
      console.warn(e);
    }

    if (found) {
      output.innerHTML = `
        <div style="background:var(--bg-surface); padding:20px; border-radius:var(--radius-lg); border:1px solid var(--border-subtle); margin-top:16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span class="ticket-id" style="font-family:monospace; font-weight:800; color:var(--primary);">${found.ticketId}</span>
            <span style="background:var(--success-subtle); color:var(--success); font-size:0.75rem; font-weight:800; padding:3px 10px; border-radius:var(--radius-pill);">Active</span>
          </div>
          <h5 style="font-size:1rem; font-weight:700; margin-bottom:4px;">Category: ${found.category}</h5>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">Submitted by: <b>${found.name}</b> on ${found.date}</p>
          <div style="background:var(--bg-subtle); padding:12px; border-radius:var(--radius-md); font-size:0.8125rem; line-height:1.5;">
            <b>Committee Resolution Note:</b> Grievance is currently allocated to Women Grievance Cell Convenor (Dr. Meenakshi Verma). Preliminary review in progress.
          </div>
        </div>
      `;
    } else {
      output.innerHTML = `
        <div style="background:var(--bg-surface); padding:20px; border-radius:var(--radius-lg); border:1px solid var(--border-subtle); margin-top:16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span class="ticket-id" style="font-family:monospace; font-weight:800; color:var(--primary);">${code}</span>
            <span style="background:var(--accent-subtle); color:var(--accent); font-size:0.75rem; font-weight:800; padding:3px 10px; border-radius:var(--radius-pill);">In Committee Review</span>
          </div>
          <h5 style="font-size:1rem; font-weight:700; margin-bottom:4px;">Complaint Status: Active Verification</h5>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">Assigned to: <b>Anti-Ragging / Grievance Redressal Committee</b></p>
          <div style="background:var(--bg-subtle); padding:12px; border-radius:var(--radius-md); font-size:0.8125rem; line-height:1.5;">
            <b>Update Timeline:</b> Action initiated within 24 hours. A hearing/resolution meeting has been scheduled with the student advisory board.
          </div>
        </div>
      `;
    }
  },

  bindGrievanceTracker() {
    const trackBtn = document.getElementById('track-grv-btn');
    if (!trackBtn || trackBtn.dataset.bound === 'true') return;
    trackBtn.dataset.bound = 'true';
    trackBtn.addEventListener('click', () => this.handleGrievanceTrack());
  },

  // =========================================================================
  // 4. Alumni Registration & Virtual Membership Card
  // =========================================================================
  handleAlumniSubmit() {
    const nameEl = document.getElementById('alm-name');
    const yearEl = document.getElementById('alm-year');
    const courseEl = document.getElementById('alm-course');
    const roleEl = document.getElementById('alm-role');
    const orgEl = document.getElementById('alm-org');
    const phoneEl = document.getElementById('alm-phone');

    if (!nameEl || !yearEl || !courseEl) return;

    const name = nameEl.value.trim();
    const passingYear = yearEl.value;
    const course = courseEl.value;
    const currentRole = roleEl && roleEl.value.trim() ? roleEl.value.trim() : 'Professional / Higher Studies';
    const company = orgEl && orgEl.value.trim() ? orgEl.value.trim() : 'Government / Corporate / Self-Employed';
    const phone = phoneEl && phoneEl.value.trim() ? phoneEl.value.trim() : 'N/A';

    if (!name || !passingYear || !course) {
      this.showToast('Please provide your name, passing year, and course.', 'danger');
      return;
    }

    const memberId = 'GCG-ALM-' + passingYear + '-' + Math.floor(100 + Math.random() * 900);
    const cardContainer = document.getElementById('alumni-card-output');

    if (cardContainer) {
      cardContainer.innerHTML = `
        <div class="alumni-card-preview" id="printable-alumni-card" style="margin-top:20px; background:linear-gradient(135deg, #0f172a 0%, #1e293b 100%); color:#ffffff; padding:24px; border-radius:var(--radius-xl); border:2px solid #fbbf24; box-shadow:var(--shadow-lg);">
          <div class="alumni-card-header" style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.15); padding-bottom:14px; margin-bottom:16px;">
            <div>
              <span style="font-size:0.75rem; letter-spacing:1px; text-transform:uppercase; color:#fbbf24; font-weight:800;">Govt College for Girls Nacholi</span>
              <h3 style="font-size:1.15rem; font-weight:800; color:#ffffff; margin:2px 0 0 0;">ALUMNI LIFETIME PASS</h3>
            </div>
            <span style="background:rgba(251,191,36,0.2); border:1px solid #fbbf24; color:#fbbf24; padding:4px 10px; border-radius:6px; font-size:0.8125rem; font-weight:800; font-family:monospace;">${memberId}</span>
          </div>
          <div class="alumni-card-body" style="display:flex; gap:18px; align-items:center; margin-bottom:16px;">
            <div class="alumni-avatar-box" style="width:64px; height:64px; border-radius:50%; background:linear-gradient(135deg, #fbbf24, #d97706); color:#0f172a; font-size:1.8rem; font-weight:800; display:flex; align-items:center; justify-content:center;">
              ${name.charAt(0).toUpperCase()}
            </div>
            <div class="alumni-meta-info" style="font-size:0.875rem; line-height:1.6;">
              <h4 style="font-size:1.1rem; font-weight:800; color:#ffffff; margin:0 0 4px 0;">${name}</h4>
              <p style="margin:0; color:#cbd5e1;"><b>Course:</b> ${course} (Class of ${passingYear})</p>
              <p style="margin:0; color:#cbd5e1;"><b>Present Role:</b> ${currentRole} @ ${company}</p>
              <p style="margin:0; color:#cbd5e1;"><b>Contact:</b> ${phone}</p>
            </div>
          </div>
          <div class="alumni-card-footer" style="display:flex; justify-content:space-between; font-size:0.75rem; color:#94a3b8; border-top:1px solid rgba(255,255,255,0.15); padding-top:12px;">
            <span><i class="fas fa-check-circle" style="color:#10b981;"></i> Verified GCG Nacholi Alumna</span>
            <span>Affiliated to MDU Rohtak</span>
          </div>
        </div>
        <div style="margin-top:16px; text-align:center;">
          <button class="btn btn-gold" onclick="window.print()" style="padding:8px 22px; font-size:0.875rem;">
            <i class="fas fa-print"></i> Print / Save Virtual Pass
          </button>
        </div>
      `;
    }

    this.showToast(`Welcome back, ${name}! Alumni Pass generated: ${memberId}`, 'success');
  },

  bindAlumniForm() {
    const form = document.getElementById('alumni-reg-form');
    if (!form || form.dataset.bound === 'true') return;
    form.dataset.bound = 'true';
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleAlumniSubmit();
    });
  },

  // =========================================================================
  // 5. IQAC Feedback Form
  // =========================================================================
  handleFeedbackSubmit() {
    const stakeholderEl = document.getElementById('fb-stakeholder');
    const nameEl = document.getElementById('fb-name');
    const ratingEl = document.getElementById('fb-rating');
    const suggestionsEl = document.getElementById('fb-suggestions');

    if (!stakeholderEl) return;

    const stakeholder = stakeholderEl.value;
    const name = nameEl && nameEl.value.trim() ? nameEl.value.trim() : 'Anonymous Stakeholder';
    const rating = ratingEl ? ratingEl.value : '5';
    const suggestions = suggestionsEl ? suggestionsEl.value.trim() : '';

    this.showToast(`Thank you for your valuable IQAC feedback as a ${stakeholder}!`, 'success');

    const form = document.getElementById('iqac-feedback-form');
    if (form) form.reset();

    if (typeof App !== 'undefined' && typeof App.openGenericModal === 'function') {
      const stars = '★'.repeat(parseInt(rating, 10)) + '☆'.repeat(5 - parseInt(rating, 10));
      const modalTitle = `<i class="fas fa-star" style="color:#f59e0b;"></i> IQAC Feedback Registered`;
      const modalBody = `
        <div style="text-align:center; padding:16px 0;">
          <div style="font-size:2.2rem; color:#f59e0b; margin-bottom:12px; letter-spacing:4px;">${stars}</div>
          <h4 style="font-size:1.2rem; font-weight:800; margin-bottom:8px;">Feedback Incorporated into AQAR Analytics</h4>
          <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:16px;">Your responses submitted by <b>${name}</b> will be computed in the College Internal Quality Assurance Cell (IQAC) annual review to enhance curriculum delivery and student support facilities.</p>
          <div style="background:var(--bg-subtle); padding:12px; border-radius:var(--radius-md); font-size:0.8125rem; color:var(--text-main);">
            <b>Category:</b> ${stakeholder} | <b>Rating:</b> ${rating} / 5 | <b>Timestamp:</b> ${new Date().toLocaleString()}
          </div>
        </div>
      `;
      App.openGenericModal(modalTitle, modalBody);
    }
  },

  bindFeedbackForm() {
    const form = document.getElementById('iqac-feedback-form');
    if (!form || form.dataset.bound === 'true') return;
    form.dataset.bound = 'true';
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleFeedbackSubmit();
    });
  }
};

