class ApiFeatures {
    constructor(query, queryStr){
        this.query=query,
        this.queryStr= queryStr
    }
    search(){
        const keywoard = this.queryStr.keywoard?{
            name:{
                $regex: this.queryStr.keywoard,  //to find related words accory to query
                $options: "i"  //case insensitive
            }
        }:{}
        this.query= this.query.find({...keywoard})
        return this;
    }
    filter(){
        const queryCopy= {...this.queryStr}
        const removeFelds=["keywoard", "page", 'limit']
        removeFelds.forEach((key)=>{
            delete queryCopy[key];
            
        })

        //filter
        let queryStr = JSON.stringify(queryCopy)
        queryStr=queryStr.replace(/\b(gt|gte|lt|lte)\b/g,(key)=>`$${key}`)

        this.query=this.query.find(JSON.parse(queryStr))
        this.query = this.query.find(queryCopy)
            return this;
    }
    pagination(resultPerPage){
        const currentPage= Number(this.queryStr.page) || 1
        const skip = resultPerPage* (currentPage-1)
        this.query = this.query.limit(resultPerPage).skip(skip)
    }
    
}
module.exports=ApiFeatures;