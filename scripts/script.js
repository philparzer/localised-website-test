let DESCTIPTION_TEXT = document.getElementById("description-text");
let DESCRIPTION_BODY = document.getElementById("description-body");
let DESCRIPTION_BODY_MOBILE = document.getElementById("mobile-description-body");
let DESCRIPTION_TEXT_MOBILE = document.getElementById("mobile-description-text");
let MOBILE_CONTAINER = document.getElementById("mobile-proj");
let mobileNextProject = 0;
let HEADLINE_0 = document.getElementById("headline-0");
let HEADLINE_1 = document.getElementById("headline-1");
let HEADLINE_2 = document.getElementById("headline-2");
let HEADLINE_3 = document.getElementById("headline-3");
let highlighted;
let notHoveringSince = false; 

const PROJECT_CONTAINER_1 = document.getElementById("proj-container-1");
const PROJECT_CONTAINER_2 = document.getElementById("proj-container-2");
const PROJECT_CONTAINER_3 = document.getElementById("proj-container-3");
const PROJECT_CONTAINER_4 = document.getElementById("proj-container-4");

try{document.getElementById("mobile-version").textContent = VERSION[document.documentElement.lang];}
catch{}
try{document.getElementById("versionHistory").textContent = VERSION[document.documentElement.lang];}
catch{}

const rng = (maxNum) => {

    return Math.floor(Math.random() * maxNum);
}

const updateHeadline = (lang) => {

    setTimeout(() => {
        let headlineArr = I_AM[lang].map(element => element);
        let outputArr = [];

        for (let i = 0; i < 4; i++){

            let randomIndex = rng(headlineArr.length)
            outputArr.push(headlineArr[randomIndex])
            headlineArr.splice(randomIndex, 1);
        }

        HEADLINE_0.textContent = outputArr[0];
        HEADLINE_1.textContent = outputArr[1];
        HEADLINE_2.textContent = outputArr[2];
        HEADLINE_3.textContent = outputArr[3];
        
        setTimeout(() => {updateHeadline(document.documentElement.lang);}, 300)

    },4700)
}



const highlight = (project) => {

        notHoveringSince = false;
        highlighted = document.getElementsByClassName("highlighted-project");

        try {highlighted[0].className = "unhighlighted-project";} 
        catch{
            project.className = "highlighted-project";
            DESCTIPTION_TEXT.textContent = PROJECT_DESC[project.id].title;
            DESCRIPTION_BODY.textContent = PROJECT_DESC[project.id][document.documentElement.lang];
            DESCTIPTION_TEXT.className = "fade-in";
            DESCRIPTION_BODY.className = "fade-in";
            return;
        }
        
        
            DESCTIPTION_TEXT.className = "fade-out";
            DESCRIPTION_BODY.className = "fade-out";

        setTimeout(() => {
            DESCTIPTION_TEXT.textContent = PROJECT_DESC[project.id].title;
            DESCRIPTION_BODY.textContent = PROJECT_DESC[project.id][document.documentElement.lang];
            DESCTIPTION_TEXT.className = "fade-in";
            DESCRIPTION_BODY.className = "fade-in";

        },800)

        project.className = "highlighted-project";
}

const fadeOut = () => {

    notHoveringSince = true;

    setTimeout(() =>  {
    
        if (notHoveringSince){
            highlighted = document.getElementsByClassName("highlighted-project");
             try {highlighted[0].className = "unhighlighted-project";} catch{}
            DESCTIPTION_TEXT.className = "fade-out";
            DESCRIPTION_BODY.className = "fade-out";

            setTimeout(() => {
                DESCTIPTION_TEXT.className = "invisible";
                DESCRIPTION_BODY.className = "invisible";
            }, 800);

            notHoveringSince = false;
        }

    }, 5000)
}

