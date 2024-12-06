document.addEventListener('keydown', function(event) {
    const box = document.querySelector('.movable-box');
    const step = 10;
    const playground = box.parentNode;

    const currentTop = parseInt(box.style.top, 10) || 0;
    const currentLeft = parseInt(box.style.left, 10) || 0;

    const maxTop = playground.clientHeight - box.offsetHeight;
    const maxLeft = playground.clientWidth - box.offsetWidth;

    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        event.preventDefault();
    }

    switch (event.key) {
        case 'ArrowUp':
            if (currentTop - step >= 0) {
                box.style.top = `${currentTop - step}px`;
            }
            break;
        case 'ArrowDown':
            if (currentTop + step <= maxTop) {
                box.style.top = `${currentTop + step}px`;
            }
            break;
        case 'ArrowLeft':
            if (currentLeft - step >= 0) {
                box.style.left = `${currentLeft - step}px`;
            }
            break;
        case 'ArrowRight':
            if (currentLeft + step <= maxLeft) {
                box.style.left = `${currentLeft + step}px`;
            }
            break;
    }
});
