const axios = require('axios');
const fs = require('fs');

async function getMovie() {
    const resObj = [];
    for (i=1; i<=100; i++) {
        try {
            const url = 'https://api.themoviedb.org/3/movie/' + i + '?api_key=a94fc5154afc72f4e9dc24fbabab999f';
            const res = await axios.get(url);
            if (res.data) {
                resObj.push(res.data);
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    fs.writeFileSync('./movies.json', JSON.stringify(resObj));
}


getMovie();