const nextProject = (command) => {
    
    let projectProperties = Object.getOwnPropertyNames(PROJECT_DESC);

    let projectContainers = [PROJECT_CONTAINER_1, PROJECT_CONTAINER_2, PROJECT_CONTAINER_3, PROJECT_CONTAINER_4]


    
    if (command === 'desktop') {
        for (let m = 0; m < projectContainers.length; m++){
            let nextProject = projectProperties.indexOf(projectContainers[m].children[0].children[0].id) -1
            if (nextProject < 0) {nextProject = projectProperties.length-1}

            projectContainers[m].children[0].children[0].id = projectProperties[nextProject];

            if (document.documentElement.lang === 'en') {projectContainers[m].children[0].children[0].setAttribute("src", PROJECT_DESC[projectProperties[nextProject]].srcImg)}
            else {projectContainers[m].children[0].children[0].setAttribute("src", `.${ PROJECT_DESC[projectProperties[nextProject]].srcImg}`)}

            if (PROJECT_DESC[projectProperties[nextProject]].WIP) {projectContainers[m].children[0].removeAttribute("href"); projectContainers[m].children[0].removeAttribute("target"); projectContainers[m].children[0].className = "wip";}
            else {projectContainers[m].children[0].setAttribute("target", "_blank"); projectContainers[m].children[0].className = "";}

            if (PROJECT_DESC[projectProperties[nextProject]].hrefLink.startsWith("./") && document.documentElement.lang !== 'en'){projectContainers[m].children[0].setAttribute("href", `.${PROJECT_DESC[projectProperties[nextProject]].hrefLink}`)}
            else {projectContainers[m].children[0].setAttribute("href", `${PROJECT_DESC[projectProperties[nextProject]].hrefLink}`)}
        }
    }

    else if (command === 'mobile' || command === "prevMobile"){

        if (command === 'mobile') {
            mobileNextProject++
            if (mobileNextProject > projectProperties.length-1) {mobileNextProject = 0}
        }

        else if (command === 'prevMobile')
        {
            mobileNextProject--
            if (mobileNextProject < 0) {mobileNextProject = projectProperties.length-1}
        }

        DESCRIPTION_TEXT_MOBILE.textContent = PROJECT_DESC[projectProperties[mobileNextProject]].title;
        DESCRIPTION_BODY_MOBILE.textContent = PROJECT_DESC[projectProperties[mobileNextProject]][document.documentElement.lang];

        if (document.documentElement.lang !== 'en'){MOBILE_CONTAINER.children[0].children[0].setAttribute("src", `.${PROJECT_DESC[projectProperties[mobileNextProject]].srcImg}`);} 
        else {MOBILE_CONTAINER.children[0].children[0].setAttribute("src", PROJECT_DESC[projectProperties[mobileNextProject]].srcImg);}

        if (PROJECT_DESC[projectProperties[mobileNextProject]].WIP) {MOBILE_CONTAINER.children[0].removeAttribute("href"); MOBILE_CONTAINER.children[0].removeAttribute("target"); MOBILE_CONTAINER.children[0].className = "wip";}
        else {MOBILE_CONTAINER.children[0].setAttribute("target", "_blank"); MOBILE_CONTAINER.children[0].className = ""}

        if (PROJECT_DESC[projectProperties[mobileNextProject]].hrefLink.startsWith('./') && document.documentElement.lang !== 'en') {MOBILE_CONTAINER.children[0].setAttribute("href", `.${PROJECT_DESC[projectProperties[mobileNextProject]].hrefLink}`);}
        else {MOBILE_CONTAINER.children[0].setAttribute("href", PROJECT_DESC[projectProperties[mobileNextProject]].hrefLink);}
    }

    else if (command === 'initiliazeMobile'){
        DESCRIPTION_TEXT_MOBILE.textContent = PROJECT_DESC[projectProperties[mobileNextProject]].title;
        DESCRIPTION_BODY_MOBILE.textContent = PROJECT_DESC[projectProperties[mobileNextProject]][document.documentElement.lang];

        if (document.documentElement.lang !== 'en'){MOBILE_CONTAINER.children[0].children[0].setAttribute("src", `.${PROJECT_DESC[projectProperties[mobileNextProject]].srcImg}`);} 
        else {MOBILE_CONTAINER.children[0].children[0].setAttribute("src", PROJECT_DESC[projectProperties[mobileNextProject]].srcImg);}

        if (PROJECT_DESC[projectProperties[mobileNextProject]].WIP) {MOBILE_CONTAINER.children[0].removeAttribute("href"); MOBILE_CONTAINER.children[0].removeAttribute("target"); MOBILE_CONTAINER.children[0].className = "wip"}
        else {MOBILE_CONTAINER.children[0].setAttribute("target", "_blank"); MOBILE_CONTAINER.children[0].className = ""}

        if (PROJECT_DESC[projectProperties[mobileNextProject]].hrefLink.startsWith('./') && document.documentElement.lang !== 'en') {MOBILE_CONTAINER.children[0].setAttribute("href", `.${PROJECT_DESC[projectProperties[mobileNextProject]].hrefLink}`);}
        else {MOBILE_CONTAINER.children[0].setAttribute("href", PROJECT_DESC[projectProperties[mobileNextProject]].hrefLink);}
    }

    else if (command === 'initializeDesktop') {
        for (let o = 0; o < projectContainers.length ; o++){
            projectContainers[o].children[0].children[0].id = projectProperties[o];

            if (document.documentElement.lang !== 'en') {projectContainers[o].children[0].children[0].setAttribute("src", `.${PROJECT_DESC[projectProperties[o]].srcImg}`)}
            else {projectContainers[o].children[0].children[0].setAttribute("src", `${PROJECT_DESC[projectProperties[o]].srcImg}`)}

            if (PROJECT_DESC[projectProperties[o]].WIP) {projectContainers[o].children[0].removeAttribute("href"); projectContainers[o].children[0].removeAttribute("target"); projectContainers[o].children[0].className = "wip"}
            else {projectContainers[o].children[0].setAttribute("target", "_blank"); projectContainers[o].children[0].className = ""}

            if (PROJECT_DESC[projectProperties[o]].hrefLink.startsWith("./") && document.documentElement.lang !== 'en') {projectContainers[o].children[0].setAttribute("href", `.${PROJECT_DESC[projectProperties[o]].hrefLink}`)}
            else {projectContainers[o].children[0].setAttribute("href", `${PROJECT_DESC[projectProperties[o]].hrefLink}`)}
        }
    }
}

