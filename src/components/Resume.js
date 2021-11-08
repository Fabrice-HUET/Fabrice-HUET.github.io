import React from 'react';

export default function Resume(props) {

    if (props.data) {
        var skillmessage = props.data.skillmessage;
        var education = props.data.education.map(function (education) {
            return <div key={education.school}><h3>{education.school}</h3>
                        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
                        <p>{education.description1}</p>
                        <p>{education.description2}</p>
                        <p>{education.description3}</p>
                        <p>{education.description4}</p>
                    </div>
        })
        var work = props.data.work.map(function (work) {
            return <div key={work.company}><h3>{work.company}</h3>
                        <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                        <p>{work.description1}</p>
                        <p>{work.description2}</p>
                        <p>{work.description3}</p>
                        <p>{work.description4}</p>
                        <p>{work.description5}</p>
                        <p>{work.description6}</p>
                    </div>
        })

        var skills = props.data.skills.map((skills) => {
            var className = 'bar-expand ' + skills.name.toLowerCase();
            return (
                <li key={skills.name}>
                    <span style={{ width: skills.level, backgroundColor: '#740001' }} className={className}></span><em>{skills.name}</em>
                </li>
            )
        })
    }

    return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Formation</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {education}
                        </div>
                    </div>
                </div>
            </div>


            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Parcours</span></h1>
                </div>
                <div className="nine columns main-col">
                    {work}
                </div>
            </div>



            <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>

                <div className="nine columns main-col">
                    <p>{skillmessage}
                    </p>
                    <div className="bars">
                        <ul className="skills">
                            {skills}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row skill">
            {/* <div className="three columns header-col">
                    <h1><span>Favorite Tech</span></h1>
                    <p class="lead center">"Rapidement touche-à-tout, j'ai souvent envie de tester de nouveaux outils ou technologies mais ce sont celles-ci sont celles que j'utilise le plus."</p>
                </div> */}

                <div class="nine columns main-col">
                    
                    </div>

                <ul class="bgrid-quarters s-bgrid-thirds cf">
                <div class="columns feature-item">
                        <img class="skill" id="hidden" src="https://img.icons8.com/clouds/144/000000/technology.png" alt="Technos"/>
                        <h1><span>Favorite Tech</span></h1>
                        <p class="lead center">"Rapidement touche-à-tout, j'ai souvent envie de tester de nouveaux outils ou technologies mais ce sont celles-ci sont celles que j'utilise le plus."</p>
                    </div>
                    <div class="columns feature-item">
                        <img class="skill" src="https://img.icons8.com/color/144/000000/trello.png" alt="trello"/>
                        <h5>Trello</h5>
                        <p>"La plupart de mes projets sont organisés avec Trello."</p>
                    </div>
                    <div class="columns feature-item">
                        <img class="skill" src="https://img.icons8.com/color/144/000000/figma--v1.png" alt="figma"/>
                        <h5>Figma</h5>
                        <p>"J'utilise Figma pour réaliser les maquettes de mes sites"</p>
                    </div>
                    <div class="columns feature-item">
                        <img class="skill" src="https://img.icons8.com/color/144/000000/google-logo.png" alt="google"/>
                        <h5>Google</h5>
                        <p>"On ne va pas se mentir, j'utilise Google pour à peu près tout, selon une étude de 2021, 81% des développeurs y trouvent la réponse à leur question."</p>
                    </div>
                    <div class="columns feature-item">
                        <img class="skill" src="https://img.icons8.com/color/144/000000/html-5--v1.png" alt="html"/>
                        <h5>HTML</h5>
                        <p>"J'essaie d'accorder de l'importance au balisage de mes sites afin d'en faciliter l'accessibilité"</p>
                    </div>
                    <div class="columns feature-item">
                        <img class="skill" src="https://img.icons8.com/color/144/000000/css3.png" alt="css"/>
                        <h5>CSS</h5>
                        <p>"J'essaie d'avoir le sens du détail, et d'avoir des sites harmonieux, plus j'en fais plus j'aime le CSS"</p>
                    </div>
                    <div class="columns feature-item">
                        <img class="skill" src="https://img.icons8.com/color/144/000000/javascript--v1.png" alt="javascript"/>
                        <h5>Javascript</h5>
                        <p>"Javascript est un langage très complet, très utilisé en front-end, adaptable sur la plupart des frameworks "</p>
                    </div>
                    <div class="columns feature-item">
                        <img class="skill" src="https://img.icons8.com/color/144/000000/bootstrap.png" alt="bootstrap"/>
                        <h5>Bootstrap</h5>
                        <p>"J'utilise Bootstrap le plus souvent lors de la conception de la mise en page de mes sites. C'est le framework que je connais le mieux et donc je peux concevoir plus rapidement qu'avec d'autres."</p>
                    </div>
                    <div class="columns feature-item">
                        <img class="skill" src="https://img.icons8.com/nolan/144/react-native.png" alt="react"/>
                        <h5>React.js</h5>
                        <p>"La plupart de mes projets sont construits avec React, un Framework efficace, libre, pérenne et une grosse communauté autour "</p>
                    </div>
                    <div class="columns feature-item">
                        <img class="skill" src="https://img.icons8.com/color/144/000000/git.png" alt="git"/>
                        <h5>Git</h5>
                        <p>"J'utilise Git pour le contrôle de version pour tous mes projets jusqu'à présent."</p>
                    </div>
                    <div class="columns feature-item">
                        <img class="skill" src="https://img.icons8.com/color/144/000000/heroku.png" alt="heroku"/>
                        <h5>Heroku</h5>
                        <p>"
J'utilise Heroku comme plate-forme d'hébergement pour la plupart de mes projets car jusqu'à présent, ils sont tous gratuits et leur offre gratuite est pratique.J'apprécie également son intégration avec Github pour un déploiement aussi simple."</p>
                    </div>
                    <div class="columns feature-item">
                        <img class="skill" src="https://img.icons8.com/external-bearicons-gradient-bearicons/144/000000/external-question-frequently-asked-questions-faq-bearicons-gradient-bearicons.png" alt="bootstrap"/>
                        <h5>La prochaine ?</h5>
                        <p>"La liste pourrait être longue..."</p>
                    </div>
                    

                </ul>

         </div>
        </section>
    );
}
