'use strict'; 
    //Attribute input
    let attrVal = {
        STR: 10,
        DEX: 10,
        CON: 10,
        INT: 10,
        WIS: 10,
        CHA: 10,
    };//default values for attributes should be 10
    function increaseAttVal(button_id)
    {
        let attValues = attrVal //modified attribute
        let modifiedAttr = button_id.substr(-3); //type of attribute got from HTML element ID
        attValues[`${modifiedAttr}`] = attValues[`${modifiedAttr}`] + 1;
        document.
            getElementById(`AttVal${modifiedAttr}`).
            innerHTML = attValues[`${modifiedAttr}`]
        calculateMod();
    };
    function decreaseAttVal(button_id)
    {
        let attValues = attrVal //modified attribute
        let modifiedAttr = button_id.substr(-3); //type of attribute got from HTML element ID
        attValues[`${modifiedAttr}`] = attValues[`${modifiedAttr}`] - 1;
        document.
            getElementById(`AttVal${modifiedAttr}`).
            innerHTML = attValues[`${modifiedAttr}`]
        calculateMod();
    };

    // Feats input section
    function generateFeats()
    {
        function createPayload() {
            let html = '';
            let featList = pullFeatData();
            let sourceImageLink = 'https://static.wikia.nocookie.net/nwn/images/9/94/Ife_bardsong.gif/revision/latest?cb=20050813220720';
            let i;
            for(i=0; i< featList.length; i++)
            {
                html += `<tr>
                    <td>
                        <input type="checkbox" id="featCheck${i}">
                    </td>
                    <td>
                        <img src='${sourceImageLink}' id="featIcon">
                    </td>
                    <td id="featName">${featList[i]}</td>
                </tr>`
            }

            return html;
        }
        function featOutput() {
            /* This function duplicates skills from input to output together
            the summary value of the skill modified by the attributes
            */
           let featList = pullFeatData();
           let htmlFeatOutput = '';
           let i;
           for (i = 0; i<featList.length;i++)
           {
            htmlFeatOutput += `<tr>
            <td class="squareIco" id="FeatNamOut${featList[i]}"><img src=""></td>
            <td id="FeatNamOut${featList[i]}">
                ${featList[i]}
            </td>
            <td id="FeatNamOut${featList[i]}">0</td>
        </tr>
            
            `
           }
           document.querySelector('#featSheetTable').innerHTML = htmlFeatOutput;
        }
        
        function pullFeatData()
        {
            //tempArray = JSON.parse('../featData.json')
            let tempArray = ['test1', 'test2', 'test3'];
            return tempArray;
        }
        let htmlResult = createPayload();
        document.querySelector('#featListTarget').innerHTML = htmlResult;
        featOutput();
    }
    // Skill section
    function generateSkills() {
        function generateSkillPayload(){
            let skillHTMLInput = '';
            let skillList = pullSkillData();
            const sourceImageLink = 'html';
            let j;
            for (j = 0; j<Object.keys(skillList).length;j++)
            {
                skillHTMLInput += `
                <tr>
                        <td rowspan="2" id="skillIcon${j}"><img src='${sourceImageLink}'></td>
                        
                        <td id="skillName${j}" rowspan="2">${Object.keys(skillList)[j]}</td>
                        <td id="skillVal${j}" rowspan="2">0</td>
                        <td class="skillButton" id="valAddSkill${j}">
                        <img class="SkillButton src="files\\Scrollup.png">
                        </td>
                        
                    </tr>
                    <tr>
                        <td class="skillButton" id="valDecSkill${j}">
                        </td>
                    </tr>`
            }
            return skillHTMLInput;
        }
        function pullSkillData(){
            const skillObj = {'Animal empathy':"WIS",
            Appraise:"INT",
            Bluff:"CHA",
            Concentration:"CON",
            'Craft armor':"INT",
            'Craft trap':"INT",
            'Craft weapon':"INT",
            'Disable trap':"INT",
            Discipline:"STR",
            Heal:"WIS",
            Hide:"DEX",
            Intimidate:"CHA",
            Listen:"WIS",
            Lore:"INT",
            'Move silently':"DEX",
            'Open lock':"DEX",
            Parry:"DEX",
            Perform:"CHA",
            Persuade:"CHA",
            'Pick pocket':"DEX",
            Ride:"DEX",
            Search:"INT",
            'Set trap':"DEX",
            Spellcraft:"INT",
            Spot:"WIS",
            Taunt:"CHA",
            Tumble:"DEX",
            'Use magic device':"CHA"};
            return skillObj
        }

        function skillOutput() {
            /* This function duplicates skills from input to output together
            the summary value of the skill modified by the attributes
            */
           let skillList = pullSkillData();
           let htmlSkillOutput = '';
           let i;
           for (i = 0; i<Object.keys(skillList).length;i++)
           {
            htmlSkillOutput += `<tr>
            <td class="squareIco" id="SkillIcoOut${Object.keys(skillList)[i]}"><img src=""></td>
            <td id="SkillNamOut${Object.keys(skillList)[i]}">
                ${Object.keys(skillList)[i]}
            </td>
            <td id="SkillValOut${Object.keys(skillList)[i]}">0</td>
        </tr>
            
            `
           }
           document.querySelector('#skillSheetTable').innerHTML = htmlSkillOutput;
        }
        
        let skillHTMLResult = generateSkillPayload();
        document.querySelector('#skillListTarget').innerHTML = skillHTMLResult;
        skillOutput();
    }
    
    function openTab(type){
        const tabs = {
            sheet:'CharacterSheet',
            skills:'SkillsSheet',
            feats:'FeatsSheet'
        };
            if('sheet' === type){
                document.getElementById(tabs.sheet).style.display = 'flex';
                document.getElementById('TCharSheet').style.backgroundColor = '#2773be';
                document.getElementById(tabs.skills).style.display = 'none';
                document.getElementById(tabs.feats).style.display = 'none';
        }
            else if('skills'=== type){
                document.getElementById(tabs.sheet).style.display = 'none';
                document.getElementById(tabs.skills).style.display = 'inline-block';
                document.getElementById('TSkill').style.backgroundColor = '#2773be';
                document.getElementById(tabs.feats).style.display = 'none';}
        
            else if('feats'===type){
                document.getElementById(tabs.sheet).style.display = 'none';
                document.getElementById(tabs.skills).style.display = 'none';
                document.getElementById(tabs.feats).style.display = 'inline-block';
                document.getElementById('TFeats').style.backgroundColor = '#2773be';
                }
        }
    function calculateMod(){
        // pull the values
        const attributeVals = {
            str: document.getElementById('AttValSTR').innerHTML,
            dex: document.getElementById('AttValDEX').innerHTML,
            con: document.getElementById('AttValCON').innerHTML,
            int: document.getElementById('AttValINT').innerHTML,
            wis: document.getElementById('AttValWIS').innerHTML,
            cha: document.getElementById('AttValCON').innerHTML
        }
        let attributeMods = {
            str: document.getElementById('attCellModSTR').innerHTML,
            dex: document.getElementById('attCellModDEX').innerHTML,
            con: document.getElementById('attCellModCON').innerHTML,
            int: document.getElementById('attCellModINT').innerHTML,
            wis: document.getElementById('attCellModWIS').innerHTML,
            cha: document.getElementById('attCellModCHA').innerHTML
        }
        //calculate
        let x;
        for(x = 0; x <6;x++)
        {
            if (Object.values(attributeVals)[x] == 10){
                Object.values(attributeMods)[x] = 0
            } else if ( Object.values(attributeVals)[x] > 10) {
                //console.log(Math.floor(((Object.values(attributeVals)[x]) - 10) / 2))
                Object.values(attributeMods)[x] = Math.floor(((Object.values(attributeVals)[x]) - 10) / 2)
            } else if (Object.values(attributeVals)[x] < 10){
                
                Object.keys(attributeMods)[x] = Math.floor(((Object.values(attributeVals)[x])-10)/2)
                console.log(Object.keys(attributeMods)[x])
            }
            
        }
        console.log(attributeMods)
        //push values back
        let y;
        const documentElements = {
            str: document.getElementById('attCellModSTR'),
            dex: document.getElementById('attCellModDEX'),
            con: document.getElementById('attCellModCON'),
            int: document.getElementById('attCellModINT'),
            wis: document.getElementById('attCellModWIS'),
            cha: document.getElementById('attCellModCHA')
        }
        for (y = 0; y <6;y++) {
            console.log(Object.values(documentElements)[y])
            Object.values(documentElements)[y].innerHTML = Object.values(attributeMods)[y]
        }
    }

    
    generateFeats();
    generateSkills();

    
