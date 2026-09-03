// GCG Nacholi - Smart Mitra AI Virtual Assistant
const ChatbotManager = {
  isOpen: false,

  init() {
    this.bindEvents();
  },

  bindEvents() {
    const launcher = document.getElementById('chatbot-launcher');
    const closeBtn = document.getElementById('chatbot-close-btn');
    const sendBtn = document.getElementById('chat-send-btn');
    const input = document.getElementById('chat-input');
    const chips = document.querySelectorAll('.quick-chip');

    if (launcher) {
      launcher.addEventListener('click', () => this.toggleChat());
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.toggleChat());
    }

    if (sendBtn && input) {
      sendBtn.addEventListener('click', () => this.handleSendMessage());
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.handleSendMessage();
        }
      });
    }

    if (chips) {
      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          const text = chip.getAttribute('data-query') || chip.innerText;
          this.sendUserMessage(text);
          this.processBotResponse(text);
        });
      });
    }
  },

  toggleChat() {
    const windowEl = document.getElementById('chatbot-window');
    if (!windowEl) return;

    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      windowEl.classList.add('open');
      const input = document.getElementById('chat-input');
      if (input) input.focus();
    } else {
      windowEl.classList.remove('open');
    }
  },

  handleSendMessage() {
    const input = document.getElementById('chat-input');
    if (!input) return;

    const query = input.value.trim();
    if (!query) return;

    this.sendUserMessage(query);
    input.value = '';
    this.processBotResponse(query);
  },

  sendUserMessage(text) {
    const body = document.getElementById('chatbot-body');
    if (!body) return;

    const msg = document.createElement('div');
    msg.className = 'chat-msg user';
    msg.innerText = text;
    body.appendChild(msg);
    body.scrollTop = body.scrollHeight;
  },

  processBotResponse(query) {
    const body = document.getElementById('chatbot-body');
    if (!body) return;

    // Show Typing indicator
    const typing = document.createElement('div');
    typing.className = 'chat-msg bot typing-indicator';
    typing.innerHTML = `<i class="fas fa-circle-notch fa-spin"></i> Typing response...`;
    body.appendChild(typing);
    body.scrollTop = body.scrollHeight;

    setTimeout(() => {
      typing.remove();
      const responseHtml = this.matchFaq(query);
      
      const botMsg = document.createElement('div');
      botMsg.className = 'chat-msg bot';
      botMsg.innerHTML = responseHtml;
      body.appendChild(botMsg);
      body.scrollTop = body.scrollHeight;
    }, 600);
  },

  matchFaq(query) {
    const lower = query.toLowerCase();
    const faqs = COLLEGE_DATA.chatbotFaqs;

    for (const faq of faqs) {
      const match = faq.keywords.some(k => lower.includes(k));
      if (match) {
        return faq.reply;
      }
    }

    // Default Fallback
    return `Thank you for reaching out to <b>GCG Nacholi Virtual Helpdesk</b>. <br>For this specific query, you may: <br>• View our <b>Notice Board & Circulars</b><br>• Call College Office: <b>+91 9953591834</b><br>• Email us at <b>principalgcgnacholi@gmail.com</b><br>• Submit an online enquiry using the <b>Student Support Form</b> below!`;
  }
};
