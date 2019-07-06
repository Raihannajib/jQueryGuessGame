    $(document).ready(function(){
           
            $('#output').hide();
            $('#start').click(startGame);
            $('#checkLock').click(openLock);
            var ourSecretNum = '';

            function openLock() {
                var tr = 0;
                for (x = 0; x < $('input[type="number"]').length; x++) {
                    var guessNum = $('input[type="number"]').eq(x);
                    var result = checkNumber(guessNum.val(), ourSecretNum[x]);
                    guessNum.css({
                        backgroundColor: result.backgrd
                    })
                    if (result.checker) {
                        tr++
                    }
                }
                if (tr == 3) {
                    $('#start').show();
                    $('small').html('You got it<br> ' + ourSecretNum)
                }
            }

            function checkNumber(a, b) {
                var response = {};
                if (a < b) {
                    response.checker = false;
                    response.backgrd = 'red';
                }
                if (a > b) {
                    response.checker = false;
                    response.backgrd = 'blue';
                }
                if (a == b) {
                    response.checker = true;
                    response.backgrd = 'green';
                }
                return response;
            }

            function startGame() {
                ourSecretNum = Math.floor(Math.random() * (9999 - 1000 + 10) + 1000).toString();

                //$('#start').hide();
                $('#output').show();
                for (x = 0; x < $('input[type="number"]').length; x++) {
                    $('input[type="number"]').eq(x).val('0');
                }
                $('small').html('Red for low guess <br> Blue for heigher guess');
            }
            $('input[type="number"]').css({
                color: 'white'
                , fontSize: '3em'
                , width: '60px'
                , border: '1px solid black'
                , backgroundColor: 'black'
            })
            $('.btn').css({
               
                color: 'white'
                , width: '160px'
                , fontSize: '1.5em'
                , padding: '15px'
                , margin: '25px auto 0px'
                , border: '1px solid black'
                , textAlign: 'center'
            })
            $('#output').css({
                backgroundColor: '#333'
                , width: '300px'
                , padding: '15px'
                , border: '1px solid black'
                , textAlign: 'center'
                , float:'right'
                ,margin:'40px 80px'
            })
            $('small').css({
                color: 'white'
                , fontSize: '1em'
                , padding: '15px'
                , marginBottom: '15px'
                , display: 'block'
            })

            $('#start').css({
                float:'center',
                margin:'40px'
        
            })

          
        })