const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);


    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 700) {  //set scroll dist
            upElem.classList.add('showBtn');
            upElem.classList.remove('hide');

        } else {
            upElem.classList.add('hide');
            upElem.classList.remove('showBtn');
        }
    });

    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.6; //set scroll speed

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

                document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });

};

export default scrolling;