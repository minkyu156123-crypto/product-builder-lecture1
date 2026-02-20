const generateBtn = document.getElementById('generate-btn');
const menuDisplay = document.getElementById('menu-display');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Menu List
const menus = [
    '김치찌개', '된장찌개', '비빔밥', '불고기', '제육볶음',
    '치킨', '피자', '탕수육', '짜장면', '짬뽕',
    '스테이크', '파스타', '초밥', '라멘', '돈까스',
    '삼겹살', '곱창', '떡볶이', '보쌈', '족발',
    '샌드위치', '샐러드', '쌀국수', '마라탕', '훠궈'
];

// Theme logic
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '라이트 모드';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '라이트 모드' : '다크 모드';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

function getRandomMenu() {
    const randomIndex = Math.floor(Math.random() * menus.length);
    return menus[randomIndex];
}

function displayMenu() {
    menuDisplay.innerHTML = '';
    const menuName = getRandomMenu();
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-item');
    menuDiv.textContent = menuName;
    menuDisplay.appendChild(menuDiv);
}

generateBtn.addEventListener('click', () => {
    // Add a simple "loading" effect
    menuDisplay.innerHTML = '<p>추천 중...</p>';
    setTimeout(displayMenu, 300);
});

// Initial display is handled by HTML, but we could also call displayMenu() here if we wanted.
