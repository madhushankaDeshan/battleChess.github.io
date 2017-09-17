var letters=["A","B","C","D","E","F","G","H"];
var numbers=[1,2,3,4,5,6,7,8];

var cPosition;
var sq;
var chesspiece;

var pownCount;
var countArray=new Array(9);

$(document).ready(function () {
    sq=$('.s');
    chesspiece=$('.chesspieces');
    pownCount=0;
    for(var i=0;i<countArray.length;i++){
        countArray[i]=0;
    }
});
// ====================================================================

function pathofBlackPown(eventData) {
    cPosition=eventData;
    sq.removeClass('selectpath');
    clickAudio2();
    chesspiece.removeClass('clickpiece');
    // console.log("eththrthjrt");
    var cId=cPosition.parents().attr('id');
    var letter=cId.charAt(0);
    var nu=cId.charAt(1);
    var lArrayPosition=($.inArray(letter,letters));
    var nArrayPosition=($.inArray(parseInt(nu),numbers));
    var tempId=letters[lArrayPosition]+numbers[nArrayPosition+1];
    var tempId1=letters[lArrayPosition+1]+numbers[nArrayPosition+1];
    var tempId2=letters[lArrayPosition-1]+numbers[nArrayPosition+1];
    var x=lArrayPosition;

    for (var y=nArrayPosition+1;y<4;y++){
        tempId=letters[x]+numbers[y];
        if (!($('#'+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            cPosition.addClass('clickpiece');
        }
        else{
            break;
        }

    }
    if (!($("#"+tempId).children().hasClass('chesspieces'))){
        $("#"+tempId).addClass('selectpath');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');
    }
    if ($("#"+tempId1).children().hasClass('white')){
        $("#"+tempId1).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    if ($("#"+tempId2).children().hasClass('white')){
        $("#"+tempId2).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }

}
// ========================path of blackBishop=========================
function pathofBlackBishop(eventData) {
    cPosition=eventData;
    sq.removeClass('selectpath');
    clickAudio2();
    chesspiece.removeClass('clickpiece');
    // console.log("eththrthjrt");
    var cId=cPosition.parents().attr('id');
    var letter=cId.charAt(0);
    var nu=cId.charAt(1);
    var lArrayPosition=($.inArray(letter,letters));
    var nArrayPosition=($.inArray(parseInt(nu),numbers));
    var tempId=letters[lArrayPosition+1]+numbers[nArrayPosition];
    var tempId1=letters[lArrayPosition+1]+numbers[nArrayPosition+1];
    var tempId2=letters[lArrayPosition-1]+numbers[nArrayPosition+1];
    var x=lArrayPosition;
    var s=nArrayPosition;

    for (var y=nArrayPosition+1;y<4;y++) {
        for (var w = nArrayPosition + 1; w < 4; w++) {
            tempId = letters[w] + numbers[y];
            if (!($('#' + tempId).children().hasClass('chesspieces'))) {
                $("#" + tempId).addClass('selectpath');
                cPosition.addClass('clickpiece');
            }
            else {
                break;
            }

        }
        if (!($("#" + tempId).children().hasClass('chesspieces'))) {
            $("#" + tempId).addClass('selectpath');
            cPosition.addClass('clickpiece');
            cPosition.removeClass('selectpath');
        }
        if ($("#" + tempId1).children().hasClass('white')) {
            $("#" + tempId1).addClass('crosspiece');
            cPosition.addClass('clickpiece');
            cPosition.removeClass('selectpath');

        }
        if ($("#" + tempId2).children().hasClass('white')) {
            $("#" + tempId2).addClass('crosspiece');
            cPosition.addClass('clickpiece');
            cPosition.removeClass('selectpath');

        }
    }



}
// =============path of blackking================
function pathofBlackKing(eventData) {
    cPosition=eventData;
    sq.removeClass('selectpath');
    clickAudio2();
    chesspiece.removeClass('clickpiece');
    // console.log("eththrthjrt");
    var cId=cPosition.parents().attr('id');
    var letter=cId.charAt(0);
    var nu=cId.charAt(1);
    var lArrayPosition=($.inArray(letter,letters));
    var nArrayPosition=($.inArray(parseInt(nu),numbers));
    var tempId=letters[lArrayPosition]+numbers[nArrayPosition+1];
    var tempId1=letters[lArrayPosition]+numbers[nArrayPosition+1];
    var tempId2=letters[lArrayPosition]+numbers[nArrayPosition+1];
    var tempidA=letters[lArrayPosition+1]+numbers[nArrayPosition];
    var tempidB=letters[lArrayPosition+1]+numbers[nArrayPosition];
    var tempidC=letters[lArrayPosition+1]+numbers[nArrayPosition];
    var tempidQ=letters[lArrayPosition-1]+numbers[nArrayPosition];
    var tempidW=letters[lArrayPosition-1]+numbers[nArrayPosition];
    var tempidE=letters[lArrayPosition-1]+numbers[nArrayPosition];
    var x=lArrayPosition;


    var q=nArrayPosition;

    for (var y=lArrayPosition+1;y<nArrayPosition-2;y++){
        tempIdA=letters[y]+numbers[q];
        if (!($('#'+tempidA).children().hasClass('chesspieces'))){
            $("#"+tempidA).addClass('selectpath');
            cPosition.addClass('clickpiece');
            cPosition.removeClass('selectpath');
        }
        else{
            break;
        }

    } if (!($("#"+tempidA).children().hasClass('chesspieces'))){
        $("#"+tempidA).addClass('selectpath');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');
    }

    if ($("#"+tempidB).children().hasClass('white')){
        $("#"+tempidB).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    if ($("#"+tempidC).children().hasClass('white')){
        $("#"+tempidC).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }

    for (var c=lArrayPosition-1;c<lArrayPosition-2;c--){
        tempIdQ=letters[c]+numbers[q];
        if (!($('#'+tempidQ).children().hasClass('chesspieces'))){
            $("#"+tempidQ).addClass('selectpath');
            cPosition.addClass('clickpiece');
            cPosition.removeClass('selectpath');
        }
        else{
            break;
        }

    } if (!($("#"+tempidQ).children().hasClass('chesspieces'))){
        $("#"+tempidQ).addClass('selectpath');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');
    }

    if ($("#"+tempidW).children().hasClass('white')){
        $("#"+tempidW).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    if ($("#"+tempidE).children().hasClass('white')){
        $("#"+tempidE).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }



    for (var y=nArrayPosition+1;y<2;y++){
        tempId=letters[x]+numbers[y];
        if (!($('#'+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            cPosition.addClass('clickpiece');
            cPosition.removeClass('selectpath');
        }
        else{
            break;
        }

    }
    if (!($("#"+tempId).children().hasClass('chesspieces'))){
        $("#"+tempId).addClass('selectpath');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');
    }
    if ($("#"+tempId1).children().hasClass('white')){
        $("#"+tempId1).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    if ($("#"+tempId2).children().hasClass('white')){
        $("#"+tempId2).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    for (var y=nArrayPosition-1;y>lArrayPosition+2;y--){
        tempId=letters[x]+numbers[y];
        if (!($('#'+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            cPosition.addClass('clickpiece');
            cPosition.removeClass('selectpath');
        }
        else{
            break;
        }

    }
    if (!($("#"+tempId).children().hasClass('chesspieces'))){
        $("#"+tempId).addClass('selectpath');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');
    }
    if ($("#"+tempId1).children().hasClass('white')){
        $("#"+tempId1).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    if ($("#"+tempId2).children().hasClass('white')){
        $("#"+tempId2).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }

}
// ================================path of blackrook=======================


function pathofBlackRook(eventData) {
    cPosition=eventData;
    sq.removeClass('selectpath');
    clickAudio2();
    chesspiece.removeClass('clickpiece');
    // console.log("eththrthjrt");
    var cId=cPosition.parents().attr('id');
    var letter=cId.charAt(0);
    var nu=cId.charAt(1);
    var lArrayPosition=($.inArray(letter,letters));
    var nArrayPosition=($.inArray(parseInt(nu),numbers));
    var tempId=letters[lArrayPosition]+numbers[nArrayPosition+1];
    var tempId1=letters[lArrayPosition]+numbers[nArrayPosition+1];
    var tempId2=letters[lArrayPosition]+numbers[nArrayPosition+1];
    var tempidA=letters[lArrayPosition+1]+numbers[nArrayPosition];
    var tempidB=letters[lArrayPosition+1]+numbers[nArrayPosition];
    var tempidC=letters[lArrayPosition+1]+numbers[nArrayPosition];
    var tempidQ=letters[lArrayPosition-1]+numbers[nArrayPosition];
    var tempidW=letters[lArrayPosition-1]+numbers[nArrayPosition];
    var tempidE=letters[lArrayPosition-1]+numbers[nArrayPosition];
    var x=lArrayPosition;
    var q=nArrayPosition;

    for (var y=lArrayPosition+1;y<8;y++){
        tempIdA=letters[y]+numbers[q];
        if (!($('#'+tempidA).children().hasClass('chesspieces'))){
            $("#"+tempidA).addClass('selectpath');
            cPosition.addClass('clickpiece');
            cPosition.removeClass('selectpath');
        }
        else{
            break;
        }

    } if (!($("#"+tempidA).children().hasClass('chesspieces'))){
         $("#"+tempidA).addClass('selectpath');
         cPosition.addClass('clickpiece');
         cPosition.removeClass('selectpath');
    }

    if ($("#"+tempidB).children().hasClass('white')){
        $("#"+tempidB).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    if ($("#"+tempidC).children().hasClass('white')){
        $("#"+tempidC).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }

    for (var c=lArrayPosition-1;c>8;c--){
        tempIdQ=letters[c]+numbers[q];
        if (!($('#'+tempidQ).children().hasClass('chesspieces'))){
            $("#"+tempidQ).addClass('selectpath');
            cPosition.addClass('clickpiece');
            cPosition.removeClass('selectpath');
        }
        else{
            break;
        }

    } if (!($("#"+tempidQ).children().hasClass('chesspieces'))){
        $("#"+tempidQ).addClass('selectpath');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');
    }

    if ($("#"+tempidW).children().hasClass('white')){
        $("#"+tempidW).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    if ($("#"+tempidE).children().hasClass('white')){
        $("#"+tempidE).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }



    for (var y=nArrayPosition+1;y<8;y++){
        tempId=letters[x]+numbers[y];
        if (!($('#'+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            cPosition.addClass('clickpiece');
            cPosition.removeClass('selectpath');
        }
        else{
            break;
        }

    }
    if (!($("#"+tempId).children().hasClass('chesspieces'))){
        $("#"+tempId).addClass('selectpath');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');
    }
    if ($("#"+tempId1).children().hasClass('white')){
        $("#"+tempId1).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    if ($("#"+tempId2).children().hasClass('white')){
        $("#"+tempId2).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    for (var y=nArrayPosition-1;y>0;y--){
        tempId=letters[x]+numbers[y];
        if (!($('#'+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            cPosition.addClass('clickpiece');
            cPosition.removeClass('selectpath');
        }
        else{
            break;
        }

    }
    if (!($("#"+tempId).children().hasClass('chesspieces'))){
        $("#"+tempId).addClass('selectpath');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');
    }
    if ($("#"+tempId1).children().hasClass('white')){
        $("#"+tempId1).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    if ($("#"+tempId2).children().hasClass('white')){
        $("#"+tempId2).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }

}

// =======================path of whiteking========================

function pathofWhiteKing(eventData) {
    cPosition=eventData;
    sq.removeClass('selectpath');
    clickAudio2();
    chesspiece.removeClass('clickpiece');
    // console.log("eththrthjrt");
    var cId=cPosition.parents().attr('id');
    var letter=cId.charAt(0);
    var nu=cId.charAt(1);
    var lArrayPosition=($.inArray(letter,letters));
    var nArrayPosition=($.inArray(parseInt(nu),numbers));
    var tempId=letters[lArrayPosition]+numbers[nArrayPosition-1];
    var tempId1=letters[lArrayPosition]+numbers[nArrayPosition-1];
    var tempId2=letters[lArrayPosition]+numbers[nArrayPosition-1];
    var tempIdA=letters[lArrayPosition-1]+numbers[nArrayPosition];
    var tempIdB=letters[lArrayPosition-1]+numbers[nArrayPosition];
    var tempIdC=letters[lArrayPosition-1]+numbers[nArrayPosition];
    var tempIdQ=letters[lArrayPosition+1]+numbers[nArrayPosition];
    var tempIdW=letters[lArrayPosition+1]+numbers[nArrayPosition];
    var tempIdE=letters[lArrayPosition+1]+numbers[nArrayPosition];
    var x=lArrayPosition;
    var v=nArrayPosition;

    for (var y=lArrayPosition-1;y>nArrayPosition+2;y--){
        tempIdA=letters[y]+numbers[v];
        if (!($('#'+tempIdA).children().hasClass('chesspieces'))){
            $("#"+tempIdA).addClass('selectpath');
            cPosition.addClass('clickpiece');
        }
        else{
            break;
        }

    }
    if (!($("#"+tempIdA).children().hasClass('chesspieces'))){
        $("#"+tempIdA).addClass('selectpath');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');
    }
    if ($("#"+tempIdB).children().hasClass('black')){
        $("#"+tempIdB).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    if ($("#"+tempIdC).children().hasClass('black')){
        $("#"+tempIdC).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }


    for (var y=lArrayPosition+1;y<2;y++){
        tempIdQ=letters[y]+numbers[v];
        if (!($('#'+tempIdQ).children().hasClass('chesspieces'))){
            $("#"+tempIdQ).addClass('selectpath');
            cPosition.addClass('clickpiece');
        }
        else{
            break;
        }

    }
    if (!($("#"+tempIdQ).children().hasClass('chesspieces'))){
        $("#"+tempIdQ).addClass('selectpath');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');
    }
    if ($("#"+tempIdW).children().hasClass('black')){
        $("#"+tempIdW).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    if ($("#"+tempIdE).children().hasClass('black')){
        $("#"+tempIdE).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }

    for (var y=nArrayPosition-1;y>lArrayPosition+2;y--){
        tempId=letters[x]+numbers[y];
        if (!($('#'+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            cPosition.addClass('clickpiece');
        }
        else{
            break;
        }

    }
    if (!($("#"+tempId).children().hasClass('chesspieces'))){
        $("#"+tempId).addClass('selectpath');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');
    }
    if ($("#"+tempId1).children().hasClass('black')){
        $("#"+tempId1).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    if ($("#"+tempId2).children().hasClass('black')){
        $("#"+tempId2).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    for (var y=nArrayPosition+1;y<nArrayPosition+2;y++){
        tempId=letters[x]+numbers[y];
        if (!($('#'+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            cPosition.addClass('clickpiece');
        }
        else{
            break;
        }

    }
    if (!($("#"+tempId).children().hasClass('chesspieces'))){
        $("#"+tempId).addClass('selectpath');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');
    }
    if ($("#"+tempId1).children().hasClass('black')){
        $("#"+tempId1).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    if ($("#"+tempId2).children().hasClass('black')){
        $("#"+tempId2).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }

}


// ====================path of whiterook=========================


function pathofWhiteRook(eventData) {
    cPosition=eventData;
    sq.removeClass('selectpath');
    clickAudio2();
    chesspiece.removeClass('clickpiece');
    // console.log("eththrthjrt");
    var cId=cPosition.parents().attr('id');
    var letter=cId.charAt(0);
    var nu=cId.charAt(1);
    var lArrayPosition=($.inArray(letter,letters));
    var nArrayPosition=($.inArray(parseInt(nu),numbers));
    var tempId=letters[lArrayPosition]+numbers[nArrayPosition-1];
    var tempId1=letters[lArrayPosition]+numbers[nArrayPosition-1];
    var tempId2=letters[lArrayPosition]+numbers[nArrayPosition-1];
    var tempIdA=letters[lArrayPosition-1]+numbers[nArrayPosition];
    var tempIdB=letters[lArrayPosition-1]+numbers[nArrayPosition];
    var tempIdC=letters[lArrayPosition-1]+numbers[nArrayPosition];
    var tempIdQ=letters[lArrayPosition+1]+numbers[nArrayPosition];
    var tempIdW=letters[lArrayPosition+1]+numbers[nArrayPosition];
    var tempIdE=letters[lArrayPosition+1]+numbers[nArrayPosition];
    var x=lArrayPosition;
    var v=nArrayPosition;

    for (var y=lArrayPosition-1;y>0;y--){
        tempIdA=letters[y]+numbers[v];
        if (!($('#'+tempIdA).children().hasClass('chesspieces'))){
            $("#"+tempIdA).addClass('selectpath');
            cPosition.addClass('clickpiece');
        }
        else{
            break;
        }

    }
    if (!($("#"+tempIdA).children().hasClass('chesspieces'))){
        $("#"+tempIdA).addClass('selectpath');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');
    }
    if ($("#"+tempIdB).children().hasClass('black')){
        $("#"+tempIdB).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    if ($("#"+tempIdC).children().hasClass('black')){
        $("#"+tempIdC).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }


    for (var y=lArrayPosition+1;y<8;y++){
        tempIdQ=letters[y]+numbers[v];
        if (!($('#'+tempIdQ).children().hasClass('chesspieces'))){
            $("#"+tempIdQ).addClass('selectpath');
            cPosition.addClass('clickpiece');
        }
        else{
            break;
        }

    }
    if (!($("#"+tempIdQ).children().hasClass('chesspieces'))){
        $("#"+tempIdQ).addClass('selectpath');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');
    }
    if ($("#"+tempIdW).children().hasClass('black')){
        $("#"+tempIdW).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    if ($("#"+tempIdE).children().hasClass('black')){
        $("#"+tempIdE).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }

    for (var y=nArrayPosition-1;y>0;y--){
        tempId=letters[x]+numbers[y];
        if (!($('#'+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            cPosition.addClass('clickpiece');
        }
        else{
            break;
        }

    }
    if (!($("#"+tempId).children().hasClass('chesspieces'))){
        $("#"+tempId).addClass('selectpath');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');
    }
    if ($("#"+tempId1).children().hasClass('black')){
        $("#"+tempId1).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    if ($("#"+tempId2).children().hasClass('black')){
        $("#"+tempId2).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    for (var y=nArrayPosition+1;y<8;y++){
        tempId=letters[x]+numbers[y];
        if (!($('#'+tempId).children().hasClass('chesspieces'))){
            $("#"+tempId).addClass('selectpath');
            cPosition.addClass('clickpiece');
        }
        else{
            break;
        }

    }
    if (!($("#"+tempId).children().hasClass('chesspieces'))){
        $("#"+tempId).addClass('selectpath');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');
    }
    if ($("#"+tempId1).children().hasClass('black')){
        $("#"+tempId1).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }
    if ($("#"+tempId2).children().hasClass('black')){
        $("#"+tempId2).addClass('crosspiece');
        cPosition.addClass('clickpiece');
        cPosition.removeClass('selectpath');

    }

}


// =======================================================================

function pathofWhitePown(eventData) {
    cPosition = eventData;
    sq.removeClass('selectpath');
    clickAudio2();
    chesspiece.removeClass('clickpiece');
    console.log("eththrthjrt");
    var cId = cPosition.parents().attr('id');
    var letter = cId.charAt(0);
    var nu = cId.charAt(1);
    var lArrayPosition = ($.inArray(letter, letters));
    var nArrayPosition = ($.inArray(parseInt(nu), numbers));
    var tempId1 = letters[lArrayPosition] + numbers[nArrayPosition - 1];
    var tempId2 = letters[lArrayPosition] + numbers[nArrayPosition - 2];
    var x = lArrayPosition;

    switch (cPosition.attr('id')) {
        case "img17" :
            countArray[0]++;
            break;
        case "img18" :
            countArray[1]++;
            break;
        case "img19" :
            countArray[2]++;
            break;
        case "img20" :
            countArray[3]++;
            break;
        case "img21" :
            countArray[4]++;
            break;
        case "img22" :
            countArray[5]++;
            break;
        case "img23" :
            countArray[6]++;
            break;
        case "img24" :
            countArray[7]++;
            break;

    }
    if (countArray[0] == 1) {
        if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
            $("#" + tempId1).addClass('selectpath');
            cPosition.addClass('clickpiece');
            // cPosition.removeClass('selectpath');
        }
        if (!($("#" + tempId2).children().hasClass('chesspieces'))) {
            $("#" + tempId2).addClass('selectpath');
            cPosition.addClass('clickpiece');
        }

    } else {
        if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
            $("#" + tempId1).addClass('selectpath');
            cPosition.addClass('clickpiece');
            cPosition.removeClass('selectpath');

        }
    }

    if (countArray[1] == 1) {
        if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
            $("#" + tempId1).addClass('selectpath');
            cPosition.addClass('clickpiece');
            // cPosition.removeClass('selectpath');
        }
        if (!($("#" + tempId2).children().hasClass('chesspieces'))) {
            $("#" + tempId2).addClass('selectpath');
            cPosition.addClass('clickpiece');
        }

    } else {
        if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
                $("#" + tempId1).addClass('selectpath');
                cPosition.addClass('clickpiece');
                cPosition.removeClass('selectpath');

        }
    }

    if (countArray[2] == 1) {
        if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
            $("#" + tempId1).addClass('selectpath');
            cPosition.addClass('clickpiece');
            // cPosition.removeClass('selectpath');
        }
        if (!($("#" + tempId2).children().hasClass('chesspieces'))) {
            $("#" + tempId2).addClass('selectpath');
            cPosition.addClass('clickpiece');
        }

    } else {
        if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
            $("#" + tempId1).addClass('selectpath');
            cPosition.addClass('clickpiece');
            cPosition.removeClass('selectpath');

        }
    }

    if (countArray[3] == 1) {
        if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
            $("#" + tempId1).addClass('selectpath');
            cPosition.addClass('clickpiece');
            // cPosition.removeClass('selectpath');
        }
        if (!($("#" + tempId2).children().hasClass('chesspieces'))) {
            $("#" + tempId2).addClass('selectpath');
            cPosition.addClass('clickpiece');
        }

    } else {
        if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
            $("#" + tempId1).addClass('selectpath');
            cPosition.addClass('clickpiece');
            cPosition.removeClass('selectpath');

        }
    }

    if (countArray[4] == 1) {
        if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
            $("#" + tempId1).addClass('selectpath');
            cPosition.addClass('clickpiece');
        // cPosition.removeClass('selectpath');
        }
        if (!($("#" + tempId2).children().hasClass('chesspieces'))) {
            $("#" + tempId2).addClass('selectpath');
            cPosition.addClass('clickpiece');
        }

    } else {
        if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
            $("#" + tempId1).addClass('selectpath');
            cPosition.addClass('clickpiece');
            cPosition.removeClass('selectpath');

        }
    }

    if (countArray[5] == 1) {
        if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
            $("#" + tempId1).addClass('selectpath');
            cPosition.addClass('clickpiece');
        // cPosition.removeClass('selectpath');
        }
        if (!($("#" + tempId2).children().hasClass('chesspieces'))) {
            $("#" + tempId2).addClass('selectpath');
            cPosition.addClass('clickpiece');
        }

    } else {
        if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
            $("#" + tempId1).addClass('selectpath');
            cPosition.addClass('clickpiece');
            cPosition.removeClass('selectpath');

        }
    }
    if (countArray[6] == 1) {
        if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
            $("#" + tempId1).addClass('selectpath');
            cPosition.addClass('clickpiece');
        // cPosition.removeClass('selectpath');
        }
        if (!($("#" + tempId2).children().hasClass('chesspieces'))) {
            $("#" + tempId2).addClass('selectpath');
            cPosition.addClass('clickpiece');
        }

    } else {
        if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
            $("#" + tempId1).addClass('selectpath');
            cPosition.addClass('clickpiece');
            cPosition.removeClass('selectpath');

        }
    }
    if (countArray[7] == 1) {
        if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
            $("#" + tempId1).addClass('selectpath');
            cPosition.addClass('clickpiece');
        // cPosition.removeClass('selectpath');
        }
        if (!($("#" + tempId2).children().hasClass('chesspieces'))) {
            $("#" + tempId2).addClass('selectpath');
            cPosition.addClass('clickpiece');
        }

    } else {
        if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
            $("#" + tempId1).addClass('selectpath');
            cPosition.addClass('clickpiece');
            cPosition.removeClass('selectpath');

        }
}
    if (countArray[8] == 1) {
        if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
            $("#" + tempId1).addClass('selectpath');
            cPosition.addClass('clickpiece');
        // cPosition.removeClass('selectpath');
         }
        if (!($("#" + tempId2).children().hasClass('chesspieces'))) {
            $("#" + tempId2).addClass('selectpath');
            cPosition.addClass('clickpiece');
        }

    } else {
        if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
            $("#" + tempId1).addClass('selectpath');
            cPosition.addClass('clickpiece');
            cPosition.removeClass('selectpath');

        }
    }
    // if (!($("#"+tempId).children().hasClass('chesspieces'))){
    //     $("#"+tempId).addClass('selectpath');
    //     cPosition.addClass('clickpiece');
    //     cPosition.removeClass('selectpath');
    // }
    // if ($("#"+tempId1).children().hasClass('black')){
    //     $("#"+tempId1).addClass('crosspiece');
    //     cPosition.addClass('clickpiece');
    //     cPosition.removeClass('selectpath');
    //
    // }
    // if ($("#"+tempId2).children().hasClass('black')){
    //     $("#"+tempId2).addClass('crosspiece');
    //     cPosition.addClass('clickpiece');
    //     cPosition.removeClass('selectpath');
    //
    // }
//     if (countArray[8] == 1) {
//         if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
//             $("#" + tempId1).addClass('selectpath');
//             cPosition.addClass('clickpiece');
//         // cPosition.removeClass('selectpath');
//         }
//         if (!($("#" + tempId2).children().hasClass('chesspieces'))) {
//             $("#" + tempId2).addClass('selectpath');
//             cPosition.addClass('clickpiece');
//         }
//
//     } else {
//         if (!($("#" + tempId1).children().hasClass('chesspieces'))) {
//             $("#" + tempId1).addClass('selectpath');
//             cPosition.addClass('clickpiece');
//             cPosition.removeClass('selectpath');
//
//         }
//     }
//
}
//



// for (var y=nArrayPosition+1;y<4;y++){
//     tempId=letters[x]+numbers[y];
//     if (!($('#'+tempId).children().hasClass('chesspieces'))){
//         $("#"+tempId).addClass('selectpath');
//         cPosition.addClass('clickpiece');
//     }
//     else{
//         break;
//     }
//
// }
//     if (!($("#"+tempId).children().hasClass('chesspieces'))){
//         $("#"+tempId).addClass('selectpath');
//         cPosition.addClass('clickpiece');
//         cPosition.removeClass('selectpath');
//     }
//
// }


// ======================================================================

$('.chesspieces').on("click",function (eventData) {
    cPosition=$(this);
    console.log(cPosition);

    if(!(cPosition.hasClass('clickpiece')) && cPosition.hasClass('blackpown')){
        pownCount=0;
        pathofBlackPown(cPosition);
    }
    if (!(cPosition.hasClass('clickpiece')) && cPosition.hasClass('whitepown')){
        pownCount=0;
        pathofWhitePown(cPosition);
    }
    if (!(cPosition.hasClass('clickpiece')) && cPosition.hasClass('blackrook')){
        pownCount=0;
        pathofBlackRook(cPosition);
    }
    if (!(cPosition.hasClass('clickpiece')) && cPosition.hasClass('whiterook')){
        pownCount=0;
        pathofWhiteRook(cPosition);
    }
    if (!(cPosition.hasClass('clickpiece')) && cPosition.hasClass('blackking')){
        pownCount=0;
        pathofBlackKing(cPosition);
    }
    if (!(cPosition.hasClass('clickpiece')) && cPosition.hasClass('whiteking')){
        pownCount=0;
        pathofWhiteKing(cPosition);
    }
    if (!(cPosition.hasClass('clickpiece')) && cPosition.hasClass('blackbishop')){
        pownCount=0;
        pathofBlackBishop(cPosition);
    }
    if (!(cPosition.hasClass('clickpiece')) && cPosition.hasClass('whitebishop')){
        pownCount=0;
        pathofWhiteBishop(cPosition);
    }


    if (!(cPosition.hasClass('clickpiece')) && cPosition.hasClass('blackqueen')){
        pownCount=0;
        pathofBlackRook(cPosition);
    }
    if (!(cPosition.hasClass('clickpiece')) && cPosition.hasClass('whitequeen')){
        pownCount=0;
        pathofWhiteRook(cPosition);
    }
    if (!(cPosition.hasClass('clickpiece')) && cPosition.hasClass('whitequeen')){
        pownCount=0;
        pathofWhiteBishop(cPosition);
    }
    if (!(cPosition.hasClass('clickpiece')) && cPosition.hasClass('blackqueen')){
        pownCount=0;
        pathofBlackBishop(cPosition);
    }

});


// ==========================================================================

$(".s").on("click",function (eventData) {
    var currentS=$(this);
    var currentPiece=$(".chesspieces.clickpiece");

    if ($(currentS).hasClass('selectpath')){
       // clickAudio2();
        currentS.append(currentPiece);
        chesspiece.removeClass('clickpiece');
        playAudio();
        sq.removeClass('selectpath');
        // clickAudio2();
    }
    if($(currentS).hasClass('crosspiece')){
        var y=$(currentPiece).clone();
        // $(currentPiece).remove();
        $(currentS).children().remove();
        currentS.append(currentPiece);
        sq.removeClass('selectpath');
         // playAudio();
        chesspiece.removeClass('clickpiece');
        sq.removeClass('crosspiece');
    }

});

var xy = document.getElementById("myAudio");


function playAudio() {
    xy.play();
}
var ca=document.getElementById("clickAudio");

function clickAudio2() {
    ca.play();
}
// var sounds= document.getElementById("clickSound");
// function clickAudio() {
//     sounds.play();
//
// }




