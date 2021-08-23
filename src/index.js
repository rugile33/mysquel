import mysql from "mysql";

const connection = mysql.createConnection ({

  host: "localhost", 
  user: "nodejs",
  password: "nodejsnodejs123",
  database: "zmones",
}) ;

function dbConnect () {
    return new Promise((resolve, reject) => {
        connection.connect (err =>{
            if (err) {
                reject (err);
                return;
            }
            resolve();
        });
    });
}

try{
   await dbConnect();
console.log("prisijungiau");
}
catch (err) {
    console.log("klaida:", ex);
}
finally {
    connection.end ();
console.log("atsijungiau");
}

