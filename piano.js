var sequence = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'q', 'w', 'e', 'r', 't', 'y', 'u',
    'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n',
    'm',
];
var code = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];

var mapper = new Map();
var idx = 0;
var o = 1;

for (var i = 0; i < sequence.length; i++) {
    j = i % 7;
    if (j == 0) {
        o++;
    }
    mapper.set(sequence[i], code[j] + o);
}
document.body.addEventListener('keydown', function (e) {
    const synth = new Tone.Synth().toDestination();
    document.getElementById('sheet').innerHTML +=  (mapper.get(e.key) != undefined ? e.key : "")+" | " 
    synth.triggerAttackRelease(mapper.get(e.key), "16n");
})
