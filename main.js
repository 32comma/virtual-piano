var ri = 0;
var ci = -1;
var ai = 0;
const s = new Tone.FMSynth().toDestination();
const ss = new Tone.AMSynth().toDestination();
var arraySheet = stringSheet.split(' ');
var ai2 = 0;
document.body.addEventListener('keydown', function (e) {

});
document.body.addEventListener('keypress', function (e) {

    try {
        var keyElement = document.getElementById('key-' + e.key);
        keyElement.classList.toggle('blink-animation')

        const now = Tone.now();
        ss.triggerAttackRelease(hzMap[sequence.charAt(ci++)], "32n", now);
    } catch (e) {
        // console.log(e);
    }

});




document.body.addEventListener('keyup', function (e) {

    try {
        var keyElement = document.getElementById('key-' + e.key);
        keyElement.classList.remove('blink-animation');

        const now = Tone.now();
        ss.triggerAttackRelease(hzMapU5[sequence.charAt(ci++)], "32n", );
    } catch (e) {
        //console.log(e);
    }
})
document.body.addEventListener('keypress', function (e) {
    ai++;
    var temp = ai % ri;

    if (ai == rythm[ri] || rythm[ri] == 0) {
        ri++;
        ai = 0;
    }
    //console.log(rythm[ri]);
    try {

        const now = Tone.now();
        s.triggerAttackRelease(hzMapU3[sequence.charAt(ci++)], "32n", now);
    } catch (e) {

        //console.log(e);
    }

});