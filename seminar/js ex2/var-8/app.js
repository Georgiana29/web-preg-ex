function addTokens(input, tokens){
    if(typeof input !=='string'){
        throw new Error('Invalid input')
    }
    if(input.length<6){
            throw new Error('Input should have at least 6 characters')
    }
    for(let token of tokens){
        if(!(typeof token.tokenName ==='string')){
            throw new Error('Invalid array format')
        }
    }
    let modif=input;
    let k=0;
    if(input.indexOf('...')===-1){
        return input;
    }
    while(modif.indexOf('...') !=-1){
        let pos= modif.indexOf('...');
        let newInput= modif.substr(0, pos+3);
        let newInputM=newInput;
        newInputM=newInputM.replace('...','${'+tokens[k].tokenName+'}');
        k++;
        modif=modif.replace(newInput,newInputM);
    }
    return modif;
    
}

const app = {
    addTokens: addTokens
}

module.exports = app;
/*

# Having the `function addTokens(input, tokens)` where:
- `input` is a string that could contain "..." for example: Subsemnatul ..., dominiciliat in ...;
- `tokens` is an array with token names .
- The function should replace each `...` from `input` with the values from `tokens` in the following format `${tokenName}`;

# Complete the following tasks:

- `input` should be a `string`. If other type is passed throw an `Error` with the message `Input should be a string`; (0.5 pts)
- `input` should be at least 6 characters long. If `input` length is less than 6 throw an `Error` with the message `Input should have at least 6 characters`; (0.5 pts)
- `tokens` is an array with elements with the following format: `{tokenName: string}`. If this format is not respected throw an `Error` with the following message `Invalid array format`; (0.5 pts)
- If `input` don't contain any `...` return the initial value of `input`; (0.5 pts)
- If `input` contains `...`, replace them with the specific values and return the new `input`; (0.5 pts)*/