let persons = [
    {
        name: 'Horogszegi Richárd Pál',
        age: 42,
        interests: [
            'Békaboncolás',
            'Futás'
        ]
    },
    {
        name: 'Kecskés Dávid',
        age: 32,
        interests: [
            'Cosplay',
            'Fényképezés',
            'Úszás'
        ]
    },
    {
        name: 'Jóna Kristóf',
        age: 15,
        interests: [
            'Sorozatnézés',
            'Sörfőzés'
        ]
    },
    {
        name: 'Herteg Gabriel Benjamin',
        age: 19,
        interests: [
            'Futás',
            'Origami',
            'Úszás'
        ]
    },
    {
        name: 'Kámán Rebeka Petra',
        age: 21,
        interests: [
            'Bélyeggyűjtés',
            'LEGO',
            'Tenyérjóslás',
            'Zártörés'
        ]
    },
    {
        name: 'Ji Yu Chen',
        age: 25,
        interests: [
            'Paintball',
            'Úszás'
        ]
    }
]

// 1.2 - Személynevek ABC rendben

function namesInAlphabeticOrder(array) {
    return array.map(e => e.name).sort();
}

// 1.3 - A legfeljebb 25 éves személyek listája

function atleast25(array) {
    return array.filter(e => e.age >= 25);
}

function atleast25Name(array) {
    return array.filter(e => e.age >= 25).map(e => e.name);
}

// 1.4 - Legöregebb személy


function oldestPerson(array) {
    return array.reduce((undecidedMax, person) => {
        return (person.age > undecidedMax.age ? person : undecidedMax)
    }, array[0]);
}

// 1.5 - Átlagéletkor

function avarageAge(array) {
    return array.reduce((sum, person) => {
        return sum + person.age;
    }, 0) / array.length;
}

// 1.6 - A legtöbb hobbival rendelkező személy

function personWithMostHobbies(array) {
    return array.reduce((mostHobbies, person) => {
        return (person.interests.length > mostHobbies.interests.length ? person : mostHobbies)
    }, array[0]);
}

// 1.7 - Leggyakrabban előforduló érdeklődési kör

function mostPopularHobby(array) {
    
    const flatarray = array.flatMap(e => e.interests);
    var map = {}, max = flatarray[0], max_cnt = 1;
    
    flatarray.forEach(e => {
        map[e] == null ? map[e] = 1 : map[e]++;
        if (map[e] > max_cnt) {
            max = e;
            max_cnt = map[e];
        }
    });

    return max;
}



// LOG

console.log(
    namesInAlphabeticOrder(persons),
    atleast25(persons),
    atleast25Name(persons),
    oldestPerson(persons),
    avarageAge(persons),
    personWithMostHobbies(persons),
    mostPopularHobby(persons)
);