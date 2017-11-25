/**
 * 去除字符串空格  
 * @param  {string} str  
 * @return {string}
 */
function trim(str){   
    return str.replace(/^(\s|\u00A0)+/,'').replace(/(\s|\u00A0)+$/,'');   
}