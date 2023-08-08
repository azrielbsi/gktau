const fs = require('fs');

const data = fs.readFileSync('data.json');
const animeData = JSON.parse(data);

let readmeContent = `# Daftar Anime Terbaru\n\n`;

// Fungsi untuk menulis hasil ke file README.md
animeData.result.forEach((anime) => {
  const readmeContent += `<table align="center">`;
  const readmeContent += `<tr>`;
  const readmeContent += `<th><h3 align="center">${anime.title}</h3></th>`;
  const readmeContent += `</tr>`;
  const readmeContent += `<tr>`;
  const readmeContent += `<td>`;
  const readmeContent += `<p align="center">`;
  const readmeContent += `<img src="${anime.thumb}", height="256">`;
  const readmeContent += `</p>`;
  const readmeContent += `</td>`;
  const readmeContent += `</tr>`;
  const readmeContent += `<td>`;
  const readmeContent += `<table align="center">`;
  const readmeContent += `<tr>`;
  const readmeContent += `<td>Episode :</td>`;
  const readmeContent += `<td align="center">${anime.eps}</td>`;
  const readmeContent += `</tr>`;
  const readmeContent += `<tr>`;
  const readmeContent += `<td>Tanggal :</td>`;
  const readmeContent += `<td align="center">${anime.date}</td>`;
  const readmeContent += `</tr>`;
  const readmeContent += `<tr>`;
  const readmeContent += `<td>Hari :</td>`;
  const readmeContent += `<td align="center">${anime.day}</td>`;
  const readmeContent += `</tr>`;
  const readmeContent += `<tr>`;
  const readmeContent += `<td>Link :</td>`;
  const readmeContent += `<td align="center"><a href="${anime.link}">Anime Information</a></td>`;
  const readmeContent += `</tr>`;
  const readmeContent += `</table>`;
  const readmeContent += `</td>`;
  const readmeContent += `</tr>`;
  const readmeContent += `</table>`;
  });

fs.writeFileSync('README.md', readmeContent);
