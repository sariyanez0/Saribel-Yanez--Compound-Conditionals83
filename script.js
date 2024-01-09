$("button").click(function() {
    let time = $(".time").val();
    let hungry = $(".hungry").val();
	if (time === "Morning" && hungry === "Yes"){
        $(".result").text("Eat Breakfast");
    } else if(time === "Morning" && hungry === "No"){
        $(".result").text("Sleep In");
    } else if(time === "Afternoon" && hungry === "Yes"){
        $(".result").text("Eat Lunch");
    } else if(time === "Afternoon" || time === "Evening" && hungry === "No"){
        $(".result").text("Hang out with Friends");
    } else if(time === "Evening" && hungry === "No"){
        $(".result").text("Eat dinner");
    } else if(time !== "Afternoon" || time !== "Evening" || time !== "Morning "&& hungry !== "No" || hungry !== "Yes"){
        $(".result").text("Error");
    }
});