const welcomeScreen = document.querySelector('.welcome-screen');
const startButton = document.getElementById('start-button');
const photoContainer = document.querySelector('.photo-container');
const currentPhoto = document.getElementById('current-photo');
const photoInfo = document.getElementById('photo-info');
const nextButton = document.getElementById('next-button');

// Array of photos and their information
const photos = [
    {
        src: 'photos/IMAGE 2023-05-16 14:13:35.jpg',
        info: 'Вот так началось наше знакомство. Моим первым впечатлением было - "Капец она наверное зануда". Но со временем оказалось что так и есть'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:13:39.jpg',
        info: 'Странно, но после прошлой фотки и до этой, совместных фоток я совсем не нашел. Ну мы и не общались тогда, просто были заклятыми врагами - огт и огв.'
    },
    {
        src: 'photos/IMG_3318.MOV',
        info: 'А вот таким образом ты пыталась зарейзить нас в ИвА. Все еще благодарен тебе за это'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:13:47.jpg',
        info: 'Это я тебя сфоткал по пути в Астану. Тогда ты еще разрешала себя фоткать...'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:13:49.jpg',
        info: 'Спасибо что временами выщипываешь мне брови'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:13:50.jpg',
        info: 'Спасибо что взяла меня в мою самую лучшую команду и подарила такой опыт'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:13:52.jpg',
        info: 'Желаю чтобы рядом был человек, который всегда будет готов научить тебя чему-то новому'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:13:57.jpg',
        info: 'Который будет звать тебя на медляк первым, несмотря на интересы других парней'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:14:00.jpg',
        info: 'С которым тебе будет интересно общаться'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:14:02.jpg',
        info: 'Который будет крепко держать тебя за руку'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:14:10.jpg',
        info: 'Желаю тебе быть всегда на высоте и подниматься все выше и выше'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:14:12.jpg',
        info: 'Желаю купить себе крутой фотик и делать классные снимки'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:14:13.jpg',
        info: 'Пусть в твоей жизни всегда будут эти три вещи - еда, любовь, и вино'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:14:14.jpg',
        info: 'Без комментариев. Просто никогда не позволяй людям топить тебя де'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:14:34.jpg',
        info: 'Спасибо что таскала меня на своей спине'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:14:33.jpg',
        info: 'Больше тебе веселых и незабываемых, в хорошем смысле, дней'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:14:15.jpg',
        info: 'Спасибо что познакомила меня с вашей компашкой'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:14:50.jpg',
        info: 'Особенно с Мирой'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:14:18.jpg',
        info: 'Что бы эта фотка не значила...'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:14:37.jpg',
        info: 'Иногда ты бэд кул бич'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:14:41.jpg',
        info: 'Иногда просто кьют'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:14:42.jpg',
        info: 'Иногда абу бандит'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:14:56.jpg',
        info: 'Иногда спортик озинше'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:15:03.jpg',
        info: 'Иногда Равшан с рынка'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:14:47.jpg',
        info: 'Иногда эстетик герлл'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:14:38.jpg',
        info: 'Просто одела мою футболку'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:14:44.jpg',
        info: 'Желаю тебе найти новую компашку друзей в Германии, чтобы не сидеть вот так одной'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:14:45.jpg',
        info: 'А может даже близко подружишься с кем-то и будете гонять осеки '
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:15:05.jpg',
        info: 'Вступай в футбольную команду, может тебя заберут в женскую команду Баварии'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:15:10.jpg',
        info: 'Главное чтобы среди друзей не было крысок'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:15:13.jpg',
        info: 'А мне уже будет некому делать лабки. Буду скучать.'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:15:17.jpg',
        info: 'Можешь оставить этого медведя, будем представлять что это ты'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:15:23.jpg',
        info: 'Но у нас еще есть лето. Поэтому желаю провести его незабываемо.'
    },
    {
        src: 'photos/IMAGE 2023-05-16 14:15:11.jpg',
        info: 'Знай что я всегда готов помочь и поддержать. With love, Dies'
    },
    // Add more photos here...
];

let currentPhotoIndex = 0;

// Hide the welcome screen and show the first photo
function startJourney() {
    welcomeScreen.style.display = 'none';
    photoContainer.style.display = 'flex';
    showPhoto(currentPhotoIndex);
}

// Show the photo at the specified index
function showPhoto(index) {
    const photo = photos[index];
    currentPhoto.classList.add('fade-out');

    setTimeout(() => {
        currentPhoto.src = photo.src;
        photoInfo.textContent = photo.info;
        currentPhoto.classList.add('fade-in');
        currentPhoto.classList.remove('fade-out');
    }, 300);
}

// Go to the next photo
function nextPhoto() {
    currentPhotoIndex++;
    if (currentPhotoIndex >= photos.length) {
        currentPhotoIndex = 0; // Wrap around to the first photo
    }
    showPhoto(currentPhotoIndex);
}

startButton.addEventListener('click', startJourney);
nextButton.addEventListener('click', nextPhoto);
