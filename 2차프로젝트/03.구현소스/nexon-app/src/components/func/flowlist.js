// 제이쿼리
import $ from "jquery";

const flowList = (ele,lpos,callSts) =>{
    lpos.current--;

    if(lpos.current < -400){
        lpos.current = 0;
        ele.append(ele.find("li").first());
    }
    ele.css({left: lpos.current+"px"});
    
    if(callSts.current)
    setTimeout(()=> flowList(ele,lpos,callSts),40);
    
};

export { flowList };