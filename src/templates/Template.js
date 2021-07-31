import getData from '@api/getData.js';
import github from '@images/github.png';
import instagram from '@images/instagram.png';
import twitter from '@images/twitter.png';

const Template = async () => {
  const data = await getData();
  const view = `
    <div class="About">
      <div class="card">
        <div class="card_details">
          <div class="card_photo center circle">
            <img src="${data.image}" alt="${data.name}">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;" xml:space="preserve">
              <circle cx="50" cy="50" r="40" />
            </svg>
          </div>
          <p class="card_title">Rick and Morty</p>
          <p class="card_value">${data.name}</p>
        </div>
        <div class="card_userdata">
          <ul>
            <li>${data.species}</li>
            <li>${data.status}</li>
          </ul>
        </div>
        <div class="card_social">
          <a href="https://twitter.com/sebatstian_">
            <img src="${twitter}" alt="Twitter" />
          </a>
          <a href="https://github.com/sebatstian-web">
            <img src="${github}" alt="Github" />
          </a>
          <a href="https://instagram.com/sebatstian_">
            <img src="${instagram}" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  `;
  return view;
};

export default Template;
