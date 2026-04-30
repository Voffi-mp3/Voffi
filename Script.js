window.addEventListener('load', () => {
    const bar = document.getElementById('bar');
    let width = 0;
    
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.body.classList.add('loaded');
            }, 500);
        } else {
            width += Math.random() * 20; 
            if (width > 100) width = 100;
            bar.style.width = width + '%';
        }
    }, 100);
});
