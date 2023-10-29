const name = document.getElementById('name_section');
name_section.innerHTML = 'Hello ' + localStorage.getItem('userName') + "!"

root.style.setProperty('--bg', localStorage.getItem('--bg'));
root.style.setProperty('--body', localStorage.getItem('--body'));
root.style.setProperty('--text_color', localStorage.getItem('--text_color'));
root.style.setProperty('--border', localStorage.getItem('--border'));
root.style.setProperty('--box-shadow', localStorage.getItem('--box-shadow'));
root.style.setProperty('--card_body', localStorage.getItem('--card_body'));
root.style.setProperty('--card_text', localStorage.getItem('--card_text'));
root.style.setProperty('--map_border', localStorage.getItem('--map_border'));
root.style.setProperty('--website_name_text_shadow', localStorage.getItem('--website_name_text_shadow'));
root.style.setProperty('--contact_border',localStorage.getItem('--contact_border'));
root.style.setProperty('--input_bg',localStorage.getItem('--input_bg'));
root.style.setProperty('--btn_bg', localStorage.getItem('--btn_bg'));

modeChange.children[0].src == localStorage.getItem('icon');
modeChange.children[1].innerHTML == localStorage.getItem('mode');