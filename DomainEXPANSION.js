document.addEventListener('DOMContentLoaded', () => {
    const car = document.getElementById('car');
    const obstacle = document.getElementById('obstacle');

    let carLeft = 225; // Initial position of car

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft' && carLeft > 0) {
            carLeft -= 10;
        }
        if (event.key === 'ArrowRight' && carLeft < 450) {
            carLeft += 10;
        }
        car.style.left = carLeft + 'px';
    });

    function moveObstacle() {
        let obstacleTop = -50;
        setInterval(() => {
            obstacleTop += 5;
            if (obstacleTop > 500) {
                obstacleTop = -50;
                obstacle.style.left = Math.random() * 450 + 'px'; // Randomize obstacle position
            }
            obstacle.style.top = obstacleTop + 'px';
        }, 50);
    }

    moveObstacle();
});