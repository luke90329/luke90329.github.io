$(function () {
    $('.datepicker').datepicker({
        weekStart: 0,
        daysOfWeekHighlighted: "6,0",
        autoclose: true,
        todayHighlight: true,
    });
    //$('.datepicker').datepicker("setDate", new Date());

    controlIsTravel();

    //切換語系
    var langId = 1;
    changeLanguage(langId);
    $(document).on('click', '.btn.changeLang', function (event) {
        langId = $(this).data("id");
        changeLanguage(langId);
    });

    //控制旅遊史
    $(document).on('click', 'input[name="IsTravel"]', function (event) {
        controlIsTravel();
    });

    //儲存資料
    $(document).on('submit', '#myForm', function (event) {
        //event.preventDefault();

        //旅遊史
        let isTravel = $('input[name="IsTravel"]:checked').val();
        if (isTravel != undefined && isTravel == '1') {

            let entryDate = $('input[name="EntryDate"]').val();
            if (entryDate == undefined || entryDate.trim() == '') {
                alert('請填寫入境台灣時間 \n Date of arrival to Taiwan is empty');
                return false;
            }

            let countryName = $('select#selCountryName option:selected').val();
            if (countryName == undefined || countryName.length == 0) {
                alert('請選擇去哪個國家 \n Area ? ');
                return false;
            }
            $('input[name="TravelCountry"]').val(9);

            let errorMessage = '';
            let myEntryDate = $('input[name="EntryDate9"]').val();
            let myOutboundDate = $('input[name="OutboundDate9"]').val();
            if (myEntryDate == undefined || myEntryDate == '') {
                errorMessage += '請輸入入境日期 Arrival date ?'
            }
            if (myOutboundDate == undefined || myOutboundDate == '') {
                errorMessage += '請輸入出境日期 Departure date ?'
            }
            if (errorMessage == '' && myEntryDate > myOutboundDate) {
                errorMessage += '入出境日期不正確！ Arrival date or Departure date is error'
            }

            if (errorMessage != '') {
                alert(errorMessage);
                return false;
            }
        }

        //職業(Occupation)
        let cccupation = $('input[name="OccupationStatus"]:checked').val();
        let cccupationMemo = $('input[name="OccupationMemo"]').val();
        if (cccupation != undefined && cccupation == '1' && (cccupationMemo == undefined || cccupationMemo == '')) {
            alert('請說明從事甚麼工作(工讀、實習等) \n Please briefly describe your occupation');
            $('input[name="OccupationMemo"]').focus();
            return false;
        }

        //接觸史(Contact)
        let contact = $('input[name="ContactStatus"]:checked').val();
        let contactMemo = $('input[name="ContactMemo"]').val();
        if (contact != undefined && contact == '1' && (contactMemo == undefined || contactMemo == '')) {
            alert('請說明接觸史 \ Please briefly describe your contact');
            $('input[name="ContactMemo"]').focus();
            return false;
        }

        //群聚史(Cluster)
        let cluster = $('input[name="ClusterStatus"]:checked').val();
        let clusterMemo = $('input[name="ClusterMemo"]').val();
        if (cluster != undefined && cluster == '1' && (clusterMemo == undefined || clusterMemo == '')) {
            alert('請說明群聚史 \n Please briefly describe your cluster');
            $('input[name="ClusterMemo"]').focus();
            return false;
        }
    });

});

let controlIsTravel = function () {
    let rdoIsTravel = $('input[name="IsTravel"]:checked').val();
    if (rdoIsTravel != undefined && rdoIsTravel == '1') {
        //$('#divTravelDetail').show();
        $('#divTravelDetail input, #divTravelDetail select').prop('disabled', false);
    }
    else {
        $('#divTravelDetail input, #divTravelDetail select').prop('disabled', true);
    }
}

let changeLanguage = function (langId) {
    //if (langId == 1) {
    //    $('.zh').show();
    //    $('.en').hide();
    //} else {
    //    $('.zh').hide();
    //    $('.en').show();
    //}
}