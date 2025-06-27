$(function() {
    // 背景とアラートボックスを非表示にする
    $("#bg").hide();

    // 「Click Me!」ボタンをクリック
    $("#click").click(function() {
        $("#bg").fadeIn(300);
    });

    // 「OK」ボタンをクリック
    $("#ok").click(function() {
        // 背景とアラートボタンをフェードアウトする
        $("#bg").fadeOut(300);
    });
});