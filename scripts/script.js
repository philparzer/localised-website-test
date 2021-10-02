let DESCTIPTION_TEXT = document.getElementById("description-text");
let DESCRIPTION_BODY = document.getElementById("description-body");
let DESCRIPTION_BODY_MOBILE = document.getElementById("mobile-description-body");
let DESCRIPTION_TEXT_MOBILE = document.getElementById("mobile-description-text");
let HEADLINE_0 = document.getElementById("headline-0");
let HEADLINE_1 = document.getElementById("headline-1");
let HEADLINE_2 = document.getElementById("headline-2");
let HEADLINE_3 = document.getElementById("headline-3");
var mobileDescriptionIndex = 0;
let highlighted;
let notHoveringSince = false; 

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

const mobileBtn = (btn) => {

    var lookUpArr = Object.getOwnPropertyNames(PROJECT_DESC);
    var projectObjLen = lookUpArr.length;

    if (btn === "next"){

        if (mobileDescriptionIndex < (projectObjLen -1)){
            mobileDescriptionIndex++;
        }

        else {mobileDescriptionIndex = 0}
    }
    else {
        if (mobileDescriptionIndex === 0){
            mobileDescriptionIndex = projectObjLen -1;
        }
        else {
            mobileDescriptionIndex--;
        }

    }
    
    var lookUpStr = lookUpArr[mobileDescriptionIndex]

    DESCRIPTION_TEXT_MOBILE.textContent = PROJECT_DESC[lookUpStr].title;
    DESCRIPTION_BODY_MOBILE.textContent = PROJECT_DESC[lookUpStr][document.documentElement.lang];


}


setTimeout(() => {updateHeadline(document.documentElement.lang)},1000)