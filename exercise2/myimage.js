let curImgCode = 0
let srcLoc = "./img/"
let codeImgMap = {
    0: (srcLoc + "wowdragons.jpg"),
    1: (srcLoc + "dog.jpg"),
    2: (srcLoc + "wow.jpg"),
    3: (srcLoc + "wow1.jpg"),
    4: (srcLoc + "Xbb.png")
}

function nextImg() {
    curImgCode = mod(curImgCode + 1, 5)
    document.getElementById("im").src = codeImgMap[curImgCode]
}

function prevImg() {
    curImgCode = mod(curImgCode - 1, 5)
    document.getElementById("im").src = codeImgMap[curImgCode]
}

function mod(num, n) {
    if(num < 0) {
        return((num % n) + n)
    }
    return(num % n)
}