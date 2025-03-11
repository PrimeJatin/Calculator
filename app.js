let dis = document.querySelector("#display");
let btn = document.querySelectorAll(".buttons button");

let str = "";
let calculated = false;

btn.forEach((el) => {

    el.addEventListener("click", (event) => {
        let value = event.target.innerText;
        let operators = ["+", "-", "*", "/", "%"];

        if (value == "=") {
            str = eval(str).toString();
            dis.innerText = str;
            calculated = true;
        } else if (value == "AC") {
            str = "";
            dis.innerText = str || "0";
            calculated = false;
        } else if (value == "DEL") {
            if (calculated) {
                calculated = false;
            }
            str = str.slice(0, -1); 
            dis.innerText = str || "0";
        } else {
            if (calculated && !operators.includes(value)) {
                str = ""; 
            }
            calculated = false;

            if ((str === "" || str === "0") && value === "0") {
                return;
            }
            if (str === "" && value === "00") {
                return;
            }

            if (!(str === "" && operators.includes(value))) {
                if (!(operators.includes(value) && operators.includes(str.slice(-1)))) {
                    str += value;
                    dis.innerText = str;
                }
            }
        }
    });
});
