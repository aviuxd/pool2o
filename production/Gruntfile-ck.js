module.exports=function(e){e.initConfig({pkg:e.file.readJSON("package.json"),copy:{target:{files:[{expand:!0,src:["images/*"],dest:"release/",filter:"isFile"},{expand:!0,src:["css/*"],dest:"release/",filter:"isFile"},{expand:!0,src:["js/*"],dest:"release/",filter:"isFile"},{expand:!0,src:["*.html"],dest:"release"}]}},useminPrepare:{html:["release/index.html","release/about.html","release/privacy.html","release/submission-confirmation.html"],options:{dest:"release/build"}},usemin:{html:["release/index.html","release/about.html","release/privacy.html","release/submission-confirmation.html"],options:{dest:"release"}}});e.loadNpmTasks("grunt-contrib-copy");e.loadNpmTasks("grunt-contrib-concat");e.loadNpmTasks("grunt-contrib-uglify");e.loadNpmTasks("grunt-usemin");e.loadNpmTasks("grunt-contrib-cssmin");e.registerTask("default",["copy","useminPrepare","concat","cssmin","uglify","usemin"])};