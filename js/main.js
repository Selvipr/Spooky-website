document.addEventListener('DOMContentLoaded', () => {
    console.log('Digital Market Loaded');

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Simple Search Filter (Placeholder logic)
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            console.log('Searching for:', query);
            // Implement actual filtering logic here when items are populated
        });
    }
});
