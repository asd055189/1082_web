$(document).ready(function(){
    let currentQuiz=null;
    $('#startButton').click(function(){//按下按鈕後觸發事件
        if(currentQuiz ==null){
            currentQuiz = 0;//設定目前作答到第0題
            $('#question').text(questions[0]);//顯示題目
            for(let x = 0; x<5;x++){
                $('#options').append(
                    "<input name ='options' type='radio' value="+
                    (x+1)+">"+fiveIndex[x]
                );
                
            }
            answers[currentQuiz]=0
            currentQuiz++;
            $("#startButton").attr("value","下一題");
        }
        else{
                $.each(
                    $(":radio"),function(i,val){ 
                        if(val.checked){
                            if(currentQuiz==questions.length){

                                answers[currentQuiz-1]+=(val.value-'0');
                                score=[
                                answers[4]+answers[9]+answers[13]+answers[17]+answers[23]+answers[29],
                                answers[2]+answers[5]+answers[12]+answers[19]+answers[21]+answers[28],
                                answers[1]+answers[7]+answers[14]+answers[16]+answers[24]+answers[27],
                                answers[0]+answers[6]+answers[10]+answers[15]+answers[20]+answers[25],
                                answers[3]+answers[8]+answers[11]+answers[18]+answers[22]+answers[26]
                                ]
                                $("#options").empty();
                                for (let i=0;i<allScores.length;i++)
                                    $("#ans").append(allScores[i].Char+" : "+score[i]+"<br>")
                            }
                            else{
                                $('#question').text(questions[currentQuiz]);//顯示題目
                                answers[currentQuiz-1]+=(val.value-'0');
                                console.log(answers[currentQuiz-1])
                                $("#options").empty();
                                for(let x = 0; x<5;x++){
                                    $('#options').append(
                                        "<input name ='options' type='radio' value="+
                                        (x+1)+">"+fiveIndex[x]
                                    );
                                }
                                answers[currentQuiz]=0
                                currentQuiz++;
                            }
                        }
                    }
                )
            }
    })
});