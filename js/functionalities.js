const modeChange = document.getElementById('modeChange');
const logoutBtn = document.getElementById("logout");
const websiteName = document.getElementById("websiteName");
const modeIcon = document.getElementById('mode_icon');

modeChange.addEventListener('click', (e) => {
    console.log('yes')
    console.log(modeChange.children[1].innerHTML)
    if (modeChange.children[1].innerHTML == 'Dark Mode') {
        modeChange.children[1].innerHTML = 'Light Mode'
        root.style.setProperty('--bg', '#121212');
        root.style.setProperty('--body', 'rgb(21, 21, 21)');
        root.style.setProperty('--text_color', '#5D3FD3');
        root.style.setProperty('--border', '3px solid #5D3FD3');
        root.style.setProperty('--box-shadow', '0px 1px 9px #5D3FD3');
        root.style.setProperty('--card_body', 'rgb(56, 56, 56)');
        root.style.setProperty('--card_text', '#5D3FD3');
        root.style.setProperty('--map_border', '10px solid #5D3FD3');
        root.style.setProperty('--website_name_text_shadow', `0 0 20px #5D3FD3,
                                                            0 0 40px #5D3FD3
                                                            `);

        modeChange.children[0].src = 'assets/icons/light_mode.png';

        //saving values in localStorage
        localStorage.setItem('mode', 'dark');
        localStorage.setItem('--bg', '#121212');
        localStorage.setItem('--text_color', '#5D3FD3');
        localStorage.setItem('--body', 'rgb(21, 21, 21)');
        localStorage.setItem('--border', '3px solid #5D3FD3');
        localStorage.setItem('--box-shadow', '0px 1px 9px #5D3FD3');
        localStorage.setItem('--card_body', 'rgb(56, 56, 56)');
        localStorage.setItem('--card_text', '#5D3FD3');
        localStorage.setItem('--map_border', '10px solid #5D3FD3');
        localStorage.setItem('--website_name_text_shadow', `0 0 20px #5D3FD3,
        0 0 40px #5D3FD3`);
        localStorage.setItem('icon', 'assets/icons/light_mode.png');
    }
    else if (modeChange.children[1].innerHTML == 'Light Mode') {
        modeChange.children[1].innerHTML = 'Dark Mode'
        root.style.setProperty('--bg', '#FEFEFE');
        root.style.setProperty('--body', '#5A7BFA');
        root.style.setProperty('--text_color', '#FEFEFE');
        root.style.setProperty('--border', '3px solid black');
        root.style.setProperty('--card_body', '#E0FFFF');
        root.style.setProperty('--card_text', 'black');
        root.style.setProperty('--map_border', '10px solid black');
        root.style.setProperty('--website_name_text_shadow', `none`);
        modeChange.children[0].src = 'assets/icons/dark_mode.png';

        //saving values in localStorage
        localStorage.setItem('mode', 'light');
        localStorage.setItem('--bg', '#FEFEFE');
        localStorage.setItem('--text_color', '#FEFEFE');
        localStorage.setItem('--body', '#5A7BFA');
        localStorage.setItem('--border', '3px solid black');
        localStorage.setItem('--box-shadow', '0px 1px 9px #5D3FD3');
        localStorage.setItem('--card_body', '#E0FFFF');
        localStorage.setItem('--card_text', 'black');
        localStorage.setItem('--map_border', '10px solid black');
        localStorage.setItem('--website_name_text_shadow', 'none');
        localStorage.setItem('icon', 'assets/icons/dark_mode.png');
    }
})


logoutBtn.addEventListener('click', (e) => {
    const result = confirm("Are you sure want to logout?")

    if (result) {
        localStorage.clear();
        location.replace('./index.html')
    }
})