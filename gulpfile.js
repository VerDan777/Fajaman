let tasks = [
    './gulp/tasks/pug.js',
    './gulp/tasks/styles',
    './gulp/tasks/scripts',
    './gulp/tasks/watch',
    './gulp/tasks/image-min',
    './gulp/tasks/gh-pages',
    './gulp/tasks/copy', 
    './gulp/tasks/clean',
    './gulp/tasks/build'
]

for(let i = 0; i < tasks.length; i++) {
    require(tasks[i]);
}