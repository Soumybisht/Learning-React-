import { useState } from "react";

const Section = ({title,desc,isVisible,setIsVisible})=>{
  //const [isVisible,setIsVisible] = useState(false)
  return (
    <div className="border border-black m-2 p-2">
      <h1 className="text-xl font-semibold text-center">{title}</h1>
      {
      (isVisible) ? 
        (<>
          <button onClick={()=> setIsVisible(false)} className="border border-black underline p-1 bg-slate-400">Hide</button>
          <p className="">{desc}</p>
        </>
        )
        :
          <button onClick={()=>setIsVisible(true)} className="border border-black underline p-1 bg-slate-400">Show</button>
      }
    </div>
  );
}
const Grocery = () => {

  const [sectionConfig,setSectionConfig] = useState("");
  return (
    <div>
        <h1 className="text-5xl font-bold text-center m-3 p-2">This is our Grocery store</h1>
        <Section title={"About Grocery"} isVisible={sectionConfig==="about"} setIsVisible={(val)=>setSectionConfig(val?"about":"")} desc={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. The standard chunk of "}/>

        <Section title={"About Team"} isVisible={sectionConfig==="team"} setIsVisible={(val)=>setSectionConfig(val?"team":"")} desc={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."}/>
          
        <Section title={"About Career"} isVisible={sectionConfig==="career"} setIsVisible={(val)=>setSectionConfig(val?"career":"")} desc={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition"}/>
    </div>
  )
}
export default Grocery;
    