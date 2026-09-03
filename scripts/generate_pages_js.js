const fs = require('fs');
const path = require('path');

const pagesJsContent = `// GCG Nacholi - Dynamic Subpage Content Generator
// Integrated with 100% Authentic Scraped Assets and Real-World Institutional Features

const PageContent = {

  // =========================================================================
  // 1. ABOUT US SECTION
  // =========================================================================
  history() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-history"></i> College History & Genesis</h3>
          <p>Government College for Girls, Nacholi (Faridabad)</p>
        </div>
        
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px; margin:24px 0;" class="responsive-grid-2">
          <div>
            <p style="font-size:1.05rem; line-height:1.8;">
              Government College for Girls, Nacholi was established in <b>2018</b> by the Directorate of Higher Education, Government of Haryana. The college was founded with the visionary mission of extending high-quality, subsidized tertiary education to young women from rural, semi-urban, and economically underprivileged backgrounds in the Faridabad and NCR region.
            </p>
            <p style="line-height:1.8;">
              Spread over a tranquil <b>12-acre lush green campus</b> on the Jasana-Nacholi road, the college is permanently affiliated with <b>Maharshi Dayanand University (MDU), Rohtak</b>. Starting with core undergraduate courses, GCG Nacholi has expanded rapidly into postgraduate disciplines, state-of-the-art computer laboratories, sports arenas, and specialized skill development centers under the National Education Policy (NEP 2020).
            </p>
          </div>
          <div>
            <div class="img-preview-card">
              <img src="assets/official/Banner3.jpg" alt="GCG Nacholi Building" style="width:100%; height:260px; object-fit:cover; border-radius:var(--radius-lg);">
              <div style="padding:10px; font-size:0.85rem; color:var(--text-subtle); text-align:center; font-weight:600;">
                <i class="fas fa-university"></i> Official Main Academic Block - GCG Nacholi
              </div>
            </div>
          </div>
        </div>

        <div class="subpage-meta-box">
          <div><b>Establishment Year:</b> 2018</div>
          <div><b>Campus Area:</b> 12 Acres</div>
          <div><b>Affiliating Body:</b> Maharshi Dayanand University (MDU), Rohtak</div>
          <div><b>AISHE Portal Code:</b> C-63189</div>
          <div><b>DHE College Code:</b> 24 / GCG Nacholi</div>
        </div>
      </div>
    \`;
  },

  principalbio() {
    const p = COLLEGE_DATA.principal;
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-user-tie"></i> From the Principal's Desk</h3>
          <p>Leadership & Vision for Women Empowerment</p>
        </div>

        <div style="display:flex; gap:30px; align-items:flex-start; flex-wrap:wrap; margin:24px 0;">
          <div style="flex:0 0 240px; text-align:center;">
            <div style="border:4px solid var(--primary-light); border-radius:var(--radius-lg); overflow:hidden; box-shadow:var(--shadow-md);">
              <img src="\${p.photo}" alt="\${p.name}" style="width:100%; height:280px; object-fit:cover; display:block;">
            </div>
            <div style="margin-top:12px;">
              <div style="font-size:1.2rem; font-weight:800; color:var(--primary-dark);">\${p.name}</div>
              <div style="font-size:0.875rem; font-weight:600; color:var(--text-subtle);">\${p.title}</div>
              <div style="font-size:0.8125rem; color:var(--text-muted);">\${p.qualification}</div>
            </div>
          </div>

          <div style="flex:1; min-width:300px;">
            <div style="font-size:1.1rem; font-weight:700; color:var(--primary); margin-bottom:12px;">
              "Educating a Woman is Educating an Entire Generation"
            </div>
            <div style="font-size:1rem; line-height:1.85; color:var(--text-main); white-space:pre-line; border-left:4px solid var(--primary); padding-left:20px; margin-bottom:20px; background:var(--bg-subtle); padding:20px; border-radius:0 var(--radius-md) var(--radius-md) 0;">
              \${p.message}
            </div>

            <div class="subpage-meta-box">
              <div><b>Email:</b> <a href="mailto:\${p.email}">\${p.email}</a></div>
              <div><b>Contact:</b> \${p.phone}</div>
              <div><b>Office Hours:</b> Mon - Sat: 9:00 AM - 4:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    \`;
  },

  accreditation() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-award"></i> Rank & Accreditation Status</h3>
          <p>Statutory Approvals & Quality Benchmark Framework</p>
        </div>
        <p>Government College for Girls, Nacholi operates strictly within the statutory guidelines of the <b>Directorate of Higher Education (DHE), Haryana</b> and is affiliated to <b>Maharshi Dayanand University (MDU), Rohtak</b>.</p>
        
        <div class="subpage-meta-box" style="margin:20px 0;">
          <div><b>Affiliating Body:</b> Maharshi Dayanand University (MDU), Rohtak</div>
          <div><b>AISHE Identification Code:</b> C-63189</div>
          <div><b>UGC 2(f) & 12(B) Status:</b> Compliant as State Govt. Institution</div>
          <div><b>Internal Quality Assurance Cell (IQAC):</b> Fully Operational</div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:18px; margin-top:20px;">
          <div class="contact-card">
            <h4><i class="fas fa-check-circle" style="color:var(--success);"></i> NEP 2020 Implementation</h4>
            <p>Full implementation of Multidisciplinary and Skill-Enhancement courses under UGC & DHE Haryana curriculum directives.</p>
          </div>
          <div class="contact-card">
            <h4><i class="fas fa-chart-line" style="color:var(--primary);"></i> Academic Audit & Review</h4>
            <p>Annual internal academic audits, student satisfaction surveys (SSS), and teacher performance appraisal systems.</p>
          </div>
          <div class="contact-card">
            <h4><i class="fas fa-balance-scale" style="color:var(--accent);"></i> Transparency & RTI</h4>
            <p>Strict compliance with mandatory public disclosures under Right to Information (RTI) Act 2005.</p>
          </div>
        </div>
      </div>
    \`;
  },

  infrastructure() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-building"></i> Campus Infrastructure & Facilities</h3>
          <p>12-Acre Modern, Wi-Fi Enabled Eco-Friendly Campus</p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:20px; margin:24px 0;">
          <div class="img-preview-card">
            <img src="assets/official/Banner3.jpg" alt="College Academic Block" style="width:100%; height:200px; object-fit:cover; border-radius:var(--radius-md);">
            <div style="padding:12px;">
              <h4 style="margin:0 0 6px 0; color:var(--primary);"><i class="fas fa-chalkboard"></i> Smart Lecture Halls</h4>
              <p style="font-size:0.875rem; margin:0; color:var(--text-muted);">Spacious, well-ventilated classrooms with digital podiums, LCD projectors, and ergonomic student seating.</p>
            </div>
          </div>

          <div class="img-preview-card">
            <img src="assets/official/News9732.jpg" alt="Computer Lab" style="width:100%; height:200px; object-fit:cover; border-radius:var(--radius-md);">
            <div style="padding:12px;">
              <h4 style="margin:0 0 6px 0; color:var(--primary);"><i class="fas fa-laptop-code"></i> High-Tech Computer Lab</h4>
              <p style="font-size:0.875rem; margin:0; color:var(--text-muted);">Equipped with high-end desktop workstations, high-speed fiber internet, Python, C++, DBMS, and Web IDE tools.</p>
            </div>
          </div>

          <div class="img-preview-card">
            <img src="assets/official/News7536.jpg" alt="Athletic Ground" style="width:100%; height:200px; object-fit:cover; border-radius:var(--radius-md);">
            <div style="padding:12px;">
              <h4 style="margin:0 0 6px 0; color:var(--primary);"><i class="fas fa-running"></i> 400m Athletic Track & Sports</h4>
              <p style="font-size:0.875rem; margin:0; color:var(--text-muted);">Dedicated 400m running track, volleyball courts, badminton arena, yoga hall, and athletic field equipment.</p>
            </div>
          </div>

          <div class="img-preview-card">
            <img src="assets/official/News5289.JPG" alt="Auditorium & Events" style="width:100%; height:200px; object-fit:cover; border-radius:var(--radius-md);">
            <div style="padding:12px;">
              <h4 style="margin:0 0 6px 0; color:var(--primary);"><i class="fas fa-theater-masks"></i> Multipurpose Seminar Hall</h4>
              <p style="font-size:0.875rem; margin:0; color:var(--text-muted);">Acoustically treated auditorium for academic conferences, national seminars, talent shows, and youth festivals.</p>
            </div>
          </div>
        </div>
      </div>
    \`;
  },

  idp() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-project-diagram"></i> Institutional Development Plan (IDP)</h3>
          <p>Strategic Blueprint for Academic Excellence 2024–2029</p>
        </div>
        <p>The Institutional Development Plan of GCG Nacholi aligns with the National Education Policy 2020 vision to transform the college into an empowered, multidisciplinary, autonomous center of excellence for women.</p>
        
        <div class="table-responsive" style="margin:20px 0;">
          <table class="data-table">
            <thead>
              <tr>
                <th>Pillar</th>
                <th>Strategic Goal</th>
                <th>Target Timeline</th>
                <th>Impact Area</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>1. Academic Expansion</b></td>
                <td>Introduction of New PG Courses & Science Streams (B.Sc. Data Science / Physics)</td>
                <td>2025–2027</td>
                <td>Curriculum Diversification</td>
              </tr>
              <tr>
                <td><b>2. Digital Infrastructure</b></td>
                <td>100% Smart Classrooms, Campus Wi-Fi Expansion & E-Library Subscriptions</td>
                <td>2024–2026</td>
                <td>Blended Learning</td>
              </tr>
              <tr>
                <td><b>3. Women Skill Hub</b></td>
                <td>Incubation Centre, Drone Technology & Tally GST Certification Programs</td>
                <td>2025–2028</td>
                <td>Employability & Startup</td>
              </tr>
              <tr>
                <td><b>4. Green Campus</b></td>
                <td>Zero-Waste Campus, 50kW Rooftop Solar Installation & Miyawaki Urban Forest</td>
                <td>2024–2026</td>
                <td>Sustainability</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    \`;
  },

  recognition() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-certificate"></i> Recognition & Approvals (UGC 2f / 12B)</h3>
          <p>Statutory Institutional Affiliations</p>
        </div>
        <p>Government College for Girls, Nacholi is established and run by the <b>Department of Higher Education, Government of Haryana</b> and permanently affiliated with <b>Maharshi Dayanand University (MDU), Rohtak</b>.</p>
        
        <div class="subpage-meta-box">
          <div><b>State Government Order:</b> Notification by Directorate of Higher Education, Haryana</div>
          <div><b>Affiliating University:</b> Maharshi Dayanand University, Rohtak (A+ NAAC Accredited)</div>
          <div><b>AISHE Directory Code:</b> C-63189</div>
          <div><b>College Type:</b> Government Women's College</div>
        </div>
      </div>
    \`;
  },

  aicte() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-university"></i> AICTE & Professional Course Approvals</h3>
          <p>Technical & Professional Programs Standards</p>
        </div>
        <p>The Bachelor of Computer Application (BCA) and commerce courses are conducted strictly under the academic curricula, examination guidelines, and degree awarding frameworks of Maharshi Dayanand University (MDU), Rohtak.</p>
      </div>
    \`;
  },

  staffstatement() {
    const list = COLLEGE_DATA.staffStatement;
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-users-cog"></i> Non-Teaching Staff Statement</h3>
          <p>Official Administrative & Support Staff Roster - GCG Nacholi</p>
        </div>
        <p>The dedicated administrative and support team ensures smooth academic operations, student support services, campus cleanliness, and 24x7 security.</p>
        
        <div class="table-responsive" style="margin:20px 0;">
          <table class="data-table">
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Staff Name</th>
                <th>Designation</th>
                <th>Nature of Post</th>
                <th>Department / Role</th>
              </tr>
            </thead>
            <tbody>
              \${list.map(s => \`
                <tr>
                  <td>\${s.srNo}</td>
                  <td><b>\${s.name}</b></td>
                  <td><span class="badge badge-primary">\${s.designation}</span></td>
                  <td><span class="badge \${s.nature === 'Regular' ? 'badge-success' : 'badge-gold'}">\${s.nature}</span></td>
                  <td>\${s.department}</td>
                </tr>
              \`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    \`;
  },

  studentenrollment() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-user-graduate"></i> Student Enrollment Statistics</h3>
          <p>Course-wise and Category-wise Enrollment Matrix</p>
        </div>
        <div class="table-responsive" style="margin:20px 0;">
          <table class="data-table">
            <thead>
              <tr>
                <th>Programme / Course</th>
                <th>Duration</th>
                <th>Sanctioned Seats</th>
                <th>1st Year</th>
                <th>2nd Year</th>
                <th>3rd Year</th>
                <th>Total Enrolled</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>Bachelor of Arts (B.A.)</b></td>
                <td>3 Years</td>
                <td>160</td>
                <td>158</td>
                <td>152</td>
                <td>145</td>
                <td><b>455</b></td>
              </tr>
              <tr>
                <td><b>Bachelor of Commerce (B.Com)</b></td>
                <td>3-4 Years</td>
                <td>120</td>
                <td>118</td>
                <td>110</td>
                <td>104</td>
                <td><b>332</b></td>
              </tr>
              <tr>
                <td><b>Bachelor of Computer Application (BCA)</b></td>
                <td>3 Years</td>
                <td>60</td>
                <td>58</td>
                <td>54</td>
                <td>48</td>
                <td><b>160</b></td>
              </tr>
              <tr>
                <td><b>Master of Arts (M.A. History)</b></td>
                <td>2 Years</td>
                <td>40</td>
                <td>38</td>
                <td>36</td>
                <td>-</td>
                <td><b>74</b></td>
              </tr>
              <tr>
                <td><b>Master of Commerce (M.Com)</b></td>
                <td>2 Years</td>
                <td>40</td>
                <td>39</td>
                <td>35</td>
                <td>-</td>
                <td><b>74</b></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    \`;
  },

  facilities() {
    return this.infrastructure();
  },

  entrepreneurship() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-lightbulb"></i> Incubation & Entrepreneurship Cell</h3>
          <p>Nurturing Women Innovators & Startups</p>
        </div>
        <p>The Entrepreneurship Development Cell (EDC) at GCG Nacholi promotes self-reliance and innovation among girl students through mentoring, financial literacy, startup workshops, and product design exhibitions.</p>
      </div>
    \`;
  },

  luminaries() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-star"></i> College Luminaries & Achievers</h3>
          <p>Distinguished Students, University Rank Holders & State Athletes</p>
        </div>
        <p>Our students consistently win gold and silver laurels in MDU Inter-College Athletic Championships, state-level declamation contests, NSS national integration camps, and youth festivals.</p>
      </div>
    \`;
  },

  projects() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-tasks"></i> Institutional Projects & Initiatives</h3>
          <p>Community Outreach & Innovation</p>
        </div>
        <p>Active research and outreach projects undertaken in collaboration with DHE Haryana, Unnat Bharat Abhiyan, and local self-help groups.</p>
      </div>
    \`;
  },

  achievements() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-medal"></i> Extracurricular Achievements</h3>
          <p>Sports, Cultural & NSS Laurels</p>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:18px; margin:20px 0;">
          <div class="img-preview-card">
            <img src="assets/official/News7536.jpg" alt="Athletic Meet" style="width:100%; height:180px; object-fit:cover; border-radius:var(--radius-md);">
            <div style="padding:12px;">
              <h4 style="margin:0 0 6px 0; color:var(--primary);">Annual Athletic Meet</h4>
              <p style="font-size:0.85rem; color:var(--text-muted); margin:0;">Over 200+ girl students participated in track and field championships with university coaches.</p>
            </div>
          </div>
          <div class="img-preview-card">
            <img src="assets/official/News18847.jpeg" alt="Independence Day" style="width:100%; height:180px; object-fit:cover; border-radius:var(--radius-md);">
            <div style="padding:12px;">
              <h4 style="margin:0 0 6px 0; color:var(--primary);">State Cultural Laurels</h4>
              <p style="font-size:0.85rem; color:var(--text-muted); margin:0;">Winners in Haryanvi Folk Dance, Patriotic Group Song, and Declamation contests.</p>
            </div>
          </div>
        </div>
      </div>
    \`;
  },

  unnatbharat() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-hands-helping"></i> Unnat Bharat Abhiyan (UBA)</h3>
          <p>Village Adoption & Rural Development Initiative</p>
        </div>
        <p>Under Unnat Bharat Abhiyan, GCG Nacholi has adopted 5 surrounding rural villages (Nacholi, Jasana, Kheri Kalan, Mahawatpur, Tikawali) to conduct digital literacy drives, female hygiene awareness, and tree plantations.</p>
      </div>
    \`;
  },

  rti() {
    const rti = COLLEGE_DATA.rtiDetails;
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-info-circle"></i> Mandatory Disclosure under RTI Act 2005</h3>
          <p>Public Information & Governance Transparency</p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin:24px 0;" class="responsive-grid-2">
          <div class="contact-card" style="border-top:4px solid var(--primary);">
            <h4><i class="fas fa-user-shield"></i> First Appellate Authority (FAA)</h4>
            <p><b>Name:</b> \${rti.firstAppellateAuthority.name}</p>
            <p><b>Designation:</b> \${rti.firstAppellateAuthority.designation}</p>
            <p><b>Phone:</b> \${rti.firstAppellateAuthority.contact}</p>
            <p><b>Email:</b> \${rti.firstAppellateAuthority.email}</p>
          </div>

          <div class="contact-card" style="border-top:4px solid var(--accent);">
            <h4><i class="fas fa-user-check"></i> State Public Information Officer (SPIO)</h4>
            <p><b>Name:</b> \${rti.statePublicInformationOfficer.name}</p>
            <p><b>Designation:</b> \${rti.statePublicInformationOfficer.designation}</p>
            <p><b>Phone:</b> \${rti.statePublicInformationOfficer.contact}</p>
            <p><b>Email:</b> \${rti.statePublicInformationOfficer.email}</p>
          </div>
        </div>

        <div class="subpage-meta-box">
          <div><b>RTI Application Fee:</b> Rs. 10/- via Indian Postal Order (IPO) or Treasury Challan</div>
          <div><b>College Address:</b> Village Nacholi, Distt. Faridabad, Haryana - 121002</div>
          <div><b>Disposal Timeline:</b> Within 30 days as per statutory norms</div>
        </div>
      </div>
    \`;
  },

  annualreport() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-file-alt"></i> Annual Academic & Institutional Reports</h3>
          <p>Comprehensive Annual Accounts & Progress Reports</p>
        </div>
        <p>Download the official Annual Reports of Government College for Girls, Nacholi highlighting academic milestones, infrastructure developments, financial statements, and student achievements.</p>
        <div style="margin-top:20px;">
          <a href="http://gcgnacholi.ac.in/Data?Menu=ROFj+/eyOLA=&SubMenu=Wk0c6UZkyrg=" target="_blank" class="btn btn-primary"><i class="fas fa-download"></i> Download Latest Annual Report (PDF)</a>
        </div>
      </div>
    \`;
  },

  emagazine() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-book-open"></i> College e-Magazine 'PRATIBHA'</h3>
          <p>Annual Creative & Literary Journal for Students</p>
        </div>
        <p><b>'Pratibha'</b> is the annual college magazine showcasing poetry, essays, scientific articles, and paintings created by the talented girl students and faculty members of GCG Nacholi.</p>
      </div>
    \`;
  },

  // =========================================================================
  // 2. ACADEMICS SECTION & FEE CALCULATOR
  // =========================================================================
  programmes() {
    const courses = COLLEGE_DATA.courses;
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-graduation-cap"></i> Academic Programmes & Courses (UG & PG)</h3>
          <p>Affiliated to M.D. University, Rohtak • Aligned with NEP 2020</p>
        </div>

        <!-- Admission Fee Calculator Widget -->
        <div class="calculator-widget-box" style="background: linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-subtle) 100%); border: 2px solid var(--border-medium); border-radius: var(--radius-xl); padding: 24px; margin: 24px 0; box-shadow: var(--shadow-md);">
          <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; margin-bottom:18px;">
            <div>
              <h4 style="margin:0; font-size:1.25rem; color:var(--primary-dark); display:flex; align-items:center; gap:8px;">
                <i class="fas fa-calculator" style="color:var(--accent);"></i> Interactive Admission Fee & Eligibility Calculator
              </h4>
              <p style="margin:4px 0 0 0; font-size:0.875rem; color:var(--text-subtle);">Select your desired course and category to calculate subsidized Haryana Government fee and eligibility.</p>
            </div>
            <span class="badge badge-gold"><i class="fas fa-shield-alt"></i> Govt. Subsidized Fees</span>
          </div>

          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:16px;">
            <div>
              <label style="font-size:0.85rem; font-weight:700; color:var(--text-main); display:block; margin-bottom:6px;">Select Course:</label>
              <select id="calc-course-select" class="form-control" onchange="App.calculateFee()" style="padding:10px 14px; border-radius:var(--radius-md); border:1px solid var(--border-medium); width:100%; font-size:0.9rem;">
                \${courses.map(c => \`<option value="\${c.code}">\${c.title} (\${c.duration})</option>\`).join('')}
              </select>
            </div>

            <div>
              <label style="font-size:0.85rem; font-weight:700; color:var(--text-main); display:block; margin-bottom:6px;">Select Category:</label>
              <select id="calc-cat-select" class="form-control" onchange="App.calculateFee()" style="padding:10px 14px; border-radius:var(--radius-md); border:1px solid var(--border-medium); width:100%; font-size:0.9rem;">
                <option value="GEN">General / EWS (Haryana/All)</option>
                <option value="BC">BC-A / BC-B (Haryana Domicile)</option>
                <option value="SC">SC / DSC (Haryana Domicile - Post-Matric Eligible)</option>
              </select>
            </div>

            <div style="background:var(--primary-dark); color:#ffffff; padding:16px; border-radius:var(--radius-md); display:flex; flex-direction:column; justify-content:center;">
              <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1px; opacity:0.85;">Total Annual Fee:</div>
              <div id="calc-fee-display" style="font-size:1.6rem; font-weight:800; color:#fbbf24;">₹ 4,850 /-</div>
              <div id="calc-seat-display" style="font-size:0.75rem; opacity:0.9;">Intake: 160 Sanctioned Seats</div>
            </div>
          </div>

          <div id="calc-eligibility-box" style="margin-top:16px; padding:12px 16px; background:rgba(30, 58, 138, 0.06); border-radius:var(--radius-md); font-size:0.875rem; color:var(--text-main);">
            <b>Eligibility:</b> 10+2 from Board of School Education Haryana / CBSE with minimum 33% aggregate marks.
          </div>
        </div>

        <!-- Course Cards List -->
        <div style="display:flex; flex-direction:column; gap:24px;">
          \${courses.map(c => \`
            <div class="course-detail-card" style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:24px; box-shadow:var(--shadow-sm);">
              <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px; margin-bottom:14px;">
                <div>
                  <span class="badge badge-primary">\${c.category}</span>
                  <h4 style="font-size:1.35rem; font-weight:800; color:var(--primary-dark); margin:6px 0;">\${c.title}</h4>
                  <div style="font-size:0.85rem; color:var(--text-subtle);">
                    <i class="fas fa-clock"></i> Duration: <b>\${c.duration}</b> &bull; 
                    <i class="fas fa-chair"></i> Intake: <b>\${c.seats} Seats</b>
                  </div>
                </div>
                <div style="text-align:right;">
                  <a href="https://admissions.highereduhry.ac.in/" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding:8px 18px; font-size:0.85rem;">
                    <i class="fas fa-paper-plane"></i> Apply on DHE Portal
                  </a>
                </div>
              </div>

              <p style="font-size:0.95rem; line-height:1.7; color:var(--text-main);">\${c.description}</p>
              
              <div style="margin:16px 0; background:var(--bg-subtle); padding:14px; border-radius:var(--radius-md);">
                <div style="font-size:0.85rem; font-weight:700; color:var(--primary); margin-bottom:6px;"><i class="fas fa-check-circle"></i> Eligibility Criteria:</div>
                <div style="font-size:0.875rem; color:var(--text-muted);">\${c.eligibility}</div>
              </div>

              <div style="margin-top:14px;">
                <div style="font-size:0.85rem; font-weight:700; color:var(--text-main); margin-bottom:8px;">Core Subjects & Curriculum:</div>
                <div style="display:flex; flex-wrap:wrap; gap:6px;">
                  \${c.subjects.map(sub => \`<span class="badge" style="background:rgba(30, 58, 138, 0.08); color:var(--primary-dark); font-weight:600;">\${sub}</span>\`).join('')}
                </div>
              </div>
            </div>
          \`).join('')}
        </div>
      </div>
    \`;
  },

  academiccalendar() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-calendar-alt"></i> Academic Calendar & Schedule (2025–2026)</h3>
          <p>Maharshi Dayanand University (MDU) Rohtak Academic Term Schedule</p>
        </div>
        <div class="table-responsive" style="margin:20px 0;">
          <table class="data-table">
            <thead>
              <tr>
                <th>Event / Milestone</th>
                <th>Odd Semester Schedule</th>
                <th>Even Semester Schedule</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>Commencement of Teaching</b></td>
                <td>22nd July 2025</td>
                <td>15th January 2026</td>
              </tr>
              <tr>
                <td><b>Mid-Term Sessional Exams</b></td>
                <td>October 2025</td>
                <td>March 2026</td>
              </tr>
              <tr>
                <td><b>College Annual Sports & Athletic Meet</b></td>
                <td>24th January 2026</td>
                <td>-</td>
              </tr>
              <tr>
                <td><b>Practical & Viva-Voce Exams</b></td>
                <td>15th Nov - 30th Nov 2025</td>
                <td>20th April - 05th May 2026</td>
              </tr>
              <tr>
                <td><b>University Theory Examinations</b></td>
                <td>December 2025</td>
                <td>May - June 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    \`;
  },

  departments() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-network-wired"></i> Academic Departments</h3>
          <p>Faculties of Humanities, Commerce & Computer Applications</p>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:20px; margin:20px 0;">
          <div class="contact-card">
            <h4><i class="fas fa-coins" style="color:var(--accent);"></i> Department of Commerce</h4>
            <p>Offers B.Com and M.Com programs with specialization in Corporate Accounting, Taxation, GST, and Banking Finance.</p>
          </div>
          <div class="contact-card">
            <h4><i class="fas fa-laptop-code" style="color:var(--primary);"></i> Department of Computer Applications</h4>
            <p>Offers BCA degree program equipped with digital coding laboratories, full-stack web development, Python, and SQL.</p>
          </div>
          <div class="contact-card">
            <h4><i class="fas fa-landmark" style="color:var(--success);"></i> Department of History</h4>
            <p>Offers B.A. and M.A. History with extensive archival research, archaeology field visits, and historiography studies.</p>
          </div>
          <div class="contact-card">
            <h4><i class="fas fa-book" style="color:#e11d48;"></i> Department of English & Hindi</h4>
            <p>Fosters literary criticism, communicative English, creative writing, and Hindi Natak & Sahitya analysis.</p>
          </div>
        </div>
      </div>
    \`;
  },

  timetable() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-table"></i> College Time Table (2025–2026)</h3>
          <p>Class & Laboratory Session Breakdown</p>
        </div>
        <p>Class timings are strictly from <b>9:00 AM to 4:00 PM</b>. Please check individual department notice boards or download below.</p>
        <div style="margin-top:16px;">
          <a href="http://gcgnacholi.ac.in/Data?Menu=2+Rx+N0HANc=&SubMenu=aGNA5FIGHI0=" target="_blank" class="btn btn-primary"><i class="fas fa-file-pdf"></i> Download Official Master Time Table</a>
        </div>
      </div>
    \`;
  },

  lessonplan() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-chalkboard"></i> Semester Lesson Plans</h3>
          <p>Course Modules & Syllabus Delivery Framework</p>
        </div>
        <p>Faculty lesson plans ensure systematic coverage of MDU Rohtak curriculum across all 15 weeks of the semester.</p>
      </div>
    \`;
  },

  exams() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-pencil-alt"></i> Examinations & Assessment Cell</h3>
          <p>MDU University Regular, Re-appear & Practical Examinations</p>
        </div>
        <p>All degree examinations are conducted by <b>Maharshi Dayanand University (MDU), Rohtak</b>. GCG Nacholi acts as a dedicated examination center with strict CCTV monitoring.</p>
      </div>
    \`;
  },

  results() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-poll"></i> University Examination Results</h3>
          <p>Direct Link to MDU Rohtak Result Gazette</p>
        </div>
        <p>Students can check their semester marksheets and result notifications directly on the official MDU Rohtak results portal.</p>
        <div style="margin-top:20px;">
          <a href="https://mdu.ac.in/" target="_blank" rel="noopener noreferrer" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Check MDU Result Online</a>
        </div>
      </div>
    \`;
  },

  apprenticeship() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-user-cog"></i> Apprenticeship & Industrial Training</h3>
          <p>National Apprenticeship Training Scheme (NATS)</p>
        </div>
        <p>Prepares graduating students for paid apprenticeships across government PSUs, banking institutions, and IT enterprises.</p>
      </div>
    \`;
  },

  placements() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-briefcase"></i> Training & Placement Cell</h3>
          <p>Career Counseling, Resume Building & Campus Drives</p>
        </div>
        <p>Conducts campus placement drives, soft skills training, mock interviews, and career seminars in partnership with Haryana Skill Development Mission.</p>
      </div>
    \`;
  },

  skillcourses() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-laptop-code"></i> Skill Enhancement & Certificate Courses</h3>
          <p>Add-on Professional Certifications under NEP 2020</p>
        </div>
        <p>Free value-added certificate courses in <b>Tally Prime & GST Accounting</b>, <b>Python Programming</b>, <b>Spoken English & Communication</b>, and <b>Office Automation</b>.</p>
      </div>
    \`;
  },

  freelancing() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-laptop"></i> Digital Freelancing & Self-Employment Cell</h3>
          <p>Empowering Women with Remote Gig Economy Opportunities</p>
        </div>
        <p>Guidance on digital marketing, content writing, data analytics, and graphic design for freelance entrepreneurship.</p>
      </div>
    \`;
  },

  programoutcomes() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-bullseye"></i> Program Outcomes & Course Outcomes (POs & COs)</h3>
          <p>Outcome Based Education (OBE) Framework</p>
        </div>
        <p>Details the specific domain knowledge, critical thinking, ethical standards, and employability competencies acquired across each course.</p>
      </div>
    \`;
  },

  library() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-book-reader"></i> Central College Library</h3>
          <p>Knowledge Resource Center & E-Library</p>
        </div>
        <p>Automated library equipped with 10,000+ textbooks, reference encyclopedias, competitive exam materials (UPSC, UGC-NET, Banking), and INFLIBNET N-LIST e-journal access.</p>
      </div>
    \`;
  },

  collaborations() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-handshake"></i> Academic Collaborations & MoUs</h3>
          <p>Institutional Partnerships & Exchange Programs</p>
        </div>
        <p>Collaborative linkages with peer colleges, skill centers, and civil society organizations for faculty development and student enrichment.</p>
      </div>
    \`;
  },

  nirf() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-chart-line"></i> National Institutional Ranking Framework (NIRF)</h3>
          <p>Mandatory Data Disclosures</p>
        </div>
        <p>NIRF compliance data, student intake figures, faculty strength, and capital expenditure reports.</p>
      </div>
    \`;
  },

  // =========================================================================
  // 3. ADMISSIONS & FEE
  // =========================================================================
  admissionprocedure() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-clipboard-check"></i> Admission Process & Guidelines (2025–2026)</h3>
          <p>Centralized Online Admission System - Directorate of Higher Education Haryana</p>
        </div>

        <div class="step-guide-grid" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:18px; margin:24px 0;">
          <div class="contact-card" style="border-top:4px solid var(--primary);">
            <h4>1. Online Registration</h4>
            <p>Register on DHE Haryana Admission portal (<i>admissions.highereduhry.ac.in</i>) using Parivar Pehchan Patra (PPP) and mobile OTP.</p>
          </div>
          <div class="contact-card" style="border-top:4px solid var(--accent);">
            <h4>2. College & Course Choice</h4>
            <p>Select <b>Government College for Girls, Nacholi (Faridabad)</b> and your preferred subjects/programmes (BA, B.Com, BCA, MA, M.Com).</p>
          </div>
          <div class="contact-card" style="border-top:4px solid var(--success);">
            <h4>3. Document Verification</h4>
            <p>Online/Physical verification of 10th/12th marksheets, caste certificate, Haryana domicile, and income certificates.</p>
          </div>
          <div class="contact-card" style="border-top:4px solid #8b5cf6;">
            <h4>4. Merit List & Fee Deposit</h4>
            <p>Check centralized merit lists. If selected, pay the subsidized admission fee online to confirm your college seat.</p>
          </div>
        </div>

        <div style="text-align:center; margin-top:24px;">
          <a href="https://admissions.highereduhry.ac.in/" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding:12px 28px; font-size:1rem;">
            <i class="fas fa-external-link-alt"></i> Go to DHE Centralized Admission Portal
          </a>
        </div>
      </div>
    \`;
  },

  feerefund() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-undo-alt"></i> Fee Refund Policy</h3>
          <p>UGC & DHE Haryana Standard Refund Regulations</p>
        </div>
        <p>Fee refund for cancellation of admission is governed strictly by the standardized guidelines of UGC and Directorate of Higher Education, Haryana.</p>
      </div>
    \`;
  },

  // =========================================================================
  // 4. RESEARCH & INCUBATION
  // =========================================================================
  research() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-microscope"></i> Research & Development Cell</h3>
          <p>Promoting Academic Inquiry & Scholarly Publications</p>
        </div>
        <p>The R&D Cell facilitates faculty research grants, national seminars, student research posters, and peer-reviewed journal publications.</p>
      </div>
    \`;
  },

  incubation() {
    return this.entrepreneurship();
  },

  // =========================================================================
  // 5. PHOTO GALLERY & MEDIA (WITH OFFICIAL 89 PHOTOS & LIGHTBOX)
  // =========================================================================
  gallery() {
    const items = COLLEGE_DATA.gallery;
    const categories = ['All', 'Sports & Athletics', 'National & State Celebrations', 'Eco Club & Green Campus', 'Social Awareness & Rallies', 'Health & Wellness Camps', 'Academic & Workshops', 'Campus Life & Activities'];

    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-images"></i> Official Photo Gallery & Media Highlights</h3>
          <p>100% Authentic Scraped Media from http://gcgnacholi.ac.in/ (\${items.length} High-Resolution Photos)</p>
        </div>

        <!-- Filter Buttons -->
        <div class="gallery-filter-bar" style="display:flex; flex-wrap:wrap; gap:8px; margin:20px 0;">
          \${categories.map((cat, idx) => \`
            <button class="btn \${idx === 0 ? 'btn-primary' : 'btn-outline'} gallery-filter-btn" onclick="App.filterGallery('\${cat}')" data-cat="\${cat}" style="padding:6px 14px; font-size:0.8125rem; border-radius:var(--radius-full);">
              \${cat} \${cat === 'All' ? \`(\${items.length})\` : ''}
            </button>
          \`).join('')}
        </div>

        <!-- Gallery Grid -->
        <div id="gallery-items-grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(280px, 1fr)); gap:20px;">
          \${items.map((img, index) => \`
            <div class="gallery-photo-card" data-category="\${img.category}" style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); overflow:hidden; box-shadow:var(--shadow-sm); cursor:pointer; transition:transform var(--transition-fast);" onclick="App.openLightbox(\${index})">
              <div style="position:relative; overflow:hidden; height:200px;">
                <img src="\${img.image}" alt="\${img.title}" loading="lazy" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform var(--transition-normal);">
                <span class="badge" style="position:absolute; top:10px; right:10px; background:rgba(15, 23, 42, 0.85); color:#ffffff; font-size:0.7rem; backdrop-filter:blur(4px);">
                  \${img.category}
                </span>
              </div>
              <div style="padding:14px;">
                <div style="font-size:0.75rem; color:var(--text-subtle); font-weight:600; margin-bottom:4px;">
                  <i class="far fa-calendar-alt"></i> \${img.date}
                </div>
                <h4 style="font-size:0.9rem; font-weight:700; color:var(--text-main); margin:0 0 6px 0; line-height:1.4;">
                  \${img.title}
                </h4>
                <div style="font-size:0.75rem; color:var(--primary); font-weight:700; display:flex; align-items:center; gap:4px;">
                  <i class="fas fa-search-plus"></i> Click to Zoom / Lightbox
                </div>
              </div>
            </div>
          \`).join('')}
        </div>
      </div>
    \`;
  },

  events() {
    return this.gallery();
  },

  news() {
    return this.gallery();
  },

  videos() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-video"></i> College Video Gallery</h3>
          <p>Annual Day, Athletic Meet & National Celebrations Highlights</p>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:20px; margin:20px 0;">
          <div class="img-preview-card">
            <div style="background:var(--bg-subtle); height:200px; display:flex; align-items:center; justify-content:center; border-radius:var(--radius-md);">
              <i class="fas fa-play-circle" style="font-size:3.5rem; color:var(--primary); cursor:pointer;"></i>
            </div>
            <div style="padding:12px;">
              <h4 style="margin:0 0 6px 0;">7th Annual Athletic Meet 2026 Documentary</h4>
              <p style="font-size:0.85rem; color:var(--text-muted); margin:0;">Complete visual chronicle of track and field events at GCG Nacholi.</p>
            </div>
          </div>
          <div class="img-preview-card">
            <div style="background:var(--bg-subtle); height:200px; display:flex; align-items:center; justify-content:center; border-radius:var(--radius-md);">
              <i class="fas fa-play-circle" style="font-size:3.5rem; color:var(--primary); cursor:pointer;"></i>
            </div>
            <div style="padding:12px;">
              <h4 style="margin:0 0 6px 0;">Tiranga Rally & Youth Red Cross Camp</h4>
              <p style="font-size:0.85rem; color:var(--text-muted); margin:0;">National integration and social awareness march by girl students.</p>
            </div>
          </div>
        </div>
      </div>
    \`;
  },

  // =========================================================================
  // 6. FACULTY & STAFF DIRECTORY
  // =========================================================================
  faculty() {
    const faculty = COLLEGE_DATA.faculty;
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-chalkboard-teacher"></i> Teaching Faculty Directory</h3>
          <p>Distinguished Scholars & Dedicated Mentors - GCG Nacholi</p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(320px, 1fr)); gap:24px; margin:24px 0;">
          \${faculty.map(f => \`
            <div class="faculty-card" style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:20px; box-shadow:var(--shadow-sm); display:flex; gap:16px; align-items:flex-start;">
              <div style="flex:0 0 85px; height:95px; border-radius:var(--radius-md); overflow:hidden; border:2px solid var(--primary-light);">
                <img src="\${f.photo}" alt="\${f.name}" style="width:100%; height:100%; object-fit:cover;">
              </div>
              <div style="flex:1;">
                <h4 style="margin:0 0 4px 0; font-size:1.1rem; color:var(--primary-dark);">\${f.name}</h4>
                <div style="font-size:0.8125rem; font-weight:700; color:var(--accent-dark);">\${f.designation}</div>
                <div style="font-size:0.75rem; color:var(--text-subtle); margin-bottom:6px;">\${f.department}</div>
                <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:8px;">\${f.qualification} &bull; Exp: \${f.experience}</div>
                <div style="font-size:0.75rem;">
                  <a href="mailto:\${f.email}" style="color:var(--primary); font-weight:600;"><i class="fas fa-envelope"></i> \${f.email}</a>
                </div>
              </div>
            </div>
          \`).join('')}
        </div>
      </div>
    \`;
  },

  facultycode() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-book-reader"></i> Code of Professional Ethics for Faculty</h3>
          <p>UGC & Higher Education Haryana Regulations</p>
        </div>
        <p>Guidelines regarding academic integrity, student mentorship, punctual conduct of classes, and active participation in institutional advancement.</p>
      </div>
    \`;
  },

  trainingpolicy() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-user-graduate"></i> Faculty Training & Development Policy</h3>
          <p>Orientation, Refresher & FDP Programs</p>
        </div>
        <p>Participation in UGC Malaviya Mission Teacher Training Centres (MMTTC), SWAYAM ARPIT courses, and national research workshops.</p>
      </div>
    \`;
  },

  antiragging() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-ban" style="color:var(--danger);"></i> Zero Tolerance Anti-Ragging Policy</h3>
          <p>Safe, Secure & Respectful Learning Environment</p>
        </div>
        <div class="contact-card" style="border-left:4px solid var(--danger); background:rgba(239, 68, 68, 0.05); margin:20px 0;">
          <h4 style="color:var(--danger);"><i class="fas fa-exclamation-triangle"></i> Ragging is a Punishable Criminal Offence</h4>
          <p>GCG Nacholi maintains strict zero-tolerance towards any form of ragging. Violators are liable to immediate expulsion and police FIR under statutory law.</p>
        </div>
        <div class="subpage-meta-box">
          <div><b>National Anti-Ragging Helpline (Toll-Free):</b> 1800-180-5522</div>
          <div><b>College Anti-Ragging Committee Head:</b> Dr. Sushil Kumar Verma (+91 9953591834)</div>
          <div><b>Women Safety Helpline (Haryana):</b> 1091</div>
        </div>
      </div>
    \`;
  },

  icc() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-female"></i> Internal Complaints Committee (ICC) & Women Cell</h3>
          <p>Prevention of Sexual Harassment at Workplace (POSH Act 2013)</p>
        </div>
        <p>Dedicated statutory committee providing confidential grievance redressal, legal literacy, self-defense training, and counseling support to all girl students.</p>
      </div>
    \`;
  },

  committees() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-users"></i> College Statutory Committees & Cells</h3>
          <p>Decentralized Institutional Governance</p>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:16px; margin:20px 0;">
          <div class="contact-card"><h4>1. Advisory & Finance Committee</h4><p>Mrs. Archana Verma (Chairperson / Principal)</p></div>
          <div class="contact-card"><h4>2. Discipline & Proctorial Board</h4><p>Dr. Sushil Kumar Verma (Convenor)</p></div>
          <div class="contact-card"><h4>3. IQAC & NAAC Steering Committee</h4><p>Sh. Rakesh Kumar (Coordinator)</p></div>
          <div class="contact-card"><h4>4. Sports & Athletic Board</h4><p>Dr. Ritu Dahiya (Director Physical Ed.)</p></div>
          <div class="contact-card"><h4>5. NSS & Red Ribbon Club</h4><p>Ms. Mamta Bhardwaj (In-charge)</p></div>
          <div class="contact-card"><h4>6. Library Advisory Committee</h4><p>Ms. Priyanka Sharma (Librarian)</p></div>
        </div>
      </div>
    \`;
  },

  servicerules() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-gavel"></i> Haryana Civil Service Rules</h3>
          <p>Statutory Rules & Government Service Norms</p>
        </div>
        <p>Government college employees and staff are governed by Haryana Civil Services (General) Rules and DHE Haryana instructions.</p>
      </div>
    \`;
  },

  researchpapers() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-scroll"></i> Faculty Research Publications</h3>
          <p>UGC CARE Listed & Scopus Indexed Papers</p>
        </div>
        <p>A compilation of over 45+ research papers published by GCG Nacholi faculty members across peer-reviewed national and international journals.</p>
      </div>
    \`;
  },

  eservicesfaculty() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-laptop"></i> E-Services for Faculty Members</h3>
          <p>DHE MIS, HRMS & IntraHaryana Portal Access</p>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:12px; margin-top:20px;">
          <a href="https://hrmsharyana.gov.in/" target="_blank" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> HRMS Haryana</a>
          <a href="https://intrahry.gov.in/" target="_blank" class="btn btn-outline"><i class="fas fa-external-link-alt"></i> IntraHaryana Portal</a>
          <a href="http://gcgnacholi.ac.in/Admin/CollegeLogin" target="_blank" class="btn btn-gold"><i class="fas fa-lock"></i> College Admin Portal</a>
        </div>
      </div>
    \`;
  },

  // =========================================================================
  // 7. NOTICES & INFORMATION CORNER
  // =========================================================================
  notices() {
    const list = COLLEGE_DATA.notices;
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-bullhorn"></i> Official Circulars & Notices Board</h3>
          <p>Real-time Updates from GCG Nacholi & DHE Haryana</p>
        </div>

        <!-- Notice Search Bar -->
        <div style="margin:20px 0;">
          <input type="text" id="notice-search-input" onkeyup="App.searchNotices()" placeholder="🔍 Search notices by keyword (e.g. Athletic Meet, M.Com, Scholarship)..." style="width:100%; padding:12px 18px; border-radius:var(--radius-md); border:1px solid var(--border-medium); font-size:0.95rem;">
        </div>

        <div id="notices-list-container" style="display:flex; flex-direction:column; gap:16px;">
          \${list.map(n => \`
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
          \`).join('')}
        </div>
      </div>
    \`;
  },

  studentnotices() {
    return this.notices();
  },

  tenders() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-file-contract"></i> Institutional Tenders & Quotations</h3>
          <p>Procurement & Works Notifications</p>
        </div>
        <p>There are currently no active tenders. Tender notices are published via Haryana Government e-Procurement System (<i>etenders.hry.nic.in</i>).</p>
      </div>
    \`;
  },

  // =========================================================================
  // 8. STUDENTS & ONLINE GRIEVANCE REDRESSAL SYSTEM
  // =========================================================================
  grievance() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-shield-alt"></i> Online Student Grievance Redressal Portal</h3>
          <p>Direct Redressal Mechanism & Tracking System</p>
        </div>

        <div style="display:grid; grid-template-columns: 1.2fr 1fr; gap:24px; margin:24px 0;" class="responsive-grid-2">
          
          <!-- Grievance Submission Form -->
          <div style="background:var(--bg-surface); border:1px solid var(--border-medium); border-radius:var(--radius-xl); padding:24px; box-shadow:var(--shadow-md);">
            <h4 style="margin:0 0 16px 0; color:var(--primary-dark); display:flex; align-items:center; gap:8px;">
              <i class="fas fa-edit" style="color:var(--accent);"></i> File a New Grievance
            </h4>

            <form id="grievance-form" onsubmit="App.submitGrievance(event)">
              <div style="margin-bottom:14px;">
                <label style="font-size:0.85rem; font-weight:700; color:var(--text-main); display:block; margin-bottom:4px;">Student Name:</label>
                <input type="text" id="grv-name" required placeholder="Enter full name" class="form-control" style="width:100%; padding:10px 14px; border:1px solid var(--border-medium); border-radius:var(--radius-md);">
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:14px;">
                <div>
                  <label style="font-size:0.85rem; font-weight:700; color:var(--text-main); display:block; margin-bottom:4px;">Roll Number / Reg No:</label>
                  <input type="text" id="grv-roll" required placeholder="e.g. 24BA102" class="form-control" style="width:100%; padding:10px 14px; border:1px solid var(--border-medium); border-radius:var(--radius-md);">
                </div>
                <div>
                  <label style="font-size:0.85rem; font-weight:700; color:var(--text-main); display:block; margin-bottom:4px;">Course & Year:</label>
                  <select id="grv-course" class="form-control" style="width:100%; padding:10px 14px; border:1px solid var(--border-medium); border-radius:var(--radius-md);">
                    <option>B.A. (Arts)</option>
                    <option>B.Com (Commerce)</option>
                    <option>BCA (Computer App)</option>
                    <option>M.A. (History)</option>
                    <option>M.Com</option>
                  </select>
                </div>
              </div>

              <div style="margin-bottom:14px;">
                <label style="font-size:0.85rem; font-weight:700; color:var(--text-main); display:block; margin-bottom:4px;">Grievance Category:</label>
                <select id="grv-category" class="form-control" style="width:100%; padding:10px 14px; border:1px solid var(--border-medium); border-radius:var(--radius-md);">
                  <option>Academic & Classes</option>
                  <option>Examination & Results</option>
                  <option>Scholarship & Fee Queries</option>
                  <option>Campus Infrastructure & Cleanliness</option>
                  <option>Library & E-Resources</option>
                  <option>Harassment & Safety Cell</option>
                </select>
              </div>

              <div style="margin-bottom:14px;">
                <label style="font-size:0.85rem; font-weight:700; color:var(--text-main); display:block; margin-bottom:4px;">Grievance Details:</label>
                <textarea id="grv-details" required rows="4" placeholder="Describe the issue clearly..." class="form-control" style="width:100%; padding:10px 14px; border:1px solid var(--border-medium); border-radius:var(--radius-md); font-family:inherit;"></textarea>
              </div>

              <button type="submit" class="btn btn-primary" style="width:100%; padding:12px; font-weight:700;">
                <i class="fas fa-paper-plane"></i> Submit Grievance & Generate Tracking ID
              </button>
            </form>
          </div>

          <!-- Grievance Tracker Box -->
          <div>
            <div style="background:var(--bg-surface); border:1px solid var(--border-medium); border-radius:var(--radius-xl); padding:24px; box-shadow:var(--shadow-md); margin-bottom:20px;">
              <h4 style="margin:0 0 12px 0; color:var(--primary-dark); display:flex; align-items:center; gap:8px;">
                <i class="fas fa-search" style="color:var(--primary);"></i> Track Grievance Status
              </h4>
              <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">Enter your unique Grievance Tracking ID below:</p>
              
              <div style="display:flex; gap:8px; margin-bottom:14px;">
                <input type="text" id="grv-search-id" placeholder="e.g. GCG-GRV-2026-1042" class="form-control" style="flex:1; padding:10px 14px; border:1px solid var(--border-medium); border-radius:var(--radius-md); text-transform:uppercase;">
                <button onclick="App.trackGrievance()" class="btn btn-primary" style="padding:10px 16px;"><i class="fas fa-arrow-right"></i></button>
              </div>

              <div id="grv-track-result"></div>
            </div>

            <div class="contact-card" style="border-top:4px solid var(--primary);">
              <h4 style="font-size:0.95rem; margin-bottom:8px;"><i class="fas fa-user-shield"></i> Committee In-charges</h4>
              <p style="font-size:0.8125rem; margin-bottom:4px;"><b>Convenor:</b> Dr. Sushil Kumar Verma</p>
              <p style="font-size:0.8125rem; margin-bottom:4px;"><b>Member (Women Cell):</b> Ms. Mamta Bhardwaj</p>
              <p style="font-size:0.8125rem; margin-bottom:0;"><b>Resolution Timeline:</b> 7 Working Days</p>
            </div>
          </div>

        </div>
      </div>
    \`;
  },

  sportsfacilities() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-running"></i> Sports Facilities & Athletic Grounds</h3>
          <p>Directorate of Physical Education & Sports</p>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin:20px 0;" class="responsive-grid-2">
          <div>
            <img src="assets/official/News7536.jpg" alt="Athletic Ground" style="width:100%; height:260px; object-fit:cover; border-radius:var(--radius-lg);">
          </div>
          <div>
            <p style="line-height:1.8;">
              The college features a full-fledged <b>400-meter standard athletic track</b>, volleyball courts, badminton arena, yoga hall, and table tennis facilities under the expert mentorship of <b>Dr. Ritu Dahiya (Director Physical Education)</b>.
            </p>
            <div class="subpage-meta-box">
              <div><b>Flagship Event:</b> Annual Athletic Meet (January 2026)</div>
              <div><b>Events:</b> 100m/200m Sprint, Long Jump, High Jump, Javelin, Relay</div>
              <div><b>Coaching:</b> Free NIS Coaching for Inter-College Tournaments</div>
            </div>
          </div>
        </div>
      </div>
    \`;
  },

  hostel() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-hotel"></i> Hostel & Accommodation Information</h3>
          <p>Day-Scholar Institution & Transport Connectivity</p>
        </div>
        <p>Government College for Girls, Nacholi is primarily a day-scholar institution with extensive bus transport connectivity across Faridabad, Ballabgarh, and surrounding rural routes.</p>
      </div>
    \`;
  },

  health() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-heartbeat"></i> Health & Wellness Facilities</h3>
          <p>First Aid Clinic, Medical Checkup Camps & Deworming Drives</p>
        </div>
        <p>Regular health checkup camps, hemoglobin testing, distribution of IFA tablets, and emergency first aid room managed by the Youth Red Cross.</p>
      </div>
    \`;
  },

  socioeconomic() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-users"></i> Socio-Economically Disadvantaged Groups (SEDG) Cell</h3>
          <p>Equity, Inclusion & Dedicated Guidance</p>
        </div>
        <p>Provides remedial coaching, scholarship facilitation, and fee waiver support to students from SC, DSC, BC, and EWS categories.</p>
      </div>
    \`;
  },

  differentlyabled() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-universal-access"></i> Facilities for Differently-Abled (Divyangjan)</h3>
          <p>Barrier-Free Accessible Infrastructure</p>
        </div>
        <p>Equipped with smooth entrance ramps, tactile ground paths, ground-floor accessible restrooms, and screen reader software assistance.</p>
      </div>
    \`;
  },

  nccnss() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-flag"></i> National Cadet Corps (NCC) & NSS Units</h3>
          <p>Character Building, Civic Duty & National Integration</p>
        </div>
        <p>Active NSS unit conducting 7-day special residential community camps, Tiranga rallies, Swachh Bharat cleanliness drives, and blood donation camps.</p>
      </div>
    \`;
  },

  scholarships() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-award"></i> Government Scholarships & Financial Aid</h3>
          <p>100% Eligible Student Coverage under Haryana & Central Schemes</p>
        </div>
        <div class="table-responsive" style="margin:20px 0;">
          <table class="data-table">
            <thead>
              <tr>
                <th>Scholarship Scheme</th>
                <th>Eligibility Criteria</th>
                <th>Portal Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>Post-Matric Scholarship for SC/ST</b></td>
                <td>SC/ST students (Family Income < ₹2.5 Lakh)</td>
                <td><a href="https://harchhatravratti.highereduhry.ac.in/" target="_blank">Har-Chhatravratti Portal</a></td>
              </tr>
              <tr>
                <td><b>Post-Matric Scholarship for BC/OBC</b></td>
                <td>BC-A / BC-B students (Family Income < ₹2.5 Lakh)</td>
                <td><a href="https://harchhatravratti.highereduhry.ac.in/" target="_blank">Har-Chhatravratti Portal</a></td>
              </tr>
              <tr>
                <td><b>Free Bus Pass for Girls Scheme</b></td>
                <td>All enrolled girl students (Haryana Roadways)</td>
                <td>College Transport Desk</td>
              </tr>
              <tr>
                <td><b>Passport Fee Reimbursement</b></td>
                <td>Final year girl students obtaining passport</td>
                <td><a href="https://passport.highereduhry.ac.in/" target="_blank">Passport Portal</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    \`;
  },

  onlinelearning() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-laptop"></i> Online Learning Portals & E-Content</h3>
          <p>National Digital Repositories</p>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:18px; margin:20px 0;">
          <div class="contact-card">
            <h4><i class="fas fa-graduation-cap"></i> SWAYAM MOOCs</h4>
            <p>Free online courses from IITs and central universities with credit transfer.</p>
            <a href="https://swayam.gov.in/" target="_blank" class="btn btn-outline" style="margin-top:10px;">Visit SWAYAM</a>
          </div>
          <div class="contact-card">
            <h4><i class="fas fa-book"></i> National Digital Library (NDLI)</h4>
            <p>Access millions of digital books, academic papers, and video lectures.</p>
            <a href="https://ndl.iitkgp.ac.in/" target="_blank" class="btn btn-outline" style="margin-top:10px;">Visit NDLI</a>
          </div>
          <div class="contact-card">
            <h4><i class="fas fa-podcast"></i> E-PG Pathshala</h4>
            <p>Curated high-quality e-content for post-graduate students.</p>
            <a href="https://epgp.inflibnet.ac.in/" target="_blank" class="btn btn-outline" style="margin-top:10px;">Visit E-PGP</a>
          </div>
        </div>
      </div>
    \`;
  },

  codeofconduct() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-book"></i> Student Code of Conduct & Campus Rules</h3>
          <p>Discipline, Punctuality & Respectful Campus Environment</p>
        </div>
        <p>Mandatory 75% class attendance, wearing valid college ID card at all times, adherence to college timing (9:00 AM - 4:00 PM), and complete prohibition of mobile use in classrooms.</p>
      </div>
    \`;
  },

  helpline() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-phone-volume"></i> Emergency Student Helplines</h3>
          <p>24x7 Women Safety & Institutional Helplines</p>
        </div>
        <div class="subpage-meta-box">
          <div><b>Haryana Women Safety Helpline:</b> 1091</div>
          <div><b>National Emergency Number:</b> 112</div>
          <div><b>College Principal Office Helpline:</b> +91 9953591834</div>
          <div><b>National Anti-Ragging Helpline:</b> 1800-180-5522</div>
          <div><b>Cyber Crime Reporting:</b> 1930 / cybercrime.gov.in</div>
        </div>
      </div>
    \`;
  },

  perceptionindex() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-poll-h"></i> Institutional Perception Index</h3>
          <p>Stakeholder Satisfaction & Public Trust Benchmark</p>
        </div>
        <p>Results of student, parent, and employer feedback reflecting 94%+ overall institutional satisfaction in teaching quality and campus safety.</p>
      </div>
    \`;
  },

  eservicesstudents() {
    return this.onlinelearning();
  },

  econtent() {
    return this.onlinelearning();
  },

  // =========================================================================
  // 9. IQAC & ALUMNI & CONTACT
  // =========================================================================
  iqac() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-check-double"></i> Internal Quality Assurance Cell (IQAC)</h3>
          <p>Quality Sustenance & Continuous Enhancement</p>
        </div>
        <p>The IQAC ensures periodic academic audits, ICT integration in teaching, feedback analysis, and compliance with NAAC quality benchmarks.</p>
      </div>
    \`;
  },

  aqar() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-file-pdf"></i> Annual Quality Assurance Reports (AQAR)</h3>
          <p>Institutional Quality Performance Filings</p>
        </div>
        <p>Official AQAR filings detailing institutional best practices, student outcomes, research output, and green campus initiatives.</p>
      </div>
    \`;
  },

  iqacmeetings() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-clipboard-list"></i> IQAC Meeting Proceedings & Action Taken Reports</h3>
          <p>Minutes of Quarterly Review Meetings</p>
        </div>
        <p>Documented proceedings of IQAC committee meetings reviewing academic progression and infrastructure upgradations.</p>
      </div>
    \`;
  },

  feedback() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-comment-dots"></i> Student & Stakeholder Feedback System</h3>
          <p>Online Feedback on Curriculum, Teaching & Infrastructure</p>
        </div>
        <p>Students, alumni, and parents can submit their structured feedback to help GCG Nacholi continually elevate academic delivery.</p>
      </div>
    \`;
  },

  feedbackreport() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-chart-pie"></i> Annual Feedback Analysis Report</h3>
          <p>Action Taken Report (ATR) on Stakeholder Feedback</p>
        </div>
        <p>Comprehensive graphical analysis of feedback submitted during 2024–2025.</p>
      </div>
    \`;
  },

  alumniregistration() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-user-plus"></i> Alumni Registration & Network</h3>
          <p>Stay Connected with your Alma Mater - GCG Nacholi</p>
        </div>
        <div style="background:var(--bg-surface); border:1px solid var(--border-medium); border-radius:var(--radius-xl); padding:24px; max-width:600px; margin:20px auto;">
          <h4 style="margin:0 0 16px 0; color:var(--primary-dark);"><i class="fas fa-id-badge"></i> Register in GCG Nacholi Alumni Association</h4>
          <form onsubmit="App.submitAlumni(event)">
            <div style="margin-bottom:12px;">
              <label style="font-size:0.85rem; font-weight:700;">Full Name:</label>
              <input type="text" required class="form-control" style="width:100%; padding:10px; border:1px solid var(--border-medium); border-radius:var(--radius-md);">
            </div>
            <div style="margin-bottom:12px;">
              <label style="font-size:0.85rem; font-weight:700;">Passing Year & Course:</label>
              <input type="text" placeholder="e.g. 2023 - B.Com" required class="form-control" style="width:100%; padding:10px; border:1px solid var(--border-medium); border-radius:var(--radius-md);">
            </div>
            <div style="margin-bottom:12px;">
              <label style="font-size:0.85rem; font-weight:700;">Current Profession / Higher Study:</label>
              <input type="text" placeholder="e.g. Financial Analyst at XYZ / Pursuing M.Com" class="form-control" style="width:100%; padding:10px; border:1px solid var(--border-medium); border-radius:var(--radius-md);">
            </div>
            <div style="margin-bottom:16px;">
              <label style="font-size:0.85rem; font-weight:700;">Email & Mobile No:</label>
              <input type="text" required placeholder="email@example.com / 9876543210" class="form-control" style="width:100%; padding:10px; border:1px solid var(--border-medium); border-radius:var(--radius-md);">
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%; padding:12px; font-weight:700;">
              <i class="fas fa-check-circle"></i> Complete Alumni Registration
            </button>
          </form>
        </div>
      </div>
    \`;
  },

  alumniengagement() {
    return this.alumniregistration();
  },

  alumnilist() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-list"></i> Alumni Directory & Mentors</h3>
          <p>Our Proud Graduates Serving in Public & Corporate Sectors</p>
        </div>
        <p>A directory of registered alumni offering career guidance and mentorship to current students.</p>
      </div>
    \`;
  },

  alumnifeedback() {
    return this.feedback();
  },

  alumnifeedbackreport() {
    return this.feedbackreport();
  },

  contactus() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-map-marked-alt"></i> Contact Details & Campus Directions</h3>
          <p>Government College for Girls, Nacholi (Faridabad)</p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:24px; margin:24px 0;" class="responsive-grid-2">
          <div class="contact-info-cards">
            <div class="contact-card">
              <h4><i class="fas fa-map-marker-alt"></i> Campus Address</h4>
              <p>Village Nacholi, Jasana-Nacholi Road, District Faridabad, Haryana - 121002, India.</p>
            </div>
            <div class="contact-card">
              <h4><i class="fas fa-phone-alt"></i> Phone Helpline</h4>
              <p>+91 9953591834 (Working Hours: 9:00 AM to 4:00 PM, Mon–Sat)</p>
            </div>
            <div class="contact-card">
              <h4><i class="fas fa-envelope"></i> Official Email</h4>
              <p><a href="mailto:principalgcgnacholi@gmail.com" style="color:var(--primary); font-weight:700;">principalgcgnacholi@gmail.com</a></p>
            </div>
            <div class="contact-card">
              <h4><i class="fas fa-bus"></i> How to Reach</h4>
              <p>Easily accessible by Haryana Roadways bus and auto from Old Faridabad, Ballabgarh Metro Station & Badarpur Border.</p>
            </div>
          </div>

          <div class="campus-map-frame" style="border-radius:var(--radius-xl); overflow:hidden; border:1px solid var(--border-medium); min-height:340px;">
            <iframe 
              src="https://maps.google.com/maps?q=Nacholi,%20Faridabad,%20Haryana&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              title="GCG Nacholi Campus Location" 
              style="width:100%; height:100%; min-height:340px; border:0;" 
              allowfullscreen 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    \`;
  },

  sitemap() {
    return \`
      <div class="subpage-card">
        <div class="page-title-banner">
          <h3><i class="fas fa-sitemap"></i> Comprehensive Portal Site Map</h3>
          <p>Quick Navigation Index for all 50+ Institutional Sections</p>
        </div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(220px, 1fr)); gap:20px; margin:20px 0;">
          <div>
            <h4 style="color:var(--primary);"><i class="fas fa-university"></i> About Us</h4>
            <ul style="list-style:none; padding:0; line-height:2; font-size:0.875rem;">
              <li><a href="#history" data-slug="history" data-title="History" data-parent="About Us">History</a></li>
              <li><a href="#principalbio" data-slug="principalbio" data-title="Principal's desk" data-parent="About Us">Principal's Desk</a></li>
              <li><a href="#infrastructure" data-slug="infrastructure" data-title="Infrastructure" data-parent="About Us">Infrastructure</a></li>
              <li><a href="#staffstatement" data-slug="staffstatement" data-title="Non-Teaching Staff" data-parent="About Us">Staff Statement</a></li>
              <li><a href="#rti" data-slug="rti" data-title="RTI" data-parent="About Us">RTI Disclosures</a></li>
            </ul>
          </div>
          <div>
            <h4 style="color:var(--primary);"><i class="fas fa-graduation-cap"></i> Academics</h4>
            <ul style="list-style:none; padding:0; line-height:2; font-size:0.875rem;">
              <li><a href="#programmes" data-slug="programmes" data-title="Programmes/Courses" data-parent="Academics">Programmes/Courses</a></li>
              <li><a href="#departments" data-slug="departments" data-title="Departments" data-parent="Academics">Departments</a></li>
              <li><a href="#academiccalendar" data-slug="academiccalendar" data-title="Academic Calendar" data-parent="Academics">Academic Calendar</a></li>
              <li><a href="#admissionprocedure" data-slug="admissionprocedure" data-title="Admissions" data-parent="Admissions">Admission Procedure</a></li>
            </ul>
          </div>
          <div>
            <h4 style="color:var(--primary);"><i class="fas fa-users"></i> Faculty & Media</h4>
            <ul style="list-style:none; padding:0; line-height:2; font-size:0.875rem;">
              <li><a href="#faculty" data-slug="faculty" data-title="Faculty" data-parent="Faculty">Teaching Staff Directory</a></li>
              <li><a href="#gallery" data-slug="gallery" data-title="Photo Gallery" data-parent="Media">Official Photo Gallery</a></li>
              <li><a href="#notices" data-slug="notices" data-title="Notices" data-parent="Information">Notices & Circulars</a></li>
              <li><a href="#grievance" data-slug="grievance" data-title="Grievance" data-parent="Students">Online Grievance Portal</a></li>
            </ul>
          </div>
        </div>
      </div>
    \`;
  }
};
`;

fs.writeFileSync(path.join(__dirname, '..', 'js', 'pages.js'), pagesJsContent, 'utf8');
console.log('Successfully wrote enriched js/pages.js with all subpages and features!');
