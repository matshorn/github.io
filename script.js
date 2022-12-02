let meat = ["good", "bad", "great"]
let time = ["now", "later", "tomorrow"]
let energy = ["high", "low", "pysched"]

function talking () {
    const one = meat[Math.floor(Math.random() * meat.length)];
    const two = time[Math.floor(Math.random() * time.length)];
    const three = energy[Math.floor(Math.random() * energy.length)];
    console.log(`Hey, this meat was really ${one}, I'm definitely going to eat it ${two}, and I already feel ${three}`)
}

talking()

