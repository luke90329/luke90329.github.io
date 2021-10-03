
$(function () {

    $('.datepicker').datepicker({
        weekStart: 0,
        daysOfWeekHighlighted: "6,0",
        autoclose: true,
        todayHighlight: true,
    });
    $('.datepicker').datepicker("setDate", new Date());

    //控制有無不適症狀
    $(document).on('click', 'input[name="IsUnwellSymptom"]', function (event) {
        controlSubQues();
    });

    $(document).on('click', 'div.subQues input[type="radio"]', function (event) {
        console.log('hi'); console.log($(this).val());
        if ($(this).val() == '1') $('input[name="IsUnwellSymptom"][value="1"]').prop("checked", true);
    });

    //儲存資料
    $(document).on('submit', '#myForm', function (event) {
        let rdoUnwellSymptom = $('input[name="IsUnwellSymptom"]:checked').val();
        if (rdoUnwellSymptom != undefined && rdoUnwellSymptom == '1') {
            let cnt = 0;
            $('div.subQues input[type="radio"]:checked').each(function (index) {
                console.log($(this).val())
                if ($(this).val() == '0') cnt++;
            });
            console.log(cnt);
            if (cnt == 4) {
                alert('請選擇您的不適症狀\nPlease select your discomfort symptom.');
                return false;
            }
            else { $('input[name="IsUnwellSymptom"][value="1"]').prop("checked", true); }
        }
        //console.log(rdoUnwellSymptom)
        if (rdoUnwellSymptom != undefined && rdoUnwellSymptom == '0') {
            $('div.subQues input, div.subQues select').prop('disabled', false);
            $('div.subQues input[type="radio"][value="0"]').prop("checked", true);
        }

        if (($('#txtTemperatureAM').val() == null || $('#txtTemperatureAM').val() == '')
            && ($('#txtTemperaturePM').val() == null || $('#txtTemperaturePM').val() == '')) {
            alert('請填寫您的體溫，上下午擇一填寫\nPlease check your body temperature once a day (morning or afternoon) and fill the temperature in Celsius in the blank.');
            return false;
        }
    });

});

let controlSubQues = function () {
    let rdoUnwellSymptom = $('input[name="IsUnwellSymptom"]:checked').val();
    //console.log(rdoUnwellSymptom)
    if (rdoUnwellSymptom != undefined && rdoUnwellSymptom == '1') {
        $('div.subQues input[type="radio"][value="0"]').prop("checked", false);
        $('div.subQues input, div.subQues select').prop('disabled', false);
    }
    else {
        $('div.subQues input[type="radio"][value="0"]').prop("checked", true);
        $('div.subQues input, div.subQues select').prop('disabled', true);
    }
}

