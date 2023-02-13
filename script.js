function toDesmos(str){
    terms = str.split(" + ");
    for(let i = 0; i < terms.length; i++){
        if(terms[i].includes("x^")){
            let powerSplit = terms[i].split("x^");
            terms[i] = powerSplit[0] + "x^{" + powerSplit[1] + "}";
        }
        if(terms[i].includes("E")){
            let eSplit = terms[i].split("E");
            if(terms[i].includes("x")){
                terms[i] = "\\left("+ eSplit[0] +"\\cdot10^{" + eSplit[1].split("x")[0] + "}\\right)x" + eSplit[1].split("x")[1];
            }else{
                terms[i] = "\\left("+ eSplit[0] +"\\cdot10^{" + eSplit[1] + "}\\right)";
            }
        }
    }
    document.getElementById("desmos").value = terms.join("+");
}