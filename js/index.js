$(function () {
    // 1번버튼
    let vh100 = $(window).height();
    let s2 = vh100 * 1.0;
    // 2
    let s3 = vh100 * 2.2;
    // 3
    let s4 = vh100 * 3.2;
    // 4
    let s5 = vh100 * 4.2;
    // 5
    let ft = vh100 * 5.2;

    $(window).resize(function () {
        vh100 = $(window).height();
        s2 = vh100 * 1.1;
        // 2
        s3 = vh100 * 2.2;
        // 3
        s4 = vh100 * 3.2;
        // 4
        s5 = vh100 * 4.2;
        // 5
        ft = vh100 * 5.2;
    })

    $(".imgbox1, .one").click(function (e) {
        e.preventDefault()
        $("html, body").stop().animate(
            {
                scrollTop: s2,
            },
            400
        );
    });

    $(".imgbox2, .two").click(function (e) {
        e.preventDefault()
        $("html, body").stop().animate(
            {
                scrollTop: s3,
            },
            400
        );
    });

    $(".imgbox3, .three").click(function (e) {
        e.preventDefault()
        $("html, body").stop().animate(
            {
                scrollTop: s4,
            },
            400
        );
    });

    $(".imgbox4, four").click(function (e) {
        e.preventDefault()
        $("html, body").stop().animate(
            {
                scrollTop: s5,
            },
            400
        );
    });
    $(".imgbox5, five").click(function (e) {
        e.preventDefault()
        $("html, body").stop().animate(
            {
                scrollTop: ft,
            },
            400
        );
    });

    $('.section5-detail, .mobile-detail').click(function () {
        let idx = $(this).index()

        $('.popup').addClass('on');
        $('.popup img').eq(idx).addClass('select');
        $('body').css({
            overflow: "hidden"
        })
    })

    $('.popup').click(function () {
        $('.popup').removeClass('on');
        $('.popup img').removeClass('select');
        $('body').css({
            overflow: "auto"
        })
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('.gotop').fadeIn()
        } else {
            $('.gotop').fadeOut()
        }
    })

    $('.gotop').click(function (e) {
        e.preventDefault()
        $('html,body').stop().animate({
            scrollTop: 0
        }, 500)
    })


    // section3-responsive

    const section = document.querySelector(".section3-responsive");
    const aqua = document.getElementById("aqua");
    const sky = document.getElementById("sky");
    const clickers = document.getElementById("clickers");

    aqua.addEventListener("mouseenter", () => section.className = "section3-responsive aqua");
    sky.addEventListener("mouseenter", () => section.className = "section3-responsive sky");
    clickers.addEventListener("mouseenter", () => section.className = "section3-responsive clickers");

    [aqua, sky, clickers].forEach(card => {
        card.addEventListener("mouseleave", () => section.className = "section3-responsive");
    });

});

