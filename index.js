// https://github.com/udayakumarvdm/MongoDB-connection-using-Mongoose-and-Node-JS

mongoose.connect('mongodb://localhost/testDB', function (err) {
   if (err) throw err;
   console.log('Successfully connected');
   
   // Create User Obiect
    var UserObject = new User({
        name: {
          firstName: 'Sample',
          lastName: 'Example'
        }
     });
     
   //Save the document into User table.
   UserObject.save(function(err){
    if (err) throw err;
   })
   
   //Find the all user in User table.
   User.find({}, function(err, dbUsers){
    if (err) throw err;
      console.log(JSON.stringify(dbUsers));
   });
   
});
