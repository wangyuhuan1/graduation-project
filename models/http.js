var baseUrl="http://localhost:3000"
function Http({url,data}){
    return new Promise((resolve,reject)=>{
        wx.request({
            url: baseUrl+url,
            data,
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                resolve(res)
            },
            fail: (err)=>{
                reject(err)
            }
        });
    })
}
module.exports={
    getNew(){
        return Http({
            url:"/top/playlist?order=new"
        })
    },
    getHot(){
        return Http({
            url:"/top/playlist?order=hot"
        })
    },
    getRecommend(){
        return Http({
            url:"/personalized",
        })
    },
    getDetail(id){
        return Http({
            url:"/playlist/detail",
            data:{
                id
            }
        })
    },
    getSearch(keywords){
        return Http({
            url:"/search",
            data:{
                keywords
            }
        })
    },
    getPlay(id){
        return Http({
            url:"/song/url",
            data:{
                id
            }
        })
    },
    getList(idx){
        return Http({
            url:"/top/list",
            data:{
                idx
            }
        })
    },
    getOneDetail(ids){
        return Http({
            url:"/song/detail",
            data:{
                ids
            }
        })
    }
}