define(function (require, exports, module) {
    const postData = require('../data.js');
    postData(url = 'data.json')
        .then(data => {
            let text = document.getElementById("cards").textContent;
            data.map((val) => {
                text += ` <div class="card">
                                     <div class="card-header">
                                        ${val.title}
                                     </div>
                                        <div class="hot-topic">
                                            <img src="${val.image}" alt="SECTION IMAGE">
                                        </div>
                                            <div class="left">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">${val.desc}</li>
                                                    <li class="list-group-item">${val.desc1}</li>
                                                    <li class="list-group-item">${val.desc2}</li>
                                                </ul>
                                            </div>
                                    </div>`
                console.log("ankita22 error");
            });
            document.getElementById("cards").innerHTML = text;
        }).catch((err) => {
            console.log(err);
        });
    postData(url = 'data1.json')
        .then(data => {
            let text1 = document.getElementById("articles").textContent;
            data.map((val) => {
                text1 += ` <article>
                                        <h4>${val.h4}</h4>
                                        <div>
                                            <h2>${val.h2}l</h2>
                                            <p>${val.para}</p>
                                            <a href="#">${val.rd}</a>
                                        </div>
                                            <img src="${val.img}">
                                </article>`
            });
            document.getElementById("articles").innerHTML = text1;
        }).catch((err) => {
            console.log(err);
        });
        
    module.exports = postData();
});