
// import Vue from 'vue'
// //import upperFirst from 'lodash/upperFirst'
// //import camelCase from 'lodash/camelCase'
// //import kebabCase from 'lodash/kebabCase'
// import kebabCase from 'lodash.kebabcase'


// // import temp from './components/partials/temp'
// // Vue.component('temp', temp);
// //var folderComponents = './components';


// let requireComponent = require.context(
//     // Относительный путь до каталога компонентов
//     './components',
//     // Обрабатывать или нет подкаталоги
//     true,
//     // Регулярное выражение для определения файлов базовых компонентов
//     /[\w-_]+\.(vue|js)$/
//   );//Base[A-Z]\w+\.(vue|js)$
//   console.log(requireComponent.keys());
//   requireComponent.keys().forEach(fileName => {
//     // Получение конфигурации компонента
//     const componentConfig = requireComponent(fileName)

    

//     const decoratorComponentName = componentConfig.default.options
//       ? componentConfig.default.options.name
//       : null;

    
    

//     // Получение имени компонента в PascalCase
//     const componentName = decoratorComponentName || kebabCase(
//       // Получаем имя файла независимо от глубины вложенности
//       fileName
//         .split('/')
//         .pop()
//         .replace(/\.\w+$/, '')
//     );
//   console.log(componentName, componentConfig.default,componentConfig);  
   
//     // Глобальная регистрация компонента
//     Vue.component(
//       componentName,       
//       // Поиск опций компонента в `.default`, который будет существовать,
//       // если компонент экспортирован с помощью `export default`,
//       // иначе будет использован корневой уровень модуля.
//       componentConfig.default//||componentConfig
//     )
//   })




import Vue from 'vue'
// import app from './components/app.vue';
// Vue.component('app',app)

// import layout from './components/layouts/layout.vue';
// Vue.component('layout',layout)

// import home from './components/pages/home.vue';
// Vue.component('home',home)
// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  './',
  // Do not look in subdirectories
  true,
  // Only include "_base-" prefixed .vue files
  /[\w-]+\.vue$/
)

const keys = requireComponent.keys();
//if(false)
for (let key in keys) {
  const fileName = keys[key];
  //console.log('t',fileName);
   if(fileName.endsWith('app.vue'))
     continue;
   //continue;
  //  if(!fileName.startsWith('./partials'))
  //     continue;
  const componentConfig = requireComponent(fileName)
  // // Get the PascalCase version of the component name
  const componentName = fileName
    // Remove the "./_" from the beginning
    .replace(/^\.\//, '')    
    // Remove the file extension from the end
    .replace(/\.\w+$/, '')
    // Split up kebabs
    .split('/')
    .pop()
    
    //console.log(fileName.replace(/^\.\//, './components/') ,componentName,requireComponent(fileName), componentConfig.default,componentConfig);  
   // if(componentName!='app')
  // Globally register the component
  //require.(fileName.replace(/^\.\//, './components/')).
  // console.log('register-component',componentName);
  Vue.component(componentName, componentConfig.default || componentConfig);
}

// const req = require;
// // For each matching file name...
// requireComponent.keys().forEach((fileName) => {
  
//   // if(fileName.endsWith('app.vue'))
//   //   return;
//   // // Get the component config
//   requireComponent.resolve(fileName);
//   //const componentConfig = requireComponent(fileName)
//   // // Get the PascalCase version of the component name
//   const componentName = fileName
//     // Remove the "./_" from the beginning
//     .replace(/^\.\//, '')    
//     // Remove the file extension from the end
//     .replace(/\.\w+$/, '')
//     // Split up kebabs
//     .split('/')
//     .pop()
//     // // Upper case
//     // .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
//     // // Concatenated
//     // .join('')
//     //console.log(fileName.replace(/^\.\//, './components/') ,componentName,requireComponent(fileName), componentConfig.default,componentConfig);  
//    // if(componentName!='app')
//   // Globally register the component
//   //require.(fileName.replace(/^\.\//, './components/')).
//   // import(fileName.replace(/^\.\//, './')).then(res=>{//'./components/'
//   //   Vue.component(componentName, res);
//   // });
//  //componentConfig.default || componentConfig   requireComponent(fileName)
//  Vue.component(componentName, );//componentConfig.default || componentConfig
// })

