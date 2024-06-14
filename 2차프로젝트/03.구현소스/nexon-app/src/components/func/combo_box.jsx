// 콤보박스 데이터 불러오기
import { comboData } from "../data/combo_data.js";

export function ComboBoxList(){

    function comboBox() {
        const brandBox = document.querySelector(".brand");
    
        brandBox.innerHTML =
            `<option value="init">Family Site</option>` +
            comboData.brand
                .map(
                    (v, i) => `
        <option value="brand${i + 1}">${v}</option>
    `
                )
                .join("");
    
        brandBox.addEventListener("change", openWindow);
    }
    
    function openWindow() {
        let url = comboData[this.id + "Link"][this.value];
        if (url) window.open(url);
        else alert("선택을 변경해 주세요~!");
    }
    comboBox();
} 
