var parseXlsx = require('excel');
var UserModel = require('./models/userModel');
var mongoose = require('mongoose');
var fs=require('fs');
var excel = require('excel-stream');
var path = require("path");

mongoose.connect("mongodb://localhost:27017/swat",function(){
  console.log("Mongo Server connected")
});


var p = "./"
var arr=[];
// fs.readdir(p, function (err, files) {
//     if (err) {
//         throw err;
//     }

//     files.map(function (file) {
//         return path.join(p, file);
//     }).filter(function (file) {
//         return fs.statSync(file).isFile();
//     }).forEach(function (file) {

//     	 if(path.extname(file)=='.xlsx')
//     	 {	
          
//     	   read(file);
//          } 
        
//     });
 
// })
// ;
var glob = require("glob")

// options is optional
glob("./clockss/xlsxs/*.xlsx", function (er, files) {
	//readfn(files)

	//for(var i=0;i<files.length;i++)
async.filter([readfn(files[0]),readfn(files[1]),readfn(files[2])], function(filePath, callback) {
  console.log(callback);
}, function(err, results){
	
    // results now equals an array of the existing files
   
});
})
 console.log("file Name:"+arr);
  
function read(file)
{

	fs.createReadStream(file)
	  .pipe(excel())
	 .on('data',function saveinmongo(temp)
	{
	    
	var user= new UserModel({
	         DOI:temp.DOI,
	        Fetch_Time:temp['Fetch Time'],
	        Triggered:temp.Triggered,
	    });
	    user.save(function (err,result) {
	      if (err) return console.log(err);
	      // saved!
	      console.log(result);
	    })
	   
	}
	);

}



