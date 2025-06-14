document.addEventListener('DOMContentLoaded', () => {
    // Filter functionality
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to clicked button
            this.classList.add('active');

            // Get the filter value
            const filterValue = this.getAttribute('data-filter');

            // Show or hide sectors based on the filter value
            document.querySelectorAll('.sector').forEach(sector => {
                if (filterValue === 'all' || sector.id === filterValue) {
                    sector.style.display = 'block';
                } else {
                    sector.style.display = 'none';
                }
            });
        });
    });

    // Sector header click to collapse/expand
    document.querySelectorAll('.sector-header').forEach(header => {
        header.addEventListener('click', function() {
            const sector = this.parentElement;
            const grid = this.nextElementSibling; // This is the .members-grid

            // Toggle visibility of the grid
            if (grid.style.display === 'none' || grid.style.display === '') { // Check for initial state or explicitly hidden
                grid.style.display = 'grid';
            } else {
                grid.style.display = 'none';
            }
        });
    });
});
