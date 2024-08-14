let grandfather = {
    name: "lallubhai",
    age: 0,
    children: [
        {
            id: "001",
            name: "budhabhai",
            age: 66,
            children: [
                {
                    name: "ankitaben",
                    age: 32,
                },
                {
                    name: "vishal",
                    age: 28,
                }
            ],
            vehicle: [
                {
                    model: "alto",
                    color: "gold"
                }]
        },
        {   id:"002",
            name: "shantilal",
            age: 59,
            children:[
            {
                name: "pragnesh",
                age: 30,
            },
            {
                name: "divyesh",
                age: 26,
            }
            ],
            vehicle:[
            {
                model: "swift",
                color: "white"
            }]
        },
        {   id:"003",
            name: "binaben",
            age: 52,
            children:[
            {
                name: "ankur",
                age: 25,
            },
            {
                name: "akankshaben",
                age: 23,
            }
            ],
            vehicle:[
            {
                model: "swift",
                color: "red"
            }]
        }
    ]
}


console.log(grandfather.children[2].vehicle[0].color)
console.log(grandfather.children[1].vehicle[0].model)
