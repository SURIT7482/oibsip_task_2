// Add smooth scrolling for all links
document.addEventListener('DOMContentLoaded', () => {
    // Enhance gallery items with click interaction
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Add a subtle animation when clicking on gallery items
            item.style.transform = 'scale(1.05)';
            
            setTimeout(() => {
                item.style.transform = 'scale(1.02)';
            }, 300);
        });
    });
    
    // Add scroll animation for section headings
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    // Apply animation to all section headers
    const headers = document.querySelectorAll('h2');
    headers.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(20px)';
        header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(header);
    });
    
    // Add hover effect to approach cards
    const approachCards = document.querySelectorAll('.approach-card');
    approachCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)';
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.1)';
        });
    });
});