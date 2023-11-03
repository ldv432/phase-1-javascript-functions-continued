function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (workLocation = "go to the office"){
    return `This Monday, I will ${workLocation}.`
}

function wrapAdjective (flair = "*"){
    return function (description = "special"){
        return `You are ${flair}${description}${flair}!`
    }
}
