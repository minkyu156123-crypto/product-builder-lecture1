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

// Contact Form Handling (AJAX)
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const submitBtn = contactForm.querySelector('.submit-btn');
        
        // 버튼 비활성화 (중복 제출 방지)
        submitBtn.disabled = true;
        submitBtn.textContent = '보내는 중...';
        formStatus.textContent = '';

        try {
            const response = await fetch(event.target.action, {
                method: contactForm.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formStatus.style.color = '#4CAF50';
                formStatus.textContent = '감사합니다! 문의가 성공적으로 전달되었습니다.';
                contactForm.reset();
            } else {
                const result = await response.json();
                formStatus.style.color = '#f44336';
                if (Object.hasOwnProperty.call(result, 'errors')) {
                    formStatus.textContent = result.errors.map(error => error.message).join(", ");
                } else {
                    formStatus.textContent = '앗! 문제가 발생했습니다. 다시 시도해주세요.';
                }
            }
        } catch (error) {
            formStatus.style.color = '#f44336';
            formStatus.textContent = '앗! 서버 연결에 실패했습니다. 인터넷을 확인해주세요.';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = '문의 보내기';
        }
    });
}
