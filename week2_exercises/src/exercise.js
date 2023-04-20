const superagent = require('superagent');
const fs = require("fs");
const { resolve } = require('path');
const { rejects } = require('assert');


// Callback-Hell
/*
fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
    console.log(data)
    superagent
        .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
        .end((err, res) => {
            if(err) return console.log(err);
            console.log(res.body.message);

            fs.writeFile(`${__dirname}/dogurl.txt`, res.body.message, err => {

                if(err) return console.log(err);
                console.log("YAY");
    
            });

        });

});
*/

// THEN SYNTAX

/*
fs.readFile(`${__dirname}/dog.txt`, "utf-8", (err, data) => {
    console.log(data)
    superagent
        .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
        .then(res => {console.log(res.body.message)
        
            fs.writeFile(`${__dirname}/dogurl.txt`, res.body.message, err => {

                if(err) return console.log(err);
                console.log("YAY");
    
            });
        
        });       
});
*/

const readFilePro = (file) => {
return new Promise((resolve,reject) =>{
    fs.readFile(file, "utf-8", (err, data) => {
            if(err) reject("File not found");
            resolve(data);

    });
});
};

const writeFilePro = (data) => {
    return new Promise((resolve,reject) =>{
        fs.writeFile(`${__dirname}/dogurl.txt`, data, err => {

            if(err) reject("File not fond");
            resolve("We did it!");

        });
    });


}
/*
readFilePro(`${__dirname}/dog.txt`).then(
    data => superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
    .then(res => writeFilePro(res.body.message))
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(() => console.log("FINISHED"))
    );
*/

/*
const getDogPics = async () => {
    try{
        const data = await readFilePro(`${__dirname}/dog.txt`)
        const res = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);
        const text = await writeFilePro(res.body.message);
    
        return text;
    } catch (e) {
        throw new Error(e.message);

    }
    
}


//IIFE Immediately Invoked Function Expressions

(async () => {
    try {
        const data = await getDogPics();
        console.log(data);
    } catch (e) {
        console.log(e);

    }
    
})();
*/

const getDogPics = async () => {
    try{
        const data = await readFilePro(`${__dirname}/dog.txt`)
        const res1 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);
        const res2 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);
        const res3 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);

        const all= Promise.all([res1, res2, res3]);
        const images = (await all).map(el => el.body.message);
        console.log(images);

        const text = await writeFilePro(images.join("\n"));

        return text;
    } catch (e) {
        throw new Error(e.message);

    }
    
}

getDogPics()
