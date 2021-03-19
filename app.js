/*
    1 : get and create neseccery
    2 : when mousemove function run
    3 : choose random item
    4 : showof after 10 milisecond
*/

// 1 
const body = document.querySelector('body');
const borderradiuses = ['15%', '25%', '35%', '50%'];
const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'gray'];
// 2
body.addEventListener('mousemove', (e) => {
    let newdiv = document.createElement('div');
    newdiv.classList.add('spec')
    newdiv.style.left = e.offsetX + 'px';
    newdiv.style.top = e.offsetY + 'px';
    // 3
    let rndborderradius = Math.floor(Math.random() * borderradiuses.length);
    let rndcolor = Math.floor(Math.random() * colors.length);
    newdiv.style.borderRadius = borderradiuses[rndborderradius];
    newdiv.style.backgroundColor = colors[rndcolor];
    document.body.appendChild(newdiv);
    // 4
    setTimeout(() => {
        newdiv.style.opacity = '0';
    }, 10)
})