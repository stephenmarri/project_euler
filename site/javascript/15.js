const grid = 20;
let routes = new Array(grid+1).fill(0)
routes = routes.map(x=> x = new Array(grid+1).fill(0))

function branchSum(x,y){
    if(x>grid || y>grid){
        return 0
    }
    if(x == grid || y == grid){
        let r = x == grid ? y : x;
        if(r+1 == grid ){
            return 1
        }        
    }
    if(routes[x][y]!=0) return routes[x][y]
    return routes[x][y]=branchSum(x+1,y) + branchSum(x,y+1)

}


console.log(branchSum(0,0));
console.table(routes)
