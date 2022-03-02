// JavaScript Document

(function () {

    let j = 0;
    let newCount = 0;
    let nxtPgValue = 0;
    let currentPgValue = 0;
    let crntIndexNum = 0;
    let newIndexNum = 0;
    let pageId = document.querySelectorAll('section.slider');
    let pageHeight = window.innerHeight;

    document.getElementById('wn_slider').style.height = pageHeight + 'px';

    function autoPlay() {
        if (j != 0) {
            pageId[j - 1].classList.remove('wn_active');
        }
        if (j == pageId.length) {
            j = 0;
        }
        if (j < pageId.length) {
            pageId[j].classList.add('wn_active');
        }
        j++;

        setTimeout(autoPlay, 8000);
    }

    autoPlay();

    // button click count

    function nextBtnCount() {
        newCount++;

        return newCount;
    }

    function prevBtnCount() {
        newCount--;

        return newCount;
    }

    // actions on click button

    function actionOnNxtClick() {
        if (newCount < 0) {
            newCount = 0;
        }
        nextBtnCount();
        if (newCount < pageId.length) {
            document.getElementById(pageId[newCount]).style.top = 0 + '%';
        }
        crntIndexNum = newCount;
    }

    function actionOnPrevClick() {
        if (newCount > (pageId.length - 1)) {
            newCount = pageId.length - 1;
        }
        if (newCount != 0 && newCount > 0) {
            document.getElementById(pageId[newCount]).style.top = 100 + '%';
        }
        crntIndexNum = newCount;
        prevBtnCount();
    }

    // mouse wheel function

    function upAndDown(event) {

        if (event.deltaY > 0) {
            nxtPgValue++;
        } else {
            nxtPgValue--;
        }
        if (nxtPgValue > currentPgValue) {
            if (newIndexNum > pageId.length) {
                newIndexNum = (pageId.length - 1);
            } else {
                newIndexNum += 1;
            }
        } else if (newIndexNum < 0) {
            newIndexNum = 0;
        } else {
            newIndexNum -= 1;
        }


        if (crntIndexNum >= 0 && newIndexNum >= 0 && crntIndexNum < pageId.length && newIndexNum < pageId.length) {
            if (crntIndexNum < newIndexNum) {
                document.getElementById(pageId[newIndexNum]).style.top = 0 + '%';
            }
            if (crntIndexNum > newIndexNum) {
                document.getElementById(pageId[crntIndexNum]).style.top = 100 + '%';
            }
            currentPgValue = nxtPgValue;
            crntIndexNum = newIndexNum;
            newCount = crntIndexNum;
        }
    }



    // event listener 

    /*    document.getElementById('next').addEventListener('click', function (fw) {
            actionOnNxtClick();
        }, false);

        document.getElementById('prev').addEventListener('click', function (bw) {
            actionOnPrevClick();
        }, false);

        document.querySelector('body').addEventListener('wheel', upAndDown);*/
    window.addEventListener('resize', function () {
        pageHeight = window.innerHeight;
        document.getElementById('wn_slider').style.height = pageHeight + 'px';
    }, false);


}());
