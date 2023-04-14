interface Users {
    name: string;
    age: number;
}

export class MyDatabaseClassic {
    private static instance: MyDatabaseClassic | null = null;
    private users: Array<Users> = []

    private constructor() {

    }

    static getInstance(): MyDatabaseClassic {
        if(MyDatabaseClassic.instance === null) {
            MyDatabaseClassic.instance = new MyDatabaseClassic();
        }

        return MyDatabaseClassic.instance;
    }

    add(user: Users): void {
        this.users.push(user);
    }

    remove(index: number): void {
        this.users.splice(index, 1);
    }

    show(): void {
        for (const user of this.users) {
            console.log(user);
        }
    }
}

const myDatabaseClassic = MyDatabaseClassic.getInstance();

myDatabaseClassic.add({name: 'João', age: 20});
myDatabaseClassic.add({name: 'Maria', age: 25});
myDatabaseClassic.add({name: 'José', age: 30});
myDatabaseClassic.add({name: 'Ana', age: 35});
myDatabaseClassic.show();

myDatabaseClassic.remove(2);
myDatabaseClassic.show();
