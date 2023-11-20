const notice = document.querySelectorAll('.notice');
const postText = document.querySelectorAll('.circle');
const notifCount = document.querySelector('.new-notif');

let count = 3, clickCount = 0;
let boolClick1 = false, boolClick2 = false, boolClick3 = false;
notifCount.innerHTML = count;

notice.forEach((res, id) => {
    res.addEventListener('click', () => {
        postText[id].classList.remove('red-notif');
        res.style.backgroundColor = 'transparent';

        if (id == 0) {
            if (!boolClick1) {
                boolClick1 = true;
                count--;
            }
        }
        if (id == 1) {
            if (!boolClick2) {
                boolClick2 = true;
                count--;
            }
        }
        if (id == 2) {
            if (!boolClick3) {
                boolClick3 = true;
                count--;
            }
        }
        notifCount.innerHTML = count;
        console.log(count);
    })
});

function del_mark() {
    count = 0;
    boolClick1 = true;
    boolClick2 = true;
    boolClick3 = true;
    notifCount.innerHTML = count;
    notice.forEach(res => {
        postText.forEach(req => {
            req.classList.remove('red-notif');
        });
        res.style.backgroundColor = 'transparent';
    });
}
