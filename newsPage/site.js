let text = document.getElementById("root").textContent;

text = ` <div>
           <h1 class="marginTop">LifeStyle<i class="arrow right"></i></h1>
                <section class="banner">
                    <div class="banner-sub-content">
                        <div id="cards">
                        </div>
                        <div class="marginLeft58">
                            <img src="images/Google-Banner-Ads-Example-Audible-1.jpg" alt="advertisment" />
                        </div>
                    </div>
                    <section class="main-container-right">
                        <h2>Latest Stories</h2>
                        <div id="articles">
                        </div>
                    </section>
                </section><
        </div>`

document.getElementById("root").innerHTML = text;