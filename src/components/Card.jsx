function Card(){
    // let title = "hello";
    // let para = "Neha pagal thi, pagal h, pagal hi rhegi!"
    // let count = 2
    let items = [{ title:"hello",para:"hello is your name"},{title:"chintu",para:"chintu is your name"}];
    return(
        <>
        {items.map((item,index)=>(
            <div className="card" style={{ width: "18rem" }}>
           <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..." />
           <div className="card-body">
             <h5 className="card-title">{item.title}</h5>
             <p className="card-text">
               {item.para}
             </p>
             <a href="#" className="btn btn-primary">
               Go somewhere
             </a>
           </div>
         </div>
        ))}
           
        </>
    )
}
export default Card;