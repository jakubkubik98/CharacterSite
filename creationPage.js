'use strict';   
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

    function generateFeats()
    {
        function createPayload() {
            let html = '';
            let featList = pullFeatData();
            console.log(featList)
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
        
        function pullFeatData()
        {
            //tempArray = JSON.parse('../featData.json')
            let tempArray = ['test1', 'test2', 'test3'];
            return tempArray;
        }
        let htmlResult = createPayload();
        console.log(htmlResult)
        document.querySelector('#featListTarget').innerHTML = htmlResult;
        
    }
    generateFeats();