//initialize mobile project
nextProject('initiliazeMobile');
nextProject('initializeDesktop');

setTimeout(() => {updateHeadline(document.documentElement.lang)},1000)





console.log(`\`
MMMMMMMMMd\/                                                                                         
MMMMMMMMMMMd\/                                                                                       
MMMMMMMMMMMMMd\/\`                                                                                    
MMMMMMMMMMMMMMMd:                                                                                   
MMMMMMMMMMMMMMMMNy.                                                                                 
MMMMMMMMMMMMMMMMMMm-                                                                                
MMMMMMMMMMMMMMMMMMMN-                                                                               
MMMMMMMMMMMMMMMMMMMMd                                                                               
MMMMMMMMMMMMMMMMMMMMM-                          \/s:        .:\`                                      
NMMMMMMMMMMMMMMMMMMMN.                        \`sMNNs\`\`\`  \`sNMd:                                     
.\/smMMMMMMMMMMMMMMMN\/                        .dMh\/hMmhhyymNyomMs\`                                   
    :hMMMMMMMMMMMmo\`                        \/NMs---+oossyy\/--:hMd.                                  
     +MMMMMMMMNy:                          +MN\/----------------sMN-                                 
   :mMMMMMMMd\/\`                           +MN-.\`      \`.\`\`\`\`\`\`\`\`\/MN-                                
  :MMMMMMMN\/                             -MNhNMNo   .dMMd-       \/MN-                               
  -NMMMMMMo                             \`mM+hMMMy   -NMMN:        +Mm\`                              
   -smMMMMm+.                           +Mm\`\`:\/:\`    .\/\/.         \`yMh                              
     \`:sdNMMNmyo\/-.                     mMo----............\`\`\`\`\`\`\`\`.mM+                             
        \`.:ohmMMMNmds:\`                .MM:--------:+\/--------------+MN.                            
             .-+hNMMMMd-               \/Mm---------oMd----\/\/---------hMy                            
                 -yMMMM\/               +Md---------yMmyyyymh---------\/MM-                           
                   dMMs                +Md\`\`\`\`\`\`...dMy\/\/\/\/\/:----------hMy                           
                  \`dN+                 :MN\/\/::--...NM:            \`\`\`\`-MN\`                          
                 .yy.                  \`yhddmMMMNNNNN.                 mM+                          
               \/sNdoooooo\`                  \`mM\/\`..-.                  oMh                          
               MmMd\/\/\/\/yMhyyyyyyhhhhhhhhhhhhdMm\`\`\`\`                    -MN                          
               mNNNmmmmNMNssooo++ossssssso++NMo---------------..........MM-                         
                \`\`\`\`\`\`\`+Md-.     .-------- :MN:-------------------------mM\/                         
                       sMNhhssoo+ooo+++\/\/:.hMy-------------------:o\/----hMs                         
                       .\/+oossyyhhhddddmmmNMM:-------------------oMd----sMd                         
                                 \`\`\`\`\`\`...yMy\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`\`..\/MN....\/MN                         
                                         \`NM:                    .MM\`   \`MM.                        
                                         :MN\`                    \`MM-    mM\/                        
                                         yMy                      mM\/    yMs                        
                                         mM+..........\`\`\`\`\`\`\`\`\`\`\`\`hMo\`\`\`\`oMh                        
                                        .MM:----------------------yMh----+MN                        
                                        \/MN-----------------------sMm----:MM.                       
                                        oMd-----------------------+MN-----NM\/                       
                                        yMs............-----------\/MMhhhhhNMo                       
                                        dM+                       \`+sNMhooo+.                       
                                        mM\/                          mM\/                            
                                        MM-        .hddddddy\`        mM\/                            
                                       \`MM-\`\`\`\`\`\`\` \/MN\/\/\/oMM\`        dM\/                            
                                       .MM:--------oMm   -MM.........mM\/                            
                                       -MM---------oMd   -MM---------mM+                            
                                       :MN:::::::::sMd   :MN:::::::::mM+                            
                                       :MMddddmmmmmNMy   :MMmmmddddddNM\/                            
                                       \`\/\/\/\/\/\/\/\/:::::.   \`::::\/\/\/\/\/\/\/\/\/\`

`
)