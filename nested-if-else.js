let attendenss = Number(prompt("Enter Your Attendenss"))

let per_attendenss = (attendenss / 120) * 100

if (per_attendenss > 70) {
    let fees = prompt("Clear your all fees ?")

    if (fees === 'yes') {
        let time = prompt("Is this the right time for the exam?")

        if (time === "yes") {
            alert("You are eligible for exams")
        } else {
            alert("You are not eligible because it's not the right time for the exam")
        }
    } else {
        alert("You are not eligible due to uncleared fees")
    }
} else {
    alert("You are not eligible due to low attendance")
}
