

import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"


const Page = () => {
    const [post,setPost] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(data =>{
            setPost(data)
        })
    },[])
  return (
    <>
      <Helmet>
        <title>About Us - axeom</title>
      </Helmet>
    <div>
        <h1>hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, repudiandae. Recusandae voluptas laboriosam magnam totam molestiae minima officia temporibus fugit. Quisquam at maxime odio libero dicta possimus praesentium? Asperiores nobis, est illo itaque doloribus laboriosam laudantium provident temporibus similique. Sapiente odit architecto placeat nam sequi assumenda cum ab, rerum labore nisi veniam inventore modi iure pariatur quasi excepturi tempore! Aperiam reiciendis hic architecto ipsa laudantium repellendus officia distinctio magnam nihil, amet consequuntur nisi cum tenetur harum sit cumque adipisci beatae at vel inventore enim necessitatibus. Eius, repellat velit corrupti fugit ipsa porro necessitatibus adipisci ratione animi at saepe ullam dolore.</p>

        <div>
            <h1>post</h1>
            {post.map((p)=>(
                <h4 key={p.id}>{p.title}</h4>
            ))}
        </div>
    </div>
    </>
  )
}

export { Page }