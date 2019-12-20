"use strict"

 var assert = require('assert');
 var request = require('supertest')
 var app = require('../app.js')

 var request = request("http://localhost:8080")





 describe('users', function() {     describe('POST', function(){
    it('Should  insert json users', function(done){
        request.post('/api/users')
        .send({NameUser: "test"  , LastNameUser: "test" , EmailUser: "faraond1@gmail.com",  PasswordUser:"123java",StatusUser:true,DateBeginUser:"2019-10-21T05:00:00.000Z" , TypeUser:{IdType:"1",Role:"Admin",DescripTypeUser:"Control de modulos"} } )
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('Should  not insert json users why NameUser is empty', function(done){
        request.post('/api/users')
        .send({NameUser:"", LastNameUser: "test" , EmailUser: "faraond1@gmail.com",  PasswordUser:"123java",StatusUser:true,DateBeginUser:"2019-10-21T05:00:00.000Z" , TypeUser:{IdType:"1",Role:"Admin",DescripTypeUser:"Control de modulos"} } )
            .expect('Content-Type', /json/)
            .expect(500, done);
    });

    it('Should  not insert the user why reques json user  is empty', function(done){
        request.post('/api/users')  
            .expect('Content-Type', /json/)
            .expect(500, done);
    });
});



     describe('GET', function(){
         it('Should return json as default data format', function(done){
             request.get('/api/users')
                 .expect('Content-Type', /json/)
                 .expect(200, done);
         });


         it("should not get a single user record", (done) => {
            const id = 1;
            request.get('/api/users'+`/${id}`)

            .expect('Content-Type', /json/)
            .expect(404, done);
                 });


                 it("should get a single user record", (done) => {
                    const id = '5dd468ab952308383c2d6dc1';
                    request.get('/api/users'+`/${id}`)
        
                    .expect('Content-Type', /json/)
                    .expect(200, done);
                         });                      
     
     });





 describe('put', function(){
    it('Should  insert json users', function(done){
        const id = '5dfd3837cb20b292a0f59d76';
        request.put('/api/users'+`/${id}`)

        .send({NameUser: "test2"  , LastNameUser: "test" , EmailUser: "faraond1@gmail.com",  PasswordUser:"123java",StatusUser:true,DateBeginUser:"2019-10-21T05:00:00.000Z" , TypeUser:{IdType:"1",Role:"Admin",DescripTypeUser:"Control de modulos"} } )
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('Should  insert json users', function(done){
        const id = '5dfd3837cb20b292a0f59d76XXX';
        request.put('/api/users'+`/${id}`)

        .send({NameUser: "test2"  , LastNameUser: "test" , EmailUser: "faraond1@gmail.com",  PasswordUser:"123java",StatusUser:true,DateBeginUser:"2019-10-21T05:00:00.000Z" , TypeUser:{IdType:"1",Role:"Admin",DescripTypeUser:"Control de modulos"} } )
            .expect('Content-Type', /json/)
            .expect(404, done);
    });

});


describe('delete', function(){
    it('Should  remove json users', function(done){
      const id = '5dfd3837cb20b292a0f59d76';
      request.delete('/api/users'+`/${id}`)
      .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('Should  remove json users', function(done){
        const id = '5dfd3837cb20b292a0f59d76';
        request.delete('/api/users'+`/${id}`)
        .expect('Content-Type', /json/)
              .expect(404, done);
      });
});

//la funcion users
});