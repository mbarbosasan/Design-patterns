import { MyDatabaseClassic } from "../db/my-database-classic";

const myDatabaseClassic = MyDatabaseClassic.getInstance();

console.log("Módulo A")
myDatabaseClassic.show();