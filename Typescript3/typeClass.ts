class Tree{
    branch: string;

    constructor(branch){
        this.branch = branch;
    }
}

class Tree1{
    
    constructor(public leaf:string){
        this.leaf = leaf;
    }

    //creating methods
    //with public I can access that outside the class
    public moveLeaf(){
        return (`${this.leaf} leaf is falling`)
    }
}

let treeObject = new Tree1('Green');
console.log(treeObject.moveLeaf());
console.log(treeObject.leaf);
