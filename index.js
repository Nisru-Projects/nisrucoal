require('dotenv').config();
const port = process.env.PORT || 3001;

async function main() {
    
    const app = require('./src/utils/app')();

    try {
        app.listen(port, () => {
          console.log(`App listening at http://localhost:${port}`);
        });
    } catch (error) {
        console.log(error);
    }

}

main();