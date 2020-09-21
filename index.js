let n = parseInt(window.prompt("How many layers would you like ?"))

if (n==0) {
    console.log("  *");
    console.log(" * *");
    console.log("*   *");
    console.log(" * *");
    console.log("  *");
}

if (n==1){
    console.log("*");
    console.log("**");
    console.log("***");
    console.log("****");
    
}

if (n==2){
    console.log("   *");
    console.log("  **");
    console.log(" ***");
    console.log("****");
    
}

if(n==3){
    console.log("   *");
    console.log("  ***");
    console.log(" *****");
    console.log("*******");
}

let star = {};
if(n>=4){
    for(i=0;i<n*2-1;i++){
        if(i<n-1){
            
            let str = ""
            for(x=0;x<n*2-2;x++){
                if (x<=n-i-2||x>=n+i){
                    str = str +" "
                }else{
                    str = str+ "*"
                }
            }
            star[i] = str
            console.log(str)

        }else if(i==n-1){
            let str = ""
            for(x=0;x<n*2-1;x++){
                str = str+ "*"
            }
            console.log(str)
        } else{
            let str = ""
            for(x=0;x<n*2-2;x++){
                if (x<=i-n||x>=3*n-2-i){
                    str = str +" "
                }else{
                    str = str+ "*"
                }
            }
            console.log(str)
        }
    }

}