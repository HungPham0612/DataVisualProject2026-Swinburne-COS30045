/**
 * Main JavaScript - Interactive Features & Utilities
 * Australian Road Casualties Visualization
 */

// Global state management
const AppState = {
    data: [],
    filteredData: [],
    currentFilter: 'all',
    currentSort: 'group',
    currentView: 'both',
    isMobile: window.innerWidth < 768
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initMobileMenu();
    loadData();
    initResponsiveHandlers();
});

/**
 * Navigation & Scroll Effects
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Smooth scroll with offset for fixed header
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update active state
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Update active nav on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const headerHeight = document.querySelector('.header').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;

            if (window.pageYOffset >= sectionTop &&
                window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const isExpanded = navMenu.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

/**
 * Load and Parse CSV Data
 */
function loadData() {
    d3.csv('data/data_file.csv').then(data => {
        // Parse numeric values
        AppState.data = data.map(d => ({
            dimension: d.dimension,
            group: d.group,
            count_2011: +d.count_2011,
            count_2021: +d.count_2021,
            absolute_change: +d.absolute_change,
            percentage_change: +d.percentage_change,
            change_direction: d.change_direction
        }));

        AppState.filteredData = AppState.data;

        // Initialize all visualizations
        initCharts();
        initControls();

    }).catch(error => {
        console.error('Error loading data:', error);
        showError('Failed to load data. Please refresh the page.');
    });
}

/**
 * Initialize Chart Controls
 */
function initControls() {
    // Dimension filter
    const dimensionFilter = document.getElementById('dimension-filter');
    if (dimensionFilter) {
        dimensionFilter.addEventListener('change', function() {
            AppState.currentFilter = this.value;
            updateFilteredData();
            updateAllCharts();
        });
    }

    // Sort option
    const sortOption = document.getElementById('sort-option');
    if (sortOption) {
        sortOption.addEventListener('change', function() {
            AppState.currentSort = this.value;
            updateAllCharts();
        });
    }

    // View mode
    const viewMode = document.getElementById('view-mode');
    if (viewMode) {
        viewMode.addEventListener('change', function() {
            AppState.currentView = this.value;
            updateAllCharts();
        });
    }

    // Gender chart year selector
    const genderYearInputs = document.querySelectorAll('input[name="gender-year"]');
    genderYearInputs.forEach(input => {
        input.addEventListener('change', function() {
            updateGenderChart(this.value);
        });
    });
}

/**
 * Update filtered data based on current filter
 */
function updateFilteredData() {
    if (AppState.currentFilter === 'all') {
        AppState.filteredData = AppState.data;
    } else {
        AppState.filteredData = AppState.data.filter(d =>
            d.dimension === AppState.currentFilter
        );
    }
}

/**
 * Initialize all charts
 */
function initCharts() {
    createOverviewChart();
    createAgeGroupChart();
    createGenderChart('2011');
    createRoadUserChart();
    createCounterpartyChart();
    createRemotenessChart();
}

/**
 * Update all charts
 */
function updateAllCharts() {
    createOverviewChart();
    // Other charts update as needed
}

/**
 * Tooltip utility functions
 */
const Tooltip = {
    element: null,

    init() {
        this.element = d3.select('#tooltip');
    },

    show(html, event) {
        if (!this.element) this.init();

        const tooltip = this.element;
        tooltip
            .style('opacity', 1)
            .html(html)
            .classed('visible', true);

        this.position(event);
    },

    position(event) {
        if (!this.element) return;

        const tooltipNode = this.element.node();
        const tooltipWidth = tooltipNode.offsetWidth;
        const tooltipHeight = tooltipNode.offsetHeight;

        let left = event.pageX + 15;
        let top = event.pageY - 28;

        // Keep tooltip within viewport
        if (left + tooltipWidth > window.innerWidth) {
            left = event.pageX - tooltipWidth - 15;
        }

        if (top + tooltipHeight > window.innerHeight + window.scrollY) {
            top = event.pageY - tooltipHeight - 15;
        }

        this.element
            .style('left', `${left}px`)
            .style('top', `${top}px`);
    },

    hide() {
        if (!this.element) return;

        this.element
            .style('opacity', 0)
            .classed('visible', false);
    },

    move(event) {
        if (!this.element) return;
        this.position(event);
    }
};

/**
 * Format number with commas
 */
function formatNumber(num) {
    return num.toLocaleString('en-AU');
}

/**
 * Format percentage
 */
function formatPercentage(num) {
    return (num > 0 ? '+' : '') + num.toFixed(1) + '%';
}

/**
 * Get color based on change direction
 */
function getChangeColor(direction) {
    return direction === 'Increase' ?
        getComputedStyle(document.documentElement).getPropertyValue('--color-increase').trim() :
        getComputedStyle(document.documentElement).getPropertyValue('--color-decrease').trim();
}

/**
 * Sort data based on current sort option
 */
function sortData(data) {
    const sortBy = AppState.currentSort;

    return [...data].sort((a, b) => {
        switch(sortBy) {
            case 'percentage':
                return b.percentage_change - a.percentage_change;
            case 'absolute':
                return b.absolute_change - a.absolute_change;
            case 'count_2021':
                return b.count_2021 - a.count_2021;
            case 'group':
            default:
                return a.group.localeCompare(b.group);
        }
    });
}

/**
 * Responsive handlers
 */
function initResponsiveHandlers() {
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const wasMobile = AppState.isMobile;
            AppState.isMobile = window.innerWidth < 768;

            // Redraw charts if switching between mobile/desktop
            if (wasMobile !== AppState.isMobile) {
                updateAllCharts();
            }
        }, 250);
    });
}

/**
 * Error display
 */
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
        position: fixed;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #d73027;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        z-index: 10000;
    `;
    errorDiv.textContent = message;

    document.body.appendChild(errorDiv);

    setTimeout(() => {
        errorDiv.style.opacity = '0';
        errorDiv.style.transition = 'opacity 300ms';
        setTimeout(() => errorDiv.remove(), 300);
    }, 5000);
}

/**
 * Keyboard navigation for charts
 */
function addKeyboardNavigation(element, callback) {
    element
        .attr('tabindex', 0)
        .attr('role', 'button')
        .on('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                callback.call(this, event);
            }
        });
}

/**
 * Export utilities (for future enhancement)
 */
const ExportUtils = {
    downloadSVG(svgElement, filename) {
        const svgData = svgElement.outerHTML;
        const blob = new Blob([svgData], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();

        URL.revokeObjectURL(url);
    },

    downloadCSV(data, filename) {
        const csv = d3.csvFormat(data);
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();

        URL.revokeObjectURL(url);
    }
};
