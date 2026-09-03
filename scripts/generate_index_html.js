const fs = require('fs');
const path = require('path');

const indexHtmlContent = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GCG Nacholi | Government College for Girls, Nacholi (Faridabad)</title>
  <meta name="description" content="Official website of Government College for Girls, Nacholi (Faridabad), Haryana. Affiliated to Maharshi Dayanand University (MDU), Rohtak. Directorate of Higher Education, Haryana.">
  <meta name="keywords" content="GCG Nacholi, Government College for Girls Nacholi, gcgnacholi.ac.in, MDU Rohtak, DHE Haryana, B.A., B.Com, BCA, M.A. History, M.Com, Faridabad">
  
  <!-- Favicon -->
  <link rel="icon" href="assets/official/Logo.jpg">
  
  <!-- FontAwesome 6 Free Icons CDN -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet">

  <!-- Stylesheets -->
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/components.css">
</head>
<body class="font-md">

  <!-- =========================================================================
       1. Top Utility & Accessibility Header
       ========================================================================= -->
  <div class="top-bar">
    <div class="container">
      <div class="top-bar-inner">
        <div class="top-bar-left">
          <a href="https://harchhatravratti.highereduhry.ac.in/" target="_blank" rel="noopener noreferrer" class="top-link">
            <i class="fas fa-hand-holding-usd"></i> Har-Chhatravratti Scholarship Portal
          </a>
          <a href="https://pmvidyalaxmi.co.in/Index.aspx" target="_blank" rel="noopener noreferrer" class="top-link">
            <i class="fas fa-landmark"></i> PM-Vidyalaxmi Education Loan
          </a>
          <a href="https://admissions.highereduhry.ac.in/" target="_blank" rel="noopener noreferrer" class="top-link">
            <span class="top-badge">Online Admission Portal (DHE)</span>
          </a>
        </div>
        
        <div class="top-bar-right">
          <a href="#helpline" data-slug="helpline" data-title="Student Helpline" data-parent="Students" class="top-link" style="color:#ef4444; font-weight:700;">
            <i class="fas fa-phone-alt"></i> Women Helpline: 1091
          </a>

          <div class="accessibility-controls" title="Adjust Text Size">
            <button class="acc-btn font-scale-btn" data-scale="sm">A-</button>
            <button class="acc-btn font-scale-btn active" data-scale="md">A</button>
            <button class="acc-btn font-scale-btn" data-scale="lg">A+</button>
          </div>

          <button class="acc-btn" id="theme-toggle-btn" title="Toggle Theme (Light / Dark / High Contrast)">
            <i class="fas fa-moon"></i>
          </button>

          <a href="http://gcgnacholi.ac.in/Admin/CollegeLogin" target="_blank" rel="noopener noreferrer" class="lang-switch-btn" style="background:#fbbf24; color:#0f172a; font-weight:700;" title="College Admin Login">
            <i class="fas fa-lock"></i> <span>Login</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- =========================================================================
       2. Main Official Branding Header
       ========================================================================= -->
  <header class="main-header">
    <div class="container">
      <div class="header-brand-container">
        <div class="brand-main" data-slug="home" data-title="Home" data-parent="Home" title="Go to Home" style="cursor:pointer;">
          <div class="college-emblem" style="border-radius:var(--radius-md); overflow:hidden; border:2px solid var(--primary-light);">
            <img src="assets/official/Logo.jpg" alt="GCG Nacholi Official Logo" style="width:100%; height:100%; object-fit:cover;">
          </div>
          <div class="brand-text">
            <div class="hindi-title">राजकीय महिला महाविद्यालय, नाचोली (फरीदाबाद)</div>
            <h1>GOVERNMENT COLLEGE FOR GIRLS, NACHOLI</h1>
            <div class="affiliation-meta">
              <span><i class="fas fa-map-marker-alt" style="color:var(--primary);"></i> Village Nacholi, Distt. Faridabad, Haryana - 121002</span>
              <span><i class="fas fa-certificate" style="color:var(--accent);"></i> Affiliated to Maharshi Dayanand University (MDU), Rohtak</span>
              <span><i class="fas fa-university" style="color:var(--success);"></i> AISHE Code: C-63189</span>
            </div>
          </div>
        </div>

        <div class="header-badges">
          <div class="govt-badge" style="background:var(--bg-surface); padding:8px 14px; border-radius:var(--radius-lg); border:1px solid var(--border-subtle); display:flex; align-items:center; gap:10px;">
            <img src="assets/official/highereducation3.png" alt="Higher Education Haryana Logo" style="height:48px; width:auto; object-fit:contain;">
            <div class="govt-badge-info">
              <div class="dept-name" style="font-size:0.85rem; font-weight:800; color:var(--primary-dark);">Directorate of Higher Education</div>
              <div class="sub-dept" style="font-size:0.75rem; color:var(--text-subtle); font-weight:600;">Government of Haryana</div>
            </div>
          </div>
          <div class="beti-bachao-badge" style="background:linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%); border:1px solid #f43f5e; padding:8px 14px; border-radius:var(--radius-lg); text-align:center;">
            <div style="font-weight:800; font-size:0.85rem; color:#9f1239;">🌸 बेटी बचाओ • बेटी पढ़ाओ</div>
            <div style="font-size:0.6875rem; color:#be123c; font-weight:700;">Empowering Women in Higher Education</div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- =========================================================================
       3. Live Notification Marquee Ticker
       ========================================================================= -->
  <div class="notification-marquee-bar" style="background:var(--primary-dark); color:#ffffff; padding:8px 0; border-top:1px solid rgba(255,255,255,0.1); border-bottom:1px solid rgba(255,255,255,0.1); font-size:0.85rem;">
    <div class="container" style="display:flex; align-items:center; gap:16px;">
      <span class="badge badge-danger" style="animation:pulse 2s infinite; font-weight:800; letter-spacing:0.5px; white-space:nowrap;">
        <i class="fas fa-bullhorn"></i> LATEST UPDATES
      </span>
      <marquee behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();" style="flex:1;">
        <a href="#notices" data-slug="notices" data-title="Circulars & Notices" data-parent="Information Corner" style="color:#fbbf24; text-decoration:none; font-weight:600; margin-right:40px;">
          <i class="fas fa-running"></i> Regarding organisation of 7th Annual Athletic Meet in GCG Nacholi, Faridabad on 24th January 2026.
        </a>
        <a href="#notices" data-slug="notices" data-title="Circulars & Notices" data-parent="Information Corner" style="color:#ffffff; text-decoration:none; font-weight:600; margin-right:40px;">
          <i class="fas fa-graduation-cap"></i> Admission Schedule and Physical Counseling for Master of Commerce (M.Com) Program (2025-26).
        </a>
        <a href="#scholarships" data-slug="scholarships" data-title="Awards/Scholarships" data-parent="Students" style="color:#6ee7b7; text-decoration:none; font-weight:600; margin-right:40px;">
          <i class="fas fa-hand-holding-usd"></i> Centralized Har-Chhatravratti Scholarship form submission open for eligible SC/BC/Minority girl students.
        </a>
      </marquee>
    </div>
  </div>

  <!-- =========================================================================
       4. Main Navigation Sticky Bar (Multi-Page Single Tab Routing)
       ========================================================================= -->
  <nav class="navbar-sticky">
    <div class="container">
      <div class="nav-container">
        
        <button class="mobile-toggle" id="mobile-menu-toggle" aria-label="Toggle Navigation">
          <i class="fas fa-bars"></i>
        </button>

        <ul class="nav-menu" id="nav-menu">
          <!-- 1. Home -->
          <li class="nav-item">
            <a href="#home" data-slug="home" data-title="Home" data-parent="Home" class="nav-link active"><i class="fas fa-home"></i> Home</a>
          </li>

          <!-- 2. About Us -->
          <li class="nav-item">
            <a href="#about" class="nav-link">About Us <i class="fas fa-chevron-down"></i></a>
            <div class="dropdown-menu">
              <a href="#history" data-slug="history" data-title="History" data-parent="About Us" class="dropdown-item"><i class="fas fa-history"></i> History</a>
              <a href="#principalbio" data-slug="principalbio" data-title="Principal's desk" data-parent="About Us" class="dropdown-item"><i class="fas fa-user-tie"></i> Principal's desk</a>
              <a href="#accreditation" data-slug="accreditation" data-title="Rank/Accreditation Status" data-parent="About Us" class="dropdown-item"><i class="fas fa-award"></i> Rank/Accreditation Status</a>
              <a href="#infrastructure" data-slug="infrastructure" data-title="Infrastructure" data-parent="About Us" class="dropdown-item"><i class="fas fa-building"></i> Infrastructure</a>
              <a href="#idp" data-slug="idp" data-title="Institutional Development Plan" data-parent="About Us" class="dropdown-item"><i class="fas fa-project-diagram"></i> Institutional Development Plan</a>
              <a href="#recognition" data-slug="recognition" data-title="Recognition/Approval 2(f), 12B" data-parent="About Us" class="dropdown-item"><i class="fas fa-certificate"></i> Recognition/Approval 2(f), 12B</a>
              <a href="#aicte" data-slug="aicte" data-title="All India Council for Technical Education" data-parent="About Us" class="dropdown-item"><i class="fas fa-university"></i> AICTE & Approvals</a>
              <a href="#staffstatement" data-slug="staffstatement" data-title="Non-Teaching Staff" data-parent="About Us" class="dropdown-item"><i class="fas fa-users-cog"></i> Non-Teaching Staff</a>
              <a href="#studentenrollment" data-slug="studentenrollment" data-title="Student Enrollment" data-parent="About Us" class="dropdown-item"><i class="fas fa-user-graduate"></i> Student Enrollment</a>
              <a href="#facilities" data-slug="facilities" data-title="Facilities" data-parent="About Us" class="dropdown-item"><i class="fas fa-concierge-bell"></i> Facilities</a>
              <a href="#entrepreneurship" data-slug="entrepreneurship" data-title="Entrepreneurship" data-parent="About Us" class="dropdown-item"><i class="fas fa-lightbulb"></i> Entrepreneurship Cell</a>
              <a href="#luminaries" data-slug="luminaries" data-title="Luminaries" data-parent="About Us" class="dropdown-item"><i class="fas fa-star"></i> Luminaries</a>
              <a href="#projects" data-slug="projects" data-title="Projects" data-parent="About Us" class="dropdown-item"><i class="fas fa-tasks"></i> Projects</a>
              <a href="#achievements" data-slug="achievements" data-title="Extracurricular Achievements" data-parent="About Us" class="dropdown-item"><i class="fas fa-medal"></i> Extracurricular Achievements</a>
              <a href="#unnatbharat" data-slug="unnatbharat" data-title="Unnat Bharat Abhiyan" data-parent="About Us" class="dropdown-item"><i class="fas fa-hands-helping"></i> Unnat Bharat Abhiyan</a>
              <a href="#rti" data-slug="rti" data-title="Mandatory disclosure under RTI" data-parent="About Us" class="dropdown-item"><i class="fas fa-info-circle"></i> Mandatory disclosure under RTI</a>
              <a href="#annualreport" data-slug="annualreport" data-title="Annual Report" data-parent="About Us" class="dropdown-item"><i class="fas fa-file-alt"></i> Annual Report</a>
              <a href="#emagazine" data-slug="emagazine" data-title="e-Magazine" data-parent="About Us" class="dropdown-item"><i class="fas fa-book-open"></i> e-Magazine 'PRATIBHA'</a>
            </div>
          </li>

          <!-- 3. Academics -->
          <li class="nav-item">
            <a href="#academics" class="nav-link">Academics <i class="fas fa-chevron-down"></i></a>
            <div class="dropdown-menu">
              <a href="#programmes" data-slug="programmes" data-title="Programmes/Courses" data-parent="Academics" class="dropdown-item"><i class="fas fa-graduation-cap"></i> Programmes/Courses & Fee</a>
              <a href="#departments" data-slug="departments" data-title="Departments" data-parent="Academics" class="dropdown-item"><i class="fas fa-network-wired"></i> Departments</a>
              <a href="#academiccalendar" data-slug="academiccalendar" data-title="Academic Calendar" data-parent="Academics" class="dropdown-item"><i class="fas fa-calendar-alt"></i> Academic Calendar</a>
              <a href="#timetable" data-slug="timetable" data-title="Time Table" data-parent="Academics" class="dropdown-item"><i class="fas fa-table"></i> Time Table</a>
              <a href="#lessonplan" data-slug="lessonplan" data-title="Lesson Plan" data-parent="Academics" class="dropdown-item"><i class="fas fa-chalkboard"></i> Lesson Plan</a>
              <a href="#exams" data-slug="exams" data-title="Exams" data-parent="Academics" class="dropdown-item"><i class="fas fa-pencil-alt"></i> Exams</a>
              <a href="#results" data-slug="results" data-title="Results" data-parent="Academics" class="dropdown-item"><i class="fas fa-poll"></i> Results</a>
              <a href="#apprenticeship" data-slug="apprenticeship" data-title="Apprenticeship" data-parent="Academics" class="dropdown-item"><i class="fas fa-user-cog"></i> Apprenticeship</a>
              <a href="#placements" data-slug="placements" data-title="Placements" data-parent="Academics" class="dropdown-item"><i class="fas fa-briefcase"></i> Placements</a>
              <a href="#skillcourses" data-slug="skillcourses" data-title="Skill Courses" data-parent="Academics" class="dropdown-item"><i class="fas fa-laptop-code"></i> Skill Courses (NEP)</a>
              <a href="#freelancing" data-slug="freelancing" data-title="Freelancing" data-parent="Academics" class="dropdown-item"><i class="fas fa-laptop"></i> Freelancing Cell</a>
              <a href="#programoutcomes" data-slug="programoutcomes" data-title="Program Outcomes" data-parent="Academics" class="dropdown-item"><i class="fas fa-bullseye"></i> Program Outcomes</a>
              <a href="#library" data-slug="library" data-title="Library" data-parent="Academics" class="dropdown-item"><i class="fas fa-book-reader"></i> Central Library</a>
              <a href="#collaborations" data-slug="collaborations" data-title="Academic Collaborations" data-parent="Academics" class="dropdown-item"><i class="fas fa-handshake"></i> Collaborations & MoUs</a>
              <a href="#nirf" data-slug="nirf" data-title="NIRF" data-parent="Academics" class="dropdown-item"><i class="fas fa-chart-line"></i> NIRF</a>
            </div>
          </li>

          <!-- 4. Admissions & Fee -->
          <li class="nav-item">
            <a href="#admissions" class="nav-link">Admissions & Fee <i class="fas fa-chevron-down"></i></a>
            <div class="dropdown-menu">
              <a href="#admissionprocedure" data-slug="admissionprocedure" data-title="Admission Process and Guidelines" data-parent="Admissions & Fee" class="dropdown-item"><i class="fas fa-clipboard-check"></i> Admission Guidelines (2025-26)</a>
              <a href="#programmes" data-slug="programmes" data-title="Programmes/Courses" data-parent="Academics" class="dropdown-item"><i class="fas fa-calculator"></i> Fee & Seat Calculator</a>
              <a href="#feerefund" data-slug="feerefund" data-title="Fee Refund Policy" data-parent="Admissions & Fee" class="dropdown-item"><i class="fas fa-undo-alt"></i> Fee Refund Policy</a>
            </div>
          </li>

          <!-- 5. Research -->
          <li class="nav-item">
            <a href="#research" class="nav-link">Research <i class="fas fa-chevron-down"></i></a>
            <div class="dropdown-menu">
              <a href="#research" data-slug="research" data-title="Research and Development Cell" data-parent="Research" class="dropdown-item"><i class="fas fa-microscope"></i> Research & Development Cell</a>
              <a href="#incubation" data-slug="incubation" data-title="Incubation Centre/Start-ups/Entrepreneurship Cell" data-parent="Research" class="dropdown-item"><i class="fas fa-rocket"></i> Incubation & Startups</a>
            </div>
          </li>

          <!-- 6. Students -->
          <li class="nav-item">
            <a href="#students" class="nav-link">Students <i class="fas fa-chevron-down"></i></a>
            <div class="dropdown-menu">
              <a href="#grievance" data-slug="grievance" data-title="Grievance Redressal Committee" data-parent="Students" class="dropdown-item"><i class="fas fa-shield-alt"></i> Online Grievance Redressal</a>
              <a href="#sportsfacilities" data-slug="sportsfacilities" data-title="Sports Facilities" data-parent="Students" class="dropdown-item"><i class="fas fa-running"></i> Sports & Athletics</a>
              <a href="#hostel" data-slug="hostel" data-title="Hostel Details" data-parent="Students" class="dropdown-item"><i class="fas fa-hotel"></i> Transport & Connectivity</a>
              <a href="#health" data-slug="health" data-title="Health Facilities" data-parent="Students" class="dropdown-item"><i class="fas fa-heartbeat"></i> Health Facilities</a>
              <a href="#socioeconomic" data-slug="socioeconomic" data-title="Socio Economically Disadvantaged Groups Cell" data-parent="Students" class="dropdown-item"><i class="fas fa-users"></i> SEDG Equity Cell</a>
              <a href="#differentlyabled" data-slug="differentlyabled" data-title="Facilities for differently-abled" data-parent="Students" class="dropdown-item"><i class="fas fa-universal-access"></i> Divyangjan Facilities</a>
              <a href="#nccnss" data-slug="nccnss" data-title="NCC & NSS" data-parent="Students" class="dropdown-item"><i class="fas fa-flag"></i> NCC & NSS Units</a>
              <a href="#scholarships" data-slug="scholarships" data-title="Awards/Scholarships" data-parent="Students" class="dropdown-item"><i class="fas fa-award"></i> Scholarships & Awards</a>
              <a href="#onlinelearning" data-slug="onlinelearning" data-title="Online Learning Portals" data-parent="Students" class="dropdown-item"><i class="fas fa-laptop"></i> SWAYAM & E-Learning</a>
              <a href="#codeofconduct" data-slug="codeofconduct" data-title="Code of conduct for students" data-parent="Students" class="dropdown-item"><i class="fas fa-book"></i> Code of Conduct</a>
              <a href="#helpline" data-slug="helpline" data-title="Student Helpline" data-parent="Students" class="dropdown-item"><i class="fas fa-phone-volume"></i> Emergency Helplines</a>
              <a href="#perceptionindex" data-slug="perceptionindex" data-title="Perception Index" data-parent="Students" class="dropdown-item"><i class="fas fa-poll-h"></i> Perception Index</a>
            </div>
          </li>

          <!-- 7. Faculty -->
          <li class="nav-item">
            <a href="#faculty" class="nav-link">Faculty <i class="fas fa-chevron-down"></i></a>
            <div class="dropdown-menu">
              <a href="#faculty" data-slug="faculty" data-title="Teaching Staff" data-parent="Faculty" class="dropdown-item"><i class="fas fa-chalkboard-teacher"></i> Teaching Staff Directory</a>
              <a href="#facultycode" data-slug="facultycode" data-title="Code of conduct for faculty" data-parent="Faculty" class="dropdown-item"><i class="fas fa-book-reader"></i> Code of Conduct</a>
              <a href="#trainingpolicy" data-slug="trainingpolicy" data-title="Training Policy" data-parent="Faculty" class="dropdown-item"><i class="fas fa-user-graduate"></i> Training Policy</a>
              <a href="#antiragging" data-slug="antiragging" data-title="Anti Ragging" data-parent="Faculty" class="dropdown-item"><i class="fas fa-ban"></i> Anti-Ragging Cell</a>
              <a href="#icc" data-slug="icc" data-title="Anti Sexual Harassment/ICC" data-parent="Faculty" class="dropdown-item"><i class="fas fa-female"></i> ICC & Women Cell</a>
              <a href="#committees" data-slug="committees" data-title="Committees" data-parent="Faculty" class="dropdown-item"><i class="fas fa-users"></i> Statutory Committees</a>
              <a href="#servicerules" data-slug="servicerules" data-title="Service Rules" data-parent="Faculty" class="dropdown-item"><i class="fas fa-gavel"></i> Service Rules</a>
              <a href="#researchpapers" data-slug="researchpapers" data-title="Research Papers" data-parent="Faculty" class="dropdown-item"><i class="fas fa-scroll"></i> Research Papers</a>
              <a href="https://highereduhry.ac.in/forms/WebPages/Notices?Type=0" target="_blank" rel="noopener noreferrer" class="dropdown-item"><i class="fas fa-external-link-alt"></i> Department Instructions</a>
              <a href="#eservicesfaculty" data-slug="eservicesfaculty" data-title="E-services for faculty" data-parent="Faculty" class="dropdown-item"><i class="fas fa-laptop"></i> E-Services for Faculty</a>
            </div>
          </li>

          <!-- 8. Media & Gallery -->
          <li class="nav-item">
            <a href="#media" class="nav-link">Media & Gallery <i class="fas fa-chevron-down"></i></a>
            <div class="dropdown-menu">
              <a href="#gallery" data-slug="gallery" data-title="Photo Gallery" data-parent="Media" class="dropdown-item"><i class="fas fa-images"></i> Official Photo Gallery (89 Photos)</a>
              <a href="#events" data-slug="events" data-title="Events and Activities" data-parent="Media" class="dropdown-item"><i class="fas fa-calendar-check"></i> Events & Activities</a>
              <a href="#news" data-slug="news" data-title="News" data-parent="Media" class="dropdown-item"><i class="fas fa-newspaper"></i> Press & News Coverage</a>
              <a href="#videos" data-slug="videos" data-title="Video Gallery" data-parent="Media" class="dropdown-item"><i class="fas fa-video"></i> Video Gallery</a>
            </div>
          </li>

          <!-- 9. Information Corner -->
          <li class="nav-item">
            <a href="#information" class="nav-link">Information Corner <i class="fas fa-chevron-down"></i></a>
            <div class="dropdown-menu">
              <a href="#notices" data-slug="notices" data-title="Circulars & Notices" data-parent="Information Corner" class="dropdown-item"><i class="fas fa-bullhorn"></i> Circulars & Notices</a>
              <a href="#downloads" data-slug="downloads" data-title="Download Forms" data-parent="Information Corner" class="dropdown-item"><i class="fas fa-download"></i> Download Forms & PDF</a>
              <a href="#tenders" data-slug="tenders" data-title="Tenders" data-parent="Information Corner" class="dropdown-item"><i class="fas fa-file-contract"></i> Tenders</a>
              <a href="#rti" data-slug="rti" data-title="RTI" data-parent="Information Corner" class="dropdown-item"><i class="fas fa-info-circle"></i> Mandatory RTI</a>
            </div>
          </li>

          <!-- 10. IQAC -->
          <li class="nav-item">
            <a href="#iqac" class="nav-link">IQAC <i class="fas fa-chevron-down"></i></a>
            <div class="dropdown-menu">
              <a href="#iqac" data-slug="iqac" data-title="IQAC -Quality Cell" data-parent="IQAC" class="dropdown-item"><i class="fas fa-check-double"></i> IQAC - Quality Cell</a>
              <a href="#aqar" data-slug="aqar" data-title="AQAR" data-parent="IQAC" class="dropdown-item"><i class="fas fa-file-pdf"></i> AQAR Reports</a>
              <a href="#iqacmeetings" data-slug="iqacmeetings" data-title="Proceedings of the Meetings of IQAC" data-parent="IQAC" class="dropdown-item"><i class="fas fa-clipboard-list"></i> IQAC Proceedings</a>
              <a href="#feedback" data-slug="feedback" data-title="Feedback" data-parent="IQAC" class="dropdown-item"><i class="fas fa-comment-dots"></i> Stakeholder Feedback</a>
              <a href="#feedbackreport" data-slug="feedbackreport" data-title="Feedback Report" data-parent="IQAC" class="dropdown-item"><i class="fas fa-chart-pie"></i> Feedback Analysis</a>
            </div>
          </li>

          <!-- 11. Alumni -->
          <li class="nav-item">
            <a href="#alumni" class="nav-link">Alumni <i class="fas fa-chevron-down"></i></a>
            <div class="dropdown-menu">
              <a href="#alumniregistration" data-slug="alumniregistration" data-title="Alumni Registration" data-parent="Alumni" class="dropdown-item"><i class="fas fa-user-plus"></i> Alumni Registration Form</a>
              <a href="#alumnilist" data-slug="alumnilist" data-title="Alumni List" data-parent="Alumni" class="dropdown-item"><i class="fas fa-list"></i> Alumni Directory</a>
            </div>
          </li>

          <!-- 12. Contact Us -->
          <li class="nav-item">
            <a href="#contactus" class="nav-link">Contact Us <i class="fas fa-chevron-down"></i></a>
            <div class="dropdown-menu">
              <a href="#contactus" data-slug="contactus" data-title="Contact Details" data-parent="Contact Us" class="dropdown-item"><i class="fas fa-map-marked-alt"></i> Contact & Directions</a>
              <a href="#sitemap" data-slug="sitemap" data-title="Site Map" data-parent="Contact Us" class="dropdown-item"><i class="fas fa-sitemap"></i> Complete Site Map</a>
            </div>
          </li>
        </ul>

        <!-- Nav Action Buttons -->
        <div class="nav-actions">
          <button class="nav-search-btn" id="open-search-btn" title="Search College Portal">
            <i class="fas fa-search"></i>
          </button>
          <a href="http://gcgnacholi.ac.in/Admin/CollegeLogin" target="_blank" rel="noopener noreferrer" class="portal-login-btn">
            <i class="fas fa-sign-in-alt"></i> <span>Login</span>
          </a>
        </div>

      </div>
    </div>
  </nav>

  <!-- =========================================================================
       MAIN CONTENT CONTAINER
       ========================================================================= -->
  <main>
    
    <!-- =======================================================================
         VIEW 1: FRONT PAGE (Only Core College Details)
         ======================================================================= -->
    <div id="home-view">
      
      <!-- Hero Section with Official Scraped Banners -->
      <section class="hero-section">
        <div class="hero-slide active" style="background-image: url('assets/official/Banner3.jpg');"></div>
        <div class="hero-slide" style="background-image: url('assets/official/Banner2.jpg');"></div>
        <div class="hero-slide" style="background-image: url('assets/official/News7536.jpg');"></div>
        <div class="hero-slide" style="background-image: url('assets/official/News5289.JPG');"></div>
        <div class="hero-overlay"></div>

        <div class="container">
          <div class="hero-content">
            <div class="hero-pill">
              <i class="fas fa-university"></i> Directorate of Higher Education, Haryana &bull; Affiliated to MDU Rohtak
            </div>
            <h2 class="hero-title">
              Government College for Girls, Nacholi<br>
              <span>राजकीय महिला महाविद्यालय, नाचोली (फरीदाबाद)</span>
            </h2>
            <p class="hero-subtitle">
              Empowering young women through high-quality subsidized higher education, critical skills, competitive athletics, and holistic character building on a 12-acre lush green modern campus.
            </p>
            <div class="hero-cta-group">
              <a href="#programmes" data-slug="programmes" data-title="Programmes/Courses" data-parent="Academics" class="btn btn-gold">
                <i class="fas fa-calculator"></i> Fee & Course Calculator
              </a>
              <a href="https://admissions.highereduhry.ac.in/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                <i class="fas fa-paper-plane"></i> DHE Online Admission Portal
              </a>
              <a href="#gallery" data-slug="gallery" data-title="Photo Gallery" data-parent="Media" class="btn btn-outline-white">
                <i class="fas fa-images"></i> Official Photo Gallery (89 Photos)
              </a>
            </div>
          </div>
        </div>

        <div class="hero-controls">
          <div class="hero-dot active"></div>
          <div class="hero-dot"></div>
          <div class="hero-dot"></div>
          <div class="hero-dot"></div>
        </div>
      </section>

      <!-- Quick Action Badges Ribbon -->
      <section style="background:var(--bg-surface); padding:20px 0; border-bottom:1px solid var(--border-subtle);">
        <div class="container">
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:14px;">
            <a href="https://admissions.highereduhry.ac.in/" target="_blank" rel="noopener noreferrer" class="quick-action-card" style="display:flex; align-items:center; gap:12px; padding:12px 16px; background:var(--bg-subtle); border-radius:var(--radius-lg); border:1px solid var(--border-subtle); text-decoration:none; color:var(--text-main); transition:all var(--transition-fast);">
              <i class="fas fa-user-plus" style="font-size:1.4rem; color:var(--primary);"></i>
              <div>
                <div style="font-size:0.85rem; font-weight:800;">Admissions 2025-26</div>
                <div style="font-size:0.7rem; color:var(--text-subtle);">DHE Centralized Portal</div>
              </div>
            </a>

            <a href="#programmes" data-slug="programmes" data-title="Programmes/Courses" data-parent="Academics" class="quick-action-card" style="display:flex; align-items:center; gap:12px; padding:12px 16px; background:var(--bg-subtle); border-radius:var(--radius-lg); border:1px solid var(--border-subtle); text-decoration:none; color:var(--text-main); transition:all var(--transition-fast);">
              <i class="fas fa-calculator" style="font-size:1.4rem; color:var(--accent);"></i>
              <div>
                <div style="font-size:0.85rem; font-weight:800;">Fee Calculator</div>
                <div style="font-size:0.7rem; color:var(--text-subtle);">Seat & Fee Matrix</div>
              </div>
            </a>

            <a href="#grievance" data-slug="grievance" data-title="Grievance Redressal Committee" data-parent="Students" class="quick-action-card" style="display:flex; align-items:center; gap:12px; padding:12px 16px; background:var(--bg-subtle); border-radius:var(--radius-lg); border:1px solid var(--border-subtle); text-decoration:none; color:var(--text-main); transition:all var(--transition-fast);">
              <i class="fas fa-shield-alt" style="font-size:1.4rem; color:var(--success);"></i>
              <div>
                <div style="font-size:0.85rem; font-weight:800;">Online Grievance</div>
                <div style="font-size:0.7rem; color:var(--text-subtle);">Track ID Redressal</div>
              </div>
            </a>

            <a href="https://harchhatravratti.highereduhry.ac.in/" target="_blank" rel="noopener noreferrer" class="quick-action-card" style="display:flex; align-items:center; gap:12px; padding:12px 16px; background:var(--bg-subtle); border-radius:var(--radius-lg); border:1px solid var(--border-subtle); text-decoration:none; color:var(--text-main); transition:all var(--transition-fast);">
              <i class="fas fa-award" style="font-size:1.4rem; color:#8b5cf6;"></i>
              <div>
                <div style="font-size:0.85rem; font-weight:800;">Scholarships</div>
                <div style="font-size:0.7rem; color:var(--text-subtle);">Har-Chhatravratti</div>
              </div>
            </a>

            <a href="#gallery" data-slug="gallery" data-title="Photo Gallery" data-parent="Media" class="quick-action-card" style="display:flex; align-items:center; gap:12px; padding:12px 16px; background:var(--bg-subtle); border-radius:var(--radius-lg); border:1px solid var(--border-subtle); text-decoration:none; color:var(--text-main); transition:all var(--transition-fast);">
              <i class="fas fa-images" style="font-size:1.4rem; color:#e11d48;"></i>
              <div>
                <div style="font-size:0.85rem; font-weight:800;">Photo Gallery</div>
                <div style="font-size:0.7rem; color:var(--text-subtle);">89 Official Photos</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- Key Metrics Strip -->
      <div class="container stats-strip" style="margin-top:24px;">
        <div class="stats-card-grid">
          <div class="stat-item">
            <div class="stat-icon"><i class="fas fa-user-graduate"></i></div>
            <div class="stat-info">
              <h3>850+</h3>
              <p>Girl Students Enrolled</p>
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-icon"><i class="fas fa-book-open"></i></div>
            <div class="stat-info">
              <h3>5 Major</h3>
              <p>UG & PG Programmes</p>
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-icon"><i class="fas fa-chalkboard-teacher"></i></div>
            <div class="stat-info">
              <h3>25+</h3>
              <p>Faculty & Staff Mentors</p>
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-icon"><i class="fas fa-tree"></i></div>
            <div class="stat-info">
              <h3>12 Acres</h3>
              <p>Lush Green Campus</p>
            </div>
          </div>
          <div class="stat-item">
            <div class="stat-icon"><i class="fas fa-certificate"></i></div>
            <div class="stat-info">
              <h3>M.D.U. Rohtak</h3>
              <p>Affiliated University</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Live Notices & Quick Widgets -->
      <section class="section">
        <div class="container">
          <div class="notice-hub-container">
            
            <div class="notice-board-card">
              <div class="section-header" style="text-align:left; margin-bottom:20px;">
                <span class="section-tag"><i class="fas fa-bullhorn"></i> Information Corner</span>
                <h3 style="font-size:1.45rem; font-weight:800; color:var(--text-main); margin-bottom:4px;">Official Circulars & Notices</h3>
              </div>

              <div class="notice-list" id="notice-list-container">
                <!-- Exact notices from gcgnacholi.ac.in -->
              </div>

              <div style="margin-top:20px; text-align:left;">
                <a href="#notices" data-slug="notices" data-title="Circulars & Notices" data-parent="Information Corner" class="btn btn-primary" style="padding:8px 22px; font-size:0.85rem;">
                  <i class="fas fa-external-link-alt"></i> View All Official Notices
                </a>
              </div>
            </div>

            <!-- Important Links & Online Services -->
            <div class="quick-widgets">
              <div class="widget-card highlight">
                <h3 class="widget-title"><i class="fas fa-link"></i> Important Link</h3>
                <div class="quick-links-list">
                  <a href="#downloads" data-slug="downloads" data-title="Download Forms" data-parent="Information Corner" class="quick-link-item">
                    <span>Download Forms & PDF</span> <i class="fas fa-chevron-right"></i>
                  </a>
                  <a href="#exams" data-slug="exams" data-title="Exams" data-parent="Academics" class="quick-link-item">
                    <span>Exams & Assessments</span> <i class="fas fa-chevron-right"></i>
                  </a>
                  <a href="#academiccalendar" data-slug="academiccalendar" data-title="Academic Calendar" data-parent="Academics" class="quick-link-item">
                    <span>Academic Calendar</span> <i class="fas fa-chevron-right"></i>
                  </a>
                  <a href="#timetable" data-slug="timetable" data-title="Time Table" data-parent="Academics" class="quick-link-item">
                    <span>Master Class Time Table</span> <i class="fas fa-chevron-right"></i>
                  </a>
                  <a href="#faculty" data-slug="faculty" data-title="Directories" data-parent="Faculty" class="quick-link-item">
                    <span>Faculty Directories</span> <i class="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>

              <div class="widget-card">
                <h3 class="widget-title" style="color:var(--primary);"><i class="fas fa-globe"></i> Online Services</h3>
                <div class="quick-links-list">
                  <a href="https://harchhatravratti.highereduhry.ac.in/" target="_blank" rel="noopener noreferrer" class="quick-link-item">
                    <span>Har-Chhatravratti Scholarship</span> <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a href="https://pmvidyalaxmi.co.in/Index.aspx" target="_blank" rel="noopener noreferrer" class="quick-link-item">
                    <span>PM-Vidyalaxmi Education Loan</span> <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a href="https://admissions.highereduhry.ac.in/" target="_blank" rel="noopener noreferrer" class="quick-link-item">
                    <span>Online Admission Portal</span> <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a href="https://passport.highereduhry.ac.in/" target="_blank" rel="noopener noreferrer" class="quick-link-item">
                    <span>Passport Reimbursement</span> <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a href="#onlinelearning" data-slug="onlinelearning" data-title="Online Learning Portals" data-parent="Students" class="quick-link-item">
                    <span>SWAYAM & NDLI E-Learning</span> <i class="fas fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Principal's Message Spotlight (Real Official Photo) -->
      <section class="section section-bg-subtle">
        <div class="container">
          <div class="principal-desk-grid">
            <div class="principal-portrait-wrapper">
              <div class="principal-img-frame" style="border-radius:var(--radius-xl); overflow:hidden; border:4px solid var(--primary-light); box-shadow:var(--shadow-lg);">
                <img src="assets/official/Principal.jpg" alt="Dr. Sunita Sharma - Principal GCG Nacholi" style="height:360px; width:100%; object-fit:cover; display:block;">
                <div class="principal-badge-float" style="background:var(--primary-dark); color:#ffffff; padding:8px 16px; border-radius:var(--radius-full);">
                  <i class="fas fa-user-tie" style="color:#fbbf24;"></i> Dr. Sunita Sharma • Principal
                </div>
              </div>
            </div>

            <div class="principal-content">
              <span class="section-tag"><i class="fas fa-feather-alt"></i> Leadership</span>
              <h2>PRINCIPAL'S <span>MESSAGE</span></h2>
              <div class="principal-title-sub" style="font-size:1.1rem; font-weight:700; color:var(--primary-dark); margin:6px 0 14px 0;">
                <i class="fas fa-award"></i> Government College for Girls, Nacholi (Faridabad)
              </div>
              
              <div class="principal-quote" style="font-style:italic; font-size:1.05rem; line-height:1.75; color:var(--text-main); border-left:4px solid var(--primary); padding-left:18px; margin-bottom:16px;">
                "Welcome to Government College for Girls, Nacholi (Faridabad). Founded with the noble mission of empowering young women through higher education, critical skills, and holistic character building."
              </div>

              <p style="font-size:0.95rem; color:var(--text-muted); line-height:1.7; margin-bottom:20px;">
                At GCG Nacholi, under the aegis of the Directorate of Higher Education Haryana, we provide an intellectually stimulating, safe, and progressive academic environment equipped with modern classrooms, computer labs, library facilities, and competitive athletic coaching.
              </p>

              <div>
                <a href="#principalbio" data-slug="principalbio" data-title="Principal's desk" data-parent="About Us" class="btn btn-primary">
                  <i class="fas fa-book-reader"></i> Read Full Message (Principal's Desk)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Academic Programmes Showcase -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-tag"><i class="fas fa-graduation-cap"></i> Academics</span>
            <h2 class="section-title">Programmes & <span>Courses Offered</span></h2>
            <p class="section-desc">Undergraduate and Postgraduate degree courses affiliated to Maharshi Dayanand University (MDU), Rohtak.</p>
          </div>

          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:20px;">
            <div class="course-home-card" style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:20px; box-shadow:var(--shadow-sm);">
              <span class="badge badge-primary">Arts & Humanities</span>
              <h4 style="font-size:1.15rem; font-weight:800; margin:8px 0 4px 0; color:var(--primary-dark);">Bachelor of Arts (B.A.)</h4>
              <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">3-Year versatile humanities degree offering History, Pol. Science, Economics, English, Hindi, and Sociology.</p>
              <div style="font-size:0.8rem; font-weight:700; color:var(--text-subtle); margin-bottom:14px;"><i class="fas fa-chair"></i> 160 Seats &bull; <i class="fas fa-clock"></i> 3 Years</div>
              <a href="#programmes" data-slug="programmes" data-title="Programmes/Courses" data-parent="Academics" class="btn btn-outline" style="width:100%; text-align:center; padding:6px 0; font-size:0.8rem;">View Course & Fee Details</a>
            </div>

            <div class="course-home-card" style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:20px; box-shadow:var(--shadow-sm);">
              <span class="badge badge-gold">Commerce & Finance</span>
              <h4 style="font-size:1.15rem; font-weight:800; margin:8px 0 4px 0; color:var(--primary-dark);">Bachelor of Commerce (B.Com)</h4>
              <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">3-4 Year NEP honours degree in financial accounting, corporate governance, GST taxation, and business law.</p>
              <div style="font-size:0.8rem; font-weight:700; color:var(--text-subtle); margin-bottom:14px;"><i class="fas fa-chair"></i> 120 Seats &bull; <i class="fas fa-clock"></i> 3-4 Years</div>
              <a href="#programmes" data-slug="programmes" data-title="Programmes/Courses" data-parent="Academics" class="btn btn-outline" style="width:100%; text-align:center; padding:6px 0; font-size:0.8rem;">View Course & Fee Details</a>
            </div>

            <div class="course-home-card" style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:20px; box-shadow:var(--shadow-sm);">
              <span class="badge badge-success">Computer Science & IT</span>
              <h4 style="font-size:1.15rem; font-weight:800; margin:8px 0 4px 0; color:var(--primary-dark);">Bachelor of Computer Application (BCA)</h4>
              <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">3-Year professional IT program covering software development, Python, C++, Data Structures, DBMS, and Web Tech.</p>
              <div style="font-size:0.8rem; font-weight:700; color:var(--text-subtle); margin-bottom:14px;"><i class="fas fa-chair"></i> 60 Seats &bull; <i class="fas fa-clock"></i> 3 Years</div>
              <a href="#programmes" data-slug="programmes" data-title="Programmes/Courses" data-parent="Academics" class="btn btn-outline" style="width:100%; text-align:center; padding:6px 0; font-size:0.8rem;">View Course & Fee Details</a>
            </div>

            <div class="course-home-card" style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:20px; box-shadow:var(--shadow-sm);">
              <span class="badge" style="background:#8b5cf6; color:#ffffff;">Postgraduate Degree</span>
              <h4 style="font-size:1.15rem; font-weight:800; margin:8px 0 4px 0; color:var(--primary-dark);">Master of Commerce (M.Com)</h4>
              <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">2-Year PG program providing advanced strategic mastery in corporate finance, taxation, security analysis, and research.</p>
              <div style="font-size:0.8rem; font-weight:700; color:var(--text-subtle); margin-bottom:14px;"><i class="fas fa-chair"></i> 40 Seats &bull; <i class="fas fa-clock"></i> 2 Years</div>
              <a href="#programmes" data-slug="programmes" data-title="Programmes/Courses" data-parent="Academics" class="btn btn-outline" style="width:100%; text-align:center; padding:6px 0; font-size:0.8rem;">View Course & Fee Details</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Real Photos Spotlight -->
      <section class="section section-bg-subtle">
        <div class="container">
          <div class="section-header">
            <span class="section-tag"><i class="fas fa-camera"></i> Media Spotlight</span>
            <h2 class="section-title">Campus Events & <span>Activities Gallery</span></h2>
            <p class="section-desc">100% Authentic Photos of Athletic Meets, Cultural Festivals, Tiranga Rallies, and Student Activities.</p>
          </div>

          <div id="home-spotlight-gallery" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:20px; margin-bottom:24px;">
            <!-- Rendered by JS -->
          </div>

          <div style="text-align:center;">
            <a href="#gallery" data-slug="gallery" data-title="Photo Gallery" data-parent="Media" class="btn btn-primary" style="padding:10px 28px; font-size:0.95rem;">
              <i class="fas fa-images"></i> Explore Full Photo Gallery (89 Photos with Lightbox)
            </a>
          </div>
        </div>
      </section>

      <!-- Campus Location & Details -->
      <section class="section">
        <div class="container">
          <div class="section-header">
            <span class="section-tag"><i class="fas fa-map-marked-alt"></i> Location</span>
            <h2 class="section-title">Contact <span>Details & Location</span></h2>
            <p class="section-desc">Government College for Girls, Nacholi (Faridabad).</p>
          </div>

          <div class="contact-grid">
            <div class="contact-info-cards">
              <div class="contact-card">
                <div class="contact-card-icon"><i class="fas fa-map-marker-alt"></i></div>
                <h4>Location / Address</h4>
                <p>Village Nacholi, Jasana-Nacholi Road, District Faridabad, Haryana - 121002, India.</p>
              </div>

              <div class="contact-card">
                <div class="contact-card-icon"><i class="fas fa-phone-alt"></i></div>
                <h4>Phone Helpline</h4>
                <p>+91 9953591834 (College Working Hours: 9:00 AM - 4:00 PM, Mon–Sat)</p>
              </div>

              <div class="contact-card">
                <div class="contact-card-icon"><i class="fas fa-envelope"></i></div>
                <h4>Email</h4>
                <p><a href="mailto:principalgcgnacholi@gmail.com" style="color:var(--primary); font-weight:700;">principalgcgnacholi@gmail.com</a></p>
              </div>

              <div class="contact-card">
                <div class="contact-card-icon"><i class="fas fa-university"></i></div>
                <h4>Affiliation & Portal</h4>
                <p>Affiliated to Maharshi Dayanand University (MDU), Rohtak.<br>Official Website: <a href="http://gcgnacholi.ac.in/" target="_blank" rel="noopener noreferrer">gcgnacholi.ac.in</a></p>
              </div>
            </div>

            <div class="campus-map-frame" style="border-radius:var(--radius-xl); overflow:hidden; border:1px solid var(--border-medium);">
              <iframe 
                src="https://maps.google.com/maps?q=Nacholi,%20Faridabad,%20Haryana&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                title="GCG Nacholi Location" 
                allowfullscreen 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </section>

    </div>

    <!-- =======================================================================
         VIEW 2: SUBPAGE CONTAINER (Loaded in the Same Tab with Back Support)
         ======================================================================= -->
    <div id="subpage-view" class="subpage-container">
      <div class="container">
        
        <!-- Breadcrumb & Back Navigation Bar -->
        <div class="breadcrumb-bar">
          <div class="breadcrumb-links">
            <a href="#home" data-slug="home" data-title="Home" data-parent="Home"><i class="fas fa-home"></i> Home</a>
            <span>&bull;</span>
            <span id="breadcrumb-parent">Section</span>
            <span>&bull;</span>
            <span class="current" id="breadcrumb-current">Page Title</span>
          </div>

          <button class="back-home-btn" onclick="App.showHomeView()">
            <i class="fas fa-arrow-left"></i> &larr; Back to Home
          </button>
        </div>

        <!-- Rendered Subpage Content -->
        <div id="subpage-content-container">
          <!-- Dynamic Content Injected Here -->
        </div>

      </div>
    </div>

  </main>

  <!-- =========================================================================
       5. Modern Lightbox Modal Container
       ========================================================================= -->
  <div id="lightbox-modal" class="lightbox-overlay" style="position:fixed; inset:0; background:rgba(15,23,42,0.92); backdrop-filter:blur(8px); z-index:3000; display:none; align-items:center; justify-content:center; padding:20px;">
    <button id="lightbox-close" style="position:absolute; top:20px; right:20px; background:rgba(255,255,255,0.2); border:0; color:#ffffff; width:44px; height:44px; border-radius:50%; font-size:1.25rem; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:all 0.2s;">
      <i class="fas fa-times"></i>
    </button>
    <button id="lightbox-prev" style="position:absolute; left:20px; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.2); border:0; color:#ffffff; width:48px; height:48px; border-radius:50%; font-size:1.25rem; cursor:pointer; display:flex; align-items:center; justify-content:center;">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button id="lightbox-next" style="position:absolute; right:20px; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.2); border:0; color:#ffffff; width:48px; height:48px; border-radius:50%; font-size:1.25rem; cursor:pointer; display:flex; align-items:center; justify-content:center;">
      <i class="fas fa-chevron-right"></i>
    </button>
    <div style="max-width:900px; width:100%; text-align:center;">
      <img id="lightbox-img" src="" alt="GCG Nacholi Official Media" style="max-height:75vh; max-width:100%; border-radius:var(--radius-lg); box-shadow:0 25px 50px -12px rgba(0,0,0,0.5); object-fit:contain;">
      <div id="lightbox-caption" style="margin-top:16px;"></div>
    </div>
  </div>

  <!-- =========================================================================
       6. Global Search Overlay Modal
       ========================================================================= -->
  <div id="search-overlay" class="modal-overlay">
    <div class="modal-container" style="max-width:600px;">
      <div class="modal-header">
        <h3><i class="fas fa-search" style="color:var(--primary);"></i> Search College Portal</h3>
        <button class="modal-close-btn" id="search-close-btn">&times;</button>
      </div>
      <div class="modal-body">
        <input type="text" id="global-search-input" placeholder="Type keywords (e.g. BCA, Athletic Meet, Dr. Sunita, Scholarships)..." style="width:100%; padding:14px 18px; border:2px solid var(--primary-light); border-radius:var(--radius-lg); font-size:1rem; outline:none;">
        <div id="global-search-results" style="margin-top:16px; max-height:350px; overflow-y:auto;"></div>
      </div>
    </div>
  </div>

  <!-- Back to Top Floating Button -->
  <button id="back-to-top-btn" class="back-to-top" title="Back to Top">
    <i class="fas fa-arrow-up"></i>
  </button>

  <!-- =========================================================================
       Footer (Exact Copyright from gcgnacholi.ac.in)
       ========================================================================= -->
  <footer class="footer-main">
    <div class="container">
      <div class="footer-grid">
        
        <div class="footer-brand">
          <div style="display:flex; align-items:center; gap:12px; margin-bottom:14px;">
            <div class="college-emblem" style="width:50px; height:50px; border-radius:var(--radius-md); overflow:hidden;">
              <img src="assets/official/Logo.jpg" alt="GCG Nacholi Logo" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div>
              <h3 style="font-size:1.15rem; margin:0; color:#ffffff;">GCG NACHOLI</h3>
              <span style="font-size:0.75rem; color:#fbbf24;">Faridabad, Haryana &bull; AISHE: C-63189</span>
            </div>
          </div>
          <p>
            Government College for Girls, Nacholi. Affiliated to Maharshi Dayanand University (MDU), Rohtak. Dedicated to women's higher education excellence in Haryana.
          </p>
          <div style="font-size:0.8125rem; color:#cbd5e1;">
            <i class="fas fa-envelope" style="color:#fbbf24;"></i> principalgcgnacholi@gmail.com<br>
            <i class="fas fa-phone" style="color:#fbbf24;"></i> +91 9953591834
          </div>
        </div>

        <div class="footer-links-col">
          <h4>Academic Streams</h4>
          <ul>
            <li><a href="#programmes" data-slug="programmes" data-title="Programmes/Courses" data-parent="Academics">Bachelor of Arts (B.A.)</a></li>
            <li><a href="#programmes" data-slug="programmes" data-title="Programmes/Courses" data-parent="Academics">Bachelor of Commerce (B.Com)</a></li>
            <li><a href="#programmes" data-slug="programmes" data-title="Programmes/Courses" data-parent="Academics">Bachelor of Computer App (BCA)</a></li>
            <li><a href="#programmes" data-slug="programmes" data-title="Programmes/Courses" data-parent="Academics">M.A. History (Postgraduate)</a></li>
            <li><a href="#programmes" data-slug="programmes" data-title="Programmes/Courses" data-parent="Academics">Master of Commerce (M.Com)</a></li>
          </ul>
        </div>

        <div class="footer-links-col">
          <h4>Online Portals</h4>
          <ul>
            <li><a href="https://admissions.highereduhry.ac.in/" target="_blank" rel="noopener noreferrer">DHE Online Admissions</a></li>
            <li><a href="https://harchhatravratti.highereduhry.ac.in/" target="_blank" rel="noopener noreferrer">Har-Chhatravratti Portal</a></li>
            <li><a href="https://pmvidyalaxmi.co.in/Index.aspx" target="_blank" rel="noopener noreferrer">PM-Vidyalaxmi Education Loan</a></li>
            <li><a href="https://passport.highereduhry.ac.in/" target="_blank" rel="noopener noreferrer">Passport Reimbursement</a></li>
            <li><a href="http://gcgnacholi.ac.in/Admin/CollegeLogin" target="_blank" rel="noopener noreferrer">College Admin Login</a></li>
          </ul>
        </div>

        <div class="footer-links-col">
          <h4>Student Support</h4>
          <ul>
            <li><a href="#grievance" data-slug="grievance" data-title="Grievance Redressal" data-parent="Students">Online Grievance Cell</a></li>
            <li><a href="#antiragging" data-slug="antiragging" data-title="Anti Ragging" data-parent="Faculty">Anti-Ragging Helpline</a></li>
            <li><a href="#icc" data-slug="icc" data-title="ICC & Women Cell" data-parent="Faculty">ICC & Women Safety Cell</a></li>
            <li><a href="#rti" data-slug="rti" data-title="RTI" data-parent="About Us">Mandatory RTI Act 2005</a></li>
            <li><a href="#sitemap" data-slug="sitemap" data-title="Site Map" data-parent="Contact Us">Portal Site Map</a></li>
          </ul>
        </div>

      </div>

      <div class="footer-bottom">
        <div>
          Copyright 2026. All rights reserved. Developed By : IT Cell, Directorate of Higher Education, Haryana
        </div>
        <div class="footer-bottom-links">
          <a href="https://www.highereduhry.ac.in" target="_blank" rel="noopener noreferrer">highereduhry.ac.in</a> &bull;
          <a href="http://gcgnacholi.ac.in/" target="_blank" rel="noopener noreferrer">gcgnacholi.ac.in</a> &bull;
          <a href="#rti" data-slug="rti" data-title="RTI" data-parent="About Us">RTI Disclosures</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="js/data.js"></script>
  <script src="js/pages.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '..', 'index.html'), indexHtmlContent, 'utf8');
console.log('Successfully wrote enriched index.html!');
