let users = [
  {
    name: "Sakura Mizuno",
    pic: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3987c831-4d51-4e16-bfde-4eb3378d6326/dh3pdbv-5e56f918-100e-47b0-90b7-6ed2d6e0e74c.jpg/v1/fill/w_894,h_894,q_70,strp/sakura_haruno_anime_characters_by_fernandahd20237_dh3pdbv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzM5ODdjODMxLTRkNTEtNGUxNi1iZmRlLTRlYjMzNzhkNjMyNlwvZGgzcGRidi01ZTU2ZjkxOC0xMDBlLTQ3YjAtOTBiNy02ZWQyZDZlMGU3NGMuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ydGYA8G1xauPwFVBezJUHIDS7-iB8ticszN3yty9JoI",
    bio: "guardian of spring petals 🌸 | destiny blooms in silence",
  },
  {
    name: "Sakura Akagawa",
    pic: "https://th.bing.com/th/id/OIP.apdsRnClGQwcKV_upYyWwQHaK1?w=186&h=273&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    bio: "blade forged in midnight flames 🔥⚔️ | strength without mercy",
  },
  {
    name: "Yuki Tanaka",
    pic: "https://th.bing.com/th/id/OIP.XNWhFv7Ror8CghoyqIxVjQHaMp?w=191&h=326&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    bio: "child of winter winds ❄️ | heart colder than the snow",
  },
  {
    name: "Renji Kuroda",
    pic: "https://www.bing.com/th/id/OIP.ZleTLBX2wi__JSNWYXkVxgHaND?w=144&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    bio: "walking between shadows 🌑 | silence is my weapon",
  },
  {
    name: "Aiko Fujimoto",
    pic: "https://th.bing.com/th/id/OIP.1FjM_uv5hKv9epZmOribdgHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    bio: "starlight in human form ✨🌌 | dreaming beyond galaxies",
  },
  {
    name: "Renji Nakamura",
    pic: "https://www.bing.com/th/id/OIP.JFvIVzgpUftCaQQof0v4pQHaHa?w=183&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    bio: "storm rider 🌩️ | chaos follows where I walk",
  },
  {
    name: "Hina Takahashi",
    pic: "https://th.bing.com/th/id/OIP.8niAqlayewtOaJWXmXm_igAAAA?w=180&h=346&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
    bio: "moonlit soul 🌙 | dancing on the edge of fate",
  },
];

function showUsers(arr) {
  const container = document.querySelector(".cards");
  container.innerHTML = "";
  arr.forEach(function (user) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.pic;
    card.appendChild(img);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const h3 = document.createElement("h3");
    h3.textContent = user.name;
    cardContent.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = user.bio;
    cardContent.appendChild(p);

    card.appendChild(cardContent);

    container.appendChild(card);
  });
}
showUsers(users);

let inp = document.querySelector(".search-box");
inp.addEventListener("input", function () {
  let newUser = users.filter((user) => {
    return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
  });
  showUsers(newUser);
});
