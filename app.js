// Portfolio Data
const projects = [
    {
        id: 1,
        title: "The Glass Pavilion",
        category: "residential",
        image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=1000",
        location: "Los Angeles, CA",
        year: "2025",
        size: "4,200 sq ft",
        services: "Interior Architecture, Styling",
        tags: ["Modern", "Minimalist", "Villa"],
        desc: "A stunning modern villa overlooking the hills. We focused on seamless indoor-outdoor living, utilizing vast glass expanses and natural stone materials to create a serene, minimalist sanctuary."
    },
    {
        id: 2,
        title: "Lumiere Corporate HQ",
        category: "commercial",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
        location: "New York, NY",
        year: "2024",
        size: "12,000 sq ft",
        services: "Space Planning, Custom Millwork",
        tags: ["Corporate", "Biophilic", "Office"],
        desc: "Redefining the modern workspace. This corporate headquarters integrates biophilic design principles with cutting-edge acoustics to foster creativity and well-being among employees."
    },
    {
        id: 3,
        title: "Aura Boutique Hotel",
        category: "hospitality",
        image: "https://images.unsplash.com/photo-1582719478250-c89af14fb422?auto=format&fit=crop&q=80&w=1000",
        location: "Miami, FL",
        year: "2025",
        size: "25,000 sq ft",
        services: "Turnkey Design, FF&E",
        tags: ["Luxury", "Boutique", "Hotel"],
        desc: "A luxurious escape that blends Art Deco influences with contemporary comforts. Every suite features bespoke furniture and curated art pieces to provide an unforgettable guest experience."
    },
    {
        id: 4,
        title: "Heritage Townhouse",
        category: "residential",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000",
        location: "London, UK",
        year: "2023",
        size: "3,500 sq ft",
        services: "Renovation, Heritage Restoration",
        tags: ["Classic", "Restoration", "Urban"],
        desc: "Restoring a 19th-century townhouse to its former glory while injecting modern functionality. The design juxtaposes original crown moldings with sleek, contemporary kitchen cabinetry."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navbar Scroll Effect ---
    // Removed to prevent shadow line on scroll

    // --- Dark/Light Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check local storage for preference, default to dark
    if (localStorage.getItem('theme') === 'light') {
        htmlElement.classList.remove('dark');
    }

    themeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        if (htmlElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // --- Stats Counter Animation ---
    const counters = document.querySelectorAll('.stat-counter');
    let hasCounted = false;

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // ms
            const increment = target / (duration / 16); // 60fps
            
            let current = 0;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    };

    // Intersection Observer for stats
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
            animateCounters();
            hasCounted = true;
        }
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.stat-counter')?.parentElement?.parentElement;
    if (statsSection) statsObserver.observe(statsSection);


    // --- Portfolio Filtering & Rendering ---
    const portfolioGrid = document.getElementById('portfolio-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    const renderProjects = (filter = 'all') => {
        portfolioGrid.innerHTML = '';
        
        const filtered = filter === 'all' 
            ? projects 
            : projects.filter(p => p.category === filter);
            
        filtered.forEach((project, index) => {
            // Animate in with slight delay based on index
            const delay = index * 100;
            
            const card = document.createElement('div');
            card.className = 'project-card relative rounded-2xl overflow-hidden cursor-pointer group opacity-0 translate-y-8';
            card.style.animation = `fadeUp 0.6s ease forwards ${delay}ms`;
            card.setAttribute('data-cursor', 'view');
            
            // Inline keyframes for the injection animation
            if (!document.getElementById('dynamic-styles')) {
                const style = document.createElement('style');
                style.id = 'dynamic-styles';
                style.innerHTML = `
                    @keyframes fadeUp {
                        to { opacity: 1; transform: translateY(0); }
                    }
                `;
                document.head.appendChild(style);
            }

            card.innerHTML = `
                <div class="aspect-[4/5] md:aspect-square relative overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" class="project-img w-full h-full object-cover">
                    <div class="project-overlay absolute inset-0 z-10"></div>
                    <div class="project-info absolute bottom-0 left-0 w-full p-8 z-20 text-white">
                        <div class="flex gap-2 mb-3">
                            ${project.tags.map(tag => `<span class="px-2 py-1 bg-white/20 backdrop-blur-sm text-xs rounded uppercase tracking-wider">${tag}</span>`).join('')}
                        </div>
                        <h3 class="text-2xl font-serif font-bold mb-1">${project.title}</h3>
                        <p class="text-white/80 text-sm flex items-center gap-1">
                            <i data-lucide="map-pin" class="w-4 h-4 inline"></i> ${project.location}
                        </p>
                    </div>
                </div>
            `;

            // Open Modal Event
            card.addEventListener('click', () => openModal(project));
            
            portfolioGrid.appendChild(card);
        });
        
        // Re-initialize lucide icons for newly injected HTML
        lucide.createIcons();
        if (window.updateCursorHoverStates) window.updateCursorHoverStates();
    };

    // Initial render
    renderProjects();

    // Filter click events
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked
            e.target.classList.add('active');
            // Render
            renderProjects(e.target.getAttribute('data-filter'));
        });
    });


    // --- Project Modal ---
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.getElementById('close-modal');

    const openModal = (project) => {
        // Populate data
        document.getElementById('modal-image').src = project.image;
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-desc').textContent = project.desc;
        document.getElementById('modal-location').textContent = project.location;
        document.getElementById('modal-year').textContent = project.year;
        document.getElementById('modal-size').textContent = project.size;
        document.getElementById('modal-services').textContent = project.services;
        
        const tagsContainer = document.getElementById('modal-tags');
        tagsContainer.innerHTML = project.tags.map(tag => 
            `<span class="px-3 py-1 bg-gray-100 dark:bg-white/10 text-xs rounded-full uppercase tracking-wider">${tag}</span>`
        ).join('');

        // Show modal
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        modal.classList.add('opacity-0', 'pointer-events-none');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
        document.body.style.overflow = '';
    };

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });


    // --- Before/After Slider ---
    const slider = document.getElementById('ba-slider');
    const handle = document.getElementById('ba-handle');
    const beforeClip = document.getElementById('ba-before-clip');
    let isDragging = false;

    if (slider) {
        const moveSlider = (e) => {
            if (!isDragging) return;
            
            const rect = slider.getBoundingClientRect();
            let x = e.clientX || (e.touches && e.touches[0].clientX);
            x = x - rect.left;
            
            // Constrain
            if (x < 0) x = 0;
            if (x > rect.width) x = rect.width;
            
            const percentage = (x / rect.width) * 100;
            
            handle.style.left = `${percentage}%`;
            beforeClip.style.width = `${percentage}%`;
        };

        const startDrag = (e) => {
            isDragging = true;
            // Prevent text selection while dragging
            e.preventDefault();
        };

        const stopDrag = () => {
            isDragging = false;
        };

        handle.addEventListener('mousedown', startDrag);
        handle.addEventListener('touchstart', startDrag, { passive: false });
        
        window.addEventListener('mousemove', moveSlider);
        window.addEventListener('touchmove', moveSlider, { passive: false });
        
        window.addEventListener('mouseup', stopDrag);
        window.addEventListener('touchend', stopDrag);
    }

    // --- Contact Form ---
    const form = document.getElementById('contact-form');
    const toast = document.getElementById('toast');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show toast
            toast.classList.remove('translate-y-[150%]');
            
            // Reset form
            form.reset();
            
            // Hide toast after 3 seconds
            setTimeout(() => {
                toast.classList.add('translate-y-[150%]');
            }, 3000);
        });
    }

    // --- Custom Cursor ---
    const initCursor = () => {
        // Check if device supports hover
        if (!window.matchMedia("(pointer: fine)").matches) return;

        const cursor = document.getElementById('custom-cursor');
        if (!cursor) return;
        
        const cursorText = cursor.querySelector('.cursor-text');
        
        // Mouse positions
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        
        // Render positions for lerp
        let cursorX = mouseX;
        let cursorY = mouseY;
        
        // Easing values
        const cursorEase = 0.2; // Smooth but responsive trailing
        let currentAngle = 0;
        
        // Update positions on mouse move
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Show cursor if hidden
            if (cursor.classList.contains('hidden')) {
                cursor.classList.remove('hidden');
            }
        });

        // Hide when mouse leaves window
        document.body.addEventListener('mouseleave', () => {
            cursor.classList.add('hidden');
        });
        document.body.addEventListener('mouseenter', () => {
            cursor.classList.remove('hidden');
        });

        // Click effects
        window.addEventListener('mousedown', () => {
            cursor.classList.add('click');
        });
        window.addEventListener('mouseup', () => {
            cursor.classList.remove('click');
        });

        // Animation loop
        const renderCursor = () => {
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;
            
            // Calculate rotation angle if moving
            if (Math.hypot(dx, dy) > 1.5) {
                // atan2 gives angle from horizontal right. Subtract 90 to align our downward-pointing arrow.
                const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) - 90;
                
                // Shortest path angle lerp
                let delta = ((targetAngle - currentAngle + 540) % 360) - 180;
                currentAngle += delta * 0.25;
            }
            
            // Lerp position
            cursorX += dx * cursorEase;
            cursorY += dy * cursorEase;
            
            // Apply positions
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            
            // Apply rotation and scale to arrow
            const arrow = cursor.querySelector('.cursor-arrow');
            if (arrow) {
                // Determine scale based on classes
                let scale = 1;
                if (cursor.classList.contains('view-state')) {
                    scale = 0;
                } else if (cursor.classList.contains('click')) {
                    scale = 0.8;
                } else if (cursor.classList.contains('hover')) {
                    scale = 1.2;
                }
                
                arrow.style.transform = `translate(-50%, -50%) rotate(${currentAngle}deg) scale(${scale})`;
            }
            
            requestAnimationFrame(renderCursor);
        };
        requestAnimationFrame(renderCursor);

        // Hover States
        const setupHoverStates = () => {
            const interactables = document.querySelectorAll('a, button, [role="button"], input, select, textarea, [data-cursor], .cursor-pointer');
            
            interactables.forEach(el => {
                // Prevent duplicate listeners if this is called multiple times
                if (el.dataset.cursorSetup) return;
                el.dataset.cursorSetup = "true";

                el.addEventListener('mouseenter', () => {
                    const cursorType = el.getAttribute('data-cursor');
                    
                    if (cursorType === 'view') {
                        cursor.classList.add('view-state');
                        if (cursorText) cursorText.textContent = 'VIEW';
                    } else if (cursorType === 'text') {
                        cursor.classList.add('hover');
                    } else {
                        cursor.classList.add('hover');
                    }
                });
                
                el.addEventListener('mouseleave', () => {
                    cursor.className = 'custom-cursor';
                    if (cursorText) cursorText.textContent = '';
                });
            });
        };
        
        setupHoverStates();
        window.updateCursorHoverStates = setupHoverStates;
    };
    
    initCursor();
});
