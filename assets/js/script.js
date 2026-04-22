/**
 * Success International School - Main JavaScript
 * Handles Navigation, Search, Animations, and Page-specific features.
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Configuration & Helpers ---
    // --- 0. Robust Path Detection ---
    const getAssetsPath = () => {
        const path = window.location.pathname;
        // Detect if we are inside any of our known subdirectories
        const subdirs = ['leadership', 'sections', 'branches', 'about', 'admission', 'policies', 'gallery', 'careers'];
        const isInSubdir = subdirs.some(dir => path.includes(`/${dir}/`));
        return isInSubdir ? '../assets/' : 'assets/';
    };
    const assetsPath = getAssetsPath();

    const navbar = document.getElementById('navbar');
    const menuBtn = document.getElementById('menuBtn');
    const fullMenu = document.getElementById('fullMenu');
    const menuItems = document.querySelectorAll('.menu-item');
    const searchOverlay = document.getElementById('searchOverlay');
    const schoolLogo = document.getElementById('school-logo');

    let isMenuOpen = false;
    let isSearchOpen = false;

    // --- 1. Global Navbar & Logo Switch on Scroll ---
    window.addEventListener('scroll', () => {
        if (!navbar || !schoolLogo) return;

        if (window.scrollY > 50) {
            navbar.classList.add('bg-[#0c2b53]', 'shadow-2xl', 'py-4');
            navbar.classList.remove('bg-gradient-to-b', 'from-black/80', 'via-black/40', 'to-transparent', 'pt-6', 'pb-12');
            schoolLogo.classList.remove('w-[85px]', 'h-[85px]', 'lg:w-[100px]', 'lg:h-[100px]');
            schoolLogo.classList.add('w-[60px]', 'h-[60px]', 'lg:w-[65px]', 'lg:h-[65px]');
            schoolLogo.src = assetsPath + 'images/school_logo_color.svg';
        } else {
            navbar.classList.remove('bg-[#0c2b53]', 'shadow-2xl', 'py-4');
            navbar.classList.add('bg-gradient-to-b', 'from-black/80', 'via-black/40', 'to-transparent', 'pt-6', 'pb-12');
            schoolLogo.classList.remove('w-[60px]', 'h-[60px]', 'lg:w-[65px]', 'lg:h-[65px]');
            schoolLogo.classList.add('w-[85px]', 'h-[85px]', 'lg:w-[100px]', 'lg:h-[100px]');
            schoolLogo.src = assetsPath + 'images/school_logo_white.svg';
        }
    });

    // --- 2. Menu Toggle Logic ---
    window.toggleMenu = function () {
        if (!fullMenu || !menuBtn) return;
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            if (isSearchOpen) toggleSearch();
            fullMenu.classList.remove('opacity-0', 'invisible', 'translate-x-full');
            fullMenu.classList.add('opacity-100', 'visible', 'translate-x-0');
            menuBtn.classList.add('menu-open');
            document.body.classList.add('overflow-hidden');
            menuItems.forEach((item, i) => {
                setTimeout(() => {
                    item.classList.remove('translate-y-10', 'opacity-0');
                    item.classList.add('translate-y-0', 'opacity-100');
                }, 300 + (i * 100));
            });
        } else {
            fullMenu.classList.remove('opacity-100', 'visible', 'translate-x-0');
            fullMenu.classList.add('opacity-0', 'invisible', 'translate-x-full');
            menuBtn.classList.remove('menu-open');
            const isVideoOpen = window.isVideoOpen || false;
            if (!isSearchOpen && !isVideoOpen) document.body.classList.remove('overflow-hidden');
            menuItems.forEach((item) => {
                item.classList.add('translate-y-10', 'opacity-0');
                item.classList.remove('translate-y-0', 'opacity-100');
            });
        }
    };

    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMenu);
    }

    // --- 3. Search Overlay Logic ---
    window.toggleSearch = function () {
        if (!searchOverlay) return;
        isSearchOpen = !isSearchOpen;
        if (isSearchOpen) {
            if (isMenuOpen) toggleMenu();
            searchOverlay.classList.remove('-translate-y-full');
            searchOverlay.classList.add('translate-y-0');
            document.body.classList.add('overflow-hidden');
            setTimeout(() => {
                const input = searchOverlay.querySelector('input');
                if (input) {
                    input.focus();
                    // Add listener for Enter key if not already added
                    if (!input.dataset.listener) {
                        input.addEventListener('keypress', (e) => {
                            if (e.key === 'Enter') performSearch(input.value);
                        });
                        input.dataset.listener = "true";
                    }
                }
            }, 300);
        } else {
            searchOverlay.classList.add('-translate-y-full');
            searchOverlay.classList.remove('translate-y-0');
            const isVideoOpen = window.isVideoOpen || false;
            if (!isMenuOpen && !isVideoOpen) document.body.classList.remove('overflow-hidden');
        }
    };

    // New: Perform Search Logic
    window.performSearch = function (query) {
        if (!query || query.trim() === "") return;

        // Redirect to search results page
        const isBranch = window.location.pathname.includes('/branches/');
        const searchPath = isBranch ? '../search-results.html' : 'search-results.html';
        window.location.href = `${searchPath}?q=${encodeURIComponent(query.trim())}`;
    };

    // Hook up the search button click
    if (searchOverlay) {
        const searchBtn = searchOverlay.querySelector('button');
        const searchInput = searchOverlay.querySelector('input');
        if (searchBtn && searchInput) {
            searchBtn.addEventListener('click', () => performSearch(searchInput.value));
        }
    }

    // --- 4. Intersection Observer for Reveal animations ---
    const revealCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };
    const observer = new IntersectionObserver(revealCallback, { threshold: 0.1 });
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));

    // --- 5. Hero Parallax effect ---
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImage = document.getElementById('heroImage');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.4}px) scale(1.1)`;
        }

        // Simple Parallax for Hero text in index.html
        const heroEntrance = document.querySelector('.hero-entrance');
        if (heroEntrance && scrolled < 1000) {
            heroEntrance.parentElement.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // --- 6. Video Modal Logic (index.html) ---
    const videoModal = document.getElementById('videoModal');
    const promoVideo = document.getElementById('promoVideo');
    window.isVideoOpen = false;

    window.openVideo = function () {
        if (!videoModal || !promoVideo) return;
        window.isVideoOpen = true;
        videoModal.classList.remove('hidden');
        setTimeout(() => {
            videoModal.classList.add('flex', 'opacity-100');
            videoModal.classList.remove('opacity-0');
            promoVideo.play();
        }, 10);
        document.body.classList.add('overflow-hidden');
    };

    window.closeVideo = function () {
        if (!videoModal || !promoVideo) return;
        window.isVideoOpen = false;
        videoModal.classList.add('opacity-0');
        setTimeout(() => {
            videoModal.classList.add('hidden');
            videoModal.classList.remove('flex', 'opacity-100');
            promoVideo.pause();
            promoVideo.currentTime = 0;
        }, 500);
        if (!isMenuOpen && !isSearchOpen) document.body.classList.remove('overflow-hidden');
    };

    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) closeVideo();
        });
    }

    // --- 7. "Our School" Auto-Carousel Logic (index.html) ---
    const schoolSlides = [
        {
            color: '#9B2039', 
            img: 'assets/images/kg_gallery/lkg.jpg',
            url: 'sections/kg.html'
        },
        {
            color: '#C45A17', 
            img: 'assets/images/primary/primary.jpg',
            url: 'sections/primary.html'
        },
        {
            color: '#1E842D', 
            img: 'assets/images/secondary/secondary.jpg',
            url: 'sections/secondary.html'
        }
    ];

    let currentSchoolSlide = 0;
    let slideInterval;
    const SLIDE_DURATION = 6000;
    const navTabsContainer = document.getElementById('navTabsContainer');

    function renderTabs() {
        if (!navTabsContainer) return;
        const lang = localStorage.getItem('preferredLanguage') || 'en';
        const t = translations[lang];

        const slideKeys = [
            { t1: 'slide_kg_age', t2: 'slide_kg_title', t3: 'slide_kg_subtitle' },
            { t1: 'slide_primary_age', t2: 'slide_primary_title', t3: 'slide_primary_subtitle' },
            { t1: 'slide_secondary_age', t2: 'slide_secondary_title', t3: 'slide_secondary_subtitle' }
        ];

        navTabsContainer.innerHTML = '';
        schoolSlides.forEach((slide, index) => {
            const tab = document.createElement('button');
            tab.className = `flex-1 min-w-[120px] max-w-[220px] px-2 py-3 rounded-t-xl transition-all duration-[600ms] ease-in-out flex flex-col items-center justify-center text-center shadow-lg relative shrink-0 cursor-pointer outline-none`;
            if (index === currentSchoolSlide) {
                tab.style.backgroundColor = slide.color;
                tab.style.color = 'white';
                tab.classList.add('z-10', 'transform', 'scale-y-[1.05]', 'origin-bottom');
            } else {
                tab.style.backgroundColor = 'white';
                tab.style.color = slide.color;
                tab.classList.add('hover:bg-gray-50');
            }
            tab.onclick = () => goToSchoolSlide(index);
            
            const keys = slideKeys[index];
            tab.innerHTML = `
                <span class="text-[10px] md:text-xs font-bold block mb-0.5 leading-tight opacity-90">${t[keys.t1]}</span>
                <span class="text-xs md:text-sm font-black block leading-tight mb-0.5">${t[keys.t2]}</span>
                <span class="text-[10px] md:text-xs block font-semibold leading-tight opacity-90">${t[keys.t3]}</span>
            `;
            navTabsContainer.appendChild(tab);
        });
    }

    function updateSchoolSlide(index) {
        const section = document.getElementById('ourSchoolSection');
        if (!section) return;

        const lang = localStorage.getItem('preferredLanguage') || 'en';
        const t = translations[lang];

        const img = document.getElementById('osImage');
        const textContainer = document.getElementById('osTextContainer');
        const statsContainer = document.getElementById('osStatsContainer');
        const prevBtn = document.getElementById('osPrevBtn');
        const nextBtn = document.getElementById('osNextBtn');

        if (document.getElementById('osBgCircle1')) document.getElementById('osBgCircle1').style.transform = `scale(${1 + (index * 0.05)}) translate(${index * 10}px, ${index * -5}px)`;
        if (document.getElementById('osBgCircle2')) document.getElementById('osBgCircle2').style.transform = `scale(${1 - (index * 0.03)}) translate(${index * -15}px, ${index * 10}px)`;

        const slide = schoolSlides[index];
        const slideKeys = [
            { age: 'slide_kg_age', title: 'slide_kg_title', subtitle: 'slide_kg_subtitle', desc: 'slide_kg_desc', val: 'slide_kg_stat_val', text: 'slide_kg_stat_text', prefix: 'slide_kg_stat_prefix' },
            { age: 'slide_primary_age', title: 'slide_primary_title', subtitle: 'slide_primary_subtitle', desc: 'slide_primary_desc', val: 'slide_primary_stat_val', text: 'slide_primary_stat_text', prefix: 'slide_primary_stat_prefix' },
            { age: 'slide_secondary_age', title: 'slide_secondary_title', subtitle: 'slide_secondary_subtitle', desc: 'slide_secondary_desc', val: 'slide_secondary_stat_val', text: 'slide_secondary_stat_text', prefix: 'slide_secondary_stat_prefix' }
        ];
        const keys = slideKeys[index];

        if (img) img.classList.add('opacity-0');
        if (textContainer) textContainer.classList.add('opacity-0');
        if (statsContainer) statsContainer.classList.add('opacity-0');

        section.style.backgroundColor = slide.color;
        if (prevBtn) prevBtn.style.color = slide.color;
        if (nextBtn) nextBtn.style.color = slide.color;

        renderTabs();

        setTimeout(() => {
            if (img) {
                img.src = slide.img;
                img.classList.remove('opacity-0');
            }
            if (document.getElementById('osAge')) document.getElementById('osAge').textContent = t[keys.age];
            if (document.getElementById('osTitle')) document.getElementById('osTitle').textContent = t[keys.title];
            if (document.getElementById('osSubtitle')) document.getElementById('osSubtitle').textContent = t[keys.subtitle];
            if (document.getElementById('osDesc')) document.getElementById('osDesc').textContent = t[keys.desc];
            if (document.getElementById('osStatsInner')) {
                document.getElementById('osStatsInner').innerHTML = `
                    <p class="text-lg md:text-xl font-medium">${t[keys.prefix]}</p>
                    <p class="text-6xl lg:text-[80px] font-bold leading-none my-2">${t[keys.val]}</p>
                    <p class="text-lg md:text-xl font-medium">${t[keys.text]}</p>
                `;
            }

            const learnMoreBtn = section.querySelector('button.bg-white.text-black');
            if (learnMoreBtn && slide.url) {
                learnMoreBtn.textContent = t['hero_cta'] || 'Learn more';
                learnMoreBtn.onclick = () => window.location.href = slide.url;
            }

            if (textContainer) textContainer.classList.remove('opacity-0');
            if (statsContainer) statsContainer.classList.remove('opacity-0');
        }, 400);

    }

    function startAutoPlay() {
        if (!navTabsContainer) return;
        slideInterval = setInterval(nextSchoolSlide, SLIDE_DURATION);
    }

    function resetAutoPlay() {
        clearInterval(slideInterval);
        startAutoPlay();
    }

    function nextSchoolSlide() {
        currentSchoolSlide = (currentSchoolSlide + 1) % schoolSlides.length;
        updateSchoolSlide(currentSchoolSlide);
        resetAutoPlay();
    }

    window.prevSchoolSlide = function () {
        currentSchoolSlide = (currentSchoolSlide - 1 + schoolSlides.length) % schoolSlides.length;
        updateSchoolSlide(currentSchoolSlide);
        resetAutoPlay();
    };

    window.nextSchoolSlide = nextSchoolSlide;

    function goToSchoolSlide(index) {
        if (index === currentSchoolSlide) return;
        currentSchoolSlide = index;
        updateSchoolSlide(index);
        resetAutoPlay();
    }

    if (navTabsContainer) {
        renderTabs();
        const prevBtn = document.getElementById('osPrevBtn');
        const nextBtn = document.getElementById('osNextBtn');
        if (prevBtn) prevBtn.style.color = schoolSlides[0].color;
        if (nextBtn) nextBtn.style.color = schoolSlides[0].color;
        startAutoPlay();
    }

    // --- 9. Gallery Filtering & Lightbox ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    let currentGalleryIndex = 0;
    let visibleItems = [];

    // Filtering Logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter items
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.classList.remove('hidden');
                    setTimeout(() => item.classList.add('active'), 50);
                } else {
                    item.classList.add('hidden');
                    item.classList.remove('active');
                }
            });
            
            // Refresh visible items for lightbox
            updateVisibleItems();
        });
    });

    function updateVisibleItems() {
        visibleItems = Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));
    }
    updateVisibleItems();

    // Lightbox Logic
    window.openLightbox = function(imgElement) {
        if (!lightbox || !lightboxImg) return;
        
        const item = imgElement.closest('.gallery-item');
        currentGalleryIndex = visibleItems.indexOf(item);
        
        updateLightboxContent();
        lightbox.classList.remove('hidden');
        setTimeout(() => lightbox.classList.add('active'), 10);
        document.body.classList.add('overflow-hidden');
    };

    window.closeLightbox = function() {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        setTimeout(() => lightbox.classList.add('hidden'), 500);
        if (!isMenuOpen && !isSearchOpen) document.body.classList.remove('overflow-hidden');
    };

    window.nextLightbox = function() {
        currentGalleryIndex = (currentGalleryIndex + 1) % visibleItems.length;
        updateLightboxContent();
    };

    window.prevLightbox = function() {
        currentGalleryIndex = (currentGalleryIndex - 1 + visibleItems.length) % visibleItems.length;
        updateLightboxContent();
    };

    function updateLightboxContent() {
        const item = visibleItems[currentGalleryIndex];
        const img = item.querySelector('img');
        const title = item.querySelector('h3').textContent;
        const category = item.querySelector('span').textContent;

        lightboxImg.src = img.src;
        lightboxCaption.querySelector('h3').textContent = title;
        lightboxCaption.querySelector('p').textContent = category;
    }

    // Keyboard support for Lightbox
    document.addEventListener('keydown', (e) => {
        if (!lightbox || lightbox.classList.contains('hidden')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextLightbox();
        if (e.key === 'ArrowLeft') prevLightbox();
    });
});
