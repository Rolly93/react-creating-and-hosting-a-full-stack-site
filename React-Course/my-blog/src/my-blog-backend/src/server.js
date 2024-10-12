import express from 'express';
import { MongoClient } from 'mongodb';

let articleInfo = [{
    name : 'learn-react',
    upvotes:0,
},{
    name : 'learn-node',
    upvotes:0,
},{
    name : 'mongodb',
    upvotes:0,
}]



const app = express();
app.use(express.json());

aa.get('/api/articles/:name',(req,res)=>{
    const {name}= req.params;
const client = new MongoClient('mongodb://127.0.0.1:27017')
})



app.put('/api/articles/:name/upvote',(req,res)=>{
const {name}=req.params;
const article = articleInfo.find(a=>a.name === name);
if (article) {
    article.upvotes +=1;
    res.send(`the ${name} article now has ${article.upvotes} upvotes!!`);
    
}else{
    res.send(`That article doesn\`t existt`);
}
});

app.post('/api/articles/:name/comments',(req,res)=>{
    const {name}= req.params;
    const {postedBy,text} = req.body;
    const article = articleInfo.find(a => a.name ===name);

if (article) {
    res.send(article.comments);
    article.comments.push(postedBy.text);
} else {
    res.send(`That article doesn\`t existt`);

}
})



app.listen(8000,()=>{
    console.log("Server is lising on port 8000")
})