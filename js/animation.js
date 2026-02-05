// Menu toggle

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector('.nav-links');

// Open & Close the menu

menu.addEventListener('click',() => {
    menu.classList.toggle('is-active');// to change  menuicon to X
    menuLinks.classList.toggle('active');// to change open the menu
    
    // Automatically close the menu when clicking  on a navlink
    document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click',() => {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    })) 

})

// Glassmorphism

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if(window.scrollY > 50){
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

//Hero Typewriter

const textElement = document.getElementById('typewriter');
const words = ["Beauty", "Golden Sahara", "Ancient Casbah"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 200;

function type() {
    const currentWord = words[wordIndex];
    const typewriter = document.getElementById('typewriter');

    // منطق التحديث
    const displayText = currentWord.substring(0, charIndex);
    
    // الحل السحري: إضافة مسافة غير مرئية إذا كان النص فارغاً لمنع انهيار الـ Height
    typewriter.innerHTML = displayText || '&nbsp;';

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        typeSpeed = 200; 
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        typeSpeed = 100;
    }

    // منطق التبديل (التحكم في الوقفات)
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2000; // وقفة طويلة ليقرأ المستخدم
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// تشغيل التأثير عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', type);