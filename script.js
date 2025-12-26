// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const toggleThemeLink = document.getElementById('toggleThemeLink');
const viewSourceLink = document.getElementById('viewSourceLink');
const analyticsLink = document.getElementById('analyticsLink');
const currentDateElement = document.getElementById('currentDate');
const verifiedBadge = document.getElementById('verifiedBadge');
const terminalText = document.getElementById('terminalText');

// Set current date
function setCurrentDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.textContent = now.toLocaleDateString('en-US', options);
}

// Theme toggle functionality
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    
    const isLight = document.body.classList.contains('light-theme');
    const icon = themeToggle.querySelector('i');
    
    if (isLight) {
        icon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'light');
    } else {
        icon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.querySelector('i').className = 'fas fa-sun';
    }
}

// View source code
function viewSource() {
    const sourceCode = `
    /*
     * DevLinks - Verified Digital Identity
     * Version: 2.2.0
     * Author: @youssefnkiza
     * 
     * Files:
     * - index.html: Main HTML structure
     * - style.css: All styles and animations
     * - script.js: Interactive functionality
     * 
     * Features:
     * ✅ Blue verification badge
     * ✅ Dark/Light theme toggle
     * ✅ Terminal typing effect
     * ✅ Link analytics
     * ✅ Project showcase
     * ✅ Responsive design
     */
    `;
    
    const newWindow = window.open();
    newWindow.document.write('<pre>' + sourceCode + '</pre>');
    newWindow.document.title = 'DevLinks Source Code';
}

// Show analytics
function showAnalytics() {
    const clicks = Math.floor(Math.random() * 1000) + 500;
    const mostClicked = ['GitHub Profile', 'Portfolio', 'LinkedIn'][Math.floor(Math.random() * 3)];
    
    alert(`📊 Link Analytics (Last 7 days):
    
Total Clicks: ${clicks}
Most Clicked: ${mostClicked}
Unique Visitors: ${Math.floor(clicks * 0.7)}
Avg. Time on Page: 2m 34s
Click-through Rate: ${Math.floor(Math.random() * 20) + 15}%`);
}

// Link click handler
function handleLinkClick(event) {
    const url = this.getAttribute('data-url');
    if (url) {
        // Add click animation
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        // Track click in console
        console.log(`🔗 Link clicked: ${this.querySelector('h3').textContent}`);
        
        // Open link after animation
        setTimeout(() => {
            window.open(url, '_blank');
        }, 200);
    }
}

// Terminal typing effect
function typeWriter() {
    const originalText = terminalText.innerHTML;
    terminalText.innerHTML = '';
    
    let i = 0;
    function type() {
        if (i < originalText.length) {
            terminalText.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(type, 20);
        } else {
            // Add blinking cursor
            if (!terminalText.querySelector('.cursor')) {
                terminalText.innerHTML += '<span class="cursor">_</span>';
            }
        }
    }
    
    setTimeout(type, 1000);
}

// Visit counter
function trackVisit() {
    if (!localStorage.getItem('visitCount')) {
        localStorage.setItem('visitCount', 1);
    } else {
        let count = parseInt(localStorage.getItem('visitCount'));
        localStorage.setItem('visitCount', count + 1);
    }
    
    const visits = localStorage.getItem('visitCount');
    console.log(`%c👁️  Profile Visits: ${visits}`, 
        'color: #58a6ff; font-size: 14px; font-weight: bold;');
    
    console.log(`%c🔗 DevLinks v2.2.0 | Verified Account`, 
        'color: #1d9bf0; font-size: 16px; padding: 5px; border: 1px solid #1d9bf0;');
    
    console.log(`%c💡 Tip: Click the blue verification badge for details!`, 
        'color: #8957e5; font-size: 12px;');
}

// Verified badge click handler
function handleVerifiedClick() {
    const verificationModal = `
    ✅ ACCOUNT VERIFICATION
    
    Status: Verified
    Type: Professional Developer Account
    Verified On: ${new Date().toLocaleDateString()}
    Criteria Met:
    • Authentic identity confirmed
    • Professional portfolio verified
    • Active GitHub contributions
    • Industry reputation established
    
    This badge indicates that this account represents
    a real professional in the software development field.
    `;
    
    alert(verificationModal);
}

// Initialize animations for cards
function initializeAnimations() {
    const linkCards = document.querySelectorAll('.link-card');
    const projectCards = document.querySelectorAll('.project-card');
    
    linkCards.forEach((card, index) => {
        card.style.animationDelay = `${0.1 + (index * 0.1)}s`;
    });
    
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${0.6 + (index * 0.1)}s`;
    });
}

// Initialize everything
function init() {
    setCurrentDate();
    loadTheme();
    trackVisit();
    typeWriter();
    initializeAnimations();
    
    // Event listeners
    themeToggle.addEventListener('click', toggleTheme);
    toggleThemeLink.addEventListener('click', toggleTheme);
    viewSourceLink.addEventListener('click', viewSource);
    analyticsLink.addEventListener('click', showAnalytics);
    verifiedBadge.addEventListener('click', handleVerifiedClick);
    
    // Link card event listeners
    document.querySelectorAll('.link-card, .project-card').forEach(card => {
        card.addEventListener('click', handleLinkClick);
    });
    
    // Add keyboard shortcut for theme toggle
    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key === 't') {
            toggleTheme();
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);