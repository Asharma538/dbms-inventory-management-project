const database = 'vending';
use(database);

function getTables() {
    const tables = db.getCollectionNames();
    for (var i=0;i<tables.length;i++){
        console.log(tables[i]);
    }
}

getTables();