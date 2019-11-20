

/**
 * 1.不管你要配置什么，最好使用react-app-rewired这个包来对项目进行轻微的配置调整
 * 
 * 2.安装好之后，在package.json 里把scripts里的react-scripts替换成react-app-rewired
 * 
 * 3、在根目录下创建一个 config-override.js
 * 
 * 
 *  module.exports=(config)=>{

    //在这里可以对config进行配置 如果没有使用comstomize-cra 就在这里对config进行配置

     return config
   }
 * 
 * 
 * 4、如果想要配置更方便可以在安装customize-cra然后把
 * 
 * 
 * vue 很多生态更官方化   react 更社区化
 * 
*/

const {override,addDecoratorsLegacy} = require('customize-cra')

module.exports = override(

    addDecoratorsLegacy()
)