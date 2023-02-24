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