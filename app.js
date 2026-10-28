// Portfolio Data (Student Academic Coursework - Hemant)
const projects = [
    {
        id: 1,
        title: "The Second Life",
        category: "adaptive-reuse",
        image: "assets/the-second-life/reception-main.png",
        portfolioSheet: "assets/project-01-the-second-life.png",
        location: "Mirzapur Road, Ahmedabad",
        year: "Semester 6 Studio",
        size: "24,970 sq. ft.",
        services: "Adaptive Reuse, Hospitality & Living",
        tags: ["Adaptive Reuse", "Hospitality"],
        desc: "An advanced adaptive reuse studio project converting an existing institutional college structure into a luxury boutique service apartment complex.",
        gallery: [
            // Zone 1: Reception & Atrium (from 3.1, 3.2, 3.3, 3.4, 3.5)
            { 
                zone: "Reception & Atrium", 
                title: "Grand Atrium Reception & Feature Wall", 
                caption: "Double-height public arrival with fluted timber acoustic backdrop, integrated warm cove lighting, and suspended botanical mobile.", 
                src: "assets/the-second-life/reception-main.png" 
            },

            { 
                zone: "Reception & Atrium", 
                title: "Guest Waiting Lounge & Seating Nook", 
                caption: "Curved organic lounge furniture paired with textured terrazzo flooring and low-profile marble coffee tables.", 
                src: "assets/the-second-life/reception-lounge.png" 
            },
            { 
                zone: "Reception & Atrium", 
                title: "Atrium Colonnade & Natural Daylight Well", 
                caption: "Full-height glazing channeling natural daylight across the structural concrete column bays.", 
                src: "assets/the-second-life/atrium-colonnade.png" 
            },
            { 
                zone: "Reception & Atrium", 
                title: "Main Entrance Foyer & Transition Portal", 
                caption: "Framed perspective from the primary entry vestibule highlighting spatial depth and vertical scale.", 
                src: "assets/the-second-life/atrium-entry.png" 
            },

            // Zone 2: Duplex Mezzanine Suite (from 1.1, 1.2, 1.3, 1.4)
            { 
                zone: "Duplex Mezzanine Suite", 
                title: "Double-Height Living Room & Mezzanine Loft", 
                caption: "Volumetric living area showcasing the upper mezzanine loft and architectural floating staircase with glass balustrade.", 
                src: "assets/the-second-life/duplex-living.png" 
            },
            { 
                zone: "Duplex Mezzanine Suite", 
                title: "Upper Mezzanine Relax & Reading Lounge", 
                caption: "Elevated quiet zone overlooking the ground-floor living area with warm wood flooring and micro-cement walls.", 
                src: "assets/the-second-life/duplex-mezzanine.png" 
            },
            { 
                zone: "Duplex Mezzanine Suite", 
                title: "Living & Compact Kitchenette Transition", 
                caption: "Open-plan living and dining spatial flow designed for long-stay hospitality residents.", 
                src: "assets/the-second-life/duplex-dining.png" 
            },
            { 
                zone: "Duplex Mezzanine Suite", 
                title: "Mezzanine Loft Perspective & Joinery Callout", 
                caption: "Detailed perspective of the upper tier with integrated wall sconces and minimalist ironmongery.", 
                src: "assets/the-second-life/duplex-upper.png" 
            },

            // Zone 3: Executive Bedroom Suite (from 2.1, 2.2, 2.3)
            { 
                zone: "Executive Bedroom Suite", 
                title: "Executive Master Bedroom & Fluted Headboard", 
                caption: "Full-width fluted timber acoustic headboard with integrated brass reading lamps and ambient ceiling coves.", 
                src: "assets/the-second-life/bedroom-suite.png" 
            },
            { 
                zone: "Executive Bedroom Suite", 
                title: "Bedroom Seating Nook & Media Unit", 
                caption: "Low-profile lounge seating corner and minimalist wall-hung media console with walnut veneer finishes.", 
                src: "assets/the-second-life/bedroom-lounge.png" 
            },
            { 
                zone: "Executive Bedroom Suite", 
                title: "Integrated Work Desk & Dressing Wardrobe", 
                caption: "Custom millwork study desk designed for business travelers, paired with fluted glass wardrobe shutters.", 
                src: "assets/the-second-life/bedroom-desk.png" 
            },
            {
                zone: "Executive Bedroom Suite",
                title: "Top-Down Suite Layout & Ensuite Bath Plan",
                caption: "Orthographic plan perspective illustrating the master king bedroom, dressing joinery, and private luxury bath with glass shower partition.",
                src: "assets/the-second-life/suite-plan-topdown.jpg"
            },
            {
                zone: "Architectural Plans",
                title: "Ground Floor Master Spatial & Landscape Plan",
                caption: "Comprehensive site and ground-level layout detailing arrival driveway, parking, central double-height reception atrium, and residential wings.",
                src: "assets/the-second-life/ground-floor-master-plan.jpg"
            },
            {
                zone: "Architectural Plans",
                title: "Mezzanine Floor Level & Spatial Void Plan",
                caption: "Upper mezzanine tier plan documenting double-height public voids, mezzanine lounges, and private executive loft suites.",
                src: "assets/the-second-life/mezzanine-level-plan.jpg"
            },
            {
                zone: "Technical Drawings",
                title: "Longitudinal Architectural Building Sections",
                caption: "Full-span building cross sections illustrating adaptive structural volumes, floor-to-floor slab heights, and exterior facade fenestration.",
                src: "assets/the-second-life/building-sections-longitudinal.jpg"
            },
            {
                zone: "Technical Drawings",
                title: "Transverse Building Section & Heritage Clock Tower",
                caption: "Transverse section through the historic clock tower adaptation, central atrium, and duplex mezzanine spatial configuration.",
                src: "assets/the-second-life/building-sections-transverse.jpg"
            }
        ]
    },
    {
        id: 2,
        title: "Little Footprints",
        category: "institutional",
        image: "assets/project-02-cover.png",
        portfolioSheet: "assets/project-02-little-footprints.png",
        location: "Ernakulam, Kerala",
        year: "Semester 5 Studio",
        size: "18,043 sq ft",
        services: "Institutional & Early Education Design",
        tags: ["Institutional", "School Design"],
        desc: "Designed for young learners, this primary school explores the elephant’s paw as a conceptual basis for spatial planning and architectural identity. The design brings together eight classrooms organized around a central open courtyard, creating a learning environment that balances focused academic spaces with opportunities for interaction and outdoor engagement.",
        gallery: [
            { 
                title: "Master Furniture Layout & Site Plan", 
                caption: "Comprehensive spatial plan showing the 8-classroom radial organization, central octagonal courtyard, administrative wing, and circulation.",
                src: "assets/little-footprints/master-furniture-layout-plan.jpg" 
            },

            { 
                title: "Axonometric Aerial Cutaway Perspective", 
                caption: "Isometric 3D perspective showcasing radial classroom partitions, colonnade perimeter, and open central courtyard.",
                src: "assets/little-footprints/axonometric-aerial-cutaway.jpg" 
            },
            { 
                title: "Zenith Aerial Footprint Perspective", 
                caption: "Perpendicular top-down architectural visualization illustrating the elephant paw planning concept.",
                src: "assets/project-02-hero.png" 
            },
            { 
                title: "Parametric Brick Jali Main Entrance", 
                caption: "Curved perforated terracotta brick screen creating passive daylighting and ventilation at the main entry.",
                src: "assets/gallery/p2-jali.png" 
            },
            { 
                title: "Arched Courtyard & Colonnade", 
                caption: "Rhythmic semi-circular arched colonnade providing sheltered transitional circulation between classrooms and courtyard.",
                src: "assets/gallery/p2-colonnade.png" 
            },
            { 
                title: "Curved Perimeter Facade & Punched Openings", 
                caption: "Curved exterior envelope with calibrated daylight slit windows and brick jali accent.",
                src: "assets/little-footprints/perimeter-curved-facade.jpg" 
            }
        ]    },
    {
        id: 3,
        title: "Villa Design",
        category: "residential",
        image: "assets/villa-design/villa-cover.jpg",
        portfolioSheet: "assets/villa-design/16-presentation-plan-ground-floor.jpg",
        location: "Gala Aqua Villa, Ahmedabad",
        year: "Semester 4 CAD",
        size: "4,350 sq ft",
        services: "Residential Design",
        tags: ["Residential", "Villa Design"],
        desc: "The villa design explores a balance between contemporary aesthetics, functional planning, and comfortable living. The design focuses on spatial organization, natural light, material selection, and a seamless connection between interior spaces to create a cohesive and inviting residential environment.",
        gallery: [
            // Technical CAD Working Drawings (Placed First)
            {
                title: "Furniture Layout - Ground Floor (CAD)",
                caption: "Comprehensive CAD ground floor working layout with structural column grid, spatial dimensions, furniture placement, and sectional reference cuts.",
                src: "assets/villa-design/03-furniture-layout-ground-floor.jpg"
            },
            {
                title: "Furniture Layout - First Floor (CAD)",
                caption: "CAD first floor plan documenting bedroom suites, lounge arrangement, balcony projections, plumbing shafts, and door-window schedules.",
                src: "assets/villa-design/04-furniture-layout-first-floor.jpg"
            },
            {
                title: "Technical Section - AA'",
                caption: "Architectural cross-section detailing foundation plinth, slab levels, false ceiling drops, and fenestration alignments.",
                src: "assets/villa-design/05-section-aa.jpg"
            },
            {
                title: "Technical Section - BB'",
                caption: "Full longitudinal section through double-height living room, central staircase core, and upper bedroom volumes.",
                src: "assets/villa-design/06-section-bb.jpg"
            },
            {
                title: "Technical Section - CC'",
                caption: "Cross-sectional drawing documenting kitchen workflow, service yard connection, and vertical service conduits.",
                src: "assets/villa-design/07-section-cc.jpg"
            },
            {
                title: "Technical Section - DD'",
                caption: "Transverse technical section illustrating verandah steps, exterior canopy cantilever, and terrace parapet details.",
                src: "assets/villa-design/08-section-dd.jpg"
            },
            {
                title: "Bedroom Plan",
                caption: "Detailed architectural plan of the master bedroom with millwork dimensions, electrical clearance, and wardrobe specifications.",
                src: "assets/villa-design/09-bedroom-plan.jpg"
            },
            {
                title: "Bedroom Elevations",
                caption: "Orthographic technical wall elevations specifying joinery panel heights, electrical conduit locations, and headboard detailing.",
                src: "assets/villa-design/10-bedroom-elevations.jpg"
            },
            // Presentation Renders & Rendered Plans
            {
                title: "Presentation Plan - Ground Floor",
                caption: "Full-color rendered ground floor layout featuring luxury living & dining spaces, kitchen suite, private guest bedroom, swimming pool deck, and landscaped motor court.",
                src: "assets/villa-design/16-presentation-plan-ground-floor.jpg"
            },
            {
                title: "Presentation Plan - First Floor",
                caption: "Rendered upper level spatial plan detailing master bedroom suite, walk-in dressing wardrobe, family lounge, private balconies, and open terrace.",
                src: "assets/villa-design/17-presentation-plan-first-floor.jpg"
            },
            {
                title: "Presentation - Sectional Elevation",
                caption: "Rendered cross-sectional perspective illustrating spatial transition between indoor dining area, central light court, and shaded outdoor verandah.",
                src: "assets/villa-design/18-presentation-sectional-elevation-01.jpg"
            },
            {
                title: "Presentation - Sectional Elevation",
                caption: "Two-storey sectional visualization showcasing double-height volume, upper lounge connection, covered carport, and private master terrace.",
                src: "assets/villa-design/19-presentation-sectional-elevation-02.jpg"
            },
            {
                title: "Presentation - Sectional Elevation",
                caption: "Longitudinal building section through ground-floor living lounge, entry vestibule, master suite, and integrated covered vehicle parking.",
                src: "assets/villa-design/20-presentation-sectional-elevation-03.jpg"
            },
            {
                title: "Presentation - Sectional Elevation",
                caption: "Transverse sectional perspective detailing prayer sanctuary alcove, staircase transition, and first-floor circulation core.",
                src: "assets/villa-design/21-presentation-sectional-elevation-04.jpg"
            },
            {
                title: "Bedroom Presentation Plan",
                caption: "High-resolution master bedroom presentation layout detailing king bed placement, ambient bedside lighting, custom joinery, and textured stone flooring.",
                src: "assets/villa-design/22-bedroom-presentation-plan.jpg"
            },
            {
                title: "Bedroom Presentation Elevations",
                caption: "Interior architectural elevations illustrating custom upholstered headboard, feature paneling, wall sconces, and full-height wardrobe joinery.",
                src: "assets/villa-design/23-bedroom-presentation-elevations.jpg"
            }
        ]
    }
    ,
    {
        id: 4,
        title: "Technical Resolution",
        category: "technical",
        image: "assets/technical-resolution/card-cover.jpg",
        modalImage: "assets/technical-resolution/modal-banner.jpg",
        portfolioSheet: "assets/technical-resolution/modal-banner.jpg",
        location: "",
        year: "Working Drawings",
        size: "11 Technical Sheets & 3D Renders",
        services: "Technical Working Drawings, Interior Construction Detailing & 3D Visualization",
        tags: ["Working Drawings", "3D Visualization"],
        desc: "This section presents a selection of technical studies and visual explorations developed to strengthen interior design documentation and spatial representation. From CAD plans and working drawings to 3D models and rendered views, these works demonstrate translating design concepts into clearly communicated spatial and technical solutions.",
        gallery: [
            {
                title: "Bathroom Designed Plan",
                caption: "Comprehensive plumbing and sanitary layout detailing drainage routes, cold and hot water lines, fixture dimensions, and product schedule.",
                src: "assets/technical-resolution/02-bathroom-plan.jpg"
            },
            {
                title: "Bathroom Elevations",
                caption: "Orthographic interior wall elevations A, B, C, and D detailing concealed plumbing conduits, vanity millwork, and fixture alignments.",
                src: "assets/technical-resolution/03-bathroom-elevations.jpg"
            },
            {
                title: "Partition Design",
                caption: "Architectural partition working drawings with scale 1:5 plan, fluted glass joinery, solid timber core details, and 3D rendered elevation.",
                src: "assets/technical-resolution/04-partition-design.jpg"
            },
            {
                title: "Kitchen Design",
                caption: "Modular kitchen layout plans A, B, and C with full elevations A-A', B-B', C-C', material specifications, and appliance schedule.",
                src: "assets/technical-resolution/05-kitchen-design.jpg"
            },
            {
                title: "Staircase Design",
                caption: "Contemporary floating staircase architectural section AA', elevation A, structural plan, and 3D visual model with wood risers and handrail details.",
                src: "assets/technical-resolution/06-staircase-design.jpg"
            },
            {
                title: "Mezzanine Design",
                caption: "Structural mezzanine technical section AA', elevation A, MS square pipe framing plan, timber plank decking, and 1:5 connection joinery details.",
                src: "assets/technical-resolution/07-mezzanine-design.jpg"
            },
            {
                title: "Ceiling Design",
                caption: "Reflected false ceiling plan with curved lighting cove, section elevation A, drop height schedule, indirect light detail AA', and 3D night views.",
                src: "assets/technical-resolution/08-ceiling-design.jpg"
            },
            {
                title: "RESORT BEDROOM VIEWS",
                caption: "Photorealistic 3D interior visualization of the resort bedroom suite showcasing spatial depth, natural daylighting, and custom headboard paneling.",
                src: "assets/technical-resolution/09-resort-bedroom-views-01.jpg"
            },
            {
                title: "RESORT BEDROOM VIEWS",
                caption: "Widescreen panoramic perspective detailing full-height exterior glazing, lounge sitting area, bespoke media console, and neutral palette.",
                src: "assets/technical-resolution/10-resort-bedroom-views-02.jpg"
            },
            {
                title: "RESORT BEDROOM VIEWS",
                caption: "Central bed elevation looking toward the private ensuite entry, integrated lighting, fluted millwork door, and wall art installation.",
                src: "assets/technical-resolution/11-resort-bedroom-views-03.jpg"
            },
            {
                title: "RESORT BEDROOM VIEWS",
                caption: "Direct head-on architectural elevation of the master bed platform, stepped level transition, custom upholstered wall, and curved cove lighting.",
                src: "assets/technical-resolution/12-resort-bedroom-views-04.jpg"
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Navbar Scroll Effect ---
    // Removed to prevent shadow line on scroll

    // --- Dark/Light Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    
    // --- Scroll Reveal Text Animation ---
    const scrollText = document.getElementById('scroll-text');
    if (scrollText && typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        const text = scrollText.textContent.trim();
        const words = text.split(/\s+/);
        
        scrollText.innerHTML = '';
        words.forEach(word => {
            const span = document.createElement('span');
            span.innerHTML = word + '&nbsp;';
            span.className = 'reveal-word inline-block';
            span.style.opacity = '0.15';
            scrollText.appendChild(span);
        });
        
        const revealWords = scrollText.querySelectorAll('.reveal-word');
        
        gsap.to(revealWords, {
            opacity: 1,
            stagger: 0.1,
            ease: 'none',
            scrollTrigger: {
                trigger: '#about',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 0.2
            }
        });
    }

    // --- Process Section Scroll Reveal Animation ---
    const initProcessAnimation = () => {
        const processSection = document.getElementById('process');
        if (!processSection || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

        // Respect prefers-reduced-motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        gsap.registerPlugin(ScrollTrigger);

        const desktopLine = document.getElementById('process-line-desktop');
        const mobileLine = document.getElementById('process-line-mobile');
        const processCircles = processSection.querySelectorAll('.process-circle');
        const processContents = processSection.querySelectorAll('.process-content');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#process',
                start: 'top 75%',
                toggleActions: 'play none none none' // Play once smoothly without glitching on backward scroll
            }
        });

        // 1. Subtle scroll-linked reveal for connecting line
        if (desktopLine) {
            tl.fromTo(desktopLine,
                { scaleX: 0, transformOrigin: 'left center' },
                { scaleX: 1, duration: 1.1, ease: 'power2.out' },
                0
            );
        }
        if (mobileLine) {
            tl.fromTo(mobileLine,
                { scaleY: 0, transformOrigin: 'top center' },
                { scaleY: 1, duration: 1.1, ease: 'power2.out' },
                0
            );
        }

        // 2. Subtle pop/reveal on numbered circles
        if (processCircles.length > 0) {
            tl.fromTo(processCircles,
                { scale: 0.85, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'back.out(1.4)' },
                0.15
            );
        }

        // 3. Gentle opacity transition for stage content (titles & descriptions)
        if (processContents.length > 0) {
            tl.fromTo(processContents,
                { opacity: 0, y: 14 },
                { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out' },
                0.3
            );
        }
    };

    initProcessAnimation();

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
                <div class="aspect-square relative overflow-hidden bg-gray-900">
                    <img src="${project.image}" alt="${project.title}" class="project-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
                    <div class="project-overlay absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                    <div class="project-info absolute bottom-0 left-0 w-full p-6 sm:p-8 z-20 text-white">
                        <div class="flex flex-wrap gap-2 mb-3">
                            ${project.tags.slice(0, 2).map(tag => `<span class="px-2.5 py-1 bg-white/20 backdrop-blur-sm text-xs rounded uppercase tracking-wider font-medium">${tag}</span>`).join('')}
                        </div>
                        <h3 class="text-2xl font-serif font-bold mb-1">${project.title}</h3>
                        ${project.location ? `
                        <p class="text-white/80 text-sm flex items-center gap-1.5">
                            <i data-lucide="map-pin" class="w-4 h-4 inline flex-shrink-0 text-primary"></i> ${project.location}
                        </p>
                        ` : ''}
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
        // Populate primary data
        const modalImg = document.getElementById('modal-image');
        modalImg.src = project.modalImage || project.image;
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-desc').innerHTML = project.desc;
        const projectDetailsCol = document.getElementById('modal-project-details') || document.getElementById('modal-academic-details');
        const descCol = document.getElementById('modal-desc-col');
        const galleryHeading = document.getElementById('modal-gallery-heading');

        if (project.id === 4) {
            // Project 4 (Technical Resolution): Hide project details, expand description full-width, set technical heading
            if (projectDetailsCol) projectDetailsCol.classList.add('hidden');
            if (descCol) {
                descCol.className = 'lg:col-span-12 max-w-4xl';
            }
            if (galleryHeading) {
                galleryHeading.textContent = 'Working Drawings & 3D Renders';
            }
        } else {
            // Projects 1, 2, 3: Show project details, 7-col description, original heading
            if (projectDetailsCol) projectDetailsCol.classList.remove('hidden');
            if (descCol) {
                descCol.className = 'lg:col-span-7';
            }
            if (galleryHeading) {
                galleryHeading.textContent = 'Spatial Exploration & Design Renders';
            }
            const locEl = document.getElementById('modal-location');
            if (locEl) locEl.textContent = project.location || '';
            const sizeEl = document.getElementById('modal-size');
            if (sizeEl) sizeEl.textContent = project.size || '';
            const servEl = document.getElementById('modal-services');
            if (servEl) servEl.textContent = project.services || '';
        }
        const tagsContainer = document.getElementById('modal-tags');
        tagsContainer.innerHTML = project.tags.map(tag => 
            `<span class="px-3 py-1 bg-gray-100 dark:bg-white/10 text-xs rounded-full uppercase tracking-wider font-medium">${tag}</span>`
        ).join('');

        // Interactive Spatial Gallery Renderer
        const gallerySection = document.getElementById('modal-gallery-section');
        const galleryContainer = document.getElementById('modal-gallery');
        
        const renderGallery = () => {
            if (!gallerySection || !galleryContainer) return;
            if (!project.gallery || project.gallery.length === 0) {
                gallerySection.classList.add('hidden');
                return;
            }
            gallerySection.classList.remove('hidden');

            const gridHTML = `
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${project.gallery.map((item, idx) => `
                        <div class="gallery-card group rounded-xl overflow-hidden bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 transition-all duration-300 hover:border-primary/80 hover:shadow-xl cursor-pointer" data-src="${item.src}" data-index="${idx}">
                            <div class="aspect-[16/10] overflow-hidden relative bg-black/10 dark:bg-black/50">
                                <img src="${item.src}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;

            galleryContainer.innerHTML = gridHTML;
            if (window.lucide) lucide.createIcons();

            // Wire Card click to open Zoom Lightbox
            galleryContainer.querySelectorAll('.gallery-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    const idx = parseInt(e.currentTarget.getAttribute('data-index'), 10);
                    openLightbox(idx, project.gallery);
                });
            });

            // Wire top banner image to also open Zoom Lightbox
            const modalImgContainer = document.getElementById('modal-image-container');
            if (modalImgContainer) {
                modalImgContainer.classList.add('cursor-pointer');
                modalImgContainer.onclick = () => {
                    if (project.gallery && project.gallery.length > 0) {
                        openLightbox(0, project.gallery);
                    }
                };
            }
        };

        // Initial gallery render
        renderGallery();

        // Show modal
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    // --- Image Zoom Lightbox Controller ---
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const lightboxContent = document.getElementById('lightbox-content');
    const closeLightboxBtn = document.getElementById('close-lightbox');
    const prevLightboxBtn = document.getElementById('lightbox-prev');
    const nextLightboxBtn = document.getElementById('lightbox-next');

    let currentGalleryList = [];
    let currentLightboxIndex = 0;

    const showLightboxImage = (index) => {
        if (!currentGalleryList || currentGalleryList.length === 0 || !lightboxImg) return;
        if (index < 0) index = currentGalleryList.length - 1;
        if (index >= currentGalleryList.length) index = 0;
        currentLightboxIndex = index;

        const item = currentGalleryList[currentLightboxIndex];
        if (!item) return;

        lightboxImg.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
        lightboxImg.style.opacity = '0.3';
        lightboxImg.style.transform = 'scale(0.97)';

        setTimeout(() => {
            lightboxImg.src = item.src;
            lightboxImg.alt = item.title || 'Zoomed render';
            if (lightboxCounter) {
                lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${currentGalleryList.length}`;
            }
            lightboxImg.style.opacity = '1';
            lightboxImg.style.transform = 'scale(1)';
        }, 150);
    };

    const openLightbox = (index, items) => {
        if (!lightbox || !lightboxImg) return;
        currentGalleryList = items || [];
        showLightboxImage(index);

        lightbox.classList.remove('opacity-0', 'pointer-events-none');
        if (lightboxContent) {
            lightboxContent.classList.remove('scale-95');
            lightboxContent.classList.add('scale-100');
        }
    };

    const closeLightbox = () => {
        if (!lightbox) return;
        lightbox.classList.add('opacity-0', 'pointer-events-none');
        if (lightboxContent) {
            lightboxContent.classList.remove('scale-100');
            lightboxContent.classList.add('scale-95');
        }
    };

    if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
    if (prevLightboxBtn) {
        prevLightboxBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showLightboxImage(currentLightboxIndex - 1);
        });
    }
    if (nextLightboxBtn) {
        nextLightboxBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            showLightboxImage(currentLightboxIndex + 1);
        });
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target === lightboxImg || e.target === lightboxContent) {
                closeLightbox();
            }
        });
    }

    window.addEventListener('keydown', (e) => {
        if (!lightbox || lightbox.classList.contains('pointer-events-none')) return;
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            showLightboxImage(currentLightboxIndex - 1);
        } else if (e.key === 'ArrowRight') {
            showLightboxImage(currentLightboxIndex + 1);
        }
    });

    const closeModal = () => {
        closeLightbox();
        modal.classList.add('opacity-0', 'pointer-events-none');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
        document.body.style.overflow = '';
    };

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });


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
                // Keep cursor unchanged over project cards
                if (el.closest('.project-card')) return;

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
    



    // --- Smooth Navigation for Nav Anchors ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    initCursor();
});
