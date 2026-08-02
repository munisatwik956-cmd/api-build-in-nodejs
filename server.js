import http from 'node:http'
import getDataFromDB from './db.js'

const PORT=800
//req=request,res=respond
// const server=http.createServer((req,res)=>{
//     console.log(req.url)
//     res.write("This is some data -1\n")
//     res.write("This is some data -2\n")//to write 
//     res.end("Hello from the server","utf8",()=>console.log("End the server"))
// })//in .end method utf8 and function are option and utf8 is default function excutes atlast

function sendJSONResponce(res,type,statusCode,payLoad){

    res.setHeader('Content-Type',type)
    res.setHeader('Access-Control-Allow-Origin','*')//use this and below line when you what it to make public
    res.setHeader('Access-Control-Allow-Methods','GET')
    res.statusCode=statusCode
    res.end(JSON.stringify(payLoad))

}

function getDataByPathParameters(data,locationType,locationName){

    return data.filter((destination) => {
        return destination[locationType].toLowerCase() === locationName.toLowerCase()
    })

}

function getDataByQueryParameters(data,queryObj){
    const {continent,country,is_open_to_public}=queryObj


    if(continent){
        data=data.filter(destination =>
            destination.continent.toLowerCase() === continent.toLowerCase()
        )
    }

    if(country){
        data=data.filter(destination =>
            destination.country.toLowerCase() === country.toLowerCase()
        )
    }

    if(is_open_to_public){
        data=data.filter(destination =>
            destination.is_open_to_public === JSON.parse(is_open_to_public.toLowerCase())
        )
    }

    return data


}

const server=http.createServer(async (req,res)=>{


    const destinations=await getDataFromDB()

    console.log(`http://localhost:${PORT}${req.url}`)
    //req.headres is obj that contains information about url can get by req.headers.host


    const urlObj = new URL(req.url,`http://${req.headers.host}`)
    
    
    if(urlObj.pathname==='/api' && req.method==="GET"){

        const queryObj = Object.fromEntries(urlObj.searchParams)

        let filteredData=getDataByQueryParameters(destinations,queryObj)
        
        
        // res.setHeader('Content-Type','application/json')
        // res.statusCode=200
        // res.end(JSON.stringify(destinations))
        sendJSONResponce(res,'application/json',200,filteredData)

    }else if(req.url.startsWith('/api/continent')  && req.method==="GET"){

        const continent=req.url.split('/').pop()

        const filteredData = getDataByPathParameters(destinations,'continent',continent)


        
        sendJSONResponce(res,'application/json',200,filteredData)

    }else if(req.url.startsWith('/api/country')  && req.method==="GET"){

        const country=req.url.split('/').pop()

        const filteredData = getDataByPathParameters(destinations,'country',country)


        
        sendJSONResponce(res,'application/json',200,filteredData)

    }else{


        sendJSONResponce(res,'application/json',404,{error:"not found",message:"request route does not exixt"})

    }
})


server.listen(PORT,()=>console.log(`Server is running at PORT : ${PORT}`))
