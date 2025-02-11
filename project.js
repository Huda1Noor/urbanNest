// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form validation for the search bar
document.querySelector('.search-bar button').addEventListener('click', function(e) {
    e.preventDefault();
    const location = document.querySelector('.search-bar input[type="text"]').value;
    const propertyType = document.querySelector('.search-bar select:nth-of-type(1)').value;
    const priceRange = document.querySelector('.search-bar select:nth-of-type(2)').value;

    if (location && propertyType && priceRange) {
        alert(`Searching for ${propertyType} in ${location} within price range ${priceRange}`);
        // Here you would typically send this data to your backend or perform a search
    } else {
        alert('Please fill in all search fields');
    }
});