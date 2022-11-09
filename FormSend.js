/**
 * Normalizing data, before sending in server via ajax, using the FormData class
 * @returns array normalizing data
 */
FormData.prototype.get_normal_values = function (){
    function recursiveMethod(data, keys, value, iter = 0){
        keys[iter] = keys[iter].replaceAll("]", "");
        if(typeof data == "undefined"){
            data = {};
        }
        if(iter == keys.length-1){
            data[keys[iter]] = value;
        }else{
            let tmp_iter = iter;
            if(!(keys[tmp_iter] in data)){
                data[keys[tmp_iter]] = {};
            }
            iter += 1;
            recursiveMethod(data[keys[tmp_iter]], keys, value, iter);
        }
        return data;
    }
    let data = {};
    for (const pair of this.entries()) {
        if(pair[0].indexOf("[") >= 0){
            let split_data = pair[0].split("[");
            data = recursiveMethod(data, split_data, pair[1]);
        }else{
            data[pair[0]] = pair[1];
        }
    }
    return data;
}