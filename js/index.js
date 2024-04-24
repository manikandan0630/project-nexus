$(document).ready(()=>{

    //form validation
    $(".err-user").hide()
    $(".err-pwd").hide()

    $("#login").click((e)=>{
        e.preventDefault()
        let user=$("#username").val()
        let pass=$("#password").val()

        //condition
        if(!user){
            $(".err-user").show()
            $("#username").keyup(()=>{
                $(".err-user").hide()
            })
        }
        if(!pass){
            $(".err-pwd").show()
            //agnup text some css changes
            $(".login-form .account").css("margin-top","-20px")
            $("#password").keyup(()=>{
                $(".err-pwd").hide()
            })
        }

    })


    let clicked=false;
    $("#eye").click(()=>{
        clicked=!clicked
        if(clicked){
            $("#password").attr("type","text")
            $("#eye").attr("class","fa-solid fa-eye")
        }
        else{
            $("#password").attr("type","password")
            $("#eye").attr("class","fa-solid fa-eye-slash")
        }
    })
})