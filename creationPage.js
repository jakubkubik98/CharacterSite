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
    };
    function decreaseAttVal(button_id)
    {
        let attValues = attrVal //modified attribute
        let modifiedAttr = button_id.substr(-3); //type of attribute got from HTML element ID
        attValues[`${modifiedAttr}`] = attValues[`${modifiedAttr}`] - 1;
        document.
            getElementById(`AttVal${modifiedAttr}`).
            innerHTML = attValues[`${modifiedAttr}`]
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
            for (j = 0; j<skillList.length; j++)
            {
                skillHTMLInput += `
                <tr>
                        <td rowspan="2" id="skillIcon">
                            <img src='${sourceImageLink}'>
                        </td>
                        <td id="skillName" rowspan="2">
                            ${skillList[j]}
                        </td>
                        <td>
                            <button class="skillButton" id="valAddSkill">+</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button class="skillButton" id="valDecSkill">-</button>
                        </td>
                    </tr>`
            }
            return skillHTMLInput;
        }
        function pullSkillData(){
            //let skillArray = JSON.parse('../skillData.json')
            let skillArray = ['skill1','skill2','skill3'];
            return skillArray
        }

        function skillOutput() {
            /* This function duplicates skills from input to output together
            the summary value of the skill modified by the attributes
            */
           let skillList = pullSkillData();
           let htmlSkillOutput = '';
           let i;
           for (i = 0; i<skillList.length;i++)
           {
            htmlSkillOutput += `<tr>
            <td class="squareIco" id="SkillIcoOut${skillList[i]}"><img src=""></td>
            <td id="SkillNamOut${skillList[i]}">
                ${skillList[i]}
            </td>
            <td id="SkillValOut${skillList[i]}">0</td>
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
        switch (type) {
            case 'sheet':
                console.log(type);
                document.getElementById(tabs.sheet).style.display = 'inline-block';
                document.getElementById(tabs.skills).style.display = 'none';
                document.getElementById(tabs.feats).style.display = 'none';
                break;
        
            case 'skills':
                console.log(type);
                document.getElementById(tabs.sheet).style.display = 'none';
                document.getElementById(tabs.skills).style.display = 'inline-block';
                document.getElementById(tabs.feats).style.display = 'none';
                break;
        
            case 'feats':
                console.log(type);
                document.getElementById(tabs.sheet).style.display = 'none';
                document.getElementById(tabs.skills).style.display = 'none';
                document.getElementById(tabs.feats).style.display = 'inline-block';
                break;
        }
    }

    
    generateFeats();
    generateSkills();

    
