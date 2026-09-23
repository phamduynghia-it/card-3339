window.__MOCK_DATA__ = {
    title: `DNLoveGift 🌕🏮 Món Quà Kỷ Niệm Yêu Thương Trăng Rằm`,

    // Dòng chữ hiển thị lúc đang tải trang (Loading)
    loadingText: `Món quà đang đến trong giây lát...`,

    // Nhạc nền (Tải lên file MP3 tùy chọn, hoặc fallback sang CDN)
    music: `./assets/user_music.mp3` || "https://pub-b20e97fa235346679eb882246abe5bed.r2.dev/musics/thangcuoipiano.mp3",

    // Các câu chúc chạy vòng tròn xung quanh trái tim 3D
    messages: ["Chúc Mình Trung thu vui vẻ \n","Cảm Ơn vì đã luôn ở bên Em"],

    // Ảnh người yêu / kỉ niệm hiển thị bên trong trái tim 3D
    images: (["./assets/user_images_0.jpg"] && ["./assets/user_images_0.jpg"].length > 0 && ["./assets/user_images_0.jpg"][0]) ? ["./assets/user_images_0.jpg"] : ["./images/mid_autumn_moon_center.png"],

    // Nội dung bức thư hiện ra khi chạm vào phong bì
    letter: {
        title: `Gửi Mình - Mùa Trăng Yêu Thương 🌕 🐇`,
        body: `Mình à 
Cảm ơn Mình đã đến bên Em , đồng hành cùng Em trong khoảng thời gian qua để trái tim Em có thể mở lòng 1 lần nữa 
Chúc người Em yêu 1 mùa trung thu thật ngọt ngào , hạnh phúc và luôn mỉm cười bên Em ❤️
`,
        sender: `Xôi`
    }
};
