"use strict";

// p = plugins, корневой объект нашей сборки для расширения области видимости
global.p = {
  gulp: require("gulp"),
  gp: require("gulp-load-plugins")(), //  Подключаем все плагины, начинающиеся с "gulp-".


  paths: require("./gulp/config/paths.js"),
  tasks: require("./gulp/config/tasks.js"),
};

p.tasks.forEach(function (taskPath) {
  require(taskPath)();
});

